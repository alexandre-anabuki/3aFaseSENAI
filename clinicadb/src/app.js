import express from 'express';
import cors from "cors"
import { usuarioRouter } from './routes/usuarios.js';
import { exameRouter } from './routes/exames.js';
import { pacienteRouter } from './routes/pacientes.js';
import { prontuarioRouter } from './routes/prontuarios.js';
import { consultaRouter } from './routes/consultas.js';
import authRouter from './routes/authRoutes.js';
import { auth } from './middleware/auth.js';


export const app = express()

app.use(cors())
app.use(express.json())

// rotas usuario
app.use(usuarioRouter);

// rotas exames
app.use(exameRouter);

// rotas pacientes
app.use(pacienteRouter);

// rotas prontuario
app.use(prontuarioRouter);

// rotas consulta
app.use(consultaRouter);

app.use('/auth', authRouter)

app.use(auth)


/*-------------------------------------------------------------------------*/

// import express from 'express'
// import { prismaClient } from '../prisma/prisma.js'

// const app = express()
// app.use(express.json())

// /*--USUARIOS--*/

// app.get('/usuarios', async (request, response) => {
//     try{
//         const usuarios = await prismaClient.usuario.findMany()
//         return response.json(usuarios)
//     }
//     catch(e){
//         console.log(e)
//     }
// })

// app.get('/usuarios/:id', async (request, response) =>{
//     try{
//         const usuario = await prismaClient.usuario.findUnique({
//             where: {
//                 id: Number(request.params.id)
//             }
//         })
//         if(usuario === null){
//             return response.json("usuario não encontrado")
//         }
//         return response.json(usuario)
//     }
//     catch(e){
//         console.log(e)
//     }
// })

// app.post("/usuarios", async(req, res)=> {
//     try {
//       const { body } = req
//       const usuario = await prismaClient.usuario.create({
//         data: {
//           nome: body.nome,
//           cargo: body.cargo,
//           email: body.email,
//           senha: body.senha
//         },
//       })
//       return res.status(201).json(usuario)
//     } catch (error) {
//       console.error(error)
//       if(error.code === "P2002"){
//         res.status(404).send("Falha ao cadastrar usuário: Email já cadastrado!")
//       }
//     }
// })

// app.put("/usuarios/:id", async(req, res)=>{
//     try {
//       const { body, params } = req

//       if(body.nome || body.cargo || body.email || body.senha){
//           await prismaClient.usuario.update({
//             where: { id: Number(params.id) },
//             data: { 
//               ...body
//              },
//           })
          
//           const usuarioAtualizado = await prismaClient.usuario.findUnique({
//               where: {
//                   id: Number(params.id)
//                 }
//             })
            
//             res.status(201).json({
//                 message: "Usuário atualizado!",
//                 data: usuarioAtualizado
//             })
//       }
//       else{
//         res.status(404).send("atributos não condiz com o esquema")
//       }
        
//     } catch (error) {
//         if(error.code === 'P2025'){
//             res.status(404).send("usuario não encontrado")
//         }
//         if(error.code === 'P2002'){
//             res.status(404).send("email ja existe")
//         }
//       console.log(error)
//     }
// })

// app.delete("/usuarios/:id", async(req, res) => {
//   const { params } = req
//   try {
//     const usuarioDeletado = await prismaClient.usuario.delete({
//       where: {
//         id: Number(params.id),
//       },
//     })
//     res.status(200).json({
//       message: "Usuário deletado!",
//       data: usuarioDeletado
//     })
//   } catch (error) {
//     if(error.code === 'P2025'){
//       res.status(404).send("usuario não encontrado")
//     }
//     res.status(500).send("erro ao deletar o usuario")
//     console.log(error)
//   }
// })

// /*----------------------------------------------------------------------------------------*/
// /*--PACIENTES--*/

// app.get('/pacientes', async (request, response) => {
//   try{
//       const pacientes = await prismaClient.paciente.findMany()
//       return response.json(pacientes)
//   }
//   catch(e){
//       console.log(e)
//   }
// })

// app.get('/pacientes/:id', async (request, response) =>{
//   try{
//       const paciente = await prismaClient.paciente.findUnique({
//           where: {
//               id: Number(request.params.id)
//           }
//       })
//       if(paciente === null){
//           return response.json("paciente não encontrado")
//       }
//       return response.json(paciente)
//   }
//   catch(e){
//       console.log(e)
//   }
// })

// app.post("/pacientes", async(req, res)=> {
//   try {
//     const { body } = req
//     const paciente = await prismaClient.paciente.create({
//       data: {
//         nome: body.nome,
//         sexo: body.sexo,
//         data_nascimento: new Date(body.data_nascimento),
//         cpf: body.cpf,
//         telefone: body.telefone,
//         email: body.email
//       },
//     })
//     return res.status(201).json(paciente)
//   } catch (error) {
//     console.error(error)
//     if(error.code === "P2002"){
//       res.status(404).send("Falha ao cadastrar paciente: Email já cadastrado!")
//     }
//   }
// })

// app.put("/pacientes/:id", async(req, res)=>{
//   try {
//     const { body, params } = req

//     if(body.nome || body.sexo || body.data_nascimento || body.cpf || body.telefone || body.email){
//         await prismaClient.paciente.update({
//           where: { id: Number(params.id) },
//           data: { 
//             ...body
//            },
//         })
        
//         const pacienteAtualizado = await prismaClient.paciente.findUnique({
//             where: {
//                 id: Number(params.id)
//               }
//           })
          
//           res.status(201).json({
//               message: "Paciente atualizado!",
//               data: pacienteAtualizado
//           })
//     }
//     else{
//       res.status(404).send("atributos não condiz com o esquema")
//     }
      
//   } catch (error) {
//       if(error.code === 'P2025'){
//           res.status(404).send("paciente não encontrado")
//       }
//       if(error.code === 'P2002'){
//           res.status(404).send("email ja existe")
//       }
//     console.log(error)
//   }
// })

// app.delete("/pacientes/:id", async(req, res) => {
// const { params } = req
// try {
//   const pacienteDeletado = await prismaClient.paciente.delete({
//     where: {
//       id: Number(params.id),
//     },
//   })
//   res.status(200).json({
//     message: "Paciente deletado!",
//     data: pacienteDeletado
//   })
// } catch (error) {
//   if(error.code === 'P2025'){
//     res.status(404).send("paciente não encontrado")
//   }
//   res.status(500).send("erro ao deletar o paciente")
//   console.log(error)
// }
// })

// /*--------------------------------------------------------------------------------------*/
// /*--EXAMES--*/

// app.get('/exames', async (request, response) => {
//   try{
//       const exames = await prismaClient.exame.findMany()
//       return response.json(exames)
//   }
//   catch(e){
//       console.log(e)
//   }
// })

// app.get('/exames/:id', async (request, response) =>{
//   try{
//       const exame = await prismaClient.exame.findUnique({
//           where: {
//               id: Number(request.params.id)
//           }
//       })
//       if(exame === null){
//           return response.json("exame não encontrado")
//       }
//       return response.json(exame)
//   }
//   catch(e){
//       console.log(e)
//   }
// })

// app.post("/exames", async(req, res)=> {
//   try {
//     const { body } = req
//     const exame = await prismaClient.exame.create({
//       data: {
//         tipo_exame: body.tipo_exame,
//         resultado: body.resultado,
//         data_exame: new Date(body.data_exame),
//         link_arquivo: body.link_arquivo,
//         observacoes: body.observacoes,
//         paciente_id: body.paciente_id
//       },
//     })
//     return res.status(201).json(exame)
//   } catch (error) {
//     console.error(error)
//     if(error.code === "P2002"){
//       res.status(404).send("Falha ao cadastrar exame: Email já cadastrado!")
//     }
//   }
// })

// app.put("/exames/:id", async(req, res)=>{
//   try {
//     const { body, params } = req

//     if(body.tipo_exame || body.resultado || body.data_exame || body.observacoes || body.paciente_id || body.link_arquivo){
//         await prismaClient.exame.update({
//           where: { id: Number(params.id) },
//           data: { 
//             ...body
//            },
//         })
        
//         const exameAtualizado = await prismaClient.exame.findUnique({
//             where: {
//                 id: Number(params.id)
//               }
//           })
          
//           res.status(201).json({
//               message: "exame atualizado!",
//               data: exameAtualizado
//           })
//     }
//     else{
//       res.status(404).send("atributos não condiz com o esquema")
//     }
      
//   } catch (error) {
//       if(error.code === 'P2025'){
//           res.status(404).send("exame não encontrado")
//       }
//       if(error.code === 'P2002'){
//           res.status(404).send("email ja existe")
//       }
//     console.log(error)
//   }
// })

// app.delete("/exames/:id", async(req, res) => {
// const { params } = req
// try {
//   const exameDeletado = await prismaClient.exame.delete({
//     where: {
//       id: Number(params.id),
//     },
//   })
//   res.status(200).json({
//     message: "exame deletado!",
//     data: exameDeletado
//   })
// } catch (error) {
//   if(error.code === 'P2025'){
//     res.status(404).send("exame não encontrado")
//   }
//   res.status(500).send("erro ao deletar o exame")
//   console.log(error)
// }
// })

// /*-----------------------------------------------------------------------------------------------------------*/
// /*--CONSULTA--*/

// app.get('/consultas', async (request, response) => {
//   try {
//     const consultas = await prismaClient.consulta.findMany();
//     return response.json(consultas)
//   }
//   catch (e) {
//     console.log(e)
//   }
// });

// app.get("/consultas/:id", async (request, response) => {
//   try {
//     const consultas = await prismaClient.consulta.findUnique({
//       where: {
//         id: Number(request.params.id)
//       }
//     })
//     if (!consultas) return response.status(404).send("consulta não existe!")
//     return response.json(consultas)
//   }
//   catch (e) {
//     console.log(e)
//   }
// })

// app.post("/consultas", async (req, res) => {
//   try {
//     const { body } = req
//     const bodyKeys = Object.keys(body) // Aqui pegamos todas as chaves do objeto e é gerado um array de strings para a gente, com o formato de ["chave1", "chave2".....]
//     console.log(bodyKeys)
//     for (const key of bodyKeys) {
//       if (key !== "motivo" &&
//         key !== "data_consulta" &&
//         key !== "observacoes" &&
//         key !== "medico_responsavel_id" &&
//         key !== "paciente_id" 
//       ) return res.status(404).send("Colunas não existentes")
//     }
//     const consultas = await prismaClient.consulta.create({
//       data: {
//         ...body,
//         data_consulta: new Date(body.data_consulta),
//       },
//     })
//     return res.status(201).json(consultas)
//   } catch (error) {
//     console.error(error)
//     if (error.code === "P2002") {
//       res.status(404).send("Falha ao cadastrar consulta: Email já cadastrado!")
//     }
//   }
// })

// app.put("/consultas/:id", async (req, res) => {
//   try {
//     const { body, params } = req
//     const bodyKeys = Object.keys(body)
//     for (const key of bodyKeys) {
//       if (key !== "motivo" &&
//         key !== "data_consulta" &&
//         key !== "observacoes" &&
//         key !== "medico_responsavel_id" &&
//         key !== "paciente_id" 
//       ) return res.status(404).send("Colunas não existentes")
//     }
//     const data = body.data_consulta ? {
//       ...body,
//       data_consulta: new Date(body.data_consulta)
//     } : {
//       ...body
//     }
//     await prismaClient.consulta.update({
//       where: { id: Number(params.id) },
//       data: data
//     })
//     const consultaAtualizado = await prismaClient.consulta.findUnique({
//       where: {
//         id: Number(params.id)
//       }
//     })

//     return res.status(201).json({
//       message: "consulta atualizado!",
//       data: consultaAtualizado
//     })

//   } catch (error) {
//     if (error.code == "P2025") {
//       res.status(404).send("Usuário não existe no banco")
//     }
//     if (error.code === "P2002") {
//       res.status(404).send("Falha ao cadastrar usuário: Email já cadastrado!")
//     }
//   }
// })

// app.delete("/consultas/:id", async (req, res) => {
//   const { params } = req
//   try {
//     const consultaDeletado = await prismaClient.consulta.delete({
//       where: {
//         id: Number(params.id),
//       },
//     })
//     res.status(200).json({
//       message: "consulta deletado!",
//       data: consultaDeletado
//     })
//   } catch (error) {
//     if (error.code == "P2025") {
//       res.status(404).send("consulta não existe no banco")
//     }
//     if (error.code == "P2003") {
//       res.status(404).send("consulta não pode ser excluido, pois possui exames vinculados.")
//     }
//     res.status(500).send(error)
//   }
// })

// /*-------------------------------------------------------------------------------------------------------------*/
// /*--PRONTUARIO--*/

// app.get('/prontuarios', async (request, response) => {
//   try {
//     const prontuarios = await prismaClient.prontuario.findMany();
//     return response.json(prontuarios)
//   }
//   catch (e) {
//     console.log(e)
//   }
// });

// app.get("/prontuarios/:id", async (request, response) => {
//   try {
//     const prontuarios = await prismaClient.prontuario.findUnique({
//       where: {
//         id: Number(request.params.id)
//       }
//     })
//     if (!prontuarios) return response.status(404).send("prontuario não existe!")
//     return response.json(prontuarios)
//   }
//   catch (e) {
//     console.log(e)
//   }
// })

// app.post("/prontuarios", async (req, res) => {
//   try {
//     const { body } = req
//     const bodyKeys = Object.keys(body) // Aqui pegamos todas as chaves do objeto e é gerado um array de strings para a gente, com o formato de ["chave1", "chave2".....]
//     console.log(bodyKeys)
//     for (const key of bodyKeys) {
//       if (key !== "descricao" &&
//         key !== "data" &&
//         key !== "medico_responsavel_id" &&
//         key !== "paciente_id" 
//       ) return res.status(404).send("Colunas não existentes")
//     }
//     const prontuarios = await prismaClient.prontuario.create({
//       data: {
//         ...body,
//         data: new Date(body.data),
//       },
//     })
//     return res.status(201).json(prontuarios)
//   } catch (error) {
//     console.error(error)
//     if (error.code === "P2002") {
//       res.status(404).send("Falha ao cadastrar prontuario: Email já cadastrado!")
//     }
//   }
// })

// app.put("/prontuarios/:id", async (req, res) => {
//   try {
//     const { body, params } = req
//     const bodyKeys = Object.keys(body)
//     for (const key of bodyKeys) {
//       if (key !== "descricao" &&
//         key !== "data" &&
//         key !== "medico_responsavel_id" &&
//         key !== "paciente_id" 
//       ) return res.status(404).send("Colunas não existentes")
//     }
//     const data = body.data ? {
//       ...body,
//       data: new Date(body.data)
//     } : {
//       ...body
//     }
//     await prismaClient.prontuario.update({
//       where: { id: Number(params.id) },
//       data: data
//     })
//     const prontuarioAtualizado = await prismaClient.prontuario.findUnique({
//       where: {
//         id: Number(params.id)
//       }
//     })

//     return res.status(201).json({
//       message: "prontuario atualizado!",
//       data: prontuarioAtualizado
//     })

//   } catch (error) {
//     if (error.code == "P2025") {
//       res.status(404).send("Usuário não existe no banco")
//     }
//     if (error.code === "P2002") {
//       res.status(404).send("Falha ao cadastrar usuário: Email já cadastrado!")
//     }
//   }
// })

// app.delete("/prontuarios/:id", async (req, res) => {
//   const { params } = req
//   try {
//     const prontuarioDeletado = await prismaClient.prontuario.delete({
//       where: {
//         id: Number(params.id),
//       },
//     })
//     res.status(200).json({
//       message: "prontuario deletado!",
//       data: prontuarioDeletado
//     })
//   } catch (error) {
//     if (error.code == "P2025") {
//       res.status(404).send("prontuario não existe no banco")
//     }
//     if (error.code == "P2003") {
//       res.status(404).send("prontuario não pode ser excluido, pois possui exames vinculados.")
//     }
//     res.status(500).send(error)
//   }
// })

app.listen(4000, ()=> console.log("api rodando"))