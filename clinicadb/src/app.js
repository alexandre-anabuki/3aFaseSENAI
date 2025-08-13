import express from 'express'
import { prismaClient } from '../prisma/prisma.js'

const app = express()
app.use(express.json())

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

app.listen(3000, ()=> console.log("api rodando"))