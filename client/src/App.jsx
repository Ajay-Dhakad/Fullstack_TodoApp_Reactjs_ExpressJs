import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

async function App() {

  const [user,setuser] = useState()
  const data = await fetch('http://localhost:4000/username/name',
  { method: "POST",
  headers: { "Content-Type": "application/json" }, body: JSON.stringify({ name: "John Doe" }) }).then(json => {
    return json.json()
  })
 
  console.log(data.name)

  const form = new FormData()
  form.append('image','hello')
  console.log(form)

  return(

<>

<h1>helllo</h1>
</>
  
  ) 
  
}

export default App
