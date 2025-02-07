
const MyComponent = () => {
      const handleClick=()=>
      {
        alert("Button Was Clicked")
      }

  return (
   <button onClick={handleClick}>Click me</button>
  )
}

export default MyComponent
