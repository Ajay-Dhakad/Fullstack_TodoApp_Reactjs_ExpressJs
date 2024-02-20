import { useEffect, useState } from 'react'
import { Outlet } from "react-router-dom";
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import { useAuth } from './Contexts/authContext';
import {useLocation} from 'react-router-dom'


function App() {

  const [loader, setLoader] = useState(true)
  const {user,login,userstatus,logout,updatestatus} = useAuth();
  const {pathname} = useLocation()

  // console.log(pathname)
    console.log(user)
    console.log(userstatus)
  
    

  const getUser = async (auth_token) => {
    // console.log(auth_token.json())
    const userInfo = await fetch('http://localhost:3000/user/getuser',{
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${auth_token}`
      }
    })

    const userdata = await userInfo.json()

    if (!userdata.success){
      logout()
      setLoader(false)
    }
      
    if (userdata.success){
     login({...userdata.user, token : auth_token})
     setLoader(false)
    }




   }

  useEffect(() => {
  const auth_token = JSON.parse(localStorage.getItem('auth_token'));
   
    if (auth_token){
     
      if (!user){
        getUser(auth_token)
        updatestatus()
        // setLoader(false);
      }  
    } 
    else{
      logout()
      setLoader(false);
    }
  })

return(



<main>

<Header/>
{loader ? <div className="loadercontainer"><span className="loader"></span></div> : <Outlet/>}
<Footer/>

</main>


  
  ) 
  
}

export default App;
