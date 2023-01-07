import { useEffect, useState } from "react";
import TaskCard from "../components/TaskCard";
import TaskFilter from "../components/TaksFilter";
import TasksCalendar from "../components/TasksCalendar";
import { useLocalStorage } from "usehooks-ts";
import { useTasks } from "../context/TaskContext";
import "./css/TasksPage.css";

const TasksPage = () => {
  const { Tasks, loadTasks } = useTasks(); // llamamos del contexto las funciones
  const [Active] = useLocalStorage("darkTheme", true);

  const [Filterselected, setFilterselected] = useState("all");

  useEffect(() => {
    //para que se ejecute al iniciar la pagina
    loadTasks(); //llamamos la funcion loadTasks para ver las tareas al abrir la aplicacion
    //eslint-disable-next-line
  }, []);

  //Filters
  const handleClickAll = () => {
    setFilterselected("all");
  };
  const handleClickSoples = () => {
    setFilterselected("incomplete");
  };
  const handleClickCompleted = () => {
    setFilterselected("complete");
  };

  const [Search] = useLocalStorage("Search", "");

  const renderMain = () => {
    //hacemos un esto para poder hacer la condicional, en caso de no haber tareas

    let newTask = [];

    if (Filterselected === "all") {
      newTask = Tasks;
    } else if (Filterselected === "complete") {
      newTask = Tasks.filter((task) => task.done === 1);
    } else if (Filterselected === "incomplete") {
      newTask = Tasks.filter((task) => task.done === 0);
    }

    const newTasksWithSearch = newTask?.filter(item => {
      if(item?.title?.includes(Search)){
        return true
      }else{
        return false
      }
    })

    if (newTasksWithSearch.length === 0)
    return <h2 className="Notasksyet">No tasks yet</h2>; // si tasks.length es igual  a cero
    return newTasksWithSearch.map((task) => <TaskCard task={task} key={task.id} />); // si tasks no es igual a cero recorremos con un map
  };

  return (
    <>
      <div className="Container_Filter_Calendar">
        <TaskFilter
          handleClickSoples={handleClickSoples}
          handleClickAll={handleClickAll}
          handleClickCompleted={handleClickCompleted}
        />
        <TasksCalendar />
      </div>

      <div className={Active ? "Container_task" : "Container_taskDart"}>
        {renderMain()}
      </div>
    </>
    // al final llamamos la funcion renderMain() para retornar las tareas o el mensaje en caso de que no las alla
  );
};

export default TasksPage;
