// Path: tests/usuarios.test.js

import bcrypt from "bcrypt";
import request from "supertest";
import { app } from "../../../../src/app.js";
import { prismaClient } from "../../../../prisma/prisma.js";

async function clearDatabase() {
  await prismaClient.movimentacao.deleteMany({});
  await prismaClient.inventario.deleteMany({});
  await prismaClient.token.deleteMany({});
  await prismaClient.usuario.deleteMany({});
}

describe("Testes de Integração para /usuarios", () => {
  let token;

  beforeEach(async () => {
    await clearDatabase();


    const hashedPassword = await bcrypt.hash("12345678", 10);

    await prismaClient.usuario.create({
      data: {
        nome: "testeUsuario",
        data_nascimento: "2020-10-10",
        email: "testeUsuario@email.com",
        password: hashedPassword,
        cpf: "214213",
        rg: "412354",
        telefone: "(21) 3213-4123",
        endereco: {
          cep: "12354-523",
          cidade: "Cmabé",
          estado: "Paraná",
          rua: "rua teste",
          numero: "123",
          complemento: "comp",
          bairro: "bairro teste",
          referencia: "ref",
        },
      },
    });

    await prismaClient.usuario.create({
      data: {
        nome: "testeUsuarioDelete",
        data_nascimento: "2020-10-10",
        email: "testeUsuarioDelete@email.com",
        password: "213214123",
        cpf: "214213",
        rg: "412354",
        telefone: "(21) 3213-4123",
        endereco: {
          cep: "12354-523",
          cidade: "Cmabé",
          estado: "Paraná",
          rua: "rua teste",
          numero: "123",
          complemento: "comp",
          bairro: "bairro teste",
          referencia: "ref",
        },
      },
    });

    const userResponse = await request(app).post("/auth/login").send({ email: "testeUsuario@email.com", password: "12345678" })
    console.log("userResponse", userResponse);


    token = userResponse.body.accessToken
    console.log("token", token);

  });

  test("GET: /usuarios", async () => {
    const res = await request(app).get("/usuarios").set("Authorization", `Bearer ${token}`)

    expect(res.status).toBe(200)
  })

  test("GET: /usuarios/byemail", async () => {
    const res = await request(app).get("/usuarios/byemail").set("Authorization", `Bearer ${token}`).query({ "email": "testeUsuario@email.com" })

    expect(res.body.email).toBe("testeUsuario@email.com")
  })

  test("POST: /auth/register", async () => {
    const res = await request(app).post("/auth/register").send({
      nome: "fulana",
      data_nascimento: "2022-05-12",
      email: "fulana@email.com",
      password: "87654321",
      cpf: "62346234",
      rg: "092302",
      telefone: "(60) 5555-5555",
      endereco: {
        cep: "12354-523",
        cidade: "Cambará",
        estado: "Paraná",
        rua: "rua fulana",
        numero: "321",
        complemento: "comp",
        bairro: "bairro fulana",
        referencia: "ref",
      }
    })

    expect(res.status).toBe(201)
  })

  test("PUT: /usuarios/:id", async () => {

    const user = await prismaClient.usuario.findUnique({
      where: {
        email: "testeUsuario@email.com"
      }
    })


    const res = await request(app).put(`/usuarios/${user.id}`).send({
      nome: "usuarioTeste"
    }).set("Authorization", `Bearer ${token}`)

    expect(res.body.data.nome).toBe("usuarioTeste")
  })

    test("DELETE: /usuarios/byemail", async () => {


      const res = await request(app).delete(`/usuarios/byemail`).set("Authorization", `Bearer ${token}`).query({ "email": "testeUsuarioDelete@email.com" })

      expect(res.status).toBe(200)
    })





  afterAll(async () => {
    await clearDatabase();
    await prismaClient.$disconnect();
  });
});
