import React, { useEffect, useState } from 'react'
import { useAuth } from '../Contexts/authContext'
import { getTodos,deleteTodo } from '../TodoMenthods/FetchMethods.js'
import TodoForm from './TodoForm/TodoForm.jsx'
import {useTodo} from '../Contexts/TodoContext.jsx'
 function addTasks() {
    const {user} = useAuth()
    // const [todos,settodos] = useState(null)
    const {todos,dispatch} = useTodo()
    console.log(todos)
    console.log('hello')
   
    useEffect(() => {
     
        const token = user?.token;
        const fetchTodos = async () => {
          try {
            const todoData = await getTodos(token);
            if (todoData){
              dispatch({type:'settodo',payload:todoData.todos})
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
          <div className="todocontent">
          <h3>{todo.title}</h3>
          <p>{todo.description}</p>
          </div>
          <div className="todoactions">
            <button onClick={() => {deleteTodo(todo._id,user.token);dispatch({type:'deleteTodo',payload:todo._id})}}>❌</button>
            <button>🖊️</button>
          </div>

        </div>
      )) : "No tasks yet!"
  

   }
   </div>

    </div>
  )
}

export default addTasks;
