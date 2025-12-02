# 🐳 Configuração Docker para LogiExpress API

## 📋 Pré-requisitos

- Docker instalado
- Docker Compose instalado

## 🚀 Como usar

### 1. Atualizar o schema.prisma

Antes de subir os containers, você precisa atualizar a URL do banco no `prisma/schema.prisma`:

```prisma
datasource db {
  provider = "postgresql"
  url      = env("DATABASE_URL")
}
```

E criar um arquivo `.env` na raiz do projeto:

```env
DATABASE_URL=postgresql://postgres:senai@postgres:5432/clinicadb
ACCESS_TOKEN_SECRET=seu_secret_aqui
REFRESH_TOKEN_SECRET=seu_refresh_secret_aqui
JWT_ACCESS_EXPIRES_IN=900000
JWT_REFRESH_EXPIRES_IN=28800000
```

### 2. Subir os containers

```bash
docker-compose up --build
```

Ou em modo detached (background):

```bash
docker-compose up -d --build
```

### 3. Executar migrações (se necessário)

Se as migrações não rodarem automaticamente, execute:

```bash
docker-compose exec api npx prisma migrate deploy
```

### 4. Gerar Prisma Client (se necessário)

```bash
docker-compose exec api npx prisma generate
```

### 5. Executar seed (opcional)

```bash
docker-compose exec api npm run seed
```

## 📝 Comandos úteis

### Ver logs
```bash
docker-compose logs -f api
docker-compose logs -f postgres
docker-compose logs -f prisma-studio
```

### Parar os containers
```bash
docker-compose down
```

### Parar e remover volumes (limpar banco)
```bash
docker-compose down -v
```

### Acessar o banco via psql
```bash
docker-compose exec postgres psql -U postgres -d clinicadb
```

### Executar comandos na API
```bash
docker-compose exec api npm run <comando>
```

### Acessar Prisma Studio
O Prisma Studio estará disponível automaticamente em: **http://localhost:5555**

Para iniciar apenas o Prisma Studio (se os outros serviços já estiverem rodando):
```bash
docker-compose up prisma-studio
```

## 🔧 Configuração

### Portas
- **API**: http://localhost:3000
- **Prisma Studio**: http://localhost:5555
- **PostgreSQL**: localhost:5432

### Variáveis de Ambiente

As variáveis podem ser configuradas no arquivo `.env` ou diretamente no `docker-compose.yml`.

### Volumes

- `postgres_data`: Persiste os dados do PostgreSQL
- Código da API é montado como volume para desenvolvimento (hot reload)

## 🐛 Troubleshooting

### Erro de conexão com o banco
Certifique-se de que o serviço `postgres` está saudável antes da API iniciar. O `depends_on` com `condition: service_healthy` garante isso.

### Prisma Client não encontrado
Execute: `docker-compose exec api npx prisma generate`

### Migrações não aplicadas
Execute: `docker-compose exec api npx prisma migrate deploy`

### Limpar tudo e começar do zero
```bash
docker-compose down -v
docker-compose up --build
```

