const ValidPassword=()=><h1>Valid Password</h1>
const InvalidPassword=()=><h1>InValid Password</h1>
const Password=({isValid})=>
{
  if(isValid)
  {
    return <ValidPassword/>
  }
  else
  {
    return <InvalidPassword/>
  }
}
const App = () => {
  return (
    <div>
      <Password isValid={true}/>
    </div>
  )
}

export default App
