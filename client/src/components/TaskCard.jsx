import { BsCheck2Circle,BsTrash } from "react-icons/bs";
import { RxCrossCircled, RxPencil2 } from "react-icons/rx";
import {deletedTasksRequest} from '../api/tasks.api.js'
import "./css/TaskCard.css";

const TaskCard = ({ task }) => {

  const DeleteTask = (id) => {  //hacemos la funcio la cual recibe un id que nos da al clickear en la papelera

    try {  // usamos try catch para obtener el error en caso de que alla

      deletedTasksRequest(id)// llamamos la funcion la cual borra la tarea de la base de datos
    } catch(error){ 
      console.log(error);
    }
  }


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
          <button onClick={DeleteTask(task.id)}><BsTrash/></button>
        </div> 
      </div>
    </div>
  );
};

export default TaskCard;
