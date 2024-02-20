import React, { useEffect, useState } from 'react'
import { useAuth } from '../Contexts/authContext'
import { getTodos } from '../TodoMenthods/FetchMethods.js'
import TodoForm from './TodoForm/TodoForm.jsx'

 function addTasks() {
    const {user} = useAuth()
    const [todos,settodos] = useState(null)
    console.log(todos)
   
    useEffect(() => {
     
        const token = user?.token;
        const fetchTodos = async () => {
          try {
            const todoData = await getTodos(token);
            if (todoData){
              settodos(todoData.todos)
            }
            
          } catch (error) {
            console.error('Error fetching todos:', error);
          }
        };
    if (user){
       
          fetchTodos(token);
        }
      }, [user]); // Em



    
  return (
    <div className='addtasks'>
      
        <TodoForm user={user}/>
        
  
   <div className="availabletasks">

    {/* <h1>hello</h1> */}
   {

    todos?.length > 0 ? 
      todos.map((todo,index) => (
        <div className="todo" key={todo._id}>
          <h3>{todo.title}</h3>
          <p>{todo.description}</p>
        </div>
      )) : "No tasks yet!"
  

   }
   </div>

    </div>
  )
}

export default addTasks;
