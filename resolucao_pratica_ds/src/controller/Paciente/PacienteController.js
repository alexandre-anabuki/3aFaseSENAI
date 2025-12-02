import { prismaClient } from "../../../prisma/prisma.js";

class PacienteController {
    constructor() { }
    async pegarTodosPacientes(_, res) {
        console.log("cheguei aqui")
        try {
            const pacientes = await prismaClient.paciente.findMany();
            return res.json(pacientes)
        }
        catch (e) {
            console.log(e)
        }
    }

    async pegarPacientePorId(req, res) {
        try {
            const pacientes = await prismaClient.paciente.findUnique({
                where: {
                    id: Number(req.params.id)
                }
            })
            if (!pacientes) return res.status(404).send("Paciente não existe!")
            return res.json(pacientes)
        }
        catch (e) {
            console.log(e)
        }
    }

    async criarPaciente(req, res) {
        try {
            const { body } = req
            const bodyKeys = Object.keys(body) // Aqui pegamos todas as chaves do objeto e é gerado um array de strings para a gente, com o formato de ["chave1", "chave2".....]
            console.log(bodyKeys)
            for (const key of bodyKeys) {
                if (key !== "nome" &&
                    key !== "cpf" &&
                    key !== "telefone" &&
                    key !== "email" &&
                    key !== "data_nascimento" &&
                    key !== "sexo" &&
                    key !== "responsavel"
                ) return res.status(404).send("Colunas não existentes")
            }
            const pacientes = await prismaClient.paciente.create({
                data: {
                    ...body,
                    data_nascimento: new Date(body.data_nascimento),
                },
            })
            return res.status(201).json(pacientes)
        } catch (error) {
            console.error(error)
            if (error.code === "P2002") {
                res.status(404).send("Falha ao cadastrar paciente: Email já cadastrado!")
            }
        }
    }

    async atualizarPaciente(req, res) {
        try {
            const { body, params } = req
            const bodyKeys = Object.keys(body)
            for (const key of bodyKeys) {
                if (key !== "nome" &&
                    key !== "cpf" &&
                    key !== "telefone" &&
                    key !== "email" &&
                    key !== "data_nascimento" &&
                    key !== "sexo" &&
                    key !== "responsavel"
                ) return res.status(404).send("Colunas não existentes")
            }
            await prismaClient.paciente.update({
                where: { id: Number(params.id) },
                data: {
                    ...body
                },
            })
            const pacienteAtualizado = await prismaClient.paciente.findUnique({
                where: {
                    id: Number(params.id)
                }
            })

            return res.status(201).json({
                message: "Paciente atualizado!",
                data: pacienteAtualizado
            })

        } catch (error) {
            if (error.code == "P2025") {
                res.status(404).send("Usuário não existe no banco")
            }
            if (error.code === "P2002") {
                res.status(404).send("Falha ao cadastrar usuário: Email já cadastrado!")
            }
        }
    }

    async deletePaciente(req, res) {
        const { params } = req
        try {
            const pacienteDeletado = await prismaClient.paciente.delete({
                where: {
                    id: Number(params.id),
                },
            })
            res.status(200).json({
                message: "Paciente deletado!",
                data: pacienteDeletado
            })
        } catch (error) {
            if (error.code == "P2025") {
                res.status(404).send("Paciente não existe no banco")
            }
            if (error.code == "P2003") {
                res.status(404).send("Paciente não pode ser excluido, pois possui exames vinculados.")
            }
            res.status(500).send(error)
        }
    }
}

export const pacienteController = new PacienteController()

