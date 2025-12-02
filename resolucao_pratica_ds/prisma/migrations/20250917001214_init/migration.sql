-- CreateTable
CREATE TABLE "public"."usuario" (
    "id" SERIAL NOT NULL,
    "nome" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "senha" TEXT NOT NULL,
    "cargo" TEXT NOT NULL,

    CONSTRAINT "usuario_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."prontuario" (
    "id" SERIAL NOT NULL,
    "descricao" TEXT NOT NULL,
    "data" TIMESTAMP(3) NOT NULL,
    "medico_responsavel_id" INTEGER NOT NULL,
    "paciente_id" INTEGER NOT NULL,

    CONSTRAINT "prontuario_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."consulta" (
    "id" SERIAL NOT NULL,
    "motivo" TEXT NOT NULL,
    "data_consulta" TIMESTAMP(3) NOT NULL,
    "observacoes" TEXT NOT NULL,
    "medico_responsavel_id" INTEGER NOT NULL,
    "paciente_id" INTEGER NOT NULL,

    CONSTRAINT "consulta_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."paciente" (
    "id" SERIAL NOT NULL,
    "nome" TEXT NOT NULL,
    "cpf" TEXT NOT NULL,
    "telefone" BIGINT NOT NULL,
    "email" TEXT NOT NULL,
    "data_nascimento" TIMESTAMP(3) NOT NULL,
    "sexo" TEXT NOT NULL,
    "responsavel" TEXT,

    CONSTRAINT "paciente_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."exame" (
    "id" SERIAL NOT NULL,
    "tipo_exame" TEXT NOT NULL,
    "resultado" TEXT NOT NULL,
    "data_exame" TIMESTAMP(3) NOT NULL,
    "link_arquivo" TEXT NOT NULL,
    "observacoes" TEXT NOT NULL,
    "paciente_id" INTEGER NOT NULL,

    CONSTRAINT "exame_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "usuario_email_key" ON "public"."usuario"("email");

-- AddForeignKey
ALTER TABLE "public"."prontuario" ADD CONSTRAINT "prontuario_paciente_id_fkey" FOREIGN KEY ("paciente_id") REFERENCES "public"."paciente"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."prontuario" ADD CONSTRAINT "prontuario_medico_responsavel_id_fkey" FOREIGN KEY ("medico_responsavel_id") REFERENCES "public"."usuario"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."consulta" ADD CONSTRAINT "consulta_paciente_id_fkey" FOREIGN KEY ("paciente_id") REFERENCES "public"."paciente"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."exame" ADD CONSTRAINT "exame_paciente_id_fkey" FOREIGN KEY ("paciente_id") REFERENCES "public"."paciente"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
