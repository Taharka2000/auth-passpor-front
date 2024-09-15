import React,{useState} from "react";
import { googleLogin, login } from "../../services/authService";
const Login: React.FC=()=>{

    const[username,setUsername]=useState("");
    const[password,setPassword]=useState("");

    const handleLOgin=async(e:React.FormEvent)=>{
        e.preventDefault();
        try{
            const{token}=await login(username,password);
            localStorage.setItem("token",token);
            alert("Logged succes")
        }catch(err){
            console.log(err);
            alert("LOgin Failed")
        }
    }
return(
    <form onSubmit={handleLOgin}>
        <div>
            <label>Username:</label>
            <input type="text" value={username} onChange={e=>setUsername(e.target.value)}/>
        </div>
        <div>
            <label>Password:</label>
            <input type="text" value={password} onChange={e=>setPassword(e.target.value)}/>
        </div>
        <button type="submit">Login</button>
        <button type="button" onClick={googleLogin}>Login with google</button>
    </form>
)
}
export default Login;