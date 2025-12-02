import { prismaClient } from "../../../prisma/prisma.js";

class VehicleController {
    constructor() { }

    async pegarTodosVehicles(_, res) {
        try {
            const vehicles = await prismaClient.vehicle.findMany();
            return res.json(vehicles);
        } catch (e) {
            console.log(e);
            return res.status(500).json({ error: "Erro ao buscar veículos" });
        }
    }

    async pegarVehiclePorId(req, res) {
        try {
            const vehicle = await prismaClient.vehicle.findUnique({
                where: {
                    id: Number(req.params.id)
                }
            });
            if (!vehicle) return res.status(404).send("Veículo não existe!");
            return res.json(vehicle);
        } catch (e) {
            console.log(e);
            return res.status(500).json({ error: "Erro ao buscar veículo" });
        }
    }

    async criarVehicle(req, res) {
        try {
            const { body } = req;
            const bodyKeys = Object.keys(body);
            
            for (const key of bodyKeys) {
                if (key !== "placa" &&
                    key !== "modelo" &&
                    key !== "marca" &&
                    key !== "ano" &&
                    key !== "capacidade_carga" &&
                    key !== "tipo"
                ) return res.status(400).send("Colunas não existentes");
            }

            const vehicle = await prismaClient.vehicle.create({
                data: {
                    ...body
                }
            });
            return res.status(201).json(vehicle);
        } catch (error) {
            console.error(error);
            if (error.code === "P2002") {
                return res.status(400).send("Falha ao cadastrar veículo: Placa já cadastrada!");
            }
            return res.status(500).json({ error: "Erro ao criar veículo" });
        }
    }

    async atualizarVehicle(req, res) {
        try {
            const { body, params } = req;
            const bodyKeys = Object.keys(body);
            
            for (const key of bodyKeys) {
                if (key !== "placa" &&
                    key !== "modelo" &&
                    key !== "marca" &&
                    key !== "ano" &&
                    key !== "capacidade_carga" &&
                    key !== "tipo"
                ) return res.status(400).send("Colunas não existentes");
            }

            await prismaClient.vehicle.update({
                where: { id: Number(params.id) },
                data: {
                    ...body
                }
            });
            
            const vehicleAtualizado = await prismaClient.vehicle.findUnique({
                where: {
                    id: Number(params.id)
                }
            });

            return res.status(200).json({
                message: "Veículo atualizado!",
                data: vehicleAtualizado
            });
        } catch (error) {
            console.error(error);
            if (error.code == "P2025") {
                return res.status(404).send("Veículo não existe no banco");
            }
            if (error.code === "P2002") {
                return res.status(400).send("Falha ao atualizar veículo: Placa já cadastrada!");
            }
            return res.status(500).json({ error: "Erro ao atualizar veículo" });
        }
    }

    async deletarVehicle(req, res) {
        const { params } = req;
        try {
            const vehicleDeletado = await prismaClient.vehicle.delete({
                where: {
                    id: Number(params.id)
                }
            });
            return res.status(200).json({
                message: "Veículo deletado!",
                data: vehicleDeletado
            });
        } catch (error) {
            console.error(error);
            if (error.code == "P2025") {
                return res.status(404).send("Veículo não existe no banco");
            }
            return res.status(500).json({ error: "Erro ao deletar veículo" });
        }
    }
}

export const vehicleController = new VehicleController();

