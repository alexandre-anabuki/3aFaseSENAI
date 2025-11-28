import { Router } from "express";
import { exameController } from "../controller/Exame/ExameController.js";

export const exameRouter = Router();

exameRouter.get(
  "/exames",
  /**
    #swagger.tags = ['Exames']
    #swagger.description = 'Rotas públicas e protegidas de autenticação JWT'
    #swagger.summary = 'Pega todos os exames'
    #swagger.security = [{ "bearerAuth": [] }]
   */
  exameController.pegarTodosExames
);
exameRouter.get(
  "/exames/:id",
  /**
    #swagger.tags = ['Exames']
    #swagger.description = 'Rotas públicas e protegidas de autenticação JWT'
    #swagger.summary = 'Pega exame por ID'
    #swagger.security = [{ "bearerAuth": [] }]
   */
  exameController.pegarExamePorId
);
exameRouter.post(
  "/exames",
  /**
    #swagger.tags = ['Exames']
    #swagger.description = 'Rotas públicas e protegidas de autenticação JWT'
    #swagger.summary = 'Cria exame'
    #swagger.security = [{ "bearerAuth": [] }]
   */
  exameController.criarExame
);
exameRouter.put(
  "/exames/:id",
  /**
    #swagger.tags = ['Exames']
    #swagger.description = 'Rotas públicas e protegidas de autenticação JWT'
    #swagger.summary = 'Atualiza exame por ID'
    #swagger.security = [{ "bearerAuth": [] }]
   */
  exameController.atualizarExame
);
exameRouter.delete(
  "/exames/:id",
  /**
    #swagger.tags = ['Exames']
    #swagger.description = 'Rotas públicas e protegidas de autenticação JWT'
    #swagger.summary = 'Deleta exame por ID'
    #swagger.security = [{ "bearerAuth": [] }]
   */
  exameController.deletarExame
);
