

# clinic\_api

API para o projeto **Development Clinic** dos alunos, construída com **Node.js**, **Express** e **Prisma**.

## Requisitos

* **Node.js 18+** (recomendado 20+)
* Um banco de dados (ex.: **PostgreSQL**)
* **npm** ou **pnpm**/**yarn**

## Começando

```bash
# 1) Clonar e instalar dependências
git clone <seu-repo>
cd clinic_api
npm install

# 2) Criar arquivo .env
cp .env.example .env  # se existir; caso não, crie manualmente

# 3) Gerar o Prisma Client (necessário antes de rodar o app)
npx prisma generate

# 4) Criar as tabelas (escolha uma opção)
#    a) com migrações (recomendado em dev)
npx prisma migrate dev --name init
#    b) ou apenas empurrar o schema sem migração
# npx prisma db push

# 5) Subir o servidor (usa nodemon)
npm start
```

## Configuração de ambiente


## Prisma

Arquivo esperado: `./prisma/schema.prisma`. Exemplo mínimo para PostgreSQL:

Comandos úteis:

```bash
# Gerar Prisma Client (SEMPRE que alterar schema.prisma)
npx prisma generate

# Criar migração e aplicar no banco
npx prisma migrate dev --name <descricao>

# Visualizar o banco rapidamente
npx prisma studio
```

## Scripts sugeridos (package.json)

Seu `package.json` atual:

```json
{
  "name": "clinic_api",
  "version": "1.0.0",
  "description": "API for students development clinic project",
  "type": "module",
  "main": "src/app.js",
  "scripts": {
    "start": "npx nodemon src/app.js",
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "dependencies": {
    "@prisma/client": "^6.13.0",
    "dotenv": "^17.2.1",
    "express": "^5.1.0"
  },
  "devDependencies": {
    "prisma": "^6.13.0"
  }
}
```

## Estrutura sugerida

```
clinic_api/
├─ src/
│  ├─ app.js          # configura Express, middlewares e rotas
│  ├─ routes/         # rotas (ex.: patients.routes.js)
│  ├─ controllers/    # controladores (ex.: patients.controller.js)
│  ├─ services/       # serviços/regra de negócio
│  └─ lib/
│     └─ prisma.js    # instancia do PrismaClient
├─ prisma/
│  ├─ schema.prisma
│  └─ migrations/     # gerado pelo prisma migrate
├─ .env
├─ package.json
└─ README.md
```

Exemplo de `src/lib/prisma.js` (ESM):

```js
// src/lib/prisma.js
import { PrismaClient } from '@prisma/client';
export const prisma = new PrismaClient();
```

Exemplo de uso no controller:

```js
// src/controllers/patients.controller.js
import { prisma } from '../lib/prisma.js';

export async function listPatients(req, res, next) {
  try {
    const patients = await prisma.patient.findMany();
    res.json(patients);
  } catch (err) {
    next(err);
  }
}
```

## Resolvendo erros comuns (especialmente ao iniciar)

> Se o app não sobe e você vê erros relacionados ao Prisma, **quase sempre** a solução passa por rodar `npx prisma generate` e/ou conferir o `.env`.

### 1) `Cannot find module '@prisma/client'` ou `@prisma/client not found`

* Rode: `npm install` (garanta que dependências foram instaladas)
* Depois: `npx prisma generate`
* Se persistir, apague `node_modules` e `package-lock.json` e reinstale:
  `rm -rf node_modules package-lock.json && npm install && npx prisma generate`

### 2) `PrismaClientInitializationError` / `Error code P1001: Can't reach database`

* Verifique `DATABASE_URL` no `.env`
* Garanta que o banco está online e acessível (host, porta, usuário e senha corretos)
* Se necessário, crie as tabelas: `npx prisma migrate dev` ou `npx prisma db push`

### 3) `Prisma Client version mismatch` (versões diferentes de `prisma` e `@prisma/client`)

* Mantenha as versões iguais (você já está usando `^6.13.0` para ambos — ótimo)
* Rode `npm install` e depois `npx prisma generate`

### 4) `PrismaClientKnownRequestError` após alterar o schema

* Sempre que mudar `schema.prisma`, rode `npx prisma generate`
* Se usar migrações: `npx prisma migrate dev`
* Se estiver só prototipando: `npx prisma db push` (cuidado com dados existentes)

### 5) ESM / `type: "module"` problemas de import

* Use `import`/`export` (sem `require`)
* Para caminhos de arquivo, use `import.meta.url` + `fileURLToPath` se precisar de `__dirname`:

  ```js
  import { fileURLToPath } from 'url';
  import { dirname } from 'path';
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = dirname(__filename);
  ```

### 6) Porta em uso (`EADDRINUSE`)

* Mude a porta no `.env` (ex.: `PORT=3001`) ou feche o processo na porta atual.

## Rotina de desenvolvimento recomendada

```bash
# Após clonar/atualizar:
npm install
npm run prisma:generate      # garante o client
npm run db:migrate           # ou npm run db:push
npm run dev                  # nodemon
```

Se der erro ao subir:

1. Confirme `.env` (`DATABASE_URL` e `PORT`)
2. Rode `npx prisma generate`
3. Rode `npx prisma migrate dev` (ou `db push`)
4. Tente novamente `npm run dev`

## Seed (opcional)

```json
// package.json
{
  "scripts": {
    "seed": "node prisma/seed.js"
  }
}
```

```js
// prisma/seed.js (exemplo simples)
import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

async function main() {
  await prisma.patient.upsert({
    where: { email: 'demo@clinic.local' },
    update: {},
    create: { name: 'Demo Patient', email: 'demo@clinic.local' }
  });
}

main()
  .then(() => prisma.$disconnect())
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
```

Rode com:

```bash
node prisma/seed.js
```

## Licença

ISC


