import UserStatus from "./UserStatus"

const App = () => {

  return (
    <div>

   <UserStatus loggedIn={true} isAdmin={false}/>
   <UserStatus loggedIn={true} isAdmin={true}/>
   <UserStatus loggedIn={false} isAdmin={true}/>



    </div>
  )
}

export default App
