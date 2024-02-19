import { useEffect, useState } from 'react'
import { Outlet } from "react-router-dom";
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';



function App() {

  const [user,setuser] = useState(null)
  const [token,settoken] = useState(null)


  const getUser = async (auth_token) => {
    // console.log(auth_token.json())
    const userInfo = await fetch('http://localhost:3000/user/getuser',{
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${auth_token}`
      }
    })

    const user = await userInfo.json()

    if (!user.success){
      console.log(null) //
    }

    if (user.success){
     console.log(user.user.name)
    }




   }

  useEffect(() => {

    const auth_token =JSON.parse( localStorage.getItem('auth_token'));

    if (auth_token){
      getUser(auth_token)
    } 
   

  },[])

return(

<>

<main>
  <h1>hello {user && user}</h1>
  <p>{token && token}</p>
<Header/>
<Outlet/>
<Footer/>
</main>

</>
  
  ) 
  
}

export default App;
