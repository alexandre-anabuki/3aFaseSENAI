# Instruções para Implementação da Avaliação - LogiExpress

## 📋 Passos para Configuração

### 1. Adicionar Modelos ao Schema Prisma

**IMPORTANTE:** Você precisa adicionar os modelos ao arquivo `prisma/schema.prisma` existente.

Abra o arquivo `prisma/models_logistica.prisma` e copie os três modelos (Driver, Vehicle, Delivery) para o final do arquivo `prisma/schema.prisma`.

### 2. Executar Migração

Após adicionar os modelos ao schema.prisma, execute:

```bash
npx prisma generate
npx prisma migrate dev --name add_logistica_models
```

### 3. Registrar as Rotas no app.js

Adicione as seguintes importações e rotas no arquivo `src/app.js`:

```javascript
// Adicione após as outras importações (linha ~11)
import { driversRouter } from "./routes/drivers.js";
import { vehiclesRouter } from "./routes/vehicles.js";
import { deliveriesRouter } from "./routes/deliveries.js";

// Adicione após as outras rotas privadas (após linha 38)
app.use(driversRouter);
app.use(vehiclesRouter);
app.use(deliveriesRouter);
```

## 📁 Arquivos Criados

### Controllers
- ✅ `src/controller/Driver/DriverController.js` - CRUD completo de motoristas com filtro por cidade
- ✅ `src/controller/Vehicle/VehicleController.js` - CRUD completo de veículos
- ✅ `src/controller/Delivery/DeliveryController.js` - CRUD completo de entregas com paginação, ordenação e validações

### Rotas
- ✅ `src/routes/drivers.js` - Rotas de motoristas + endpoints especiais (start-route, dashboard)
- ✅ `src/routes/vehicles.js` - Rotas de veículos
- ✅ `src/routes/deliveries.js` - Rotas de entregas

### Modelos
- ✅ `prisma/models_logistica.prisma` - Modelos para adicionar ao schema.prisma

## 🎯 Funcionalidades Implementadas

### 1. CRUD de Motoristas (Drivers)
- ✅ GET `/drivers` - Lista todos (com filtro opcional por cidade via query `?cidade=Florianópolis`)
- ✅ GET `/drivers/:id` - Busca por ID
- ✅ POST `/drivers` - Cria motorista (validação de status: ATIVO/INATIVO)
- ✅ PUT `/drivers/:id` - Atualiza motorista
- ✅ DELETE `/drivers/:id` - Deleta motorista

### 2. CRUD de Veículos (Vehicles)
- ✅ GET `/vehicles` - Lista todos
- ✅ GET `/vehicles/:id` - Busca por ID
- ✅ POST `/vehicles` - Cria veículo
- ✅ PUT `/vehicles/:id` - Atualiza veículo
- ✅ DELETE `/vehicles/:id` - Deleta veículo

### 3. CRUD de Entregas (Deliveries)
- ✅ GET `/deliveries` - Lista com paginação (`?page=1&limit=10`) e ordenação (`?orderBy=id&order=desc`)
- ✅ GET `/deliveries/:id` - Busca por ID
- ✅ POST `/deliveries` - Cria entrega com validações:
  - Motorista deve estar ATIVO
  - Motorista não pode ter mais de 10 entregas PENDENTE
- ✅ PUT `/deliveries/:id` - Atualiza entrega
- ✅ DELETE `/deliveries/:id` - Deleta entrega

### 4. Validações de Status
- ✅ Driver: apenas "ATIVO" ou "INATIVO"
- ✅ Delivery: apenas "PENDENTE", "EM_ROTA", "ENTREGUE" ou "FALHOU"

### 5. Endpoint Especial - Iniciar Rota
- ✅ PUT `/drivers/:driverId/deliveries/start-route`
  - Recebe `{ "deliveryIds": [1, 2, 3] }` no body
  - Valida se todas as entregas pertencem ao motorista
  - Valida se todas estão PENDENTE
  - Atualiza status para EM_ROTA

### 6. Dashboard do Motorista
- ✅ GET `/drivers/:driverId/dashboard`
  - Retorna dados do motorista
  - Retorna `completedDeliveries` (status ENTREGUE)
  - Retorna `pendingDeliveries` (status PENDENTE)

## 🧪 Exemplos de Uso

### Criar Motorista
```bash
POST /drivers
{
  "nome": "João Silva",
  "cpf": "12345678900",
  "telefone": "48999999999",
  "email": "joao@email.com",
  "cidade": "Florianópolis",
  "status": "ATIVO"
}
```

### Listar Motoristas por Cidade
```bash
GET /drivers?cidade=Florianópolis
```

### Criar Entrega (com validações)
```bash
POST /deliveries
{
  "endereco_origem": "Rua A, 123",
  "endereco_destino": "Rua B, 456",
  "status": "PENDENTE",
  "driverId": 1,
  "observacoes": "Fragil"
}
```

### Listar Entregas com Paginação
```bash
GET /deliveries?page=1&limit=10&orderBy=data_criacao&order=desc
```

### Iniciar Rota
```bash
PUT /drivers/1/deliveries/start-route
{
  "deliveryIds": [1, 2, 3]
}
```

### Dashboard do Motorista
```bash
GET /drivers/1/dashboard
```

## ⚠️ Observações Importantes

1. **Nenhum arquivo existente foi modificado** - Todos os arquivos são novos
2. **Padrões seguidos** - Todos os controllers seguem o mesmo padrão dos existentes
3. **Validações** - Todas as validações de status são feitas nos controllers
4. **Prisma simples** - Apenas operações básicas do Prisma, sem conceitos avançados

