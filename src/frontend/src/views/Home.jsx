import { useState, useEffect } from 'react'
import '../App.css'
import Button from '@mui/material/Button';

function Home () {
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

      <Button href="/dashboard">Go To Dashboard</Button>
      </div>

    </>
  )
}

export default Home