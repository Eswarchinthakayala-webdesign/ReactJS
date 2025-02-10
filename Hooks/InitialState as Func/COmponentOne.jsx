import { useState } from "react"

const ComponentOne = () => {

const[count,setCount]=useState(()=>
{
    const initial=10;
    return initial;
})
const increment=()=>
{
  setCount(prev=>prev+1)
}

  return (
    <div>
        <p>Count:{count}</p>
        <button onClick={increment}>Increment</button>
    </div>
  )
}

export default ComponentOne
