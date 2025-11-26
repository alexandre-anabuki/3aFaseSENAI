-- CreateTable
CREATE TABLE "usuario" (
    "id" SERIAL NOT NULL,
    "nome" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "data_nascimento" TEXT NOT NULL,
    "cpf" TEXT NOT NULL,
    "rg" TEXT NOT NULL,
    "telefone" TEXT NOT NULL,

    CONSTRAINT "usuario_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "endereco" (
    "id" SERIAL NOT NULL,
    "cep" TEXT NOT NULL,
    "cidade" TEXT NOT NULL,
    "estado" TEXT NOT NULL,
    "rua" TEXT NOT NULL,
    "numero" TEXT NOT NULL,
    "complemeto" TEXT NOT NULL,
    "bairro" TEXT NOT NULL,
    "referencia" TEXT NOT NULL,
    "usuario_id" INTEGER NOT NULL,

    CONSTRAINT "endereco_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "inventario" (
    "id" SERIAL NOT NULL,
    "nome_item" TEXT NOT NULL,
    "estoque" INTEGER NOT NULL,
    "patrimonio" INTEGER NOT NULL,
    "preco_unitario" TEXT NOT NULL,
    "preco_total" TEXT NOT NULL,

    CONSTRAINT "inventario_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "movimentacao" (
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

-- CreateIndex
CREATE UNIQUE INDEX "usuario_email_key" ON "usuario"("email");

-- AddForeignKey
ALTER TABLE "endereco" ADD CONSTRAINT "endereco_usuario_id_fkey" FOREIGN KEY ("usuario_id") REFERENCES "usuario"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "movimentacao" ADD CONSTRAINT "movimentacao_inventario_id_fkey" FOREIGN KEY ("inventario_id") REFERENCES "inventario"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "movimentacao" ADD CONSTRAINT "movimentacao_usuario_id_fkey" FOREIGN KEY ("usuario_id") REFERENCES "usuario"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
