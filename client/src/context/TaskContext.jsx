import {createContext, useContext,useState} from 'react';
import {getTasksRequest,getTaskRequest,deletedTasksRequest,createTaskRequest,updateTaksRequest,updateDoneRequest} from '../api/tasks.api';

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

    const getTask = async(id)=>{ 
        try{    
            const response = await getTaskRequest(id)
            return response.data
        }catch(error){  
            console.log(error);
        }  
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

    const update = async(id,newFields)=>{    
        try{    
            await updateTaksRequest(id,newFields)
        }catch(error){  
            console.log(error);
        }
    }

    const updateDone = async(id)=>{
        try{    
            const taskFound = Tasks.find((task)=> task.id === id); 
            await updateDoneRequest(id, taskFound.done === 0 ? 1 : 0)
            setTasks(
                Tasks.map((task) => 
                    task.id === id ? { ...task, done: !task.done}:task
                )
            );
        }catch(error){  
            console.log(error);
        }
    }


    return( 
        <TaskContext.Provider value={{Tasks,loadTasks,getTask,DeleteTask,createTasks,update,updateDone}}>
            {children}
        </TaskContext.Provider>
    )
};

