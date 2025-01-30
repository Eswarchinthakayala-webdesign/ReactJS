
const App=()=>
{
  
  const users=[

    {
      id:1,
      name:"Eswar",
      email:"Eswar@gmail.com"
    },
    {
      id:2,
      name:"Sriram",
      email:"Sriram@gmail.com"
    },
    {
      id:3,
      name:"Vamsi",
      email:"Vamsi@gmail.com"
    }
  ]

  return (

    <div>
      {users.map(({id,name,email})=>
      (
        <ul key={Math.random()}>
          <li>ID: {id}</li>
          <li>Name: {name}</li>
          <li>Email: {email}</li>
        </ul>
      ))}
    </div>
  )

}

export default App;
