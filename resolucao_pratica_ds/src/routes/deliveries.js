// Path: src/routes/deliveries.js

import { Router } from "express";
import { deliveryController } from "../controller/Delivery/DeliveryController.js";

export const deliveriesRouter = Router();

deliveriesRouter.get(
  "/deliveries",
  /* 
    #swagger.tags = ['Entregas']
    #swagger.description = 'Gerenciamento de entregas'
    #swagger.summary = 'Lista todas as entregas com paginação e ordenação'
    #swagger.parameters['page'] = { in: 'query', type: 'integer', required: false }
    #swagger.parameters['limit'] = { in: 'query', type: 'integer', required: false }
    #swagger.parameters['orderBy'] = { in: 'query', type: 'string', required: false }
    #swagger.parameters['order'] = { in: 'query', type: 'string', enum: ['asc', 'desc'], required: false }
    #swagger.security = [{ "bearerAuth": [] }]
  */
  deliveryController.pegarTodasDeliveries
);

deliveriesRouter.get(
  "/deliveries/:id",
  /* 
    #swagger.tags = ['Entregas']
    #swagger.description = 'Gerenciamento de entregas'
    #swagger.summary = 'Busca entrega pelo ID'
    #swagger.parameters['id'] = { in: 'path', type: 'integer', required: true }
    #swagger.security = [{ "bearerAuth": [] }]
  */
  deliveryController.pegarDeliveryPorId
);

deliveriesRouter.post(
  "/deliveries",
  /* 
    #swagger.tags = ['Entregas']
    #swagger.description = 'Gerenciamento de entregas'
    #swagger.summary = 'Cria uma nova entrega (com validações de negócio)'
    #swagger.security = [{ "bearerAuth": [] }]
  */
  deliveryController.criarDelivery
);

deliveriesRouter.put(
  "/deliveries/:id",
  /* 
    #swagger.tags = ['Entregas']
    #swagger.description = 'Gerenciamento de entregas'
    #swagger.summary = 'Atualiza uma entrega pelo ID'
    #swagger.parameters['id'] = { in: 'path', type: 'integer', required: true }
    #swagger.security = [{ "bearerAuth": [] }]
  */
  deliveryController.atualizarDelivery
);

deliveriesRouter.delete(
  "/deliveries/:id",
  /* 
    #swagger.tags = ['Entregas']
    #swagger.description = 'Gerenciamento de entregas'
    #swagger.summary = 'Deleta uma entrega pelo ID'
    #swagger.parameters['id'] = { in: 'path', type: 'integer', required: true }
    #swagger.security = [{ "bearerAuth": [] }]
  */
  deliveryController.deletarDelivery
);

