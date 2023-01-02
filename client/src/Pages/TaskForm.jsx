import { Formik, Form } from "formik";
import {useTasks} from '../context/TaskContext';
import './css/TaskForm.css'

const TaskForm = () => {

  const {createTasks} = useTasks()

  return (
    <div className="Container_From">
      <Formik //formik libreria que nos ayuda a crar y capturar los estados de un formulario
        initialValues={{//describimos los valores que querremos en este caso title,description, lo cual nos ahorra el useState useEfect etc
          title: "",
          description: "",
        }}

        onSubmit={async (values, actions) => {//resivimos los valores
          console.log(values); //mostramos los valore por consola
          createTasks(values)
          actions.resetForm()
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
