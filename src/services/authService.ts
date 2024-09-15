import api from "../config/api";
import {User} from "../models/User";
interface AuthResponse{
    message:string;
    token:string;
}

export const register = async(user:User):
Promise<AuthResponse> =>{
    const reponse = await api.post("/register",user);
    return reponse.data
}

export const login = async(username:string,password:string):
Promise<AuthResponse> =>{
    const reponse = await api.post("/login",{username,password});
    return reponse.data
}

export const googleLogin = async():
Promise<void> =>{
  window.location.href=`${api.defaults.baseURL}/google`
}
