import { useState,useMemo } from "react"
import {TextField,Button} from "@mui/material"

const ContactDisplay=(props)=>{
    const [text,setText]=useState("")
    const [searchText,setSearchText]=useState("")
    const getContacts=useMemo(()=>{
        return props.contact.filter((item)=>item.name===searchText)
    },[props.contact,searchText])
    //getConatcts=useMemo()
    return(
        <div>
           <TextField id="outlined-basic" label="name" variant="outlined" 
           onChange={(e)=>setText(e.target.value)}/>
       
            <Button variant="contained"  onClick={(e)=>setSearchText(text)}>search</Button>

            
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