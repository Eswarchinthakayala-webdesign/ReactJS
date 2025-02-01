

const Props = () => {
    const name="Eswar"
    const id=123;
    const email="Eswar@gmail.com"

    return(
        <Details   name={name} id={id} email={email} />
    )
   
}
const Details=({name,id,email})=>
{

    
    return (
       <div>
          <h1>Name:{name}</h1>
          <h2>ID:{id}</h2>
          <h3>Email:{email}</h3>
       </div>
    )
   
}



export default Props;
