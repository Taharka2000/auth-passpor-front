import React,{useState} from "react";
import {register } from "../../services/authService";
import { User } from "../../models/User";
const Register: React.FC=()=>{

    const[user,setUser]=useState<User>({username:"",email:"",password:""})

    const handleRegister=async(e:React.FormEvent)=>{
        e.preventDefault();
        try{
           await register(user)
            alert("Logged succes")
        }catch(err){
            console.log(err);
            alert("LOgin Failed")
        }
    }
return(
    <form onSubmit={handleRegister}>
        <div>
            <label>Username:</label>
            <input type="text" value={user.username} onChange={e =>setUser({...user,username:e.target.value})}/>
        </div>
        <div>
            <label>Email:</label>
            <input type="text" value={user.email} onChange={e =>setUser({...user,email:e.target.value})}/>
        </div>
        <div>
            <label>Password:</label>
            <input type="password" value={user.password} onChange={e =>setUser({...user,password:e.target.value})}/>
        </div>
        <button type="submit">Register</button>
    </form>
)
}
export default Register;