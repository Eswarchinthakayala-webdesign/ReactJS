import { useState } from "react"



const App = () => {
  const[friend,setFriends]=useState(["Eswar","Sriram"])
 
  return (

    <div>
      {friend.map((f)=>(
        <li key={Math.random()}>{f}</li>
      ))}

    </div>
  )
}

export default App
