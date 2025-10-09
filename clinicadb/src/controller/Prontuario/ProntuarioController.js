import { prismaClient } from "../../../prisma/prisma.js";
import { getToken } from "../../utils/jwt.js";

class ProntuarioController {
    constructor() { }
    // async getTodosOsProntuarios(req, res) {
    //     const { page, limit } = req.query
    //     const pageNumber = Number(page)
    //     const limitNumber = Number(limit)
    //     try {
    //         const prontuarios = await prismaClient.prontuario.findMany(
    //             {
    //                 skip: (pageNumber-1)*limitNumber,
    //                 take: limitNumber,
    //             }
    //         );
    //         return res.json(prontuarios)
    //     }
    //     catch (e) {
    //         console.log(e)
    //     }
    // }

    async getTodosOsProntuarios(req, res) {
        try {
            const token = getToken(req.headers.authorization);
            const {query} = req
            const prontuarios = await prismaClient.prontuario.findMany({
                // where: {
                //     medico_responsavel_id: token.userId
                // },
                // include:{
                //     paciente:{
                //         where:{
                //             nome: query.paciente
                //         }
                //         // select:{
                //         //     nome: query.paciente
                //         // }
                //     }
                // }
                where:{
                    data:{
                        lte: query.dataFinal ? new Date(query.dataFinal) : undefined,
                        gte: query.dataInicio ? new Date(query.dataInicio) : undefined
                    },
                    paciente:{
                        nome: query.paciente
                    }
                }
            });
            return res.json(prontuarios);
        } catch (error) {
            console.log(error)
        }
    }

    // async getProntuarioPorId(req, res) {
    //     try {
    //         const { params } = req
    //         const prontuario = await prismaClient.prontuario.findUnique({
    //             where: {
    //                 id: Number(params.id)
    //             }
    //         })
    //         if (!prontuario) return res.status(404).send("Prontuário não existe!")
    //         return res.json(prontuario)
    //     }
    //     catch (e) {
    //         console.log(e)
    //     }
    // }

    async getProntuarioPorId(req, res) {
        try {
            const token = getToken(req.headers.authorization);

            const prontuario = await prismaClient.prontuario.findUnique({
                where: {
                    id: Number(req.params.id),
                    // medico_responsavel_id: token.userId
                }
            });
            if (!prontuario) return res.status(404).send("Prontuário não existe!")
            return res.json(prontuario)
        } catch (error) {
            console.log(error)
        }
    }

    async criarProntuario(req, res) {
        try {
            const { body } = req
            const prontuario = await prismaClient.prontuario.create({
                data: {
                    descricao: body.descricao,
                    data: body.data,
                    medico_responsavel_id: body.medico_responsavel_id,
                    paciente_id: body.paciente_id
                },
            })
            return res.status(201).json(prontuario)
        } catch (error) {
            console.error(error)
            if (error.code === "P2002") {
                res.status(404).send("Falha ao cadastrar Prontuário: Email já cadastrado!")
            }
        }
    }
    async atualizarProntuario(req, res) {
        try {
            const { body, params } = req
            if (body.descricao || body.data || body.medico_responsavel_id || body.paciente_id) {
                await prismaClient.prontuario.update({
                    where: { id: Number(params.id) },
                    data: {
                        ...body
                    },
                })

                const prontuarioAtualizado = await prismaClient.prontuario.findUnique({
                    where: {
                        id: Number(params.id)
                    }
                })

                res.status(201).json({
                    message: "Prontuário atualizado!",
                    data: prontuarioAtualizado
                })
            } else {
                res.status(404).send("Atributos enviados não condizem com o schema")
            }
        } catch (error) {
            if (error.code == "P2025") {
                res.status(404).send("Prontuário não existe no banco")
            }
            if (error.code === "P2002") {
                res.status(404).send("Falha ao cadastrar Prontuário: Email já cadastrado!")
            }
        }
    }
    async deletarProntuario(req, res) {
        const { params } = req
        try {
            const prontuarioDeletado = await prismaClient.prontuario.delete({
                where: {
                    id: Number(params.id),
                },
            })
            res.status(200).json({
                message: "Prontuário deletado!",
                data: prontuarioDeletado
            })
        } catch (error) {
            if (error.code == "P2025") {
                res.status(404).send("Prontuário não existe no banco")
            }
        }
    }
}

export const prontuarioController = new ProntuarioController();