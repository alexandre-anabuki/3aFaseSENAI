import { prismaClient } from "../../../prisma/prismaClient.js";


class UsuarioController{
    constructor() {}

    async getTodosUsuarios(req, res) {
        try {
          const usuarios = await prismaClient.usuario.findMany();
          return res.json(usuarios);
        } catch (e) {
          console.error("Erro em getTodosOsUsuarios:", e);
          return res.status(500).json({ error: "Erro ao buscar usuários" });
        }
    }
    
    async getPorEmail(req, res) {
        try {
          const email = String(req.query.email);
          const usuario = await prisma.usuario.findUnique({
            where: { email },
          });
          if (!usuario) return res.status(404).send("Usuário não existe!");
          return res.json(usuario);
        } catch (e) {
          console.error(" Erro em getUsuarioPorEmail:", e);
          return res.status(500).json({ error: "Erro ao buscar usuário" });
        }
    }
    
    async criarUsuario(req, res) {
        try {
          console.log("Requisição recebida em /usuarios:", req.body);
      
        //   const usuario = await prisma.usuario.create({
        //     data: {
        //       nome: req.body.nome,
        //       data_nascimento: req.body.data_nascimento,
        //       email: req.body.email,
        //       password: req.body.password,
        //       cpf: req.body.cpf,
        //       rg: req.body.rg,
        //       telefone: req.body.telefone,
        //     },
        //   });
        //   const endereco = await prisma.endereco.create({
        //     data: {
        //         cep: req.body.cep,
        //         cidade: req.body.cidade,
        //         estado: req.body.estado,
        //         rua: req.body.rua,
        //         numero: req.body.numero,
        //         complemento: req.body.complemento,
        //         bairro: req.body.bairro,
        //         referencia: req.body.referencia,
        //     },
        //   })
      
          console.log(" Usuário criado:", usuario);
          return res.status(201).json(usuario, endereco);
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
    
    async atualizarUsuario(req, res) {
        try {
          const { body, params } = req;
      
          const usuarioAtualizado = await prisma.usuario.update({
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
    
    async deletarUsuario(req, res) {
        try {
            const email = String(req.query.email)
          const usuarioDeletado = await prisma.usuario.delete({
            where: { email },
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
}

export const usuarioController = new UsuarioController()