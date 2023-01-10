import TaskCard from "../components/TaskCard";
import TaskFilter from "../components/TaksFilter";
import TasksCalendar from "../components/TasksCalendar";
import {DragDropContext,Droppable} from 'react-beautiful-dnd'
import { useEffect, useState } from "react";
import { useLocalStorage } from "usehooks-ts";
import { useTasks } from "../context/TaskContext";
import "./css/TasksPage.css";


// La pagina inicial
const TasksPage = () => {

  // llamamos del contexto las funciones para cargar las funciones 
  const { Tasks, loadTasks } = useTasks(); 

  // Resivimos en Active el valor de localStorage (true/false) para cambiar el tema
  const [Active] = useLocalStorage("darkTheme", true);


  // Creamos un useState para saber que campo estamos dando click y actulizamos segun la funcion
  const [Filterselected, setFilterselected] = useState("all");// empieza en all para traer todas las tareas

  useEffect(() => {
    // Usamos useEffect para que al iniciar la pagina se actualize Tasks
    loadTasks(); // llamamos la funcion loadTasks para ver las tareas al abrir la aplicacion
    //eslint-disable-next-line
  }, []);

  //Filters funciones //Se pasan por parametros a <TaskFilter/>
  const handleClickAll = () => { 
    setFilterselected("all"); //actualiza el estado con el valor "ALL"
  };
  const handleClickSoples = () => {
    setFilterselected("incomplete"); //actualiza el estado con el valor "incomplete"
  };
  const handleClickCompleted = () => {
    setFilterselected("complete"); //actualiza el estado con el valor "complete"
  };

  // Resivimos en Search, el valor Search del LocalStorage
  const [Search] = useLocalStorage("Search", "");


  // hacemos un esto para poder hacer la condicional, en caso de no haber tareas y renderizar las tareas
  const AllTasks = () => {

    // Creamos variable
    let newTask = [];

    // Hacemos una condicional 
   
    if (Filterselected === "all") {
      // Si el valor Filterselected es igual a "all"  
      newTask = Tasks; 
      // Quiero que newTask sea igual a Tasks(osea todas las tareas)
      
    } else if (Filterselected === "complete") {
      // Pero en caso de que Filterselected sea igual "complete"
      newTask = Tasks.filter((task) => task.done === 1);
      // Quiero filtrar todas las tareas en donde el done sea igual a 1 y lo guardo el la variable newTask 

    } else if (Filterselected === "incomplete") {
      // Pero en caso de que Filter sea igual "incomplete" 
      newTask = Tasks.filter((task) => task.done === 0);
      // Quiero filtrar todas las tareas en donde el done sea igual a 0 y lo guardo el la variable newTask 
    }

    // Filtramos las tareas de NewTask y guardamos en newTasksWithSearch
    const newTasksWithSearch = newTask?.filter(task => {

      // Si task.title icluye o es igual a Search(el valor que resivimos del LocalStorage)
      if(task?.title?.includes(Search)){
        return true 
      }else{
        return false 
      }
      
    })

    
    //POR ULTIMO SI newTask PASA POR TODOS LOS FILTROS //

    // si newTasksWithSearch.length es igual  a cero
    if (newTasksWithSearch.length === 0) return <h2 className="Notasksyet">No tasks yet</h2>; 
    
    // si newTasksWithSearch no es igual a cero recorremos con un map
    return (


      <DragDropContext onDragEnd={(result) => console.log(result)}> 
        
        <Droppable droppableId="droppable"> 
          {(providedDrop)=> (
            <div {...providedDrop.droppableProps}
              ref={providedDrop.innerRef}
              className={Active ? "Container_task" : "Container_taskDart"}
            >
              {
                newTasksWithSearch.map((task,index) => (  
                     
                  <TaskCard task={task} key={task.id} index={index} />
                
                ))     
              }
              
              {providedDrop.placeholder}
            </div>
          )}
          
        </Droppable>

      </DragDropContext>     
    )
      
  };



  return (// Enviamos por parametros a <TaskFilter/> las funciones 
    <>
      <div className="Container_Filter_Calendar">
        <TaskFilter
          handleClickSoples={handleClickSoples}
          handleClickAll={handleClickAll}
          handleClickCompleted={handleClickCompleted}
        />
        <TasksCalendar />
      </div>
        
      <AllTasks/>            
              
    </>
    // al final llamamos la funcion renderMain() para retornar las tareas o el mensaje en caso de que no las alla
  );
};

export default TasksPage;
