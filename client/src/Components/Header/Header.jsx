import React, { useEffect, useState } from 'react'
import { useAuth } from '../../Contexts/authContext'
import { Link } from 'react-router-dom'

function Header() {
  
  // const [active,setactive] = useState(false)

  const {user,userstatus,logout} = useAuth()

 

  const navItems = [
    {
      name: 'Home',
      link: '/',
      active: true

    },

    {
      name: 'Add Task',
      link: '/addtasks',
      active: userstatus
    },
    {

      name:'Login' ,   
      link: '/login',
     active: !userstatus  

    },

    {

      name:'SignUp',
      link:'/signup',
      active:!userstatus
      
    }

  ]


  return (
   <header>
    <h1>Task Master</h1>
    <ul>
       {
        navItems.map((item) => (

          item.active && 
          <li id='navlinks' key={item.name}>
            <Link style={{textDecoration:'none',color:'white'}} to={`${item.link}`}>{item.name}</Link>
          </li>
          

        ))
       }
       {userstatus && <button onClick={() => logout()} id='logoutbtn'>LogOut</button>}
    </ul>
   </header>
  )
}

export default Header
