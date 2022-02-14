import {connect} from "react-redux"
import Counter from "../Components/Counter"
import { increment,decrement } from "../actions"
const mapStatetoProps=(state)=>{
    return{
        count:state
    }
    
}
const mapDispatchProps=(dispatch)=>{
    return{
        increment:()=>dispatch(increment()),
        decrement:()=>dispatch(decrement())
    }
}
export default connect(mapStatetoProps,mapDispatchProps)(Counter)
