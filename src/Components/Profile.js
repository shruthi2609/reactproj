import { useNavigate } from "react-router-dom"
import { useLocation } from "react-router-dom"
import { useParams } from "react-router-dom"
const Profile=()=>{
    const history=useNavigate()
   const location=useLocation()
    const {userName}=useParams()
    const qdata=new  URLSearchParams(location.search)
    const handleNavigation=()=>{
        history("/taskman")
    }
    console.log(userName)
return(
    <div>
        <h1> Welcome {userName}!</h1>
        <h3> We Love {qdata}</h3>
        <button onClick={()=>handleNavigation()}>view todays tasks</button>
    </div>
)
}
export default Profile