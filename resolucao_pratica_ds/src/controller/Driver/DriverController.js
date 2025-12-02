import { prismaClient } from "../../../prisma/prisma.js";

class DriverController {
    constructor() { }

    async pegarTodosDrivers(req, res) {
        try {
            const { cidade } = req.query;
            const where = cidade ? { cidade } : {};
            
            const drivers = await prismaClient.driver.findMany({
                where
            });
            return res.json(drivers);
        } catch (e) {
            console.log(e);
            return res.status(500).json({ error: "Erro ao buscar motoristas" });
        }
    }

    async pegarDriverPorId(req, res) {
        try {
            const driver = await prismaClient.driver.findUnique({
                where: {
                    id: Number(req.params.id)
                }
            });
            if (!driver) return res.status(404).send("Motorista não existe!");
            return res.json(driver);
        } catch (e) {
            console.log(e);
            return res.status(500).json({ error: "Erro ao buscar motorista" });
        }
    }

    async criarDriver(req, res) {
        try {
            const { body } = req;
            const bodyKeys = Object.keys(body);
            
            for (const key of bodyKeys) {
                if (key !== "nome" &&
                    key !== "cpf" &&
                    key !== "telefone" &&
                    key !== "email" &&
                    key !== "cidade" &&
                    key !== "status"
                ) return res.status(400).send("Colunas não existentes");
            }

            // Validação de status
            if (body.status && body.status !== "ATIVO" && body.status !== "INATIVO") {
                return res.status(400).send("Status inválido. Use apenas: ATIVO ou INATIVO");
            }

            const driver = await prismaClient.driver.create({
                data: {
                    ...body
                }
            });
            return res.status(201).json(driver);
        } catch (error) {
            console.error(error);
            if (error.code === "P2002") {
                return res.status(400).send("Falha ao cadastrar motorista: CPF ou Email já cadastrado!");
            }
            return res.status(500).json({ error: "Erro ao criar motorista" });
        }
    }

    async atualizarDriver(req, res) {
        try {
            const { body, params } = req;
            const bodyKeys = Object.keys(body);
            
            for (const key of bodyKeys) {
                if (key !== "nome" &&
                    key !== "cpf" &&
                    key !== "telefone" &&
                    key !== "email" &&
                    key !== "cidade" &&
                    key !== "status"
                ) return res.status(400).send("Colunas não existentes");
            }

            // Validação de status
            if (body.status && body.status !== "ATIVO" && body.status !== "INATIVO") {
                return res.status(400).send("Status inválido. Use apenas: ATIVO ou INATIVO");
            }

            await prismaClient.driver.update({
                where: { id: Number(params.id) },
                data: {
                    ...body
                }
            });
            
            const driverAtualizado = await prismaClient.driver.findUnique({
                where: {
                    id: Number(params.id)
                }
            });

            return res.status(200).json({
                message: "Motorista atualizado!",
                data: driverAtualizado
            });
        } catch (error) {
            console.error(error);
            if (error.code == "P2025") {
                return res.status(404).send("Motorista não existe no banco");
            }
            if (error.code === "P2002") {
                return res.status(400).send("Falha ao atualizar motorista: CPF ou Email já cadastrado!");
            }
            return res.status(500).json({ error: "Erro ao atualizar motorista" });
        }
    }

    async deletarDriver(req, res) {
        const { params } = req;
        try {
            const driverDeletado = await prismaClient.driver.delete({
                where: {
                    id: Number(params.id)
                }
            });
            return res.status(200).json({
                message: "Motorista deletado!",
                data: driverDeletado
            });
        } catch (error) {
            console.error(error);
            if (error.code == "P2025") {
                return res.status(404).send("Motorista não existe no banco");
            }
            if (error.code == "P2003") {
                return res.status(400).send("Motorista não pode ser excluído, pois possui entregas vinculadas.");
            }
            return res.status(500).json({ error: "Erro ao deletar motorista" });
        }
    }
}

export const driverController = new DriverController();

