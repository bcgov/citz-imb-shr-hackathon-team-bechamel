import { useState, useEffect } from 'react'
import './App.css'

function App () {
  const [info, setInfo] = useState("");
  async function setData() {
    const data = await fetch("http://localhost:3000/api/data")
    setInfo( await data.json())
  }

// console.log(dataI)
useEffect(()=> {
  setData();
  console.log(info);
},[]);



  return (
    <>
      <div>
       
      <h1>Hello World</h1>
      <h2>SHR Dashboard</h2>

      </div>

    </>
  )
}

export default App
