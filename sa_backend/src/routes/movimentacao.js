import { Router } from "express"
import { movimentacaoController } from "../controller/movimentacao/MovimentacaoController.js"



const movimentacaoRouter = Router()

movimentacaoRouter.get('/movimentacoes', movimentacaoController.getTodosMovimentos)

movimentacaoRouter.get('/moviementacoes/:id', movimentacaoController.getPorId)

movimentacaoRouter.post('/moviementacoes', movimentacaoController.criarMovimento)

movimentacaoRouter.put('/moviementacoes/:id', movimentacaoController.atualizarMovimento)

movimentacaoRouter.delete('/moviementacoes/:id', movimentacaoController.deletarMovimento)

export default movimentacaoRouter