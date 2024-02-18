import { Router } from "express";
import { loginUser,signUpUser,getUser } from "../controllers/userControler.js";

const route = Router()

route.post('/getuser', getUser)

route.post('/login' ,loginUser);

route.post('/signup' ,signUpUser);

export default route;