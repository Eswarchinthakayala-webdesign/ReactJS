
import { useState,useEffect } from "react"
const App = () => {
  const [value,setValue]=useState(0)
  useEffect(()=>
  {
   console.log("Use Effect",value)
  },[value])
  return (
    <div>
      <p>Count:{value}</p>
      <button onClick={()=>setValue(s=>s+1)}>Increment</button>
    </div>
  )
}

export default App
