import ConnectDataBase from "./src/database/db.js"

import UserRoute from "./src/router/user.router.js";
import AuthRoute from "./src/router/auth.router.js";
import SwaggerRoute from "./src/router/swagger.router.js";

import express from "express";
const app = express();

import dotenv from "dotenv"
dotenv.config()

import cors from 'cors';
app.use(cors())

const porta = process.env.PORT || 4080

ConnectDataBase()
app.use(express.json())
app.use("/user", UserRoute)
app.use("/auth", AuthRoute);
app.use("/doc", SwaggerRoute)

app.listen(porta, () => console.log(`Servidor rodando na porta ${porta}`));