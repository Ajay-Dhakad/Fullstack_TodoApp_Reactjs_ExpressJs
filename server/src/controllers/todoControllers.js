import { Todo } from "../models/todoModel.js";
import { User } from "../models/userModel.js";

//controller functions for the 



const addTodo = async (req, res) => {

   const {title,description} = req.body;

   if (!title || !description) {
    return res.status(400).json({ error: "Title and description are required" })
   }

   const {_id} = req.user;

   if (!_id) {
    return res.status(401).json({ error: "User Not Verified" })
   }

   const todo  = await Todo.create({ title, description,createdBy:_id });

   console.log('found todo',todo)

   if (!todo){
    return res.status(400).json({ error: "No Todos Found !" })
   }

   return res.status(200).json({success: true, todo});



   //sending back a json response of the created todo item


   
}

const deleteTodo = async (req, res) => {

    const {todoid} = req.params;

    console.log(todoid,'dkjsjad')

    // if (!_id) {
    //     return res.status(401).json({ error: "User Not Verified" })
    // }

    const deleteTodo = await Todo.findOneAndDelete({_id:todoid,createdBy:req.user._id});

    if (!deleteTodo){
        return res.status(400).json({ error: "Todo Not Found !"})
    }


    res.status(200).json({success:true,deleteTodo})

}


//Updated handler

const updateTodo = async (req, res) => {
    
    const userId = req.user._id
    const {todoid} = req.params;

    console.log(todoid,'dkjsjad')

    if (!req.body) {
        return res.status(400).json({ error: "fields can't be empty !" })
    }
    
    const todo = await Todo.findOneAndUpdate({_id:todoid,createdBy:userId},{...req.body},{new:true})

    if (!todo){
        return res.status(400).json({ error: "Internal Server Error"})}

    res.status(200).json({success:true,todo})


}


//Get all the todos by a user

const getTodos = async (req, res) => {

    const {_id} = req.user;

    const todos  = await Todo.find({createdBy:_id}).sort({createdAt:-1});

    if (!todos.length > 0){
        return res.status(400).json({ error: "No Todos Found!" })
    }

    res.status(200).json({success:true,todos})
   

}

export {addTodo, deleteTodo, getTodos, updateTodo};