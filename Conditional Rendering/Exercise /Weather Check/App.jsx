import Weather from "./components/Weather"

const App = () => {
  return (
    <div>
      <Weather temperature={16}/>
      <Weather temperature={14}/>
      <Weather temperature={26}/>
    </div>
  )
}

export default App
