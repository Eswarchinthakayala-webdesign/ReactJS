import React, { useEffect, useState } from 'react'

const ExampleOne = () => {

    const [name,setName]=useState(()=>
    {
        const savedName=localStorage.getItem('name')
        return savedName?JSON.parse(savedName):''
    })
   
    const handleClear=()=>
    {
        setName("")
    }


    useEffect(()=>
    {
        localStorage.setItem('name',JSON.stringify(name))
    ,[name]})
    
    const handleChange=(e)=>
    {
    setName(e.target.value)
    }

  return (
    <div>
  <h1>Name:{name}</h1>
  <input type="text"  value={name}  onChange={handleChange} placeholder='Enter Your Name'/>
  <button onClick={handleClear}>Clear Name</button>

    </div>
  )
}

export default ExampleOne
