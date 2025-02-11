import { useState } from "react"

const Switcher = () => {


   const [sw,setSw]=useState(false) 
  return (
    <div>
        {sw? <span>Light</span>: <span>Dark</span>}
        <br />
        <input type="text" key={sw?"light":"dark"}  />
        <button onClick={()=>setSw((s)=>!s)}>Switch</button>
    </div>
  )
}

export default Switcher
