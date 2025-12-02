// Path: src/routes/drivers.js

import { Router } from "express";
import { driverController } from "../controller/Driver/DriverController.js";
import { deliveryController } from "../controller/Delivery/DeliveryController.js";

export const driversRouter = Router();

driversRouter.get(
  "/drivers",
  /* 
    #swagger.tags = ['Motoristas']
    #swagger.description = 'Gerenciamento de motoristas'
    #swagger.summary = 'Lista todos os motoristas (filtro opcional por cidade)'
    #swagger.parameters['cidade'] = { in: 'query', type: 'string', required: false }
    #swagger.security = [{ "bearerAuth": [] }]
  */
  driverController.pegarTodosDrivers
);

driversRouter.get(
  "/drivers/:id",
  /* 
    #swagger.tags = ['Motoristas']
    #swagger.description = 'Gerenciamento de motoristas'
    #swagger.summary = 'Busca motorista pelo ID'
    #swagger.parameters['id'] = { in: 'path', type: 'integer', required: true }
    #swagger.security = [{ "bearerAuth": [] }]
  */
  driverController.pegarDriverPorId
);

driversRouter.post(
  "/drivers",
  /* 
    #swagger.tags = ['Motoristas']
    #swagger.description = 'Gerenciamento de motoristas'
    #swagger.summary = 'Cria um novo motorista'
    #swagger.security = [{ "bearerAuth": [] }]
  */
  driverController.criarDriver
);

driversRouter.put(
  "/drivers/:id",
  /* 
    #swagger.tags = ['Motoristas']
    #swagger.description = 'Gerenciamento de motoristas'
    #swagger.summary = 'Atualiza um motorista pelo ID'
    #swagger.parameters['id'] = { in: 'path', type: 'integer', required: true }
    #swagger.security = [{ "bearerAuth": [] }]
  */
  driverController.atualizarDriver
);

driversRouter.delete(
  "/drivers/:id",
  /* 
    #swagger.tags = ['Motoristas']
    #swagger.description = 'Gerenciamento de motoristas'
    #swagger.summary = 'Deleta um motorista pelo ID'
    #swagger.parameters['id'] = { in: 'path', type: 'integer', required: true }
    #swagger.security = [{ "bearerAuth": [] }]
  */
  driverController.deletarDriver
);

driversRouter.put(
  "/drivers/:driverId/deliveries/start-route",
  /* 
    #swagger.tags = ['Motoristas']
    #swagger.description = 'Inicia rota de entregas'
    #swagger.summary = 'Atualiza status de entregas para EM_ROTA'
    #swagger.parameters['driverId'] = { in: 'path', type: 'integer', required: true }
    #swagger.security = [{ "bearerAuth": [] }]
  */
  deliveryController.iniciarRota
);

driversRouter.get(
  "/drivers/:driverId/dashboard",
  /* 
    #swagger.tags = ['Motoristas']
    #swagger.description = 'Dashboard do motorista'
    #swagger.summary = 'Retorna resumo das atividades do motorista'
    #swagger.parameters['driverId'] = { in: 'path', type: 'integer', required: true }
    #swagger.security = [{ "bearerAuth": [] }]
  */
  deliveryController.dashboardMotorista
);

