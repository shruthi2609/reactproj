import { useState,useMemo } from "react"

const ContactDisplay=(props)=>{
    const [text,setText]=useState("")
    const [searchText,setSearchText]=useState("")
    const getContacts=useMemo(()=>{
        return props.contact.filter((item)=>item.name===searchText)
    },[props.contact,searchText])
    //getConatcts=useMemo()
    return(
        <div>
            <input type="text" onChange={(e)=>setText(e.target.value)}></input>
            <button onClick={(e)=>setSearchText(text)} >search</button>
            {
                getContacts.map(
(item)=>(
    <div>
        <h1>{item.name}</h1>
        <h2>{item.phone}</h2>
    </div>
)
                )
            }
        </div>
    )
}
export default ContactDisplay