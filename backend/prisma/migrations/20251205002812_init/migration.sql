/*
  Warnings:

  - You are about to drop the column `endereco_id` on the `usuario` table. All the data in the column will be lost.
  - You are about to drop the `endereco` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `endereco` to the `usuario` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "public"."usuario" DROP CONSTRAINT "usuario_endereco_id_fkey";

-- AlterTable
ALTER TABLE "public"."usuario" DROP COLUMN "endereco_id",
ADD COLUMN     "endereco" JSONB NOT NULL;

-- DropTable
DROP TABLE "public"."endereco";
