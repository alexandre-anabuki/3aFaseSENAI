import { prismaClient } from "../../prisma/prisma";

test("Consulta ao banco retorna lista de usuários", async () => {
    const usuarios = await prismaClient.usuario.findMany();
    expect(Array.isArray(usuarios)).toBe(true);
});