import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { createBrowserRouter,RouterProvider } from 'react-router-dom'
import './index.css'
import Homepage from './Components/Homepage.jsx'
import Signup from './Components/Signup.jsx'
import Login from './Components/Login.jsx'


const router = createBrowserRouter([

  {
    path:'/',
    element:<App/>,
    children:[
      {path:'/',
    element:<Homepage/>}
    ,{
      path:'/login',
      element:<Login/>
    },
    {
      path:'/signup',
      element:<Signup/>
    }
       
    ]
}])


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}>
    <App />
    </RouterProvider>
  </React.StrictMode>
)
