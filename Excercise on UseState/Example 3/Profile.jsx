import { useState } from "react"


const Profile = () => {
    

   const[profile,setProfile]=useState({
        name:'',
        age:''
    })

    const handleChange=(e)=>
    {
        const {name,value}=e.target
        setProfile({...profile,[name]:value})
    }
  return (
    <div>
        <h2>Profile</h2>
        <div>
            <label>Name:
                <input type="text" name='name' value={profile.name} onChange={handleChange} placeholder="Enter the Name"/>
            </label>
            
        </div>
        <div>
        <label >Age:
                <input type="number" name='age' value={profile.age} onChange={handleChange}  placeholder="Enter Age" />
            </label>
        </div>

        <h3>Profile Information</h3>
        <p>Name:{profile.name}</p>
        <p>Age:{profile.age}</p>
    </div>
  )
}

export default Profile
