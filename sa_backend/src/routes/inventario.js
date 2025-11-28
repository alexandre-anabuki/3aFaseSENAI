import { Router } from "express"
import { inventarioController } from "../controller/inventario/InventarioController.js"



const inventarioRouter = Router()

inventarioRouter.get('/itens', inventarioController.getTodosItens)

inventarioRouter.get('/itens/:id', inventarioController.getPorId)

inventarioRouter.post('/itens', inventarioController.criarItem)

inventarioRouter.put('/itens/:id', inventarioController.atualizarItem)

inventarioRouter.delete('/itens/:id', inventarioController.deletarItem)

export default inventarioRouter