import React from 'react'

const App = () => {

    const numbers=[1,2,3,4,5,6]
  return (
    <div>
      {numbers.map(number=>(

        <ul key={Math.random()}>
            <li>{number}</li>
        </ul>
      ))}
    </div>
  )
}

export default App
