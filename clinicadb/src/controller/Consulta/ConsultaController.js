import { prismaClient } from "../../../prisma/prisma.js";
import { getToken } from "../../utils/jwt.js";

class ConsultaController {
    constructor() { }
    // async getTodosOsConsultas(req, res) {
    //     const { page, limit } = req.query
    //     const pageNumber = Number(page)
    //     const limitNumber = Number(limit)
    //     try {
    //         const consultas = await prismaClient.consulta.findMany(
    //             {
    //                 skip: (pageNumber-1)*limitNumber,
    //                 take: limitNumber,
    //             }
    //         );
    //         return res.json(consultas)
    //     }
    //     catch (e) {
    //         console.log(e)
    //     }
    // }
    async getTodosOsConsultas(req, res) {
        try {
            const token = getToken(req.headers.authorization);
            const {query} = req
            const consultas = await prismaClient.consulta.findMany({
                where:{
                    data_consulta:{
                        lte: query.dataFinal ? new Date(query.dataFinal) : undefined,
                        gte: query.dataInicio ? new Date(query.dataInicio) : undefined
                    },
                    medico_responsavel_id:{
                        medico_responsavel_id: query.medico_responsavel_id
                    },
                    paciente:{
                        nome: query.paciente
                    }
                }
            });
            return res.json(consultas);
        } catch (error) {
            console.log(error)
        }
    }

    async getConsultaPorId(req, res) {
        try {
            const { params } = req
            const consulta = await prismaClient.consulta.findUnique({
                where: {
                    id: Number(params.id)
                }
            })
            if (!consulta) return res.status(404).send("consulta não existe!")
            return res.json(consulta)
        }
        catch (e) {
            console.log(e)
        }
    }

    async criarConsulta(req, res) {
        try {
            const { body } = req
            const consulta = await prismaClient.consulta.create({
                data: {
                    motivo: body.motivo,
                    data_consulta: body.data_consulta,
                    observacoes: body.observacoes,
                    medico_responsavel_id: body.medico_responsavel_id,
                    paciente_id: body.paciente_id
                },
            })
            return res.status(201).json(consulta)
        } catch (error) {
            console.error(error)
            if (error.code === "P2002") {
                res.status(404).send("Falha ao cadastrar consulta: Email já cadastrado!")
            }
        }
    }
    async atualizarConsulta(req, res) {
        try {
            const { body, params } = req
            if (body.motivo || body.paciente_id || body.data_consulta || body.observacoes || body.medico_responsavel_id) {
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

                res.status(201).json({
                    message: "consulta atualizado!",
                    data: consultaAtualizado
                })
            } else {
                res.status(404).send("Atributos enviados não condizem com o schema")
            }
        } catch (error) {
            if (error.code == "P2025") {
                res.status(404).send("consulta não existe no banco")
            }
            if (error.code === "P2002") {
                res.status(404).send("Falha ao cadastrar consulta: Email já cadastrado!")
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
                message: "consulta deletado!",
                data: consultaDeletado
            })
        } catch (error) {
            if (error.code == "P2025") {
                res.status(404).send("consulta não existe no banco")
            }
        }
    }
}

export const consultaController = new ConsultaController();