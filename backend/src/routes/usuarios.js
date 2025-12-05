import { Router } from "express";
import { usuarioController } from "../controller/Usuario/UsuarioController.js";

const usuarioRouter = Router()

usuarioRouter.get('/usuarios', usuarioController.getTodosUsuarios)

usuarioRouter.get('/usuarios/byemail', usuarioController.getPorEmail)

usuarioRouter.post('/usuarios', usuarioController.criarUsuario)

usuarioRouter.put('/usuarios/:id', usuarioController.atualizarUsuario)

usuarioRouter.delete('/usuarios/byemail', usuarioController.deletarUsuario)

export default usuarioRouter