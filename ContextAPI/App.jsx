import ComponentA from "./components/ComponentA"
import { createContext } from "react"
export const Data=createContext()
const App = () => {
  
  const name="Sriram"
 
  return (

    <div>
    <Data.Provider value={name}>

   <ComponentA/>
   </Data.Provider>
     
    </div>
  )
}

export default App
