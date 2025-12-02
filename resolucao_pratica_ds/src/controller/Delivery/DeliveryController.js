import { prismaClient } from "../../../prisma/prisma.js";

class DeliveryController {
    constructor() { }

    async pegarTodasDeliveries(req, res) {
        try {
            const { page, limit, orderBy, order } = req.query;
            const pageNumber = page ? Number(page) : 1;
            const limitNumber = limit ? Number(limit) : 10;
            const skip = (pageNumber - 1) * limitNumber;

            // Ordenação
            let orderByClause = {};
            if (orderBy) {
                orderByClause[orderBy] = order === "desc" ? "desc" : "asc";
            } else {
                orderByClause.id = "desc"; // Ordenação padrão
            }

            const deliveries = await prismaClient.delivery.findMany({
                skip: skip,
                take: limitNumber,
                orderBy: orderByClause
            });

            const total = await prismaClient.delivery.count();

            return res.json({
                data: deliveries,
                pagination: {
                    page: pageNumber,
                    limit: limitNumber,
                    total: total,
                    totalPages: Math.ceil(total / limitNumber)
                }
            });
        } catch (e) {
            console.log(e);
            return res.status(500).json({ error: "Erro ao buscar entregas" });
        }
    }

    async pegarDeliveryPorId(req, res) {
        try {
            const delivery = await prismaClient.delivery.findUnique({
                where: {
                    id: Number(req.params.id)
                }
            });
            if (!delivery) return res.status(404).send("Entrega não existe!");
            return res.json(delivery);
        } catch (e) {
            console.log(e);
            return res.status(500).json({ error: "Erro ao buscar entrega" });
        }
    }

    async criarDelivery(req, res) {
        try {
            const { body } = req;
            const bodyKeys = Object.keys(body);
            
            for (const key of bodyKeys) {
                if (key !== "endereco_origem" &&
                    key !== "endereco_destino" &&
                    key !== "status" &&
                    key !== "data_entrega" &&
                    key !== "observacoes" &&
                    key !== "driverId"
                ) return res.status(400).send("Colunas não existentes");
            }

            // Validação de status
            const statusValidos = ["PENDENTE", "EM_ROTA", "ENTREGUE", "FALHOU"];
            if (body.status && !statusValidos.includes(body.status)) {
                return res.status(400).send(`Status inválido. Use apenas: ${statusValidos.join(", ")}`);
            }

            // Validação 1: Motorista deve estar ATIVO
            const driver = await prismaClient.driver.findUnique({
                where: { id: Number(body.driverId) }
            });

            if (!driver) {
                return res.status(400).send("Motorista não encontrado!");
            }

            if (driver.status !== "ATIVO") {
                return res.status(400).send("O motorista deve estar com status ATIVO para receber entregas!");
            }

            // Validação 2: Motorista não pode ter mais de 10 entregas PENDENTE
            const entregasPendentes = await prismaClient.delivery.count({
                where: {
                    driverId: Number(body.driverId),
                    status: "PENDENTE"
                }
            });

            if (entregasPendentes >= 10) {
                return res.status(400).send("O motorista já possui 10 entregas pendentes. Não é possível criar mais entregas!");
            }

            const delivery = await prismaClient.delivery.create({
                data: {
                    ...body,
                    driverId: Number(body.driverId),
                    data_entrega: body.data_entrega ? new Date(body.data_entrega) : null
                }
            });
            return res.status(201).json(delivery);
        } catch (error) {
            console.error(error);
            if (error.code === "P2003") {
                return res.status(400).send("Motorista não encontrado!");
            }
            return res.status(500).json({ error: "Erro ao criar entrega" });
        }
    }

    async atualizarDelivery(req, res) {
        try {
            const { body, params } = req;
            const bodyKeys = Object.keys(body);
            
            for (const key of bodyKeys) {
                if (key !== "endereco_origem" &&
                    key !== "endereco_destino" &&
                    key !== "status" &&
                    key !== "data_entrega" &&
                    key !== "observacoes" &&
                    key !== "driverId"
                ) return res.status(400).send("Colunas não existentes");
            }

            // Validação de status
            const statusValidos = ["PENDENTE", "EM_ROTA", "ENTREGUE", "FALHOU"];
            if (body.status && !statusValidos.includes(body.status)) {
                return res.status(400).send(`Status inválido. Use apenas: ${statusValidos.join(", ")}`);
            }

            await prismaClient.delivery.update({
                where: { id: Number(params.id) },
                data: {
                    ...body,
                    driverId: body.driverId ? Number(body.driverId) : undefined,
                    data_entrega: body.data_entrega ? new Date(body.data_entrega) : undefined
                }
            });
            
            const deliveryAtualizado = await prismaClient.delivery.findUnique({
                where: {
                    id: Number(params.id)
                }
            });

            return res.status(200).json({
                message: "Entrega atualizada!",
                data: deliveryAtualizado
            });
        } catch (error) {
            console.error(error);
            if (error.code == "P2025") {
                return res.status(404).send("Entrega não existe no banco");
            }
            return res.status(500).json({ error: "Erro ao atualizar entrega" });
        }
    }

    async deletarDelivery(req, res) {
        const { params } = req;
        try {
            const deliveryDeletado = await prismaClient.delivery.delete({
                where: {
                    id: Number(params.id)
                }
            });
            return res.status(200).json({
                message: "Entrega deletada!",
                data: deliveryDeletado
            });
        } catch (error) {
            console.error(error);
            if (error.code == "P2025") {
                return res.status(404).send("Entrega não existe no banco");
            }
            return res.status(500).json({ error: "Erro ao deletar entrega" });
        }
    }

    async iniciarRota(req, res) {
        try {
            const { driverId } = req.params;
            const { deliveryIds } = req.body;

            if (!deliveryIds || !Array.isArray(deliveryIds) || deliveryIds.length === 0) {
                return res.status(400).send("É necessário fornecer uma lista de IDs de entregas!");
            }

            // Verificar se todas as entregas pertencem ao motorista e estão PENDENTE
            // Buscar cada entrega individualmente 
            const deliveries = [];
            for (const deliveryId of deliveryIds) {
                try {
                    const delivery = await prismaClient.delivery.findUnique({
                        where: {
                            id: Number(deliveryId)
                        }
                    });
                    if (!delivery) {
                        return res.status(400).send(`A entrega com ID ${deliveryId} não foi encontrada!`);
                    }
                    deliveries.push(delivery);
                } catch (error) {
                    return res.status(400).send(`Erro ao buscar entrega com ID ${deliveryId}!`);
                }
            }

            // Verificar se todas pertencem ao motorista
            const entregasInvalidas = deliveries.filter(d => d.driverId !== Number(driverId));
            if (entregasInvalidas.length > 0) {
                return res.status(400).send("Algumas entregas não pertencem a este motorista!");
            }

            // Verificar se todas estão PENDENTE
            const entregasNaoPendentes = deliveries.filter(d => d.status !== "PENDENTE");
            if (entregasNaoPendentes.length > 0) {
                return res.status(400).send("Todas as entregas devem estar com status PENDENTE!");
            }

            // Atualizar status para EM_ROTA (uma por uma)
            const entregasAtualizadas = [];
            for (const deliveryId of deliveryIds) {
                try {
                    const entregaAtualizada = await prismaClient.delivery.update({
                        where: {
                            id: Number(deliveryId)
                        },
                        data: {
                            status: "EM_ROTA"
                        }
                    });
                    entregasAtualizadas.push(entregaAtualizada);
                } catch (error) {
                    console.error(`Erro ao atualizar entrega ${deliveryId}:`, error);
                    if (error.code === "P2025") {
                        return res.status(400).send(`A entrega com ID ${deliveryId} não foi encontrada ou foi modificada durante a operação.`);
                    }
                    return res.status(500).json({ 
                        error: `Erro ao atualizar entrega ${deliveryId}. Algumas entregas podem ter sido atualizadas.`,
                        entregasAtualizadas: entregasAtualizadas
                    });
                }
            }

            return res.status(200).json({
                message: "Rota iniciada com sucesso!",
                data: entregasAtualizadas
            });
        } catch (error) {
            console.error(error);
            return res.status(500).json({ error: "Erro ao iniciar rota" });
        }
    }

    async dashboardMotorista(req, res) {
        try {
            const { driverId } = req.params;

            // Buscar dados do motorista
            const driver = await prismaClient.driver.findUnique({
                where: { id: Number(driverId) }
            });

            if (!driver) {
                return res.status(404).send("Motorista não encontrado!");
            }

            // Buscar entregas completadas
            const completedDeliveries = await prismaClient.delivery.findMany({
                where: {
                    driverId: Number(driverId),
                    status: "ENTREGUE"
                }
            });

            // Buscar entregas pendentes
            const pendingDeliveries = await prismaClient.delivery.findMany({
                where: {
                    driverId: Number(driverId),
                    status: "PENDENTE"
                }
            });

            return res.json({
                driver: driver,
                completedDeliveries: completedDeliveries,
                pendingDeliveries: pendingDeliveries
            });
        } catch (error) {
            console.error(error);
            return res.status(500).json({ error: "Erro ao buscar dashboard do motorista" });
        }
    }
}

export const deliveryController = new DeliveryController();

