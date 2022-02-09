import { useState } from "react"
import ContactDisplay from "./ContactDisplay"
const data=[
    {
       "id":1,
       "name":"user1",
       "phone":"88888888"

    },
    {
        "id":2,
        "name":"user2",
        "phone":"8888998"
 
     },
     {
        "id":3,
        "name":"john",
        "phone":"00000"
 
     },
     {
        "id":3,
        "name":"john",
        "phone":"000999000"
 
     }
]
const ContactBooks=()=>{
    const [contacts,setContacts]=useState(data)
    return(
        <ContactDisplay contact={contacts}></ContactDisplay>
    )

}
export default ContactBooks