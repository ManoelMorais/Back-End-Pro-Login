import { Router } from "express";
const AuthRoute = Router();

import { Login } from "../controller/auth.controller.js"

AuthRoute.post("/login", Login)

export default AuthRoute