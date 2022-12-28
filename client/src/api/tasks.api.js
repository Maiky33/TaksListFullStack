import axios from "axios"; //usamos axios para hacer la coneccion al backend


export const getTasksRequest = async () =>
  await axios.get("http://localhost:4000/tasks");


export const createTaskRequest = async (task) => //creamos una constante que resibe la tarea que vamos a enviar al backend
  await axios.post("http://localhost:4000/tasks", task);// usamos axios.post para enviar la tarea/crearla, como primer parametro le pasamos el servidor donde esta ubicado y le pasamos como segundo parametro la tarea
