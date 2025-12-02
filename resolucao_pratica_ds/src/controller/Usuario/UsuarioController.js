// Path: src/controller/Usuario/UsuarioController.js

import { prismaClient } from "../../../prisma/prisma.js";

// GET /usuarios
export async function getTodosOsUsuarios(req, res) {
  try {
    const usuarios = await prismaClient.usuario.findMany();
    return res.json(usuarios);
  } catch (e) {
    console.error("Erro em getTodosOsUsuarios:", e);
    return res.status(500).json({ error: "Erro ao buscar usuários" });
  }
}

// GET /usuarios/:id
export async function getUsuarioPorId(req, res) {
  try {
    const usuario = await prismaClient.usuario.findUnique({
      where: { id: Number(req.params.id) },
    });
    if (!usuario) return res.status(404).send("Usuário não existe!");
    return res.json(usuario);
  } catch (e) {
    console.error(" Erro em getUsuarioPorId:", e);
    return res.status(500).json({ error: "Erro ao buscar usuário" });
  }
}

// GET /usuarios/:email
export async function getUsuarioPorEmail(req, res) {
  try {
    const email = String(req.query.email);
    const usuario = await prismaClient.usuario.findUnique({
      where: { email },
    });
    if (!usuario) return res.status(404).send("Usuário não existe!");
    return res.json(usuario);
  } catch (e) {
    console.error(" Erro em getUsuarioPorEmail:", e);
    return res.status(500).json({ error: "Erro ao buscar usuário" });
  }
}

// POST /usuarios
export async function criarUsuario(req, res) {
  try {
    console.log("📥 Requisição recebida em /usuarios:", req.body);

    const usuario = await prismaClient.usuario.create({
      data: {
        nome: req.body.nome,
        cargo: req.body.cargo,
        email: req.body.email,
        senha: req.body.senha,
      },
    });

    console.log(" Usuário criado:", usuario);
    return res.status(201).json(usuario);
  } catch (error) {
    console.error("Erro ao criar usuário:", error);

    if (error.code === "P2002") {
      return res
        .status(400)
        .send("Falha ao cadastrar usuário: Email já cadastrado!");
    }

    return res.status(500).send("Erro inesperado no servidor");
  }
}

// PUT /usuarios/:id
export async function atualizarUsuario(req, res) {
  try {
    const { body, params } = req;

    const usuarioAtualizado = await prismaClient.usuario.update({
      where: { id: Number(params.id) },
      data: { ...body },
    });

    return res.status(200).json({
      message: "Usuário atualizado!",
      data: usuarioAtualizado,
    });
  } catch (error) {
    console.error(" Erro ao atualizar usuário:", error);

    if (error.code == "P2025") {
      return res.status(404).send("Usuário não existe no banco");
    }
    if (error.code === "P2002") {
      return res
        .status(400)
        .send("Falha ao cadastrar usuário: Email já cadastrado!");
    }

    return res.status(500).send("Erro inesperado no servidor");
  }
}

// DELETE /usuarios/:id
export async function deletarUsuario(req, res) {
  try {
    const usuarioDeletado = await prismaClient.usuario.delete({
      where: { id: Number(req.params.id) },
    });
    return res.status(200).json({
      message: "Usuário deletado!",
      data: usuarioDeletado,
    });
  } catch (error) {
    console.error(" Erro ao deletar usuário:", error);

    if (error.code == "P2025") {
      return res.status(404).send("Usuário não existe no banco");
    }

    return res.status(500).send("Erro inesperado no servidor");
  }
}
