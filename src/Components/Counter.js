const Counter=(props)=>{
    const {count,increment,decrement}=props
    return(
        <div>
            <h1>{count}</h1>
            <button onClick={increment}>increment</button>
            <button onClick={decrement}>decrement</button>
            </div>
    )
}
export default Counter