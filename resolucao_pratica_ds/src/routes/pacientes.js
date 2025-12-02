// Path: src/routes/pacientes.js

import { Router } from "express";
import { pacienteController } from "../controller/Paciente/PacienteController.js";

export const pacientesRouter = Router();

pacientesRouter.get(
  "/pacientes",
  /*
    #swagger.description = 'Rotas protegidas para gerenciamento de pacientes'  
    #swagger.tags = ['Pacientes'] 
    #swagger.summary = 'Lista todos os pacientes'
    #swagger.security = [{ "bearerAuth": [] }]
  */
  pacienteController.pegarTodosPacientes
);

pacientesRouter.get(
  "/pacientes/:id",
  /* 
    #swagger.description = 'Rotas protegidas para gerenciamento de pacientes'  
    #swagger.tags = ['Pacientes'] 
    #swagger.summary = 'Busca paciente pelo ID'
    #swagger.parameters['id'] = { in: 'path', type: 'integer', required: true }
    #swagger.security = [{ "bearerAuth": [] }]
  */
  pacienteController.pegarPacientePorId
);

pacientesRouter.post(
  "/pacientes",
  /* 
    #swagger.description = 'Rotas protegidas para gerenciamento de pacientes'  
    #swagger.tags = ['Pacientes'] 
    #swagger.summary = 'Cria um novo paciente'
    #swagger.security = [{ "bearerAuth": [] }]
  */
  pacienteController.criarPaciente
);

pacientesRouter.put(
  "/pacientes/:id",
  /* 
    #swagger.description = 'Rotas protegidas para gerenciamento de pacientes'  
    #swagger.tags = ['Pacientes'] 
    #swagger.summary = 'Atualiza os dados de um paciente'
    #swagger.parameters['id'] = { in: 'path', type: 'integer', required: true }
    #swagger.security = [{ "bearerAuth": [] }]
  */
  pacienteController.atualizarPaciente
);

pacientesRouter.delete(
  "/pacientes/:id",
  /* 
    #swagger.description = 'Rotas protegidas para gerenciamento de pacientes'  
    #swagger.tags = ['Pacientes'] 
    #swagger.summary = 'Exclui paciente pelo ID'
    #swagger.parameters['id'] = { in: 'path', type: 'integer', required: true }
    #swagger.security = [{ "bearerAuth": [] }]
  */
  pacienteController.deletePaciente
);
