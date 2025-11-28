import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient();

async function main() {
  // await prisma.usuario.createMany({
  //   data: [
  //     { nome:"Joao", 
  //       email: "joao34@email.com", 
  //       senha: "123",
  //       cargo: "Médico"
  //     },
  //   ],
  // });

  await prisma.exame.createMany({
    data: [{

    }]
  })


  // await prisma.paciente.create({
  //   data: {
  //     nome: "João",
  //     sexo: "Masculino",
  //     data_nascimento: new Date("1980-12-11"),
  //     cpf: "958.521.251.65",
  //     telefone: 952556232,
  //     email: "joao@email.com",
  //     // Consulta: {
  //     //   create: [
  //     //     {
  //     //       motivo: "Dor nas costas",
  //     //       data_consulta: new Date("2023-08-25"),
  //     //       observacoes: "Ibuprofeno 3 vezes ao dia",
  //     //       medico_responsavel_id: 
  //     //     }
  //     //   ]
  //     // },
  //     // Exame: {
  //     //   create: [
  //     //     {
  //     //       tipo: "Densiometro",
  //     //       data_exame: new Date("2023-08-25"),
  //     //       resultado: "deu ruim",
  //     //       link_arquivo: "url.com.br/exame.pdf",
  //     //       observacoes: ""
  //     //     }
  //     //   ]
  //     // }
  //   },
  // });


  // await prisma.consulta.createMany({
  //   data: [
  //     {
  //       motivo: "Dor nas costas",
  //       data_consulta: new Date("2023-08-25"),
  //       observacoes: "Ibuprofeno 3 vezes ao dia",
  //       medico_responsavel_id: 1,
  //       paciente_id: 1
  //     },
  //     {
  //       motivo: "Dor nas costas",
  //       data_consulta: new Date("2023-08-25"),
  //       observacoes: "Ibuprofeno 3 vezes ao dia",
  //       medico_responsavel_id: 1,
  //       paciente_id: 1
  //     }, {
  //       motivo: "Dor nas costas",
  //       data_consulta: new Date("2023-08-25"),
  //       observacoes: "Ibuprofeno 3 vezes ao dia",
  //       medico_responsavel_id: 1,
  //       paciente_id: 1
  //     }, {
  //       motivo: "Dor nas costas",
  //       data_consulta: new Date("2023-08-25"),
  //       observacoes: "Ibuprofeno 3 vezes ao dia",
  //       medico_responsavel_id: 1,
  //       paciente_id: 1
  //     }, {
  //       motivo: "Dor nas costas",
  //       data_consulta: new Date("2023-08-25"),
  //       observacoes: "Ibuprofeno 3 vezes ao dia",
  //       medico_responsavel_id: 1,
  //       paciente_id: 1
  //     }, {
  //       motivo: "Dor nas costas",
  //       data_consulta: new Date("2023-08-25"),
  //       observacoes: "Ibuprofeno 3 vezes ao dia",
  //       medico_responsavel_id: 1,
  //       paciente_id: 1
  //     }, {
  //       motivo: "Dor nas costas",
  //       data_consulta: new Date("2023-08-25"),
  //       observacoes: "Ibuprofeno 3 vezes ao dia",
  //       medico_responsavel_id: 1,
  //       paciente_id: 1
  //     }, {
  //       motivo: "Dor nas costas",
  //       data_consulta: new Date("2023-08-25"),
  //       observacoes: "Ibuprofeno 3 vezes ao dia",
  //       medico_responsavel_id: 1,
  //       paciente_id: 1
  //     }, {
  //       motivo: "Dor nas costas",
  //       data_consulta: new Date("2023-08-25"),
  //       observacoes: "Ibuprofeno 3 vezes ao dia",
  //       medico_responsavel_id: 1,
  //       paciente_id: 1
  //     }, {
  //       motivo: "Dor nas costas",
  //       data_consulta: new Date("2023-08-25"),
  //       observacoes: "Ibuprofeno 3 vezes ao dia",
  //       medico_responsavel_id: 1,
  //       paciente_id: 1
  //     }, {
  //       motivo: "Dor nas costas",
  //       data_consulta: new Date("2023-08-25"),
  //       observacoes: "Ibuprofeno 3 vezes ao dia",
  //       medico_responsavel_id: 1,
  //       paciente_id: 1
  //     }, {
  //       motivo: "Dor nas costas",
  //       data_consulta: new Date("2023-08-25"),
  //       observacoes: "Ibuprofeno 3 vezes ao dia",
  //       medico_responsavel_id: 1,
  //       paciente_id: 1
  //     }, {
  //       motivo: "Dor nas costas",
  //       data_consulta: new Date("2023-08-25"),
  //       observacoes: "Ibuprofeno 3 vezes ao dia",
  //       medico_responsavel_id: 1,
  //       paciente_id: 1
  //     }, {
  //       motivo: "Dor nas costas",
  //       data_consulta: new Date("2023-08-25"),
  //       observacoes: "Ibuprofeno 3 vezes ao dia",
  //       medico_responsavel_id: 1,
  //       paciente_id: 1
  //     }, {
  //       motivo: "Dor nas costas",
  //       data_consulta: new Date("2023-08-25"),
  //       observacoes: "Ibuprofeno 3 vezes ao dia",
  //       medico_responsavel_id: 1,
  //       paciente_id: 1
  //     }, {
  //       motivo: "Dor nas costas",
  //       data_consulta: new Date("2023-08-25"),
  //       observacoes: "Ibuprofeno 3 vezes ao dia",
  //       medico_responsavel_id: 1,
  //       paciente_id: 1
  //     }, {
  //       motivo: "Dor nas costas",
  //       data_consulta: new Date("2023-08-25"),
  //       observacoes: "Ibuprofeno 3 vezes ao dia",
  //       medico_responsavel_id: 1,
  //       paciente_id: 1
  //     }, {
  //       motivo: "Dor nas costas",
  //       data_consulta: new Date("2023-08-25"),
  //       observacoes: "Ibuprofeno 3 vezes ao dia",
  //       medico_responsavel_id: 1,
  //       paciente_id: 1
  //     }, {
  //       motivo: "Dor nas costas",
  //       data_consulta: new Date("2023-08-25"),
  //       observacoes: "Ibuprofeno 3 vezes ao dia",
  //       medico_responsavel_id: 1,
  //       paciente_id: 1
  //     }, {
  //       motivo: "Dor nas costas",
  //       data_consulta: new Date("2023-08-25"),
  //       observacoes: "Ibuprofeno 3 vezes ao dia",
  //       medico_responsavel_id: 1,
  //       paciente_id: 1
  //     }, {
  //       motivo: "Dor nas costas",
  //       data_consulta: new Date("2023-08-25"),
  //       observacoes: "Ibuprofeno 3 vezes ao dia",
  //       medico_responsavel_id: 1,
  //       paciente_id: 1
  //     }, {
  //       motivo: "Dor nas costas",
  //       data_consulta: new Date("2023-08-25"),
  //       observacoes: "Ibuprofeno 3 vezes ao dia",
  //       medico_responsavel_id: 1,
  //       paciente_id: 1
  //     }, {
  //       motivo: "Dor nas costas",
  //       data_consulta: new Date("2023-08-25"),
  //       observacoes: "Ibuprofeno 3 vezes ao dia",
  //       medico_responsavel_id: 1,
  //       paciente_id: 1
  //     }, {
  //       motivo: "Dor nas costas",
  //       data_consulta: new Date("2023-08-25"),
  //       observacoes: "Ibuprofeno 3 vezes ao dia",
  //       medico_responsavel_id: 1,
  //       paciente_id: 1
  //     }, {
  //       motivo: "Dor nas costas",
  //       data_consulta: new Date("2023-08-25"),
  //       observacoes: "Ibuprofeno 3 vezes ao dia",
  //       medico_responsavel_id: 1,
  //       paciente_id: 1
  //     }, {
  //       motivo: "Dor nas costas",
  //       data_consulta: new Date("2023-08-25"),
  //       observacoes: "Ibuprofeno 3 vezes ao dia",
  //       medico_responsavel_id: 1,
  //       paciente_id: 1
  //     }, {
  //       motivo: "Dor nas costas",
  //       data_consulta: new Date("2023-08-25"),
  //       observacoes: "Ibuprofeno 3 vezes ao dia",
  //       medico_responsavel_id: 1,
  //       paciente_id: 1
  //     }, {
  //       motivo: "Dor nas costas",
  //       data_consulta: new Date("2023-08-25"),
  //       observacoes: "Ibuprofeno 3 vezes ao dia",
  //       medico_responsavel_id: 1,
  //       paciente_id: 1
  //     }, {
  //       motivo: "Dor nas costas",
  //       data_consulta: new Date("2023-08-25"),
  //       observacoes: "Ibuprofeno 3 vezes ao dia",
  //       medico_responsavel_id: 1,
  //       paciente_id: 1
  //     }, {
  //       motivo: "Dor nas costas",
  //       data_consulta: new Date("2023-08-25"),
  //       observacoes: "Ibuprofeno 3 vezes ao dia",
  //       medico_responsavel_id: 1,
  //       paciente_id: 1
  //     }, {
  //       motivo: "Dor nas costas",
  //       data_consulta: new Date("2023-08-25"),
  //       observacoes: "Ibuprofeno 3 vezes ao dia",
  //       medico_responsavel_id: 1,
  //       paciente_id: 1
  //     }, {
  //       motivo: "Dor nas costas",
  //       data_consulta: new Date("2023-08-25"),
  //       observacoes: "Ibuprofeno 3 vezes ao dia",
  //       medico_responsavel_id: 1,
  //       paciente_id: 1
  //     }, {
  //       motivo: "Dor nas costas",
  //       data_consulta: new Date("2023-08-25"),
  //       observacoes: "Ibuprofeno 3 vezes ao dia",
  //       medico_responsavel_id: 1,
  //       paciente_id: 1
  //     }, {
  //       motivo: "Dor nas costas",
  //       data_consulta: new Date("2023-08-25"),
  //       observacoes: "Ibuprofeno 3 vezes ao dia",
  //       medico_responsavel_id: 1,
  //       paciente_id: 1
  //     }, {
  //       motivo: "Dor nas costas",
  //       data_consulta: new Date("2023-08-25"),
  //       observacoes: "Ibuprofeno 3 vezes ao dia",
  //       medico_responsavel_id: 1,
  //       paciente_id: 1
  //     }, {
  //       motivo: "Dor nas costas",
  //       data_consulta: new Date("2023-08-25"),
  //       observacoes: "Ibuprofeno 3 vezes ao dia",
  //       medico_responsavel_id: 1,
  //       paciente_id: 1
  //     }, {
  //       motivo: "Dor nas costas",
  //       data_consulta: new Date("2023-08-25"),
  //       observacoes: "Ibuprofeno 3 vezes ao dia",
  //       medico_responsavel_id: 1,
  //       paciente_id: 1
  //     }, {
  //       motivo: "Dor nas costas",
  //       data_consulta: new Date("2023-08-25"),
  //       observacoes: "Ibuprofeno 3 vezes ao dia",
  //       medico_responsavel_id: 1,
  //       paciente_id: 1
  //     }, {
  //       motivo: "Dor nas costas",
  //       data_consulta: new Date("2023-08-25"),
  //       observacoes: "Ibuprofeno 3 vezes ao dia",
  //       medico_responsavel_id: 1,
  //       paciente_id: 1
  //     }, {
  //       motivo: "Dor nas costas",
  //       data_consulta: new Date("2023-08-25"),
  //       observacoes: "Ibuprofeno 3 vezes ao dia",
  //       medico_responsavel_id: 1,
  //       paciente_id: 1
  //     }, {
  //       motivo: "Dor nas costas",
  //       data_consulta: new Date("2023-08-25"),
  //       observacoes: "Ibuprofeno 3 vezes ao dia",
  //       medico_responsavel_id: 1,
  //       paciente_id: 1
  //     }, {
  //       motivo: "Dor nas costas",
  //       data_consulta: new Date("2023-08-25"),
  //       observacoes: "Ibuprofeno 3 vezes ao dia",
  //       medico_responsavel_id: 1,
  //       paciente_id: 1
  //     }, {
  //       motivo: "Dor nas costas",
  //       data_consulta: new Date("2023-08-25"),
  //       observacoes: "Ibuprofeno 3 vezes ao dia",
  //       medico_responsavel_id: 1,
  //       paciente_id: 1
  //     }, {
  //       motivo: "Dor nas costas",
  //       data_consulta: new Date("2023-08-25"),
  //       observacoes: "Ibuprofeno 3 vezes ao dia",
  //       medico_responsavel_id: 1,
  //       paciente_id: 1
  //     }, {
  //       motivo: "Dor nas costas",
  //       data_consulta: new Date("2023-08-25"),
  //       observacoes: "Ibuprofeno 3 vezes ao dia",
  //       medico_responsavel_id: 1,
  //       paciente_id: 1
  //     }, {
  //       motivo: "Dor nas costas",
  //       data_consulta: new Date("2023-08-25"),
  //       observacoes: "Ibuprofeno 3 vezes ao dia",
  //       medico_responsavel_id: 1,
  //       paciente_id: 1
  //     }, {
  //       motivo: "Dor nas costas",
  //       data_consulta: new Date("2023-08-25"),
  //       observacoes: "Ibuprofeno 3 vezes ao dia",
  //       medico_responsavel_id: 1,
  //       paciente_id: 1
  //     }, {
  //       motivo: "Dor nas costas",
  //       data_consulta: new Date("2023-08-25"),
  //       observacoes: "Ibuprofeno 3 vezes ao dia",
  //       medico_responsavel_id: 1,
  //       paciente_id: 1
  //     }, {
  //       motivo: "Dor nas costas",
  //       data_consulta: new Date("2023-08-25"),
  //       observacoes: "Ibuprofeno 3 vezes ao dia",
  //       medico_responsavel_id: 1,
  //       paciente_id: 1
  //     }, {
  //       motivo: "Dor nas costas",
  //       data_consulta: new Date("2023-08-25"),
  //       observacoes: "Ibuprofeno 3 vezes ao dia",
  //       medico_responsavel_id: 1,
  //       paciente_id: 1
  //     }, {
  //       motivo: "Dor nas costas",
  //       data_consulta: new Date("2023-08-25"),
  //       observacoes: "Ibuprofeno 3 vezes ao dia",
  //       medico_responsavel_id: 1,
  //       paciente_id: 1
  //     }, {
  //       motivo: "Dor nas costas",
  //       data_consulta: new Date("2023-08-25"),
  //       observacoes: "Ibuprofeno 3 vezes ao dia",
  //       medico_responsavel_id: 1,
  //       paciente_id: 1
  //     }, {
  //       motivo: "Dor nas costas",
  //       data_consulta: new Date("2023-08-25"),
  //       observacoes: "Ibuprofeno 3 vezes ao dia",
  //       medico_responsavel_id: 1,
  //       paciente_id: 1
  //     }, {
  //       motivo: "Dor nas costas",
  //       data_consulta: new Date("2023-08-25"),
  //       observacoes: "Ibuprofeno 3 vezes ao dia",
  //       medico_responsavel_id: 1,
  //       paciente_id: 1
  //     }, {
  //       motivo: "Dor nas costas",
  //       data_consulta: new Date("2023-08-25"),
  //       observacoes: "Ibuprofeno 3 vezes ao dia",
  //       medico_responsavel_id: 1,
  //       paciente_id: 1
  //     }, {
  //       motivo: "Dor nas costas",
  //       data_consulta: new Date("2023-08-25"),
  //       observacoes: "Ibuprofeno 3 vezes ao dia",
  //       medico_responsavel_id: 1,
  //       paciente_id: 1
  //     }, {
  //       motivo: "Dor nas costas",
  //       data_consulta: new Date("2023-08-25"),
  //       observacoes: "Ibuprofeno 3 vezes ao dia",
  //       medico_responsavel_id: 1,
  //       paciente_id: 1
  //     }, {
  //       motivo: "Dor nas costas",
  //       data_consulta: new Date("2023-08-25"),
  //       observacoes: "Ibuprofeno 3 vezes ao dia",
  //       medico_responsavel_id: 1,
  //       paciente_id: 1
  //     }, {
  //       motivo: "Dor nas costas",
  //       data_consulta: new Date("2023-08-25"),
  //       observacoes: "Ibuprofeno 3 vezes ao dia",
  //       medico_responsavel_id: 1,
  //       paciente_id: 1
  //     }, {
  //       motivo: "Dor nas costas",
  //       data_consulta: new Date("2023-08-25"),
  //       observacoes: "Ibuprofeno 3 vezes ao dia",
  //       medico_responsavel_id: 1,
  //       paciente_id: 1
  //     }, {
  //       motivo: "Dor nas costas",
  //       data_consulta: new Date("2023-08-25"),
  //       observacoes: "Ibuprofeno 3 vezes ao dia",
  //       medico_responsavel_id: 1,
  //       paciente_id: 1
  //     }, {
  //       motivo: "Dor nas costas",
  //       data_consulta: new Date("2023-08-25"),
  //       observacoes: "Ibuprofeno 3 vezes ao dia",
  //       medico_responsavel_id: 1,
  //       paciente_id: 1
  //     }, {
  //       motivo: "Dor nas costas",
  //       data_consulta: new Date("2023-08-25"),
  //       observacoes: "Ibuprofeno 3 vezes ao dia",
  //       medico_responsavel_id: 1,
  //       paciente_id: 1
  //     }, {
  //       motivo: "Dor nas costas",
  //       data_consulta: new Date("2023-08-25"),
  //       observacoes: "Ibuprofeno 3 vezes ao dia",
  //       medico_responsavel_id: 1,
  //       paciente_id: 1
  //     }, {
  //       motivo: "Dor nas costas",
  //       data_consulta: new Date("2023-08-25"),
  //       observacoes: "Ibuprofeno 3 vezes ao dia",
  //       medico_responsavel_id: 1,
  //       paciente_id: 1
  //     }, {
  //       motivo: "Dor nas costas",
  //       data_consulta: new Date("2023-08-25"),
  //       observacoes: "Ibuprofeno 3 vezes ao dia",
  //       medico_responsavel_id: 1,
  //       paciente_id: 1
  //     }, {
  //       motivo: "Dor nas costas",
  //       data_consulta: new Date("2023-08-25"),
  //       observacoes: "Ibuprofeno 3 vezes ao dia",
  //       medico_responsavel_id: 1,
  //       paciente_id: 1
  //     }, {
  //       motivo: "Dor nas costas",
  //       data_consulta: new Date("2023-08-25"),
  //       observacoes: "Ibuprofeno 3 vezes ao dia",
  //       medico_responsavel_id: 1,
  //       paciente_id: 1
  //     }, {
  //       motivo: "Dor nas costas",
  //       data_consulta: new Date("2023-08-25"),
  //       observacoes: "Ibuprofeno 3 vezes ao dia",
  //       medico_responsavel_id: 1,
  //       paciente_id: 1
  //     }, {
  //       motivo: "Dor nas costas",
  //       data_consulta: new Date("2023-08-25"),
  //       observacoes: "Ibuprofeno 3 vezes ao dia",
  //       medico_responsavel_id: 1,
  //       paciente_id: 1
  //     }, {
  //       motivo: "Dor nas costas",
  //       data_consulta: new Date("2023-08-25"),
  //       observacoes: "Ibuprofeno 3 vezes ao dia",
  //       medico_responsavel_id: 1,
  //       paciente_id: 1
  //     }, {
  //       motivo: "Dor nas costas",
  //       data_consulta: new Date("2023-08-25"),
  //       observacoes: "Ibuprofeno 3 vezes ao dia",
  //       medico_responsavel_id: 1,
  //       paciente_id: 1
  //     }, {
  //       motivo: "Dor nas costas",
  //       data_consulta: new Date("2023-08-25"),
  //       observacoes: "Ibuprofeno 3 vezes ao dia",
  //       medico_responsavel_id: 1,
  //       paciente_id: 1
  //     }, {
  //       motivo: "Dor nas costas",
  //       data_consulta: new Date("2023-08-25"),
  //       observacoes: "Ibuprofeno 3 vezes ao dia",
  //       medico_responsavel_id: 1,
  //       paciente_id: 1
  //     }, {
  //       motivo: "Dor nas costas",
  //       data_consulta: new Date("2023-08-25"),
  //       observacoes: "Ibuprofeno 3 vezes ao dia",
  //       medico_responsavel_id: 1,
  //       paciente_id: 1
  //     }, {
  //       motivo: "Dor nas costas",
  //       data_consulta: new Date("2023-08-25"),
  //       observacoes: "Ibuprofeno 3 vezes ao dia",
  //       medico_responsavel_id: 1,
  //       paciente_id: 1
  //     }, {
  //       motivo: "Dor nas costas",
  //       data_consulta: new Date("2023-08-25"),
  //       observacoes: "Ibuprofeno 3 vezes ao dia",
  //       medico_responsavel_id: 1,
  //       paciente_id: 1
  //     }, {
  //       motivo: "Dor nas costas",
  //       data_consulta: new Date("2023-08-25"),
  //       observacoes: "Ibuprofeno 3 vezes ao dia",
  //       medico_responsavel_id: 1,
  //       paciente_id: 1
  //     }, {
  //       motivo: "Dor nas costas",
  //       data_consulta: new Date("2023-08-25"),
  //       observacoes: "Ibuprofeno 3 vezes ao dia",
  //       medico_responsavel_id: 1,
  //       paciente_id: 1
  //     }, {
  //       motivo: "Dor nas costas",
  //       data_consulta: new Date("2023-08-25"),
  //       observacoes: "Ibuprofeno 3 vezes ao dia",
  //       medico_responsavel_id: 1,
  //       paciente_id: 1
  //     }, {
  //       motivo: "Dor nas costas",
  //       data_consulta: new Date("2023-08-25"),
  //       observacoes: "Ibuprofeno 3 vezes ao dia",
  //       medico_responsavel_id: 1,
  //       paciente_id: 1
  //     }, {
  //       motivo: "Dor nas costas",
  //       data_consulta: new Date("2023-08-25"),
  //       observacoes: "Ibuprofeno 3 vezes ao dia",
  //       medico_responsavel_id: 1,
  //       paciente_id: 1
  //     }, {
  //       motivo: "Dor nas costas",
  //       data_consulta: new Date("2023-08-25"),
  //       observacoes: "Ibuprofeno 3 vezes ao dia",
  //       medico_responsavel_id: 1,
  //       paciente_id: 1
  //     }, {
  //       motivo: "Dor nas costas",
  //       data_consulta: new Date("2023-08-25"),
  //       observacoes: "Ibuprofeno 3 vezes ao dia",
  //       medico_responsavel_id: 1,
  //       paciente_id: 1
  //     }, {
  //       motivo: "Dor nas costas",
  //       data_consulta: new Date("2023-08-25"),
  //       observacoes: "Ibuprofeno 3 vezes ao dia",
  //       medico_responsavel_id: 1,
  //       paciente_id: 1
  //     }, {
  //       motivo: "Dor nas costas",
  //       data_consulta: new Date("2023-08-25"),
  //       observacoes: "Ibuprofeno 3 vezes ao dia",
  //       medico_responsavel_id: 1,
  //       paciente_id: 1
  //     }, {
  //       motivo: "Dor nas costas",
  //       data_consulta: new Date("2023-08-25"),
  //       observacoes: "Ibuprofeno 3 vezes ao dia",
  //       medico_responsavel_id: 1,
  //       paciente_id: 1
  //     }, {
  //       motivo: "Dor nas costas",
  //       data_consulta: new Date("2023-08-25"),
  //       observacoes: "Ibuprofeno 3 vezes ao dia",
  //       medico_responsavel_id: 1,
  //       paciente_id: 1
  //     }, {
  //       motivo: "Dor nas costas",
  //       data_consulta: new Date("2023-08-25"),
  //       observacoes: "Ibuprofeno 3 vezes ao dia",
  //       medico_responsavel_id: 1,
  //       paciente_id: 1
  //     }, {
  //       motivo: "Dor nas costas",
  //       data_consulta: new Date("2023-08-25"),
  //       observacoes: "Ibuprofeno 3 vezes ao dia",
  //       medico_responsavel_id: 1,
  //       paciente_id: 1
  //     }, {
  //       motivo: "Dor nas costas",
  //       data_consulta: new Date("2023-08-25"),
  //       observacoes: "Ibuprofeno 3 vezes ao dia",
  //       medico_responsavel_id: 1,
  //       paciente_id: 1
  //     }, {
  //       motivo: "Dor nas costas",
  //       data_consulta: new Date("2023-08-25"),
  //       observacoes: "Ibuprofeno 3 vezes ao dia",
  //       medico_responsavel_id: 1,
  //       paciente_id: 1
  //     }, {
  //       motivo: "Dor nas costas",
  //       data_consulta: new Date("2023-08-25"),
  //       observacoes: "Ibuprofeno 3 vezes ao dia",
  //       medico_responsavel_id: 1,
  //       paciente_id: 1
  //     }, {
  //       motivo: "Dor nas costas",
  //       data_consulta: new Date("2023-08-25"),
  //       observacoes: "Ibuprofeno 3 vezes ao dia",
  //       medico_responsavel_id: 1,
  //       paciente_id: 1
  //     }, {
  //       motivo: "Dor nas costas",
  //       data_consulta: new Date("2023-08-25"),
  //       observacoes: "Ibuprofeno 3 vezes ao dia",
  //       medico_responsavel_id: 1,
  //       paciente_id: 1
  //     }, {
  //       motivo: "Dor nas costas",
  //       data_consulta: new Date("2023-08-25"),
  //       observacoes: "Ibuprofeno 3 vezes ao dia",
  //       medico_responsavel_id: 1,
  //       paciente_id: 1
  //     },
  //   ]
  // });
}

main()
  .then(() => prisma.$disconnect())
  .catch((e) => {
    console.error(e);
    prisma.$disconnect();
    process.exit(1);
  });




