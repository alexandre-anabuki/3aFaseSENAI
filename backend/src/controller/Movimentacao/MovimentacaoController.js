//import { prismaClient } from "../../../prisma/prismaClient.js";
import { prismaClient } from "../../../prisma/prisma.js";

class MovimentacaoController{
    constructor() {}

    async getTodosMovimentos(req, res) {
        try {
          const movimentacoes = await prismaClient.movimentacao.findMany();
          return res.json(movimentacoes);
        } catch (e) {
          console.error("Erro em getTodosOsmovimentacaos:", e);
          return res.status(500).json({ error: "Erro ao buscar movimento" });
        }
    }
    
    async getPorItem(req, res) {
        try {
          const item = req.params.item;

          const movimentacoes = await prismaClient.movimentacao.findMany({
          where: { item }
        });

    return res.status(200).json(movimentacoes);

      } catch (e) {
        console.error("Erro em getPorItem:", e);
        return res.status(500).json({ error: "Erro ao buscar movimentações" });
      }
    }


    // async getPorId(req, res) {
    //     try {
    //       const movimentacao = await prismaClient.movimentacao.findUnique({
    //         where: { id: Number(req.params.id) },
    //       });
    //       if (!movimentacao) return res.status(404).send("movimento não existe!");
    //       return res.json(movimentacao);
    //     } catch (e) {
    //       console.error(" Erro em getmovimentacaoPorId:", e);
    //       return res.status(500).json({ error: "Erro ao buscar Movimento" });
    //     }
    // }
    
    async criarMovimento(req, res) {
        try {
          //console.log("Requisição recebida em /movimentacaos:", req.body);
      
          const movimentacao = await prismaClient.movimentacao.create({
            data: {
              data_movimento: req.body.data_movimento,
              tipo_movimento: req.body.tipo_movimento,
              nome_cliente: req.body.nome_cliente,
              item: req.body.item,
              quantidade: req.body.quantidade,
              custo_total: req.body.custo_total,
              inventario_id: req.body.inventario_id,
              usuario_id: req.body.usuario_id,
            },
          });
          return res.status(201).json(movimentacao);
        } catch (error) {
          console.error("Erro ao criar movimento:", error);
      
          if (error.code === "P2002") {
            return res
              .status(400)
              .send("Falha ao cadastrar usuário: Email já cadastrado!");
          }
      
          return res.status(500).send("Erro inesperado no servidor");
        }
    }
    
    async atualizarMovimento(req, res) {
        try {
          const { body, params } = req;
      
          const movimentacaoAtualizado = await prismaClient.movimentacao.update({
            where: { id: Number(params.id) },
            data: { ...body },
          });
      
          return res.status(200).json({
            message: "Movimento atualizado!",
            data: movimentacaoAtualizado,
          });
        } catch (error) {
          console.error(" Erro ao atualizar movimento:", error);
      
          if (error.code == "P2025") {
            return res.status(404).send("Movimento não existe no banco");
          }
          if (error.code === "P2002") {
            return res
              .status(400)
              .send("Falha ao cadastrar usuário: Email já cadastrado!");
          }
      
          return res.status(500).send("Erro inesperado no servidor");
        }
    }
    
    async deletarMovimento(req, res) {
        try {
          const movimentacaoDeletado = await prismaClient.movimentacao.delete({
            where: { id: Number(req.params.id) },
          });
          return res.status(200).json({
            message: "Movimento deletado!",
            data: movimentacaoDeletado,
          });
        } catch (error) {
          console.error(" Erro ao deletar movimento:", error);
      
          if (error.code == "P2025") {
            return res.status(404).send("movimento não existe no banco");
          }
      
          return res.status(500).send("Erro inesperado no servidor");
        }
    }
}

export const movimentacaoController = new MovimentacaoController()