
import bcrypt from "bcrypt";
import request from "supertest";
import { app } from "../../../src/app.js";
import { prismaClient } from "../../../prisma/prisma.js";

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
        nome: "testeMovimentacao",
        data_nascimento: "2020-10-10",
        email: "testeMovimentacao@email.com",
        password: hashedPassword,
        cpf: "214213",
        rg: "412354",
        telefone: "(21) 3213-4123",
        endereco: {
          cep: "12354-523",
          cidade: "Ourinhos",
          estado: "São Paulo",
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

    const item = await prismaClient.inventario.findFirst({
      where: {
        nome_item: "LED"
      }
    })

    const user = await prismaClient.usuario.findUnique({
      where: {
        email: "testeMovimentacao@email.com"
      }
    })


    await prismaClient.movimentacao.create({
        data: {
            //data_movimento: "2020-10-10",
            tipo_movimento: "entrada",
            nome_cliente: "Fulano",
            item: "LED",
            quantidade: 5,
            custo_total: "0,25",
            inventario_id: item.id,
            usuario_id: user.id
        }
    });

    const userResponse = await request(app).post("/auth/login").send({ email: "testeMovimentacao@email.com", password: "01234567" })


    token = userResponse.body.accessToken

  });

  test("GET: /movimentacoes", async () => {
    const res = await request(app).get("/movimentacoes").set("Authorization", `Bearer ${token}`)

    expect(res.status).toBe(200)
  })

  test("GET: /movimentacoes/:item", async () => {
    const move = await prismaClient.movimentacao.findFirst({
        where: {
            item: "LED"
        }
    })

    const res = await request(app).get(`/movimentacoes/${move.item}`).set("Authorization", `Bearer ${token}`).query({ "item": "LED" })

    expect(res.body.length).toBeGreaterThan(0)
  })

  test("POST: /movimentacoes", async () => {

    const item = await prismaClient.inventario.findFirst({
      where: {
        nome_item: "LED"
      }
    })

    const user = await prismaClient.usuario.findUnique({
      where: {
        email: "testeMovimentacao@email.com"
      }
    })

    const res = await request(app).post("/movimentacoes").set("Authorization", `Bearer ${token}`).send({
        //data_movimento: "2025-11-05",
        tipo_movimento: "saida",
        nome_cliente: "Ciclano",
        item: "LED",
        quantidade: 3,
        custo_total: "0,15",
        inventario_id: item.id,
        usuario_id: user.id
    })

    expect(res.status).toBe(201)
  })

  test("PUT: /movimentacoes/:id", async () => {

    const move = await prismaClient.movimentacao.findFirst({
      where: {
        item: "LED"
      }
    })


    const res = await request(app).put(`/movimentacoes/${move.id}`).send({
      quantidade: 30
    }).set("Authorization", `Bearer ${token}`)

    expect(res.body.data.quantidade).toBe(30)
  })

    test("DELETE: /movimentacoes/:id", async () => {

        const move = await prismaClient.movimentacao.findFirst({
            where: {
                nome_cliente: "Fulano"
            }
        })


      const res = await request(app).delete(`/movimentacoes/${move.id}`).set("Authorization", `Bearer ${token}`)

      expect(res.status).toBe(200)
    })





  afterAll(async () => {
    await clearDatabase();
    await prismaClient.$disconnect();
  });
});
