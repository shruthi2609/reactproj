import React from "react";
import CompletedTask from "./CompletedTask";
import PendingTask from "./PendingTask";
class TaskManager extends React.Component{
    constructor(props){
        super(props)
        this.state={
            tasks:[
                {
                    title:"buy egss",
                    completionStatus:true,
                    id:1
                },
                {
                    title:"buy milks",
                    completionStatus:false,
                    id:2
                },
                {
                    title:"buy bread",
                    completionStatus:true,id:3
                },
                {
                    title:"buy rice",
                    completionStatus:false,
                    id:4
                },
            ]
        }
    }
    getPending(){
       const result= this.state.tasks.filter((item)=>item.completionStatus===false)
       return result
    }
    getCompleted(){
        const result= this.state.tasks.filter((item)=>item.completionStatus===true)
        return result
    }
    testFunction(){
        return "test"
    }
    
    render(){
        return(
            <div>
                <PendingTask fun1={this.getPending()} ></PendingTask>
                <CompletedTask fun1={this.getCompleted()}></CompletedTask>
            </div>

        )
    }
}
export default TaskManager