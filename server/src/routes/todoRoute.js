import { Router } from "express";
import { addTodo,updateTodo,deleteTodo,getTodos } from "../controllers/todoControllers.js";
import userAuth from "../middlewares/userVerification.js";

const route = Router();

//functions for todo routing

route.use(userAuth)

route.get('/gettodos',getTodos)

route.post('/addtodo',addTodo)

route.patch('/updatetodo/:todoid',updateTodo)

route.delete('/deletetodo/:todoid',deleteTodo)

export default route;