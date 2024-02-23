import { createContext,useContext,useReducer } from "react";


const TodoContext = createContext()

const TodoReducer  = (state,action) => {

    switch(action.type) {

        case 'settodo':
            return {
                todos: action.payload
            }

        case 'createTodo':
            return {
                todos: [action.payload,...state.todos]
            }

    
        case 'deleteTodo':
            return {
                todos: state.todos.filter(todo => todo._id!== action.payload)
            }

        case 'updateTodo':
            return {
                todos: state.todos.map(todo => todo._id === action.payload._id? action.payload : todo)
            }

            default:
                return state
        
    }   

}

export const TodoContextProvider = ({children}) => {
    const [state, dispatch] = useReducer(TodoReducer, {
        todos:null
    });

    return (
        <TodoContext.Provider value={{...state, dispatch}}>
            {children}
        </TodoContext.Provider>
    )

}


export const useTodo = () => {
    return useContext(TodoContext)
}