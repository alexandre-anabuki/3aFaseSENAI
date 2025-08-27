// import express from 'express'
// import { prismaClient } from '../prisma/prisma.js'

// const app = express()
// app.use(express.json())

app.get('/prontuarios', async (request, response) => {
    try {
      const prontuarios = await prismaClient.prontuario.findMany();
      return response.json(prontuarios)
    }
    catch (e) {
      console.log(e)
    }
  });
  
  app.get("/prontuarios/:id", async (request, response) => {
    try {
      const prontuarios = await prismaClient.prontuario.findUnique({
        where: {
          id: Number(request.params.id)
        }
      })
      if (!prontuarios) return response.status(404).send("prontuario não existe!")
      return response.json(prontuarios)
    }
    catch (e) {
      console.log(e)
    }
  })
  
  app.post("/prontuarios", async (req, res) => {
    try {
      const { body } = req
      const bodyKeys = Object.keys(body) // Aqui pegamos todas as chaves do objeto e é gerado um array de strings para a gente, com o formato de ["chave1", "chave2".....]
      console.log(bodyKeys)
      for (const key of bodyKeys) {
        if (key !== "descricao" &&
          key !== "data" &&
          key !== "medico_responsavel_id" &&
          key !== "paciente_id" 
        ) return res.status(404).send("Colunas não existentes")
      }
      const prontuarios = await prismaClient.prontuario.create({
        data: {
          ...body,
          data: new Date(body.data),
        },
      })
      return res.status(201).json(prontuarios)
    } catch (error) {
      console.error(error)
      if (error.code === "P2002") {
        res.status(404).send("Falha ao cadastrar prontuario: Email já cadastrado!")
      }
    }
  })
  
  app.put("/prontuarios/:id", async (req, res) => {
    try {
      const { body, params } = req
      const bodyKeys = Object.keys(body)
      for (const key of bodyKeys) {
        if (key !== "descricao" &&
          key !== "data" &&
          key !== "medico_responsavel_id" &&
          key !== "paciente_id" 
        ) return res.status(404).send("Colunas não existentes")
      }
      const data = body.data ? {
        ...body,
        data: new Date(body.data)
      } : {
        ...body
      }
      await prismaClient.prontuario.update({
        where: { id: Number(params.id) },
        data: data
      })
      const prontuarioAtualizado = await prismaClient.prontuario.findUnique({
        where: {
          id: Number(params.id)
        }
      })
  
      return res.status(201).json({
        message: "prontuario atualizado!",
        data: prontuarioAtualizado
      })
  
    } catch (error) {
      if (error.code == "P2025") {
        res.status(404).send("Usuário não existe no banco")
      }
      if (error.code === "P2002") {
        res.status(404).send("Falha ao cadastrar usuário: Email já cadastrado!")
      }
    }
  })
  
  app.delete("/prontuarios/:id", async (req, res) => {
    const { params } = req
    try {
      const prontuarioDeletado = await prismaClient.prontuario.delete({
        where: {
          id: Number(params.id),
        },
      })
      res.status(200).json({
        message: "prontuario deletado!",
        data: prontuarioDeletado
      })
    } catch (error) {
      if (error.code == "P2025") {
        res.status(404).send("prontuario não existe no banco")
      }
      if (error.code == "P2003") {
        res.status(404).send("prontuario não pode ser excluido, pois possui exames vinculados.")
      }
      res.status(500).send(error)
    }
})

// app.listen(3000, ()=> console.log("api rodando"))