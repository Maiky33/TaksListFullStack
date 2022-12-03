import { connection } from "../db.js"; //importamos la coneccion a la base de datos



//METODOS Peticiones TaskList//

//obtener todas las tareas
export const getTasks = async(req, res) => {
  const [result] = await connection.query('SELECT * FROM task ORDER BY createAt ASC')
  res.json(result);
};


//obtener todas las tareas
export const getTask = async(req, res) => { 
  const {id} = req.params
  const [result] = await connection.query('SELECT title,description FROM task WHERE id = ?',id)
  res.json(result)
};


//crear la tarea
export const createTask = async (req, res) => {

  const { title, description } = req.body;//resivimos de la peticon, por req.body los parametro title, decription   

  const task = { //hacemos un objeto para poder usarlo en la peticion mysql y asi poder agregarlo a la base de datos
    title,
    description,
  };

  const [result] = await connection.query("INSERT INTO task SET ?", task);//hacemos la consulta usando la coneccion a la base de datos y hacemos la peticion mysql atravez de el metodo query,hacemos la peticion y le pasamos el objeto el cual queremos agregar a la base de dato

  res.json({//mandamos la respuesta con res.json, le sacamos el id por result.inserId ,el title y el decription 

    id: result.insertId,
    title,
    description,
  });
};



// actualizar tarea
export const updateTask = (req, res) => {
  res.send("actualizando tarea");
};


//eliminar tarea 
export const deleteTask = (req, res) => { 
  res.send("eliminando tarea");
};




//Prueba de clone respositorio *ver en la laptop*