import React, { useContext, useState } from "react";
import Input from "../UI/Input/Input";
import PrimaryButton from "../UI/Buttons/PrimaryButton";
import { postLogin } from "../api/postLogin";
import { AuthContext } from "../context/authContext";
import { Navigate } from "react-router-dom";


const Login = ()=>{

    let [login, setLogin] = useState("")
    let [password, setPassword] = useState("")

    let {isAuth, setIsAuth} = useContext(AuthContext);

    let clk = async()=>{
        let res = await postLogin(login, password)
        if(res.ok){
            let parsed = await res.json()
            localStorage.setItem("user", JSON.stringify(parsed))
            setIsAuth(true)
        }
        
    }

    
    

    return(
        <div className="login content-wrap">
            <Input placeholder="Login"  value={login} onChange={(e)=>{setLogin(e.target.value)}} />
            <Input placeholder="Password" value={password} onChange={(e)=>{setPassword(e.target.value)}} />
            <PrimaryButton onClick={clk}>Login</PrimaryButton>
            {isAuth ? <Navigate to="/" />: null}
        </div>
    )
}

export default Login