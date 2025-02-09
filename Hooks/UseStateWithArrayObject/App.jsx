import { useState } from "react"



const App = () => {
   
  const [movies,setMovies]=useState([
      { id:1,
        title:"Pushpa",
        rating:5,
      },
      {
        id:2,
        title:"RRR",
        rating:4,
      },
      {
        id:3,
        title:"kalki",
        rating:5,
      }
    ])
    const handleClick=()=>
    {
      setMovies(movies.map(m=>m.id===1?{...movies,title:"pushpa2"}:{...m}))
    }
  return (

    <div>
     {movies.map(m=>(
      <li key={Math.random()} >{m.title}</li>
     ))}

     <button onClick={handleClick}>Change Movie</button>
    </div>
  )
}

export default App
