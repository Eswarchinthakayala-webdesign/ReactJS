import React from 'react'

const App = () => {

    const myName="Eswar"
    const unRead=3
    const isLogged=true
  return (
   <>
   
   {2+2}
   <h1>{myName}</h1>
   {unRead>2 &&<p> You have {unRead} Messages</p> }
   {isLogged ? "Welcome Back":"Please Sign in"}
   
   </>
  )
}

export default App
