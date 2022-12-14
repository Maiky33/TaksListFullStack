//Para comunicarnos con la base de datos creada, (hacer peticiones)

import axios from "axios"; //usamos axios para hacer la coneccion al backend



export const getTasksRequest = async () =>
  await axios.get("http://localhost:4000/tasks");

export const getTaskRequest = async (id) =>
  await axios.get(`http://localhost:4000/tasks/${id}`)

export const createTaskRequest = async (task) => //creamos una constante que resibe la tarea que vamos a enviar al backend
  await axios.post("http://localhost:4000/tasks", task);// usamos axios.post para enviar la tarea/crearla, como primer parametro le pasamos el servidor donde esta ubicado y le pasamos como segundo parametro la tarea

export const deletedTasksRequest = async (id) => 
  await axios.delete(`http://localhost:4000/tasks/${id}`, id);

export const updateTaksRequest = async (id, newFields) => 
  await axios.put(`http://localhost:4000/tasks/${id}`,newFields) //para actualiar la tarea enviamos el id y los nuevos valores

export const updateDoneRequest = async (id, done)=>
  await axios.put(`http://localhost:4000/tasks/${id}`,{ // enviamos el id y el done para asi cambiarlo
    done,
  })

