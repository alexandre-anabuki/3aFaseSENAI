// import express from 'express'
// import { prismaClient } from '../prisma/prisma.js'

// const app = express()
// app.use(express.json())

app.get('/consultas', async (request, response) => {
    try {
      const consultas = await prismaClient.consulta.findMany();
      return response.json(consultas)
    }
    catch (e) {
      console.log(e)
    }
  });
  
  app.get("/consultas/:id", async (request, response) => {
    try {
      const consultas = await prismaClient.consulta.findUnique({
        where: {
          id: Number(request.params.id)
        }
      })
      if (!consultas) return response.status(404).send("consulta não existe!")
      return response.json(consultas)
    }
    catch (e) {
      console.log(e)
    }
  })
  
  app.post("/consultas", async (req, res) => {
    try {
      const { body } = req
      const bodyKeys = Object.keys(body) // Aqui pegamos todas as chaves do objeto e é gerado um array de strings para a gente, com o formato de ["chave1", "chave2".....]
      console.log(bodyKeys)
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
          data_consulta: new Date(body.data_consulta),
        },
      })
      return res.status(201).json(consultas)
    } catch (error) {
      console.error(error)
      if (error.code === "P2002") {
        res.status(404).send("Falha ao cadastrar consulta: Email já cadastrado!")
      }
    }
  })
  
  app.put("/consultas/:id", async (req, res) => {
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
      const data = body.data_consulta ? {
        ...body,
        data_consulta: new Date(body.data_consulta)
      } : {
        ...body
      }
      await prismaClient.consulta.update({
        where: { id: Number(params.id) },
        data: data
      })
      const consultaAtualizado = await prismaClient.consulta.findUnique({
        where: {
          id: Number(params.id)
        }
      })
  
      return res.status(201).json({
        message: "consulta atualizado!",
        data: consultaAtualizado
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
  
  app.delete("/consultas/:id", async (req, res) => {
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
      if (error.code == "P2003") {
        res.status(404).send("consulta não pode ser excluido, pois possui exames vinculados.")
      }
      res.status(500).send(error)
    }
})

// app.listen(3000, ()=> console.log("api rodando"))