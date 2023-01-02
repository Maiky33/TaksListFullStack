import {createContext, useContext,useState} from 'react';
import {getTasksRequest,deletedTasksRequest,createTaskRequest} from '../api/tasks.api';

export const TaskContext = createContext()

export const useTasks = ( )=>{ 
    const context = useContext(TaskContext)
    if(!context){   
        throw new Error('useTasks must be used within a taskContextProvider')
    }
    return context;
}

export const TaskContextProvider = ({children})=>{   

    const [Tasks, setTasks] = useState([])

    const loadTasks = async() => {
        const response = await getTasksRequest() //resibimos las tareas y las guardamos en una constante
        setTasks(response.data); //actualizamos la variable Tasks con la funcion setTasks(response.data)
    }

    const createTasks = async(task)=>{   
        try {
            const response = await createTaskRequest(task); //usamos la funcion para conectar con el backend y enviarle values, que es la tarea que recibira el backend
            console.log(response);
        } catch (error) {
            console.log(error);
        }
    }
    

    const DeleteTask = (id) => {  //hacemos la funcio la cual recibe un id que nos da al clickear en la papelera

        try {  // usamos try catch para obtener el error en caso de que alla
          deletedTasksRequest(id)// llamamos la funcion la cual borra la tarea de la base de datos
          setTasks(Tasks.filter(task => task.id !== id))
        } catch(error){ 
          console.log(error);
        }
    }

    


    return( 
        <TaskContext.Provider value={{Tasks,loadTasks,DeleteTask,createTasks}}>
            {children}
        </TaskContext.Provider>
    )
};

