import React from 'react'
import {motion} from 'framer-motion'
import { useAuth } from '../Contexts/authContext'
import {useNavigate} from 'react-router-dom'

function Homepage() {
  const {user} = useAuth()
  const navigate  = useNavigate()

  const handleclick = () => {

    if (user) {
      navigate('/addtasks')
    } else {
      navigate('/login')
    }
  }

  

  return (
    <div className='homepage'>

     <motion.h1 initial={{opacity:0,translateX:'-50px'}} whileInView={{opacity:1,translateX:0}} transition={{delay:.2}}>Create And Manage Your </motion.h1>
     <motion.h1 initial={{opacity:0,translateX:'50px'}} whileInView={{opacity:1,translateX:0}} transition={{delay:.3}}> Daily Tasks With <span>TaskMaster</span></motion.h1>
     <motion.button initial={{opacity:0}} whileInView={{opacity:1}} transition={{delay:.4}} onClick={handleclick} >Get Started Now!</motion.button>
      
    </div>
  )
}

export default Homepage
