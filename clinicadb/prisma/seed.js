import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient()

async function main() {
    // await prisma.usuario.createMany({
    //     data: [
    //         { nome: "Joao", email: "joao34@email.com", senha: "123", cargo: "Médico" },
    //     ],
    // })

    // await prisma.paciente.createMany({
    //     data: [
    //        {
    //         nome: "João",
    //         sexo: "Masculino",
    //         data_nascimento: new Date("1980-12-11"),
    //         cpf:"958.521.65",
    //         telefone: 952556232,
    //         email: "joao@email.com",
    //         // Consulta: {
    //         //     create: [
    //         //         {
    //         //             motivo: "Dor nas costas",
    //         //             data_consulta: new Date("2023-98-25"),
    //         //             observacoes: "Ibuprofeno 3 vezes ao dia",
    //         //         }
    //         //     ]
    //         // },
    //         // Exame: {
    //         //     create: [
    //         //         {
    //         //             tipo: "Densiometro",
    //         //             data_exame: new Date("2013-08-25"),
    //         //             resultado: "deu ruim",
    //         //             link_arquivo: "url.com.br/exame.pdf",
    //         //             observacoes: "",
    //         //         }
    //         //     ]
    //         // }
    //     },
    //     {
    //         nome: "João",
    //         sexo: "Masculino",
    //         data_nascimento: new Date("1980-12-11"),
    //         cpf:"958.521.65",
    //         telefone: 952556232,
    //         email: "joao@email.com",
    //     },
    //     {
    //         nome: "João",
    //         sexo: "Masculino",
    //         data_nascimento: new Date("1980-12-11"),
    //         cpf:"958.521.65",
    //         telefone: 952556232,
    //         email: "joao@email.com",
    //     },
    //     {
    //         nome: "João",
    //         sexo: "Masculino",
    //         data_nascimento: new Date("1980-12-11"),
    //         cpf:"958.521.65",
    //         telefone: 952556232,
    //         email: "joao@email.com",
    //     },
    //     {
    //         nome: "João",
    //         sexo: "Masculino",
    //         data_nascimento: new Date("1980-12-11"),
    //         cpf:"958.521.65",
    //         telefone: 952556232,
    //         email: "joao@email.com",
    //     },
    //  ]
    // })

    // await prisma.exame.createMany({
    //     data: [
    //       {
    //         tipo_exame: "radiografia",
    //         resultado: "femur fraturado",
    //         data_exame: new Date("2025-10-30"),
    //         link_arquivo: "aleatorio",
    //         observacoes: "grave",
    //         paciente_id: 1,
    //     },
    //     {
    //         tipo_exame: "radiografia",
    //         resultado: "femur fraturado",
    //         data_exame: new Date("2025-10-30"),
    //         link_arquivo: "aleatorio",
    //         observacoes: "grave",
    //         paciente_id: 1,
    //     },
    //     {
    //         tipo_exame: "radiografia",
    //         resultado: "femur fraturado",
    //         data_exame: new Date("2025-10-30"),
    //         link_arquivo: "aleatorio",
    //         observacoes: "grave",
    //         paciente_id: 1,
    //     },
    //     {
    //         tipo_exame: "radiografia",
    //         resultado: "femur fraturado",
    //         data_exame: new Date("2025-10-30"),
    //         link_arquivo: "aleatorio",
    //         observacoes: "grave",
    //         paciente_id: 1,
    //     },
    //     {
    //         tipo_exame: "radiografia",
    //         resultado: "femur fraturado",
    //         data_exame: new Date("2025-10-30"),
    //         link_arquivo: "aleatorio",
    //         observacoes: "grave",
    //         paciente_id: 1,
    //     },
        
    //  ]
    // })

    // await prisma.consulta.createMany({
    //     data: [
    //       {
    //         motivo: "Dor nas costas",
    //         data_consulta: new Date("2023-08-25"),
    //         observacoes: "Ibuprofeno 3 vezes ao dia",
    //         medico_responsavel_id: 1,
    //         paciente_id: 1
    //       },
    //       {
    //         motivo: "Dor nas costas",
    //         data_consulta: new Date("2023-08-25"),
    //         observacoes: "Ibuprofeno 3 vezes ao dia",
    //         medico_responsavel_id: 1,
    //         paciente_id: 1
    //       }, {
    //         motivo: "Dor nas costas",
    //         data_consulta: new Date("2023-08-25"),
    //         observacoes: "Ibuprofeno 3 vezes ao dia",
    //         medico_responsavel_id: 1,
    //         paciente_id: 1
    //       }, {
    //         motivo: "Dor nas costas",
    //         data_consulta: new Date("2023-08-25"),
    //         observacoes: "Ibuprofeno 3 vezes ao dia",
    //         medico_responsavel_id: 1,
    //         paciente_id: 1
    //       }, {
    //         motivo: "Dor nas costas",
    //         data_consulta: new Date("2023-08-25"),
    //         observacoes: "Ibuprofeno 3 vezes ao dia",
    //         medico_responsavel_id: 1,
    //         paciente_id: 1
    //       }, {
    //         motivo: "Dor nas costas",
    //         data_consulta: new Date("2023-08-25"),
    //         observacoes: "Ibuprofeno 3 vezes ao dia",
    //         medico_responsavel_id: 1,
    //         paciente_id: 1
    //       }, {
    //         motivo: "Dor nas costas",
    //         data_consulta: new Date("2023-08-25"),
    //         observacoes: "Ibuprofeno 3 vezes ao dia",
    //         medico_responsavel_id: 1,
    //         paciente_id: 1
    //       }, {
    //         motivo: "Dor nas costas",
    //         data_consulta: new Date("2023-08-25"),
    //         observacoes: "Ibuprofeno 3 vezes ao dia",
    //         medico_responsavel_id: 1,
    //         paciente_id: 1
    //       }, {
    //         motivo: "Dor nas costas",
    //         data_consulta: new Date("2023-08-25"),
    //         observacoes: "Ibuprofeno 3 vezes ao dia",
    //         medico_responsavel_id: 1,
    //         paciente_id: 1
    //       }, {
    //         motivo: "Dor nas costas",
    //         data_consulta: new Date("2023-08-25"),
    //         observacoes: "Ibuprofeno 3 vezes ao dia",
    //         medico_responsavel_id: 1,
    //         paciente_id: 1
    //       }, {
    //         motivo: "Dor nas costas",
    //         data_consulta: new Date("2023-08-25"),
    //         observacoes: "Ibuprofeno 3 vezes ao dia",
    //         medico_responsavel_id: 1,
    //         paciente_id: 1
    //       }, {
    //         motivo: "Dor nas costas",
    //         data_consulta: new Date("2023-08-25"),
    //         observacoes: "Ibuprofeno 3 vezes ao dia",
    //         medico_responsavel_id: 1,
    //         paciente_id: 1
    //       }, {
    //         motivo: "Dor nas costas",
    //         data_consulta: new Date("2023-08-25"),
    //         observacoes: "Ibuprofeno 3 vezes ao dia",
    //         medico_responsavel_id: 1,
    //         paciente_id: 1
    //       }, {
    //         motivo: "Dor nas costas",
    //         data_consulta: new Date("2023-08-25"),
    //         observacoes: "Ibuprofeno 3 vezes ao dia",
    //         medico_responsavel_id: 1,
    //         paciente_id: 1
    //       }, {
    //         motivo: "Dor nas costas",
    //         data_consulta: new Date("2023-08-25"),
    //         observacoes: "Ibuprofeno 3 vezes ao dia",
    //         medico_responsavel_id: 1,
    //         paciente_id: 1
    //       }, {
    //         motivo: "Dor nas costas",
    //         data_consulta: new Date("2023-08-25"),
    //         observacoes: "Ibuprofeno 3 vezes ao dia",
    //         medico_responsavel_id: 1,
    //         paciente_id: 1
    //       }, {
    //         motivo: "Dor nas costas",
    //         data_consulta: new Date("2023-08-25"),
    //         observacoes: "Ibuprofeno 3 vezes ao dia",
    //         medico_responsavel_id: 1,
    //         paciente_id: 1
    //       }, {
    //         motivo: "Dor nas costas",
    //         data_consulta: new Date("2023-08-25"),
    //         observacoes: "Ibuprofeno 3 vezes ao dia",
    //         medico_responsavel_id: 1,
    //         paciente_id: 1
    //       }, {
    //         motivo: "Dor nas costas",
    //         data_consulta: new Date("2023-08-25"),
    //         observacoes: "Ibuprofeno 3 vezes ao dia",
    //         medico_responsavel_id: 1,
    //         paciente_id: 1
    //       }, {
    //         motivo: "Dor nas costas",
    //         data_consulta: new Date("2023-08-25"),
    //         observacoes: "Ibuprofeno 3 vezes ao dia",
    //         medico_responsavel_id: 1,
    //         paciente_id: 1
    //       }, {
    //         motivo: "Dor nas costas",
    //         data_consulta: new Date("2023-08-25"),
    //         observacoes: "Ibuprofeno 3 vezes ao dia",
    //         medico_responsavel_id: 1,
    //         paciente_id: 1
    //       }, {
    //         motivo: "Dor nas costas",
    //         data_consulta: new Date("2023-08-25"),
    //         observacoes: "Ibuprofeno 3 vezes ao dia",
    //         medico_responsavel_id: 1,
    //         paciente_id: 1
    //       }, {
    //         motivo: "Dor nas costas",
    //         data_consulta: new Date("2023-08-25"),
    //         observacoes: "Ibuprofeno 3 vezes ao dia",
    //         medico_responsavel_id: 1,
    //         paciente_id: 1
    //       }, {
    //         motivo: "Dor nas costas",
    //         data_consulta: new Date("2023-08-25"),
    //         observacoes: "Ibuprofeno 3 vezes ao dia",
    //         medico_responsavel_id: 1,
    //         paciente_id: 1
    //       }, {
    //         motivo: "Dor nas costas",
    //         data_consulta: new Date("2023-08-25"),
    //         observacoes: "Ibuprofeno 3 vezes ao dia",
    //         medico_responsavel_id: 1,
    //         paciente_id: 1
    //       }, {
    //         motivo: "Dor nas costas",
    //         data_consulta: new Date("2023-08-25"),
    //         observacoes: "Ibuprofeno 3 vezes ao dia",
    //         medico_responsavel_id: 1,
    //         paciente_id: 1
    //       }, {
    //         motivo: "Dor nas costas",
    //         data_consulta: new Date("2023-08-25"),
    //         observacoes: "Ibuprofeno 3 vezes ao dia",
    //         medico_responsavel_id: 1,
    //         paciente_id: 1
    //       }, {
    //         motivo: "Dor nas costas",
    //         data_consulta: new Date("2023-08-25"),
    //         observacoes: "Ibuprofeno 3 vezes ao dia",
    //         medico_responsavel_id: 1,
    //         paciente_id: 1
    //       }, {
    //         motivo: "Dor nas costas",
    //         data_consulta: new Date("2023-08-25"),
    //         observacoes: "Ibuprofeno 3 vezes ao dia",
    //         medico_responsavel_id: 1,
    //         paciente_id: 1
    //       }, {
    //         motivo: "Dor nas costas",
    //         data_consulta: new Date("2023-08-25"),
    //         observacoes: "Ibuprofeno 3 vezes ao dia",
    //         medico_responsavel_id: 1,
    //         paciente_id: 1
    //       }, {
    //         motivo: "Dor nas costas",
    //         data_consulta: new Date("2023-08-25"),
    //         observacoes: "Ibuprofeno 3 vezes ao dia",
    //         medico_responsavel_id: 1,
    //         paciente_id: 1
    //       }, {
    //         motivo: "Dor nas costas",
    //         data_consulta: new Date("2023-08-25"),
    //         observacoes: "Ibuprofeno 3 vezes ao dia",
    //         medico_responsavel_id: 1,
    //         paciente_id: 1
    //       }, {
    //         motivo: "Dor nas costas",
    //         data_consulta: new Date("2023-08-25"),
    //         observacoes: "Ibuprofeno 3 vezes ao dia",
    //         medico_responsavel_id: 1,
    //         paciente_id: 1
    //       }, {
    //         motivo: "Dor nas costas",
    //         data_consulta: new Date("2023-08-25"),
    //         observacoes: "Ibuprofeno 3 vezes ao dia",
    //         medico_responsavel_id: 1,
    //         paciente_id: 1
    //       }, {
    //         motivo: "Dor nas costas",
    //         data_consulta: new Date("2023-08-25"),
    //         observacoes: "Ibuprofeno 3 vezes ao dia",
    //         medico_responsavel_id: 1,
    //         paciente_id: 1
    //       }, {
    //         motivo: "Dor nas costas",
    //         data_consulta: new Date("2023-08-25"),
    //         observacoes: "Ibuprofeno 3 vezes ao dia",
    //         medico_responsavel_id: 1,
    //         paciente_id: 1
    //       }, {
    //         motivo: "Dor nas costas",
    //         data_consulta: new Date("2023-08-25"),
    //         observacoes: "Ibuprofeno 3 vezes ao dia",
    //         medico_responsavel_id: 1,
    //         paciente_id: 1
    //       }, {
    //         motivo: "Dor nas costas",
    //         data_consulta: new Date("2023-08-25"),
    //         observacoes: "Ibuprofeno 3 vezes ao dia",
    //         medico_responsavel_id: 1,
    //         paciente_id: 1
    //       }, {
    //         motivo: "Dor nas costas",
    //         data_consulta: new Date("2023-08-25"),
    //         observacoes: "Ibuprofeno 3 vezes ao dia",
    //         medico_responsavel_id: 1,
    //         paciente_id: 1
    //       }, {
    //         motivo: "Dor nas costas",
    //         data_consulta: new Date("2023-08-25"),
    //         observacoes: "Ibuprofeno 3 vezes ao dia",
    //         medico_responsavel_id: 1,
    //         paciente_id: 1
    //       }, {
    //         motivo: "Dor nas costas",
    //         data_consulta: new Date("2023-08-25"),
    //         observacoes: "Ibuprofeno 3 vezes ao dia",
    //         medico_responsavel_id: 1,
    //         paciente_id: 1
    //       }, {
    //         motivo: "Dor nas costas",
    //         data_consulta: new Date("2023-08-25"),
    //         observacoes: "Ibuprofeno 3 vezes ao dia",
    //         medico_responsavel_id: 1,
    //         paciente_id: 1
    //       }, {
    //         motivo: "Dor nas costas",
    //         data_consulta: new Date("2023-08-25"),
    //         observacoes: "Ibuprofeno 3 vezes ao dia",
    //         medico_responsavel_id: 1,
    //         paciente_id: 1
    //       }, {
    //         motivo: "Dor nas costas",
    //         data_consulta: new Date("2023-08-25"),
    //         observacoes: "Ibuprofeno 3 vezes ao dia",
    //         medico_responsavel_id: 1,
    //         paciente_id: 1
    //       }, {
    //         motivo: "Dor nas costas",
    //         data_consulta: new Date("2023-08-25"),
    //         observacoes: "Ibuprofeno 3 vezes ao dia",
    //         medico_responsavel_id: 1,
    //         paciente_id: 1
    //       }, {
    //         motivo: "Dor nas costas",
    //         data_consulta: new Date("2023-08-25"),
    //         observacoes: "Ibuprofeno 3 vezes ao dia",
    //         medico_responsavel_id: 1,
    //         paciente_id: 1
    //       }, {
    //         motivo: "Dor nas costas",
    //         data_consulta: new Date("2023-08-25"),
    //         observacoes: "Ibuprofeno 3 vezes ao dia",
    //         medico_responsavel_id: 1,
    //         paciente_id: 1
    //       }, {
    //         motivo: "Dor nas costas",
    //         data_consulta: new Date("2023-08-25"),
    //         observacoes: "Ibuprofeno 3 vezes ao dia",
    //         medico_responsavel_id: 1,
    //         paciente_id: 1
    //       }, {
    //         motivo: "Dor nas costas",
    //         data_consulta: new Date("2023-08-25"),
    //         observacoes: "Ibuprofeno 3 vezes ao dia",
    //         medico_responsavel_id: 1,
    //         paciente_id: 1
    //       }, {
    //         motivo: "Dor nas costas",
    //         data_consulta: new Date("2023-08-25"),
    //         observacoes: "Ibuprofeno 3 vezes ao dia",
    //         medico_responsavel_id: 1,
    //         paciente_id: 1
    //       }, {
    //         motivo: "Dor nas costas",
    //         data_consulta: new Date("2023-08-25"),
    //         observacoes: "Ibuprofeno 3 vezes ao dia",
    //         medico_responsavel_id: 1,
    //         paciente_id: 1
    //       }, {
    //         motivo: "Dor nas costas",
    //         data_consulta: new Date("2023-08-25"),
    //         observacoes: "Ibuprofeno 3 vezes ao dia",
    //         medico_responsavel_id: 1,
    //         paciente_id: 1
    //       }, {
    //         motivo: "Dor nas costas",
    //         data_consulta: new Date("2023-08-25"),
    //         observacoes: "Ibuprofeno 3 vezes ao dia",
    //         medico_responsavel_id: 1,
    //         paciente_id: 1
    //       }, {
    //         motivo: "Dor nas costas",
    //         data_consulta: new Date("2023-08-25"),
    //         observacoes: "Ibuprofeno 3 vezes ao dia",
    //         medico_responsavel_id: 1,
    //         paciente_id: 1
    //       }, {
    //         motivo: "Dor nas costas",
    //         data_consulta: new Date("2023-08-25"),
    //         observacoes: "Ibuprofeno 3 vezes ao dia",
    //         medico_responsavel_id: 1,
    //         paciente_id: 1
    //       }, {
    //         motivo: "Dor nas costas",
    //         data_consulta: new Date("2023-08-25"),
    //         observacoes: "Ibuprofeno 3 vezes ao dia",
    //         medico_responsavel_id: 1,
    //         paciente_id: 1
    //       }, {
    //         motivo: "Dor nas costas",
    //         data_consulta: new Date("2023-08-25"),
    //         observacoes: "Ibuprofeno 3 vezes ao dia",
    //         medico_responsavel_id: 1,
    //         paciente_id: 1
    //       }, {
    //         motivo: "Dor nas costas",
    //         data_consulta: new Date("2023-08-25"),
    //         observacoes: "Ibuprofeno 3 vezes ao dia",
    //         medico_responsavel_id: 1,
    //         paciente_id: 1
    //       }, {
    //         motivo: "Dor nas costas",
    //         data_consulta: new Date("2023-08-25"),
    //         observacoes: "Ibuprofeno 3 vezes ao dia",
    //         medico_responsavel_id: 1,
    //         paciente_id: 1
    //       }, {
    //         motivo: "Dor nas costas",
    //         data_consulta: new Date("2023-08-25"),
    //         observacoes: "Ibuprofeno 3 vezes ao dia",
    //         medico_responsavel_id: 1,
    //         paciente_id: 1
    //       }, {
    //         motivo: "Dor nas costas",
    //         data_consulta: new Date("2023-08-25"),
    //         observacoes: "Ibuprofeno 3 vezes ao dia",
    //         medico_responsavel_id: 1,
    //         paciente_id: 1
    //       }, {
    //         motivo: "Dor nas costas",
    //         data_consulta: new Date("2023-08-25"),
    //         observacoes: "Ibuprofeno 3 vezes ao dia",
    //         medico_responsavel_id: 1,
    //         paciente_id: 1
    //       }, {
    //         motivo: "Dor nas costas",
    //         data_consulta: new Date("2023-08-25"),
    //         observacoes: "Ibuprofeno 3 vezes ao dia",
    //         medico_responsavel_id: 1,
    //         paciente_id: 1
    //       }, {
    //         motivo: "Dor nas costas",
    //         data_consulta: new Date("2023-08-25"),
    //         observacoes: "Ibuprofeno 3 vezes ao dia",
    //         medico_responsavel_id: 1,
    //         paciente_id: 1
    //       }, {
    //         motivo: "Dor nas costas",
    //         data_consulta: new Date("2023-08-25"),
    //         observacoes: "Ibuprofeno 3 vezes ao dia",
    //         medico_responsavel_id: 1,
    //         paciente_id: 1
    //       }, {
    //         motivo: "Dor nas costas",
    //         data_consulta: new Date("2023-08-25"),
    //         observacoes: "Ibuprofeno 3 vezes ao dia",
    //         medico_responsavel_id: 1,
    //         paciente_id: 1
    //       }, {
    //         motivo: "Dor nas costas",
    //         data_consulta: new Date("2023-08-25"),
    //         observacoes: "Ibuprofeno 3 vezes ao dia",
    //         medico_responsavel_id: 1,
    //         paciente_id: 1
    //       }, {
    //         motivo: "Dor nas costas",
    //         data_consulta: new Date("2023-08-25"),
    //         observacoes: "Ibuprofeno 3 vezes ao dia",
    //         medico_responsavel_id: 1,
    //         paciente_id: 1
    //       }, {
    //         motivo: "Dor nas costas",
    //         data_consulta: new Date("2023-08-25"),
    //         observacoes: "Ibuprofeno 3 vezes ao dia",
    //         medico_responsavel_id: 1,
    //         paciente_id: 1
    //       }, {
    //         motivo: "Dor nas costas",
    //         data_consulta: new Date("2023-08-25"),
    //         observacoes: "Ibuprofeno 3 vezes ao dia",
    //         medico_responsavel_id: 1,
    //         paciente_id: 1
    //       }, {
    //         motivo: "Dor nas costas",
    //         data_consulta: new Date("2023-08-25"),
    //         observacoes: "Ibuprofeno 3 vezes ao dia",
    //         medico_responsavel_id: 1,
    //         paciente_id: 1
    //       }, {
    //         motivo: "Dor nas costas",
    //         data_consulta: new Date("2023-08-25"),
    //         observacoes: "Ibuprofeno 3 vezes ao dia",
    //         medico_responsavel_id: 1,
    //         paciente_id: 1
    //       }, {
    //         motivo: "Dor nas costas",
    //         data_consulta: new Date("2023-08-25"),
    //         observacoes: "Ibuprofeno 3 vezes ao dia",
    //         medico_responsavel_id: 1,
    //         paciente_id: 1
    //       }, {
    //         motivo: "Dor nas costas",
    //         data_consulta: new Date("2023-08-25"),
    //         observacoes: "Ibuprofeno 3 vezes ao dia",
    //         medico_responsavel_id: 1,
    //         paciente_id: 1
    //       }, {
    //         motivo: "Dor nas costas",
    //         data_consulta: new Date("2023-08-25"),
    //         observacoes: "Ibuprofeno 3 vezes ao dia",
    //         medico_responsavel_id: 1,
    //         paciente_id: 1
    //       }, {
    //         motivo: "Dor nas costas",
    //         data_consulta: new Date("2023-08-25"),
    //         observacoes: "Ibuprofeno 3 vezes ao dia",
    //         medico_responsavel_id: 1,
    //         paciente_id: 1
    //       }, {
    //         motivo: "Dor nas costas",
    //         data_consulta: new Date("2023-08-25"),
    //         observacoes: "Ibuprofeno 3 vezes ao dia",
    //         medico_responsavel_id: 1,
    //         paciente_id: 1
    //       }, {
    //         motivo: "Dor nas costas",
    //         data_consulta: new Date("2023-08-25"),
    //         observacoes: "Ibuprofeno 3 vezes ao dia",
    //         medico_responsavel_id: 1,
    //         paciente_id: 1
    //       }, {
    //         motivo: "Dor nas costas",
    //         data_consulta: new Date("2023-08-25"),
    //         observacoes: "Ibuprofeno 3 vezes ao dia",
    //         medico_responsavel_id: 1,
    //         paciente_id: 1
    //       }, {
    //         motivo: "Dor nas costas",
    //         data_consulta: new Date("2023-08-25"),
    //         observacoes: "Ibuprofeno 3 vezes ao dia",
    //         medico_responsavel_id: 1,
    //         paciente_id: 1
    //       }, {
    //         motivo: "Dor nas costas",
    //         data_consulta: new Date("2023-08-25"),
    //         observacoes: "Ibuprofeno 3 vezes ao dia",
    //         medico_responsavel_id: 1,
    //         paciente_id: 1
    //       }, {
    //         motivo: "Dor nas costas",
    //         data_consulta: new Date("2023-08-25"),
    //         observacoes: "Ibuprofeno 3 vezes ao dia",
    //         medico_responsavel_id: 1,
    //         paciente_id: 1
    //       }, {
    //         motivo: "Dor nas costas",
    //         data_consulta: new Date("2023-08-25"),
    //         observacoes: "Ibuprofeno 3 vezes ao dia",
    //         medico_responsavel_id: 1,
    //         paciente_id: 1
    //       }, {
    //         motivo: "Dor nas costas",
    //         data_consulta: new Date("2023-08-25"),
    //         observacoes: "Ibuprofeno 3 vezes ao dia",
    //         medico_responsavel_id: 1,
    //         paciente_id: 1
    //       }, {
    //         motivo: "Dor nas costas",
    //         data_consulta: new Date("2023-08-25"),
    //         observacoes: "Ibuprofeno 3 vezes ao dia",
    //         medico_responsavel_id: 1,
    //         paciente_id: 1
    //       }, {
    //         motivo: "Dor nas costas",
    //         data_consulta: new Date("2023-08-25"),
    //         observacoes: "Ibuprofeno 3 vezes ao dia",
    //         medico_responsavel_id: 1,
    //         paciente_id: 1
    //       }, {
    //         motivo: "Dor nas costas",
    //         data_consulta: new Date("2023-08-25"),
    //         observacoes: "Ibuprofeno 3 vezes ao dia",
    //         medico_responsavel_id: 1,
    //         paciente_id: 1
    //       }, {
    //         motivo: "Dor nas costas",
    //         data_consulta: new Date("2023-08-25"),
    //         observacoes: "Ibuprofeno 3 vezes ao dia",
    //         medico_responsavel_id: 1,
    //         paciente_id: 1
    //       }, {
    //         motivo: "Dor nas costas",
    //         data_consulta: new Date("2023-08-25"),
    //         observacoes: "Ibuprofeno 3 vezes ao dia",
    //         medico_responsavel_id: 1,
    //         paciente_id: 1
    //       }, {
    //         motivo: "Dor nas costas",
    //         data_consulta: new Date("2023-08-25"),
    //         observacoes: "Ibuprofeno 3 vezes ao dia",
    //         medico_responsavel_id: 1,
    //         paciente_id: 1
    //       }, {
    //         motivo: "Dor nas costas",
    //         data_consulta: new Date("2023-08-25"),
    //         observacoes: "Ibuprofeno 3 vezes ao dia",
    //         medico_responsavel_id: 1,
    //         paciente_id: 1
    //       }, {
    //         motivo: "Dor nas costas",
    //         data_consulta: new Date("2023-08-25"),
    //         observacoes: "Ibuprofeno 3 vezes ao dia",
    //         medico_responsavel_id: 1,
    //         paciente_id: 1
    //       }, {
    //         motivo: "Dor nas costas",
    //         data_consulta: new Date("2023-08-25"),
    //         observacoes: "Ibuprofeno 3 vezes ao dia",
    //         medico_responsavel_id: 1,
    //         paciente_id: 1
    //       }, {
    //         motivo: "Dor nas costas",
    //         data_consulta: new Date("2023-08-25"),
    //         observacoes: "Ibuprofeno 3 vezes ao dia",
    //         medico_responsavel_id: 1,
    //         paciente_id: 1
    //       }, {
    //         motivo: "Dor nas costas",
    //         data_consulta: new Date("2023-08-25"),
    //         observacoes: "Ibuprofeno 3 vezes ao dia",
    //         medico_responsavel_id: 1,
    //         paciente_id: 1
    //       }, {
    //         motivo: "Dor nas costas",
    //         data_consulta: new Date("2023-08-25"),
    //         observacoes: "Ibuprofeno 3 vezes ao dia",
    //         medico_responsavel_id: 1,
    //         paciente_id: 1
    //       },
    //     ]
    //   });

    await prisma.prontuario.createMany({
        data: [
            {
                data: new Date("1980-12-11"),
                descricao: "lesoes leve",
                medico_responsavel_id: 1,
                paciente_id: 1,
            },
            {
                data: new Date("1980-12-11"),
                descricao: "lesoes leve",
                medico_responsavel_id: 1,
                paciente_id: 1,
            },
            {
                data: new Date("1980-12-11"),
                descricao: "lesoes leve",
                medico_responsavel_id: 1,
                paciente_id: 1,
            },
            {
                data: new Date("1980-12-11"),
                descricao: "lesoes leve",
                medico_responsavel_id: 1,
                paciente_id: 1,
            },
            {
                data: new Date("1980-12-11"),
                descricao: "lesoes leve",
                medico_responsavel_id: 1,
                paciente_id: 1,
            },
            {
                data: new Date("1980-12-11"),
                descricao: "lesoes leve",
                medico_responsavel_id: 1,
                paciente_id: 1,
            },
            {
                data: new Date("1980-12-11"),
                descricao: "lesoes leve",
                medico_responsavel_id: 1,
                paciente_id: 1,
            },
        ]
    })
}

main()
.then(() => prisma.$disconnect())
.catch((e) => {
    console.error(e);
    prisma.$disconnect();
    process.exit(1)
});