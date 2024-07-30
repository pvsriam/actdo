function TodoItem(props) {
    const activityArr = props.activityArr
    const setactivityArr = props.setActivityArr

function handleDelete(removeid)
{
    let tempArr = activityArr.filter(function(item){
        if (item.id === removeid)
        {
            return false
        }
        else{
            return true
        }

    }) 
    setactivityArr(tempArr)
}

    return (

        <div className="flex justify-between">
            <p>{props.index + 1}.{props.activity}</p>
            <button className="text-red-500" onClick={()=>handleDelete(props.id)}>Delete</button>
        </div>
    )
}
export default TodoItem