
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
      {users.map((user)=>
      (
        <ul key={Math.random()}>
          <li>ID: {user.id}</li>
          <li>Name: {user.name}</li>
          <li>Email: {user.email}</li>
        </ul>
      ))}
    </div>
  )

}

export default App;
