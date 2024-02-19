import React, { useState } from 'react'
import {Link} from 'react-router-dom'
import UseSignUp from '../AuthHandlers/useSignUp'
import { useNavigate } from 'react-router-dom';


function Signup() {

  const [email,setemail] = useState('')
  const [password,setpassword] = useState('')
  const [name,setname] = useState('')
  const [error,seterror] = useState(null)

  const navigate = useNavigate();



  
  const handleSignup = async (e) => {
    e.preventDefault();

    try {
         const status =  await UseSignUp(name, email, password, seterror);
         if (status){
           navigate('/');
         }
    } catch (error) {
      console.error('Error during signup:', error);
      // Handle error as needed
      seterror('An error occurred during signup.');
    }
  };


  return (

   <form onSubmit={handleSignup} className='SignupForm' >
    <h1>Create Account</h1>

    <div className="inputfield">

      <input value={name} onChange={(e) => setname(e.target.value)} type="text" name="name" placeholder="name"  required/>
      <input value={email} onChange={(e) => setemail(e.target.value)} type="text" name="email" placeholder="Email" required/>
      <input value={password} onChange={(e) => setpassword(e.target.value)} type="password" name="password" placeholder="Password" minLength={7} required/>
      <button   type='Submit'>SignUp</button>
      <p>Already Have an Account ? <Link to={'/login'}>Login</Link></p> 

    </div>  
    <p className='error'>{error && error}</p>



   </form>
  )
}

export default Signup
