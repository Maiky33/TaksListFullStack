import { createContext, useContext, useState } from "react"; // creamos un contexto para asi poder usar las funciones desde cualquier componente que lo necesitemos sin necesidad de pasar por varios props 

import { //importamos las funciones de la api, para asi usarlas en el context  
  getTasksRequest,
  getTaskRequest,
  deletedTasksRequest,
  createTaskRequest,
  updateTaksRequest,
  updateDoneRequest,
} from "../api/tasks.api";

const TaskContext = createContext();//creamos una constante TaskContext y ejecutamos el createContext, lo que nos permite esto es tener un componente que adentro va tener mas componentes

export const useTasks = () => { //creamos una funcion useTask y exportamos para poder usarla en los demas componentes
  const context = useContext(TaskContext); //hacemos una constante context y le decimos que vamos a usar el contex de taskContext
  if (!context) {//si no hay contexto nos devuelve un error
    throw new Error("useTasks must be used within a taskContextProvider");
  }
  return context;//si no hay error nos devuelve el contex //que son las funciones u componentes
};


export const TaskContextProvider = ({ children }) => {//exportamos esta funcion para poder para poder usar el context en App, ya que esta es la que agrupa todos los componentes,(funciones) para utilizarlas desde el context, el children son los multiples componentes que querremos que accedas al contexto
  
  const [Tasks, setTasks] = useState([]); //hacemos aqui el use state para resibir las tareas


  const loadTasks = async () => {
    const response = await getTasksRequest(); //resibimos las tareas desde el backend y las guardamos en una constante
    setTasks(response.data); //actualizamos la variable Tasks con la funcion setTasks(response.data) que trae las tareas del backend
  };

  const getTask = async (id) => {// hacemos la funcion para traer una sola tarea desde el backend dependiendo del id 
    try { //try en caso de que salga todo bien
      const response = await getTaskRequest(id); //guardamos la respuesta del backend en una constante 
      return response.data; //si todo sale bien recibimos la tarea 
    } catch (error) { //catch en caso de error capturarlo 
      console.log(error);
    }
  };

  const createTasks = async (task) => {
    try {
      const response = await createTaskRequest(task); //usamos la funcion para conectar con el backend y enviarle values, que es la tarea que recibira el backend
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };

  const DeleteTask = (id) => { //hacemos la funcion la cual recibe un id que nos da al clickear en la papelera
  
    try { // usamos try catch para obtener el error en caso de que alla
      deletedTasksRequest(id); // llamamos la funcion la cual borra la tarea de la base de datos y le pasamos la id
      setTasks(Tasks.filter((task) => task.id !== id));//actualizamos las tareas para que se vea reflejado en pantalla , lo hacemo con in filter el cual deja todas las tareas que no sean igual al id que le pasamos 

    } catch (error) {
      console.log(error);
    }
  };

  const update = async (id, newFields) => { //funcion para actualizar la tarea le enviamos el parametro id y los nuevos valores 
    
    try { 
      await updateTaksRequest(id, newFields); //llamamos la funcion para que resiba los parametros y asi cambiarlos en la base de datos

    } catch (error) {
      console.log(error);
    }
  };

  const updateDone = async (id) => {//actualizamos el done por medio de la id
    try {
      const taskFound = Tasks.find((task) => task.id === id); //Buscamos en las Tareas la tarea que sea igual al id que le pasamos y guardamos en la constante taskFound
      await updateDoneRequest(id, taskFound.done === 0 ? true : false);//si encuentra el id le decimos que a la tarea si el done es 0 lo pase a true(1) y en caso contrario lo pase a false(0)

      loadTasks();//si todo sale bien ejecutamos la funcion loadTask la cual actualiza las tareas
      
    } catch (error) {
      console.log(error);
    }
  };


  const reorder = (list, startIndex, endIndex) => { 
    const result = [...list];
    const [removed] = result.splice(startIndex, 1);
    result.splice(endIndex, 0, removed);

    return result
  }

  const sss = (source,destination) => {
    setTasks(prevTasks => reorder(prevTasks, source.index , destination.index))
  }


  return ( //retornamos las funciones con la etiqueta TaskContext.Porvider pasamos las funciones en el value y pasamos el children que son los multiples componentes que van acceder a estas
    
    <TaskContext.Provider
      value={{
        Tasks,
        loadTasks,
        getTask,
        DeleteTask,
        createTasks,
        update,
        updateDone,
        sss
      }}
    >
      {children}
    </TaskContext.Provider>
  );
};
