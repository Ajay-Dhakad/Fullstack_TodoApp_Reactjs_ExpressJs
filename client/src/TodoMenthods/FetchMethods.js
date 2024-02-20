
export const getTodos = async(token) => {

    const todoData =await fetch('http://localhost:3000/todo/gettodos',{
        method:'GET',   
        headers:{
            'content-type':'application/json',
            'Authorization': `Bearer ${token}`
        }
    })

    const todo = await todoData.json()

    if (todo.success){
        return todo
    }
    else{
        return null
    }

}

export const addTodo = async(todo,token) => {

    const todoData =await fetch('http://localhost:3000/todo/addtodo',{
        method:'POST',   
        headers:{
            'content-type':'application/json',
            'Authorization': `Bearer ${token}`
        },
        body:JSON.stringify(todo)
    })

    const data =await  todoData.json();
    
   return data;

}

export const updateTodo = async(todo,token) => {

    const todoData =await fetch('http://localhost:3000/todo/updatetodo',{
        method:'PATCH',   
        headers:{
            'content-type':'application/json',
            'Authorization': `Bearer ${token}`
        },
        body:JSON.stringify(todo)
    })

    const data =await  todoData.json();
    
   return data;
}


export const deleteTodo = async(id,token) => {

    const todoData =await fetch(`http://localhost:3000/todo/deletetodo/${id}`,{
        method:'DELETE',   
        headers:{
            'content-type':'application/json',
            'Authorization': `Bearer ${token}`
        }  
    })

    const data = await todoData.json()

    return data;
}






