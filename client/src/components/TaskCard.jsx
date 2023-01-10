import { BsCheck2Circle, BsTrash } from "react-icons/bs";
import { RxCrossCircled, RxPencil2 } from "react-icons/rx";
import { useTasks } from "../context/TaskContext";
import { useNavigate } from "react-router-dom";
import { useLocalStorage } from 'usehooks-ts'
import "./css/TaskCard.css";
import { Draggable } from "react-beautiful-dnd";

const TaskCard = ({ task ,index }) => {
  
  const { DeleteTask, updateDone, } = useTasks(); // llamamos las funcione que vienen de context

  const [Active] = useLocalStorage('darkTheme', true)


  const navegate = useNavigate(); //para redireccionar

  const handleDone = async () => { //hacemos una funcion asincrona 
    await updateDone(task.id); //llamamos la funcion para acutualizar el done y esperamos el task id 
  };

  return (
    <Draggable key={task.id.toString()} draggableId={task.id.toString()} index={index}> 
      {(providedDrag) => (            
        <div {...providedDrag.draggableProps}
          ref={providedDrag.innerRef}
          {...providedDrag.dragHandleProps}
          className={Active ? "TaskCard" : "TaskCardDarth"}>
          <div className="TasCard_Checktitle">
            <span>

              {task.done? (
                <BsCheck2Circle
                  onClick={() => {
                    handleDone(task.done);// en un onClick llamamos la funcion para que al momento de hacer click se ejecute
                  }}
                  className="BsCheck2Circle"
                />
              ) : (
                <RxCrossCircled
                  onClick={() => {
                    handleDone(task.done);// en un onClick llamamos la funcion para que al momento de hacer click se ejecute
                  }}
                  className="RxCrossCircled"
                />
              )}
            </span>
            <h2 className="title">{task.title}</h2>
          </div>

          <p className="description">{task.description}</p>

          <div className="TaskCard_DateButtons">
            <p className="date">{task.createAt}</p>
            <div className={Active? "TaskCard_DateButtons__buttons" : "TaskCard_DateButtons__buttonsDart"}>
              <button onClick={() => navegate(`/edit/${task.id}`)}>
                <RxPencil2 />
              </button>
              <button onClick={() => DeleteTask(task.id)}>
                <BsTrash />
              </button>
            </div>
          </div>
        </div>
      )}
    </Draggable>
  );
};

//usamos navegite para redireccionar al from con la id, al hacer click en el button de editar 
// llamamos la funcion para eliminar la tarea del backend y pasamos la id

export default TaskCard;
