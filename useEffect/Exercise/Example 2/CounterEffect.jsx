import { useEffect, useState } from "react"

const CounterEffect = () => {
    

    const[count,setCount]=useState(0)

    useEffect(()=>
    {
       
        document.title=`Title ${count}`
    },[count])

    return (
    <div>
        <button onClick={()=>setCount(count+1)}>Change Title</button>
    </div>
  )
}

export default CounterEffect
