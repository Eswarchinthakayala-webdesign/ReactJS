const ValidPassword=()=><h1>Valid Password</h1>
const InvalidPassword=()=><h1>InValid Password</h1>
const Password=({isValid})=>
{
  
  return isValid? <ValidPassword/>:<InvalidPassword/>
}
const App = () => {
  return (
    <div>
      <Password isValid={false}/>
    </div>
  )
}

export default App
