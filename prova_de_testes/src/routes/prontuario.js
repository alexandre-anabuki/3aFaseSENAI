// Path: src/routes/prontuario.js

import { Router } from "express";
import { prontuarioController } from "../controller/Prontuario/ProntuarioController.js";
export const prontuarioRouter = Router();

prontuarioRouter.get(
  "/prontuarios",
  /**
    #swagger.tags = ['Prontuário']
    #swagger.description = 'Rotas públicas e protegidas de autenticação JWT'
    #swagger.summary = 'Pega todos os prontuários'
    #swagger.security = [{ "bearerAuth": [] }]
   */
  prontuarioController.pegarTodosProntuario
);
prontuarioRouter.get(
  "/prontuarios/:id",
  /**
    #swagger.tags = ['Prontuário']
    #swagger.description = 'Rotas públicas e protegidas de autenticação JWT'
    #swagger.summary = 'Pega prontuário por ID'
    #swagger.security = [{ "bearerAuth": [] }]
   */
  prontuarioController.pegarProntuarioPorID
);
prontuarioRouter.post(
  "/prontuarios",
  /**
    #swagger.tags = ['Prontuário']
    #swagger.description = 'Rotas públicas e protegidas de autenticação JWT'
    #swagger.summary = 'Cria prontuário'
    #swagger.security = [{ "bearerAuth": [] }]
   */
  prontuarioController.criarProntuario
);
prontuarioRouter.put(
  "/prontuarios/:id",
  /**
    #swagger.tags = ['Prontuário']
    #swagger.description = 'Rotas públicas e protegidas de autenticação JWT'
    #swagger.summary = 'Atualiza prontuário por ID'
    #swagger.security = [{ "bearerAuth": [] }]
   */
  prontuarioController.atualizarProntuario
);
prontuarioRouter.delete(
  "/prontuarios/:id",
  /**
    #swagger.tags = ['Prontuário']
    #swagger.description = 'Rotas públicas e protegidas de autenticação JWT'
    #swagger.summary = 'Deleta prontuário por ID'
    #swagger.security = [{ "bearerAuth": [] }]
   */
  prontuarioController.deletarProntuario
);
