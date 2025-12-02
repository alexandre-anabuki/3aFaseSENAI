FROM node:20-alpine

WORKDIR /app

# Copiar arquivos de dependências
COPY package.json pnpm-lock.yaml ./

# Instalar pnpm e dependências
RUN npm install -g pnpm && pnpm install

# Copiar o resto dos arquivos
COPY . .

# Gerar Prisma Client
RUN npx prisma generate

# Expor a porta
EXPOSE 3000

# Comando para iniciar (aguarda o banco estar pronto)
CMD ["sh", "-c", "npx prisma migrate deploy && node src/server.js"]

