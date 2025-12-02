import { prismaClient } from "../../prisma/prisma";

test('Testar a busca por e-mail', async () => {
    const email = String("ana@example.com");
    const usuario = await prismaClient.usuario.findUnique({
        where: { email },
    });
    const usuarioSolicitado = {
        "id": 3,
        "nome": "Thiago Atualizado",
        "email": "ana@example.com",
        "senha": "teste123",
        "cargo": "medico"
    }
    expect(usuario).toEqual(usuarioSolicitado);
});