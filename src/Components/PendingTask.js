const PendingTask=(props)=>{
    console.log("in pending",props)
    return(
        <div>
            <h1>Pending Tasks</h1>
{
    props.fun1.map((item)=>(
        <div>
            <h3>{item.title}</h3>
       
        </div>
    ))
}
        </div>
    )
}
export default PendingTask