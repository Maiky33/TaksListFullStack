import { Formik, Form } from "formik";
import {useTasks} from '../context/TaskContext';
import {useParams,useNavigate} from 'react-router-dom';
import './css/TaskForm.css'
import { useEffect, useState } from "react";
import { useLocalStorage } from 'usehooks-ts'


const TaskForm = () => {

  const [Active] = useLocalStorage('darkTheme', true)

  const {createTasks,getTask,update} = useTasks() //llamaoms del context las funciones 

  const [Task, setTask]= useState({ 
    title:"",
    description:""
  })

  const params = useParams() //para obtener parametros
  const navegite = useNavigate() //para poder redireccionar

  useEffect(()=>{ 
    const loadTask = async() =>{ 
      if(params.id){
       const task = await getTask(params.id)
       setTask(task)
      }
    }
    loadTask();
  })

  return (

    <div className="Container_From">

      <Formik //formik libreria que nos ayuda a crar y capturar los estados de un formulario
        initialValues={Task}
        enableReinitialize={true}
        onSubmit={async (values) => {//resivimos los valores
          console.log(values); //mostramos los valore por consola
 
          if(params.id){  //si params.id existe significa que vamos actualizar una tarea
            await update(params.id,values) // llamamos la funcion para actualizar y le pasamos los parametros 
            navegite('/'); //si todo sale bien nos redirecciona a "/"

          }else{ // si no hay parametro osea no hay id significa que vamos a crear una tarea  
            await createTasks(values)// llamamos la funcion y pasamos los values que son los parametro que captura el formulario hecho con FORMIK(libreria)
            navegite('/'); //si todo sale bien nos redirecciona a "/"
          }
          
        }}
      >
        {(
          { handleChange, handleSubmit, values, isSubmitting } //destructuramos y sacamos las funciones handleChage,handleSubmit que ya vienen por defecto para usarlas en el formulario //values para estableser los valores del input  //isSubmitting para evitarque el boton envie datos mientras se esta enviando otros
          
        ) => (

          <Form className={Active? "Form" : "FormDart"} onSubmit={handleSubmit}>

            <div className="From_Title"> 

              <label className="Title">Title</label>
              <input
                maxLength="11"
                className={Active ? "Title_input" : "Title_inputDart"}
                type="text"
                name="title"//el name es muy importante en esta libreria para poder ubicar el campo del formulario y asi poder tenerlos en (values)
                placeholder="Write a Title"
                onChange={handleChange}
                value={values.title}
              />

            </div>
            
            <div className="From_Description"> 

              <label className="Description">Description</label>
              <textarea
                maxLength="17"
                className={Active? "Description_input" : "Description_inputDart"}
                name="description"
                rows="3"
                placeholder="write a description"
                onChange={handleChange}
                value={values.description}
              ></textarea>

              <div className="FromContainer_Button">
                <button className="From_Button" type="submit" disabled={isSubmitting}>
                  {isSubmitting ? "Saving..." : "Save"}
                </button>
              </div>
              
            </div>
            
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default TaskForm;
