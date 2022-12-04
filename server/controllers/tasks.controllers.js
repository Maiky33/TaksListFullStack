import { connection } from "../db.js"; //importamos la coneccion a la base de datos



//METODOS Peticiones TaskList//

//obtener todas las tareas
export const getTasks = async(req, res) => {

  try{  
    const [result] = await connection.query('SELECT * FROM task ORDER BY createAt ASC')
    res.json(result);
  }catch(error){  
    return res.status(500).json({message:"error Conection"})
  }

};


//obtener todas las tareas
export const getTask = async(req, res) => { 
  try{  
    const {id} = req.params
    const [result] = await connection.query('SELECT title,description FROM task WHERE id = ?',id)

    if(result.length === 0) return res.status(404).json({message:'Task Not Found'})
    res.json(result[0])
  }catch{ 
    return res.status(500).json({message:"error Conection"})
  }
};


//crear la tarea
export const createTask = async (req, res) => {

  try{  

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

  }catch{ 
    return res.status(500).json({message:"error Conection"})
  }
};



// actualizar tarea
export const updateTask = async (req, res) => {
  try{  
    const result = await connection.query('UPDATE task SET ? WHERE id = ?',[
      req.body,
      req.params.id
    ]);
    res.json(result)
  }catch{ 
    return res.status(500).json({message:"error Conection"})
  }
};


//eliminar tarea 
export const deleteTask = async(req, res) => { 
  
  try{  
    const {id}= req.params; 
    const [result] = await connection.query('DELETE FROM task WHERE id = ?',id)

    if(result.affectedRows === 0) return res.status(404).json({message:'Task Not Found'})
    return res.sendStatus(204);
    
  }catch{ 
    return res.status(500).json({message:"error Conection"})
  }

};




//Prueba de clone respositorio *ver en la laptop*