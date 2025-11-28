import { Router } from "express";
import { usuarioController } from "../controller/usuario/UsuarioController.js";

const usuarioRouter = Router()

usuarioRouter.get('/usuarios', usuarioController.getTodosUsuarios)

usuarioRouter.get('/usuarios/:email', usuarioController.getPorEmail)

usuarioRouter.post('/usuarios', usuarioController.criarUsuario)

usuarioRouter.put('/usuarios/:id', usuarioController.atualizarUsuario)

usuarioRouter.delete('/usuarios/:email', usuarioController.deletarUsuario)

export default usuarioRouter