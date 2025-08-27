// import express from 'express'
// import { prismaClient } from '../prisma/prisma.js'

// const app = express()
// app.use(express.json())

app.get('/exames', async (request, response) => {
    try{
        const exames = await prismaClient.exame.findMany()
        return response.json(exames)
    }
    catch(e){
        console.log(e)
    }
  })
  
  app.get('/exames/:id', async (request, response) =>{
    try{
        const exame = await prismaClient.exame.findUnique({
            where: {
                id: Number(request.params.id)
            }
        })
        if(exame === null){
            return response.json("exame não encontrado")
        }
        return response.json(exame)
    }
    catch(e){
        console.log(e)
    }
  })
  
  app.post("/exames", async(req, res)=> {
    try {
      const { body } = req
      const exame = await prismaClient.exame.create({
        data: {
          tipo_exame: body.tipo_exame,
          resultado: body.resultado,
          data_exame: new Date(body.data_exame),
          link_arquivo: body.link_arquivo,
          observacoes: body.observacoes,
          paciente_id: body.paciente_id
        },
      })
      return res.status(201).json(exame)
    } catch (error) {
      console.error(error)
      if(error.code === "P2002"){
        res.status(404).send("Falha ao cadastrar exame: Email já cadastrado!")
      }
    }
  })
  
  app.put("/exames/:id", async(req, res)=>{
    try {
      const { body, params } = req
  
      if(body.tipo_exame || body.resultado || body.data_exame || body.observacoes || body.paciente_id || body.link_arquivo){
          await prismaClient.exame.update({
            where: { id: Number(params.id) },
            data: { 
              ...body
             },
          })
          
          const exameAtualizado = await prismaClient.exame.findUnique({
              where: {
                  id: Number(params.id)
                }
            })
            
            res.status(201).json({
                message: "exame atualizado!",
                data: exameAtualizado
            })
      }
      else{
        res.status(404).send("atributos não condiz com o esquema")
      }
        
    } catch (error) {
        if(error.code === 'P2025'){
            res.status(404).send("exame não encontrado")
        }
        if(error.code === 'P2002'){
            res.status(404).send("email ja existe")
        }
      console.log(error)
    }
  })
  
  app.delete("/exames/:id", async(req, res) => {
  const { params } = req
  try {
    const exameDeletado = await prismaClient.exame.delete({
      where: {
        id: Number(params.id),
      },
    })
    res.status(200).json({
      message: "exame deletado!",
      data: exameDeletado
    })
  } catch (error) {
    if(error.code === 'P2025'){
      res.status(404).send("exame não encontrado")
    }
    res.status(500).send("erro ao deletar o exame")
    console.log(error)
  }
})

// app.listen(3000, ()=> console.log("api rodando"))