import Router from "express";
const UserRoute = Router();

import UserController from "../controller/user.controller.js"
import { validID, validUser} from "../middlewares/global.middlewares.js"

UserRoute.post("/create", UserController.UserCreate)
UserRoute.patch("/:id", validID, validUser, UserController.UserUpdate)

export default UserRoute