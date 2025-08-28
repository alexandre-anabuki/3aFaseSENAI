import { prismaClient } from "../../../prisma/prisma.js";

class ConsultaController {
    constructor() { }
    async getTodosOsConsultas(_, res) {
        try {
            const consultas = await prismaClient.consulta.findMany();
            return res.json(consultas)
        }
        catch (e) {
            console.log(e)
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