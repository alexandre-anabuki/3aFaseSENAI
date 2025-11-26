import { Router } from "express";


export const usuarioRouter = Router()

usuarioRouter.get('/usuarios', usuarioController.getTodosUsuarios)

usuarioRouter.get('/usuarios', usuarioController.getPorEmail)

usuarioRouter.post('/usuarios', usuarioController.criaUsuario)

usuarioRouter.put('/usuarios', usuarioController.getTodosUsuarios)

usuarioRouter.delete('/usuarios', usuarioController.getTodosUsuarios)