import {useState} from "react"
const Login=()=>{
    const [userName,setuserName]=useState("")
    const [password,setpassword]=useState("")
    const [msg,setMsg]=useState("login")
    const authenticateUser=(un,pw,e)=>{
        e.preventDefault()
        if(un==="jsl@gmail.com"&&pw==="test123"){
            setMsg("login successfull")
        }
        else{
            setMsg("invalid credentials")
        }
    }
    return(
        <div>
            <h1> Sign In </h1>
            <h3>{msg}</h3>
            <form>
        <input 
        type="text"
        placeholder="enter email"
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