// Path: src/routes/consulta.js

import { Router } from "express";
import { consultaController } from "../controller/Consulta/ConsultaController.js";

export const consultasRouter = Router();

/*

*/

consultasRouter.get(
  "/consultas",
  /* 
    #swagger.tags = ['Consultas']
    #swagger.description = 'Gerenciamento de consultas médicas'
    #swagger.summary = 'Lista todas as consultas'
    #swagger.security = [{ "bearerAuth": [] }]
  */
  consultaController.pegarTodasConsultas
);

consultasRouter.get(
  "/consultas/:id",
  /* 
    #swagger.tags = ['Consultas']
    #swagger.description = 'Gerenciamento de consultas médicas'
    #swagger.summary = 'Busca consulta pelo ID'
    #swagger.security = [{ "bearerAuth": [] }]
  */
  consultaController.pegarConsultaPorId
);

consultasRouter.post(
  "/consultas",
  /* 
    #swagger.tags = ['Consultas']
    #swagger.description = 'Gerenciamento de consultas médicas'
    #swagger.summary = 'Cria uma nova consulta'
    #swagger.security = [{ "bearerAuth": [] }]
  */
  consultaController.criarConsulta
);

consultasRouter.put(
  "/consultas/:id",
  /* 
    #swagger.tags = ['Consultas']
    #swagger.description = 'Gerenciamento de consultas médicas'
    #swagger.summary = 'Atualiza os dados de uma consulta'
    #swagger.parameters['id'] = { in: 'path', type: 'integer', required: true }
    #swagger.security = [{ "bearerAuth": [] }]
  */
  consultaController.atualizarConsulta
);

consultasRouter.delete(
  "/consultas/:id",
  /* 
    #swagger.tags = ['Consultas']
    #swagger.description = 'Gerenciamento de consultas médicas'
    #swagger.summary = 'Deleta uma consulta pelo ID'
    #swagger.parameters['id'] = { in: 'path', type: 'integer', required: true }
    #swagger.security = [{ "bearerAuth": [] }]
  */
  consultaController.deletarConsulta
);
