import { Formik, Form } from "formik";
import {useTasks} from '../context/TaskContext';
import {useParams,useNavigate} from 'react-router-dom';
import './css/TaskForm.css'
import { useEffect, useState } from "react";

const TaskForm = () => {

  const {createTasks,getTask,update} = useTasks()

  const [Task, setTask]= useState({ 
    title:"",
    description:""
  })

  const params = useParams()

  const navegite = useNavigate()

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
 
          if(params.id){ 
            await update(params.id,values)
            navegite('/');
          }else{
            await createTasks(values)
            navegite('/');
          }
          
        }}
      >
        {(
          { handleChange, handleSubmit,values,isSubmitting } //destructuramos y sacamos las funciones handleChage,handleSubmit que ya vienen por defecto para usarlas en el formulario //values para restableser los valores del input  //isSubmitting para evitarque el boton envie datos mientras se esta enviando otros
        ) => (
          <Form className="Form" onSubmit={handleSubmit}>

            <div className="From_Title"> 

              <label className="Title">Title</label>
              <input
                className="Title_input"
                type="text"
                name="title"//el name es muy importante en esta libreria para poder ubicar el campo   del formulario y asi poder tenerlos en (values)
                placeholder="Write a Title"
                onChange={handleChange}
                value={values.title}
              />

            </div>
            
            <div className="From_Description"> 

              <label className="Description">Description</label>
              <textarea
                className="Description_input"
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
