import express from "express"
import cors from "cors"
import dotenv from 'dotenv';
dotenv.config();

export const app = express()

app.use(cors())
app.use(express.json())