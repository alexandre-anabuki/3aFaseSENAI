import { Router } from "express"
import { movimentacaoController } from "../controller/Movimentacao/MovimentacaoController.js"



const movimentacaoRouter = Router()

movimentacaoRouter.get('/movimentacoes', movimentacaoController.getTodosMovimentos)

movimentacaoRouter.get('/movimentacoes/:item', movimentacaoController.getPorItem)

movimentacaoRouter.post('/movimentacoes', movimentacaoController.criarMovimento)

movimentacaoRouter.put('/movimentacoes/:id', movimentacaoController.atualizarMovimento)

movimentacaoRouter.delete('/movimentacoes/:id', movimentacaoController.deletarMovimento)

export default movimentacaoRouter