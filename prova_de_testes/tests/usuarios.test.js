// Path: tests/usuarios.test.js

import bcrypt from "bcrypt";
import request from "supertest";
import { app } from "../src/app";
import { prismaClient } from "../prisma/prisma";

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


    const hashedPassword = await bcrypt.hash("teste@123", 10);

    await prismaClient.usuario.create({
      data: {
        nome: "Édio",
        cargo: "Médico",
        email: "edio@teste.com",
        senha: hashedPassword,
      },
    });

    const userResponse = await request(app).post("/auth/login").send({
      email: "edio@teste.com",
      senha: "teste@123"
    }).expect("Content-Type", /json/)

    token = userResponse.body.accessToken
  });

  test("GET: /usuarios", async () => {
    const res = await request(app).get("/usuarios").set("Authorization", `Bearer ${token}`).expect("Content-Type", /json/)

    expect(res.status).toBe(200)
  })

  test("GET: /usuarios/byemail", async () => {
    const res = await request(app).get("/usuarios/byemail").set("Authorization", `Bearer ${token}`).query({ "email": "edio@teste.com" })

    expect(res.body.email).toBe("edio@teste.com")
  })

  test("POST: /auth/register", async () => {
    const res = await request(app).post("/auth/register").send({
      nome: "picapau",
      cargo: "médico",
      email: "picapau@teste.com",
      senha: "teste@123"
    })

    expect(res.status).toBe(201)
  })

  test("PUT: /usuarios/:id", async () => {

    const user = await prismaClient.usuario.findUnique({
      where: {
        email: "edio@teste.com"
      }
    })


    const res = await request(app).put(`/usuarios/${user.id}`).send({
      nome: "Mello"
    }).set("Authorization", `Bearer ${token}`)

    expect(res.body.data.nome).toBe("Mello")
  })

  test("DELETE: /usuarios/:id", async () => {

    const user = await prismaClient.usuario.findUnique({
      where: {
        email: "edio@teste.com"
      }
    })

    const res = await request(app).delete(`/usuarios/${user.id}`).set("Authorization", `Bearer ${token}`)

    expect(res.status).toBe(200)
  })





  afterAll(async () => {
    await clearDatabase();
    await prismaClient.$disconnect();
  });
});
