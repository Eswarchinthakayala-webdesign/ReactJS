import { useState } from "react"



const ShoppingList = () => {
    const [items,setItems]=useState([])
    const [name,setName]=useState('')
    const [quantity,setQuantity]=useState('')
   
    const  handleSubmit=(e)=>
    { 
        e.preventDefault();
        if(!name||!quantity) return;
        const newItem={
            name,
            quantity:parseInt(quantity)
        }
        setItems([...items,newItem])
        setName('')
        setQuantity('')

    }

  return (
    <div>
        <h1>Shopping Mart</h1>
        <form onSubmit={handleSubmit}>
            <input 
            type="text"
            value={name}
            onChange={(e)=>setName(e.target.value)} 
            placeholder="Enter the Item"
            />
             <input 
            type="text"
            value={quantity}
            onChange={(e)=>setQuantity(e.target.value)} 
            placeholder="Enter the Quantity"
            />
            <button type="submit"> Add item</button>
        </form>
        <ul>
            {items.map((i,index)=>(
                <li key={index}>Item:{i.name}-Quantity:{i.quantity}</li>

            ))}
        </ul>
    </div>
  )
}

export default ShoppingList
