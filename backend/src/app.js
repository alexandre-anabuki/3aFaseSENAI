import express from "express"
import cors from "cors"
// import dotenv from 'dotenv';

import  usuarioRouter  from "./routes/usuarios.js"
import movimentacaoRouter from "./routes/movimentacao.js";
import inventarioRouter from "./routes/inventario.js";
import { auth } from "./middleware/auth.js";
import authRouter from "./routes/authRoutes.js";

// dotenv.config();

export const app = express()

app.use(cors())
app.use(express.json())

app.get("/ping", (req, res) => {
  res.send("pong");
});

app.use("/auth", authRouter)
app.use(auth)

app.use(usuarioRouter)
app.use(movimentacaoRouter)
app.use(inventarioRouter)