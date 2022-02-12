import { useEffect, useState } from "react"
import axios from "axios"
const TodoAPI=()=>{
    const [tododata,setTodo]=useState([])
{ /*  const handleAPI=()=>{
       fetch("https://jsonplaceholder.typicode.com/todos",{method:GET}).then((res)=>res.json()).then((data)=>setTodo(data))
     axios.get("https://jsonplaceholder.typicode.com/todos").then((res)=>setTodo(res.data)).catch((err)=>console.log(err))

    }*/}
    useEffect(
        ()=>setTimeout(()=>{
            axios.get("https://jsonplaceholder.typicode.com/todos").then((res)=>setTodo(res.data)).catch((err)=>console.log(err))  
        },2000)  
    )
    return(
        <div>
            <h1>Todo Data</h1>
       {  /*   <button onClick={()=>handleAPI()}>call API</button>*/}
            {
                tododata.map((item)=><h1>{item.title}</h1>)
            }
        </div>
    )
}
export default TodoAPI