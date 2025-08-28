import { Router } from "express";
import { exameController } from "../controller/Exame/ExameController.js";
export const exameRouter = Router()

exameRouter.get('/exames', exameController.getTodosOsExames);

exameRouter.get("/exames/:id", exameController.getExamePorId)

exameRouter.post("/exames", exameController.criarExame)

exameRouter.put("/exames/:id", exameController.atualizarExame)

exameRouter.delete("/exames/:id", exameController.deletarExame)

/*-------------------------------------------------------------------------------------------------------------*/

// import { Router } from "express";
// import { prismaClient } from '../../prisma/prisma.js';

// export const exameRouter = Router()

// exameRouter.get('/exames', async (request, response) => {
//     try{
//         const exames = await prismaClient.exame.findMany()
//         return response.json(exames)
//     }
//     catch(e){
//         console.log(e)
//     }
//   })
  
//   exameRouter.get('/exames/:id', async (request, response) =>{
//     try{
//         const exame = await prismaClient.exame.findUnique({
//             where: {
//                 id: Number(request.params.id)
//             }
//         })
//         if(exame === null){
//             return response.json("exame não encontrado")
//         }
//         return response.json(exame)
//     }
//     catch(e){
//         console.log(e)
//     }
//   })
  
//   exameRouter.post("/exames", async(req, res)=> {
//     try {
//       const { body } = req
//       const exame = await prismaClient.exame.create({
//         data: {
//           tipo_exame: body.tipo_exame,
//           resultado: body.resultado,
//           data_exame: new Date(body.data_exame),
//           link_arquivo: body.link_arquivo,
//           observacoes: body.observacoes,
//           paciente_id: body.paciente_id
//         },
//       })
//       return res.status(201).json(exame)
//     } catch (error) {
//       console.error(error)
//       if(error.code === "P2002"){
//         res.status(404).send("Falha ao cadastrar exame: Email já cadastrado!")
//       }
//     }
//   })
  
//   exameRouter.put("/exames/:id", async(req, res)=>{
//     try {
//       const { body, params } = req
  
//       if(body.tipo_exame || body.resultado || body.data_exame || body.observacoes || body.paciente_id || body.link_arquivo){
//           await prismaClient.exame.update({
//             where: { id: Number(params.id) },
//             data: { 
//               ...body
//              },
//           })
          
//           const exameAtualizado = await prismaClient.exame.findUnique({
//               where: {
//                   id: Number(params.id)
//                 }
//             })
            
//             res.status(201).json({
//                 message: "exame atualizado!",
//                 data: exameAtualizado
//             })
//       }
//       else{
//         res.status(404).send("atributos não condiz com o esquema")
//       }
        
//     } catch (error) {
//         if(error.code === 'P2025'){
//             res.status(404).send("exame não encontrado")
//         }
//         if(error.code === 'P2002'){
//             res.status(404).send("email ja existe")
//         }
//       console.log(error)
//     }
//   })
  
//   exameRouter.delete("/exames/:id", async(req, res) => {
//   const { params } = req
//   try {
//     const exameDeletado = await prismaClient.exame.delete({
//       where: {
//         id: Number(params.id),
//       },
//     })
//     res.status(200).json({
//       message: "exame deletado!",
//       data: exameDeletado
//     })
//   } catch (error) {
//     if(error.code === 'P2025'){
//       res.status(404).send("exame não encontrado")
//     }
//     res.status(500).send("erro ao deletar o exame")
//     console.log(error)
//   }
// })