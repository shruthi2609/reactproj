const CompletedTask=(props)=>{
    return(
        <div>
                <h1>Completed Task </h1>
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
export default CompletedTask