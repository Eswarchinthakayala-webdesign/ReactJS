import { useState,useEffect } from "react"
import { GiJetFighter } from "react-icons/gi"
const App = () => {


  const [data,setData]=useState([])
  useEffect(()=>
  {

    async function getData()
    {
     const response= await fetch("https://jsonplaceholder.typicode.com/posts")
     const data=await response.json()
     if(data&&data.length) setData(data)

    }
getData();
  },[])
  return (
    <div>
      {data.map(todo=>(
        <ul key={todo.id}>
            <li>UseID:{todo.userId}</li>
            <li>Title:{todo.title}</li>
            <li>Body:{todo.body}</li>
           
            <br />
        </ul>
      ))}
    </div>
  )
}

export default App
