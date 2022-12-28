const TaskCard = ({task}) => {
    return ( 
        <div> 
            <h2>{task.title}</h2>
            <p>{task.createAt}</p>
            <p>{task.description}</p>
            <span>finished{task.done === 1 ? "✔️" : "❌"}</span>
            <button>Edit</button>
            <button>Delete</button>
        </div>
    )
}

export default TaskCard;