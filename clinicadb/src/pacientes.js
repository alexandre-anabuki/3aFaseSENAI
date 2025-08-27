// import express from 'express'
// import { prismaClient } from '../prisma/prisma.js'

// const app = express()
// app.use(express.json())

app.get('/pacientes', async (request, response) => {
    try{
        const pacientes = await prismaClient.paciente.findMany()
        return response.json(pacientes)
    }
    catch(e){
        console.log(e)
    }
  })
  
  app.get('/pacientes/:id', async (request, response) =>{
    try{
        const paciente = await prismaClient.paciente.findUnique({
            where: {
                id: Number(request.params.id)
            }
        })
        if(paciente === null){
            return response.json("paciente não encontrado")
        }
        return response.json(paciente)
    }
    catch(e){
        console.log(e)
    }
  })
  
  app.post("/pacientes", async(req, res)=> {
    try {
      const { body } = req
      const paciente = await prismaClient.paciente.create({
        data: {
          nome: body.nome,
          sexo: body.sexo,
          data_nascimento: new Date(body.data_nascimento),
          cpf: body.cpf,
          telefone: body.telefone,
          email: body.email
        },
      })
      return res.status(201).json(paciente)
    } catch (error) {
      console.error(error)
      if(error.code === "P2002"){
        res.status(404).send("Falha ao cadastrar paciente: Email já cadastrado!")
      }
    }
  })
  
  app.put("/pacientes/:id", async(req, res)=>{
    try {
      const { body, params } = req
  
      if(body.nome || body.sexo || body.data_nascimento || body.cpf || body.telefone || body.email){
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
            
            res.status(201).json({
                message: "Paciente atualizado!",
                data: pacienteAtualizado
            })
      }
      else{
        res.status(404).send("atributos não condiz com o esquema")
      }
        
    } catch (error) {
        if(error.code === 'P2025'){
            res.status(404).send("paciente não encontrado")
        }
        if(error.code === 'P2002'){
            res.status(404).send("email ja existe")
        }
      console.log(error)
    }
  })
  
  app.delete("/pacientes/:id", async(req, res) => {
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
    if(error.code === 'P2025'){
      res.status(404).send("paciente não encontrado")
    }
    res.status(500).send("erro ao deletar o paciente")
    console.log(error)
  }
})

// app.listen(3000, ()=> console.log("api rodando"))