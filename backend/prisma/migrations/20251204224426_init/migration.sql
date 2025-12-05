/*
  Warnings:

  - You are about to drop the column `cargo` on the `usuario` table. All the data in the column will be lost.
  - You are about to drop the column `senha` on the `usuario` table. All the data in the column will be lost.
  - You are about to drop the `consulta` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `exame` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `paciente` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `prontuario` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `cpf` to the `usuario` table without a default value. This is not possible if the table is not empty.
  - Added the required column `data_nascimento` to the `usuario` table without a default value. This is not possible if the table is not empty.
  - Added the required column `endereco_id` to the `usuario` table without a default value. This is not possible if the table is not empty.
  - Added the required column `password` to the `usuario` table without a default value. This is not possible if the table is not empty.
  - Added the required column `rg` to the `usuario` table without a default value. This is not possible if the table is not empty.
  - Added the required column `telefone` to the `usuario` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "public"."consulta" DROP CONSTRAINT "consulta_paciente_id_fkey";

-- DropForeignKey
ALTER TABLE "public"."exame" DROP CONSTRAINT "exame_paciente_id_fkey";

-- DropForeignKey
ALTER TABLE "public"."prontuario" DROP CONSTRAINT "prontuario_medico_responsavel_id_fkey";

-- DropForeignKey
ALTER TABLE "public"."prontuario" DROP CONSTRAINT "prontuario_paciente_id_fkey";

-- AlterTable
ALTER TABLE "public"."usuario" DROP COLUMN "cargo",
DROP COLUMN "senha",
ADD COLUMN     "cpf" TEXT NOT NULL,
ADD COLUMN     "data_nascimento" TEXT NOT NULL,
ADD COLUMN     "endereco_id" INTEGER NOT NULL,
ADD COLUMN     "password" TEXT NOT NULL,
ADD COLUMN     "rg" TEXT NOT NULL,
ADD COLUMN     "telefone" TEXT NOT NULL;

-- DropTable
DROP TABLE "public"."consulta";

-- DropTable
DROP TABLE "public"."exame";

-- DropTable
DROP TABLE "public"."paciente";

-- DropTable
DROP TABLE "public"."prontuario";

-- CreateTable
CREATE TABLE "public"."endereco" (
    "id" SERIAL NOT NULL,
    "cep" TEXT NOT NULL,
    "cidade" TEXT NOT NULL,
    "estado" TEXT NOT NULL,
    "rua" TEXT NOT NULL,
    "numero" TEXT NOT NULL,
    "complemeto" TEXT NOT NULL,
    "bairro" TEXT NOT NULL,
    "referencia" TEXT NOT NULL,

    CONSTRAINT "endereco_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."inventario" (
    "id" SERIAL NOT NULL,
    "nome_item" TEXT NOT NULL,
    "estoque" INTEGER NOT NULL,
    "patrimonio" INTEGER NOT NULL,
    "preco_unitario" TEXT NOT NULL,
    "preco_total" TEXT NOT NULL,

    CONSTRAINT "inventario_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."movimentacao" (
    "id" SERIAL NOT NULL,
    "data_movimento" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "tipo_movimento" TEXT NOT NULL,
    "nome_cliente" TEXT NOT NULL,
    "item" TEXT NOT NULL,
    "quantidade" INTEGER NOT NULL,
    "custo_total" TEXT NOT NULL,
    "inventario_id" INTEGER NOT NULL,
    "usuario_id" INTEGER NOT NULL,

    CONSTRAINT "movimentacao_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "public"."usuario" ADD CONSTRAINT "usuario_endereco_id_fkey" FOREIGN KEY ("endereco_id") REFERENCES "public"."endereco"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."movimentacao" ADD CONSTRAINT "movimentacao_inventario_id_fkey" FOREIGN KEY ("inventario_id") REFERENCES "public"."inventario"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."movimentacao" ADD CONSTRAINT "movimentacao_usuario_id_fkey" FOREIGN KEY ("usuario_id") REFERENCES "public"."usuario"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
