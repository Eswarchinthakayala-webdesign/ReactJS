import { useState } from "react"

const TodoList = () => {


    const [todos,setTodos]=useState([])
    const [inputValue,setInputValue]=useState('')
   
    const handleSubmit=(e)=>
    {
        e.preventDefault();
        if(inputValue.trim())
            {
            setTodos([...todos,inputValue])
            setInputValue('')
         }
    }
    
    const handleChange=(e)=>
    {   
        setInputValue(e.target.value)
    }

  return (
    <div>
    <h1>Todo List</h1>
    <form  onSubmit={handleSubmit}>
  
    <input type="text" value={inputValue}  onChange={handleChange} placeholder="Add a Todo"/>
     <button type="submit">Add Todo</button>
    </form>
  <ul>
    {todos.map((t,i)=>(
        <li key={i}>{t}</li>
    ))}
  </ul>
    </div>
  )
}

export default TodoList
