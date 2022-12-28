import { BsCheck2Circle,BsTrash } from "react-icons/bs";
import { RxCrossCircled ,RxPencil2} from "react-icons/rx";
import "./css/TaskCard.css";

const TaskCard = ({ task }) => {
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
          <button><BsTrash/></button>
        </div> 
      </div>
    </div>
  );
};

export default TaskCard;
