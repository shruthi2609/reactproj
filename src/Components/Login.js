import {useState} from "react"
import { useNavigate } from "react-router-dom"
const Login=()=>{
    const [userName,setuserName]=useState("")
    const [password,setpassword]=useState("")
    const [msg,setMsg]=useState("login")
    const history=useNavigate()
    const authenticateUser=(un,pw,e)=>{
        e.preventDefault()
        if(pw==="test123"){
            setMsg("login successfull")
        }
        else{
            setMsg("invalid credentials")
        }
        history(`/profile/${userName}?india`)

    }
    return(
        <div>
            <h1> Sign In </h1>
            <h3>{msg}</h3>
            <form>
        <input 
        type="text"
        placeholder="enter username"
        onChange={(event)=>setuserName(event.target.value)}

        ></input>
         <input 
        type="text"
        placeholder="enter password"
        onChange={(event)=>setpassword(event.target.value)}
        
        ></input>
         <button type="submit" onClick={(event)=>authenticateUser(userName,password,event)}>login</button>
            </form>
    {  /*      <button type="submit" onClick={authenticateUser(userName,password)}>login</button>*/}
        </div>
    )
}
export default Login