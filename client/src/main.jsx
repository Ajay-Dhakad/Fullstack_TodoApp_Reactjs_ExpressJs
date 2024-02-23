import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { createBrowserRouter,RouterProvider } from 'react-router-dom'
import './index.css'
import Homepage from './Components/Homepage.jsx'
import Signup from './Components/Signup.jsx'
import Login from './Components/Login.jsx'
import { AuthContextProvider } from './Contexts/authContext.jsx'
import { useAuth } from './Contexts/authContext.jsx'
import RouteProtector from './routeProtector/routeProtector.jsx'
import AddTasks from './Components/addTasks.jsx'
import { TodoContextProvider } from './Contexts/TodoContext.jsx'



const router = createBrowserRouter([

  {
    path:'/',
    element:<App/>,
    children:[
      {path:'/',
    element:<Homepage/>}
    ,{
      path:'/login',
      element:<RouteProtector authentication={false}><Login/></RouteProtector>
    },
    {
      path:'/signup',
      element:<RouteProtector authentication={false}><Signup/></RouteProtector>
    },{

      path:'/addtasks',
      element:<RouteProtector authentication><AddTasks/></RouteProtector>

    }
       
    ]
}])


ReactDOM.createRoot(document.getElementById('root')).render(
    <TodoContextProvider>
    <AuthContextProvider>
    <RouterProvider router={router}/>
    </AuthContextProvider>
    </TodoContextProvider>
)
