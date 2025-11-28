import { Router } from "express";
import { prismaClient } from "../../../prisma/prisma.js";

class ConsultaController {
    constructor() { }

    async pegarTodasConsultas(req, res) {
        const { page, limit } = req.query
        const pageNumber = Number(page)
        const limitNumber= Number(limit)
        try {
            const consultas = await prismaClient.consulta.findMany(
                {
                    skip: (pageNumber - 1) * limitNumber,
                    take: limitNumber,
                }
            );
            return res.json(consultas)
        }
        catch (e) {
            console.log(e)
        }
    }

    async pegarConsultaPorId(req, res) {
        try {
            const consultas = await prismaClient.consulta.findUnique({
                where: {
                    id: Number(req.params.id)
                }
            })
            if (!consultas) return res.status(404).send("Consulta não existe!")
            return res.json(consultas)
        }
        catch (e) {
            console.log(e)
        }
    }

    async criarConsulta(req, res) {
        try {
            const { body } = req
            const bodyKeys = Object.keys(body)
            for (const key of bodyKeys) {
                if (key !== "motivo" &&
                    key !== "data_consulta" &&
                    key !== "observacoes" &&
                    key !== "medico_responsavel_id" &&
                    key !== "paciente_id"
                ) return res.status(404).send("Colunas não existentes")
            }
            const consultas = await prismaClient.consulta.create({
                data: {
                    ...body,
                    data_consulta: new Date(body.data_consulta) // corrigir esse cara no put quando nao se manda ele... TO-DO
                },
            })
            return res.status(201).json(consultas)
        } catch (error) {
            console.error(error)
        }
    }

    async atualizarConsulta(req, res) {
        try {
            const { body, params } = req
            const bodyKeys = Object.keys(body)
            for (const key of bodyKeys) {
                if (key !== "motivo" &&
                    key !== "data_consulta" &&
                    key !== "observacoes" &&
                    key !== "medico_responsavel_id" &&
                    key !== "paciente_id"
                ) return res.status(404).send("Colunas não existentes")
            }
            await prismaClient.consulta.update({
                where: { id: Number(params.id) },
                data: {
                    ...body
                },
            })
            const consultaAtualizado = await prismaClient.consulta.findUnique({
                where: {
                    id: Number(params.id)
                }
            })

            return res.status(201).json({
                message: "Consulta atualizado!",
                data: consultaAtualizado
            })

        } catch (error) {
            if (error.code == "P2025") {
                res.status(404).send("Consulta não existe no banco")
            }

        }
    }

    async deletarConsulta(req, res) {
        const { params } = req
        try {
            const consultaDeletado = await prismaClient.consulta.delete({
                where: {
                    id: Number(params.id),
                },
            })
            res.status(200).json({
                message: "Consulta deletado!",
                data: consultaDeletado
            })
        } catch (error) {
            if (error.code == "P2025") {
                res.status(404).send("Consulta não existe no banco")
            }
        }
    }
}

export const consultaController = new ConsultaController(0)