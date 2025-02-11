
import { useState,useEffect } from "react"
const App = () => {
  const [value,setValue]=useState(0)

  const [v,setV]=useState(0);
  // useEffect(()=>
  // {
  //   console.log("Counter 2",v)
  // },[v])
  useEffect(()=>
  {
   console.log("Counter 1",value)
   console.log("Counter 2",v)
   document.title=`Use Effect ${value}`
},[v,value])
  return (
    <div>
      <p>Counter 1:{value}</p>
      <button onClick={()=>setValue(s=>s+1)}>Increment 1</button>
      <p>Counter 2:{v}</p>
      <button onClick={()=>setV(s=>s+1)}>Increment 2</button>
    </div>
  )
}

export default App
