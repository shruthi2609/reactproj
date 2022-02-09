import { useEffect, useState } from "react"

const HooksLifeCycle=(props)=>{
const [userName,setUname]=useState(props.uname)
const [msg,setMsg]=useState(props.msg)
useEffect(()=>{
   setTimeout(()=>{
       setMsg(props.msg)
       setUname(props.uname)
      },5000)
})
return(
    <div>
        <h1>{userName}</h1>
        <h2>{msg}</h2>
    </div>
)

}
export default HooksLifeCycle