// Path: src/app.js

import express from "express";
import cors from "cors";

import { usuarioRouter } from "./routes/usuarios.js";
import { pacientesRouter } from "./routes/pacientes.js";
import { consultasRouter } from "./routes/consulta.js";
import { prontuarioRouter } from "./routes/prontuario.js";
import { exameRouter } from "./routes/exame.js";
import { driversRouter } from "./routes/drivers.js";
import { vehiclesRouter } from "./routes/vehicles.js";
import { deliveriesRouter } from "./routes/deliveries.js";
import authRouter from "./routes/authRoutes.js";
import { auth } from "./middleware/auth.js";
import { swaggerDocs } from "./config/swagger.js";

export const app = express();

app.use(cors());
app.use(express.json());

app.get("/ping", (req, res) => {
  res.send("pong");
});

// Swagger
swaggerDocs(app);

// Rotas públicas
app.use("/auth", authRouter);

// Middleware global de autenticação
app.use(auth);

// Rotas privadas
app.use(usuarioRouter);
app.use(exameRouter);
app.use(pacientesRouter);
app.use(prontuarioRouter);
app.use(consultasRouter);
app.use(driversRouter);
app.use(vehiclesRouter);
app.use(deliveriesRouter);
