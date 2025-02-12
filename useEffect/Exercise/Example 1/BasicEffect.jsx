import { useEffect } from "react"

const BasicEffect = () => {
    useEffect(()=>
    console.log("Basic Component mounted"))
  return (
    <div>
    <h1>
        Check the Console
    </h1>
    </div>
  )
}

export default BasicEffect
