// Path: src/routes/vehicles.js

import { Router } from "express";
import { vehicleController } from "../controller/Vehicle/VehicleController.js";

export const vehiclesRouter = Router();

vehiclesRouter.get(
  "/vehicles",
  /* 
    #swagger.tags = ['Veículos']
    #swagger.description = 'Gerenciamento de veículos'
    #swagger.summary = 'Lista todos os veículos'
    #swagger.security = [{ "bearerAuth": [] }]
  */
  vehicleController.pegarTodosVehicles
);

vehiclesRouter.get(
  "/vehicles/:id",
  /* 
    #swagger.tags = ['Veículos']
    #swagger.description = 'Gerenciamento de veículos'
    #swagger.summary = 'Busca veículo pelo ID'
    #swagger.parameters['id'] = { in: 'path', type: 'integer', required: true }
    #swagger.security = [{ "bearerAuth": [] }]
  */
  vehicleController.pegarVehiclePorId
);

vehiclesRouter.post(
  "/vehicles",
  /* 
    #swagger.tags = ['Veículos']
    #swagger.description = 'Gerenciamento de veículos'
    #swagger.summary = 'Cria um novo veículo'
    #swagger.security = [{ "bearerAuth": [] }]
  */
  vehicleController.criarVehicle
);

vehiclesRouter.put(
  "/vehicles/:id",
  /* 
    #swagger.tags = ['Veículos']
    #swagger.description = 'Gerenciamento de veículos'
    #swagger.summary = 'Atualiza um veículo pelo ID'
    #swagger.parameters['id'] = { in: 'path', type: 'integer', required: true }
    #swagger.security = [{ "bearerAuth": [] }]
  */
  vehicleController.atualizarVehicle
);

vehiclesRouter.delete(
  "/vehicles/:id",
  /* 
    #swagger.tags = ['Veículos']
    #swagger.description = 'Gerenciamento de veículos'
    #swagger.summary = 'Deleta um veículo pelo ID'
    #swagger.parameters['id'] = { in: 'path', type: 'integer', required: true }
    #swagger.security = [{ "bearerAuth": [] }]
  */
  vehicleController.deletarVehicle
);

