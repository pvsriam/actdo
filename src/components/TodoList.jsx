import { useState } from "react"
import TodoItem from "./TodoItem"

function TodoList(props) {
    const activityArr=props.activityArr
    const setactivityArr=props.setActivityArr
    return (
        <div className="bg-[#BDB4EA] border rounded-md p-2 flex-grow  ">
            <h1 className="text-2xl font-medium">Today's Activity</h1>
            
            {activityArr.length===0?<p>You havent added anything</p>:''}
            {
                activityArr.map(function(item,index){
                    return <TodoItem activity={item.activity} id={item.id} index={index} activityArr={activityArr} setActivityArr={setactivityArr}/>

                })
            }
        </div>

    )
}
export default TodoList