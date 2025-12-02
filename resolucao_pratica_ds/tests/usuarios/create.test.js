import { prismaClient } from "../../prisma/prisma";

test("Consulta ao banco retorna lista de usuários", async () => {
    const data = {
        nome: "Édio",
        cargo: "Médico",
        email: "edio.pereira@edu.senai.sc.br",
        senha: "teste123",
    }

    const usuario = await prismaClient.usuario.create({
        data: data,
    });
    expect(usuario).toMatchObject(usuario);
});