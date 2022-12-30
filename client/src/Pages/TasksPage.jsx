import { useEffect, useState } from "react";
import {getTasksRequest} from '../api/tasks.api';
import TaskCard from '../components/TaskCard'
import TaskFilter from '../components/TaksFilter'
import TasksCalendar from '../components/TasksCalendar'
import './css/TasksPage.css'

const TasksPage = () => {


  const [Tasks, setTasks] = useState([])

  useEffect(() => {//para que se ejecute al iniciar la pagina

    const loadTasks = async() => {
      const response = await getTasksRequest() //resibimos las tareas y las guardamos en una constante
      setTasks(response.data); //actualizamos la variable Tasks con la funcion setTasks(response.data)
    }

    loadTasks();//llamamos la funcion loadTasks para ver las tareas al abrir la aplicacion

  }, []);

  const renderMain = () => { //hacemos un esto para poder hacer la condicional, en caso de no haber tareas
    if(Tasks.length === 0) return <h2 className="Notasksyet">No tasks yet</h2> // si tasks.length es igual  a cero
    return Tasks.map(task => (<TaskCard task={task} key={task.id}/>)) // si tasks no es igual a cero recorremos con un map
  }

  return (
    <>
      <div className="Container_Filter_Calendar"> 
        <TaskFilter />
        <TasksCalendar/>
      </div>
      
      <div className="Container_task">
        {renderMain()} 
      </div>
    </>
    // al final llamamos la funcion renderMain() para retornar las tareas o el mensaje en caso de que no las alla
  );
};

export default TasksPage;
