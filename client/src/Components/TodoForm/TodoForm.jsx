import React, { useState } from 'react'
import { addTodo } from '../../TodoMenthods/FetchMethods.js'
import { useTodo } from '../../Contexts/TodoContext.jsx'

function TodoForm({user}) {

    const [title,settitle] = useState('')
    const [description,setdescription] = useState('')
    const [loader,setloader] = useState(false)
    const {dispatch} = useTodo()

    // console.log(title)

    // console.log(user.token)
    
    async function handleSubmit(e){
      e.preventDefault();
  
      if (title && description) {
          try {

            setloader(true)
              const token = user?.token;
              const todo = { title, description };

              // console.log(title)
  
              const addTodoResponse = await addTodo(todo, token);
              console.log(addTodoResponse)

              if (addTodoResponse.success){

                settitle('');
                setdescription('');
                dispatch({type:'createTodo',payload:addTodoResponse.todo})
                
                setloader(false)q

              }
  
            
          } catch (error) {
            setloader(false)
              console.error('Error adding todo:', error);
              // Handle the error as needed (e.g., display an error message to the user).
          }
      }
  };
    
  return (
    <form className="todoforminputs" onSubmit={handleSubmit}>
   
    
    <h2>Add a new task</h2>

        <input name='title' value={title} placeholder='Enter Your Title' type="text" onChange={(e)=>settitle(e.target.value)} required/>
        <input name='description' value={description} placeholder='Enter Your Description' type="text" onChange={(e)=>setdescription(e.target.value)} required/>
        <button  type='submit'>{ loader ? 'Adding...' :"Add Task"}</button>
   


    </form>
  )
}

export default TodoForm
