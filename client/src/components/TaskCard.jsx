import { BsCheck2Circle,BsTrash } from "react-icons/bs";
import { RxCrossCircled, RxPencil2 } from "react-icons/rx";
import {useTasks} from '../context/TaskContext';
import "./css/TaskCard.css";

const TaskCard = ({ task }) => {

  const {DeleteTask} = useTasks()

  


  return (
    <div className="TaskCard">
      <div className="TasCard_Checktitle">
        <span>
          {task.done === 1 ? (
            <BsCheck2Circle className="BsCheck2Circle" />
          ) : (
            <RxCrossCircled className="RxCrossCircled" />
          )}
        </span>
        <h2>{task.title}</h2>
      </div>

      <p>{task.description}</p>

      <div className="TaskCard_DateButtons">
        <p>{task.createAt}</p>
        <div className="TaskCard_DateButtons__buttons">
          <button><RxPencil2/></button>
          <button onClick={()=>DeleteTask(task.id)}><BsTrash/></button>
        </div> 
      </div>
    </div>
  );
};

export default TaskCard;
