import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import UseLogin from '../AuthHandlers/UseLogin'
import { useNavigate } from 'react-router-dom';

function Login() {

  const [email,setemail] = useState('')
  const [password,setpassword] = useState('')
  const [error,seterror] = useState(null)

  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
         const status =  await UseLogin(email, password, seterror);
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

   <form onSubmit={handleLogin} className='SignupForm' >
    <br />
    <h1>Login to your account</h1>
    <div className="inputfield">

      <input value={email} onChange={(e) => setemail(e.target.value)} type="text" name="email" placeholder="Email" required/>
      <input value={password} onChange={(e) => setpassword(e.target.value)} type="password" name="password" placeholder="Password" minLength={7} required/>
      <button   type='Submit'>Login</button>
      <p>Dont have any account ? <Link to={'/signup'}>SignUp</Link></p> 

    </div>  

    <p className='error'>{error && error}</p>



   </form>
  )
}

export default Login
