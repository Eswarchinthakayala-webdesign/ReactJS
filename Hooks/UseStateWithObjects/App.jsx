import { useState } from "react"



const App = () => {
   
  const [movie,setMovie]=useState({
    title:"Pushpa",
    rating:5,
  })
  const handleClick=()=>{

    setMovie({...movie,rating:6})
  } 
  return (

    <div>
     <h1>{movie.title}</h1>
     <p>{movie.rating}</p>
     <button onClick={handleClick}>Change rating</button>
    </div>
  )
}

export default App
