import { prismaClient } from "../../../prisma/prisma.js";

class InventarioController {
  constructor() {}

  // ============================
  //  GET – Buscar todos itens
  // ============================
  async getTodosItens(req, res) {
    try {
      const itens = await prismaClient.inventario.findMany({
        include: { movimentacao: true }
      });

      return res.json(itens);
    } catch (e) {
      console.error("Erro em getTodosItens:", e);
      return res.status(500).json({ error: "Erro ao buscar itens do inventário" });
    }
  }

  // ============================
  //  GET – Buscar por ID
  // ============================
  async getPorId(req, res) {
    try {
      const item = await prismaClient.inventario.findUnique({
        where: { id: Number(req.params.id) },
        include: { movimentacao: true }
      });

      if (!item) return res.status(404).send("Item não existe!");

      return res.json(item);
    } catch (e) {
      console.error("Erro em getItemPorId:", e);
      return res.status(500).json({ error: "Erro ao buscar item" });
    }
  }

  // ============================
  //  POST – Criar item novo
  // ============================
  async criarItem(req, res) {
    try {
      const {
        nome_item,
        estoque,
        patrimonio,
        preco_unitario,
        preco_total
      } = req.body;

      const novoItem = await prismaClient.inventario.create({
        data: {
          nome_item,
          estoque,
          patrimonio,
          preco_unitario,
          preco_total
        }
      });

      return res.status(201).json(novoItem);
    } catch (error) {
      console.error("Erro ao criar item:", error);

      if (error.code === "P2002") {
        return res
          .status(400)
          .send("Falha ao cadastrar: item já existe!");
      }

      return res.status(500).send("Erro inesperado no servidor");
    }
  }

  // ============================
  //  PUT – Atualizar item
  // ============================
  async atualizarItem(req, res) {
    try {
      const { body, params } = req;

      const itemAtualizado = await prismaClient.inventario.update({
        where: { id: Number(params.id) },
        data: { ...body }
      });

      return res.status(200).json({
        message: "Item atualizado!",
        data: itemAtualizado,
      });
    } catch (error) {
      console.error("Erro ao atualizar item:", error);

      if (error.code == "P2025") {
        return res.status(404).send("Item não existe no banco");
      }

      return res.status(500).send("Erro inesperado no servidor");
    }
  }

  // ============================
  //  DELETE – Remover item
  // ============================
  async deletarItem(req, res) {
    try {
      const itemDeletado = await prismaClient.inventario.delete({
        where: { id: Number(req.params.id) },
      });

      return res.status(200).json({
        message: "Item deletado!",
        data: itemDeletado,
      });
    } catch (error) {
      console.error("Erro ao deletar item:", error);

      if (error.code == "P2025") {
        return res.status(404).send("Item não existe no banco");
      }

      return res.status(500).send("Erro inesperado no servidor");
    }
  }
}

export const inventarioController = new InventarioController();