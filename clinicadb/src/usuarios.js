// import express from 'express'
// import { prismaClient } from '../prisma/prisma.js'

// const app = express()
// app.use(express.json())

app.get('/usuarios', async (request, response) => {
    try{
        const usuarios = await prismaClient.usuario.findMany()
        return response.json(usuarios)
    }
    catch(e){
        console.log(e)
    }
})

app.get('/usuarios/:id', async (request, response) =>{
    try{
        const usuario = await prismaClient.usuario.findUnique({
            where: {
                id: Number(request.params.id)
            }
        })
        if(usuario === null){
            return response.json("usuario não encontrado")
        }
        return response.json(usuario)
    }
    catch(e){
        console.log(e)
    }
})

app.post("/usuarios", async(req, res)=> {
    try {
      const { body } = req
      const usuario = await prismaClient.usuario.create({
        data: {
          nome: body.nome,
          cargo: body.cargo,
          email: body.email,
          senha: body.senha
        },
      })
      return res.status(201).json(usuario)
    } catch (error) {
      console.error(error)
      if(error.code === "P2002"){
        res.status(404).send("Falha ao cadastrar usuário: Email já cadastrado!")
      }
    }
})

app.put("/usuarios/:id", async(req, res)=>{
    try {
      const { body, params } = req

      if(body.nome || body.cargo || body.email || body.senha){
          await prismaClient.usuario.update({
            where: { id: Number(params.id) },
            data: { 
              ...body
             },
          })
          
          const usuarioAtualizado = await prismaClient.usuario.findUnique({
              where: {
                  id: Number(params.id)
                }
            })
            
            res.status(201).json({
                message: "Usuário atualizado!",
                data: usuarioAtualizado
            })
      }
      else{
        res.status(404).send("atributos não condiz com o esquema")
      }
        
    } catch (error) {
        if(error.code === 'P2025'){
            res.status(404).send("usuario não encontrado")
        }
        if(error.code === 'P2002'){
            res.status(404).send("email ja existe")
        }
      console.log(error)
    }
})

app.delete("/usuarios/:id", async(req, res) => {
  const { params } = req
  try {
    const usuarioDeletado = await prismaClient.usuario.delete({
      where: {
        id: Number(params.id),
      },
    })
    res.status(200).json({
      message: "Usuário deletado!",
      data: usuarioDeletado
    })
  } catch (error) {
    if(error.code === 'P2025'){
      res.status(404).send("usuario não encontrado")
    }
    res.status(500).send("erro ao deletar o usuario")
    console.log(error)
  }
})

// app.listen(3000, ()=> console.log("api rodando"))