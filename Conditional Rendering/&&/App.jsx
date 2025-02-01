
const App = () => {
  const products=["iphone","realme","oppo","samsung"]
  return (

    <div>
      {products.length>0 && <h1>You have {products.length} items in Cart</h1>}
      <h1>Products🛒 </h1>
      {products.map(product=>(
       <li key={Math.random()}>{product}</li>
      ))}
    </div>
    
  )
}

export default App
