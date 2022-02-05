import { useState } from "react";
const CounterHooks=(props)=>{
    const [count,setCount]=useState(props.count)
    const increment=()=>{
    setCount(count+1)
    }
    const decrement=()=>{
        if(count>0){
            setCount(count-1)
        }
    }
    return(
        <div>
            <h2> Hooks Example </h2>
            <p>{count}</p>
            <button onClick={()=>increment()}>+</button>
        { /**  <button onClick={()=>setCount(count+1)}>+</button>*/}
            <button onClick={()=>decrement()}>-</button>
        </div>
    )
}
export default CounterHooks