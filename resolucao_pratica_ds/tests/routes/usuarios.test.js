// Path: tests/routes/usuarios.test.js

import bcrypt from "bcrypt";
import request from "supertest";
import { app } from "../../src/app";
import { prismaClient } from "../../prisma/prisma";

async function clearDatabase() {
  await prismaClient.prontuario.deleteMany({});
  await prismaClient.consulta.deleteMany({});
  await prismaClient.exame.deleteMany({});
  await prismaClient.paciente.deleteMany({});
  await prismaClient.token.deleteMany({});
  await prismaClient.usuario.deleteMany({});
}

describe("Testes de Integração para /usuarios", () => {
  let token;

  beforeEach(async () => {
    await clearDatabase();

    const hashedPassword = await bcrypt.hash("123", 10);

    await prismaClient.usuario.create({
      data: {
        nome: "Usuario de Teste Integrado",
        email: "integrado@teste.com",
        senha: hashedPassword,
        cargo: "medico",
      },
    });

    const userResponse = await request(app)
      .post("/auth/login")
      .send({ email: "integrado@teste.com", senha: "123" })
      .expect(200);

    token = userResponse.body.accessToken;
  });

  afterAll(async () => {
    await clearDatabase();
    await prismaClient.$disconnect();
  });

  test("GET /usuarios - Deve retornar a lista de usuários do banco", async () => {
    const response = await request(app)
      .get("/usuarios")
      .set("Authorization", `Bearer ${token}`)
      .expect("Content-Type", /json/);

    expect(response.status).toBe(200);
    expect(Array.isArray(response.body)).toBe(true);
    expect(response.body.length).toBe(1);
    expect(response.body[0].nome).toBe("Usuario de Teste Integrado");
    expect(response.body[0].email).toBe("integrado@teste.com");
  });

  test("GET /usuarios - Deve retornar um array vazio se não houver usuários", async () => {
    await clearDatabase();

    const response = await request(app)
      .get("/usuarios")
      .set("Authorization", `Bearer ${token}`);

    expect(response.status).toBe(200);
    expect(response.body).toEqual([]);
  });
});
