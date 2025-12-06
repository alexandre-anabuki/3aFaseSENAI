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


    const hashedPassword = await bcrypt.hash("01234567", 10);

    await prismaClient.usuario.create({
      data: {
        nome: "testeInventario",
        data_nascimento: "2020-10-10",
        email: "testeInventario@email.com",
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

    await prismaClient.inventario.create({
        data: {
          nome_item: "LED",
          estoque: 2,
          patrimonio: 21321312,
          preco_unitario: "0,05",
          preco_total: "0,10"
        }
    });

    const userResponse = await request(app).post("/auth/login").send({ email: "testeInventario@email.com", password: "01234567" })


    token = userResponse.body.accessToken

  });

  test("GET: /itens", async () => {
    const res = await request(app).get("/itens").set("Authorization", `Bearer ${token}`)

    expect(res.status).toBe(200)
  })

  test("GET: /itens/:id", async () => {
    const item = await prismaClient.inventario.findFirst({
        where: {
            nome_item: "LED"
        }
    })

    const res = await request(app).get(`/itens/${item.id}`).set("Authorization", `Bearer ${token}`).query({ "nome_item": "LED" })

    expect(res.body.nome_item).toBe("LED")
  })

  test("POST: /itens", async () => {
    const res = await request(app).post("/itens").set("Authorization", `Bearer ${token}`).send({
        nome_item: "pregos",
        estoque: 10,
        patrimonio: 321312,
        preco_unitario: "0,05",
        preco_total: "0,50"
    })

    expect(res.status).toBe(201)
  })

  test("PUT: /itens/:id", async () => {

    const item = await prismaClient.inventario.findFirst({
      where: {
        nome_item: "LED"
      }
    })


    const res = await request(app).put(`/itens/${item.id}`).send({
      estoque: 30
    }).set("Authorization", `Bearer ${token}`)

    expect(res.body.data.estoque).toBe(30)
  })

    test("DELETE: /itens/:id", async () => {

        const item = await prismaClient.inventario.findFirst({
            where: {
                nome_item: "LED"
            }
        })


      const res = await request(app).delete(`/itens/${item.id}`).set("Authorization", `Bearer ${token}`)

      expect(res.status).toBe(200)
    })





  afterAll(async () => {
    await clearDatabase();
    await prismaClient.$disconnect();
  });
});
