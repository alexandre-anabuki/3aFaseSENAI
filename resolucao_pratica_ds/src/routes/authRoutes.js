// Path: src/routes/authRoutes.js

import { Router } from "express";
import { auth } from "../middleware/auth.js";
import { authController } from "../controller/Auth/AuthController.js";

const authRouter = Router();

authRouter.post(
  "/register",
  /* 
  #swagger.tags = ['Autenticação']
  #swagger.description = 'Rotas públicas e protegidas de autenticação JWT'
  #swagger.summary = 'Cria um novo usuário' 
  #swagger.security = []
  */
  authController.register
);

authRouter.post(
  "/login",
  /* 
  #swagger.tags = ['Autenticação']
  #swagger.description = 'Rotas públicas e protegidas de autenticação JWT'
  #swagger.summary = 'Autentica o usuário e retorna um token JWT' 
  #swagger.security = []
  */
  authController.login
);

authRouter.post(
  "/auth/logout",
  auth,
  /* 
    #swagger.tags = ['Autenticação']
    #swagger.description = 'Rotas públicas e protegidas de autenticação JWT'
    #swagger.summary = 'Invalida o token atual'
    #swagger.security = [{ "bearerAuth": [] }]
  */
  authController.logout
);

authRouter.post(
  "/auth/refresh",
  auth,
  /* 
    #swagger.tags = ['Autenticação']
    #swagger.description = 'Rotas públicas e protegidas de autenticação JWT'
    #swagger.summary = 'Gera um novo token de acesso com base no refresh token'
    #swagger.security = [{ "bearerAuth": [] }]
  */
  authController.refresh
);

export default authRouter;
