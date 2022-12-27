import { Formik, Form } from "formik";
import {createTaskRequest} from '../api/tasks.api'

const TaskForm = () => {
  return (
    <div>
      <Formik //formik libreria que nos ayuda a crar y capturar los estados de un formulario
        initialValues={{//describimos los valores que querremos en este caso title,description, lo cual nos ahorra el useState useEfect etc
          title: "",
          description: "",
        }}

        onSubmit={async (values, actions) => {//resivimos los valores
          console.log(values); //mostramos los valore por consola
          try {
            const response = await createTaskRequest(values); //usamos la funcion para conectar con el backend y enviarle values, que es la tarea que recibira el backend

            console.log(response);
            actions.resetForm()
          } catch (error) {
            console.log(error);
          }
        }}
      >
        {(
          { handleChange, handleSubmit,values,isSubmitting } //destructuramos y sacamos las funciones handleChage,handleSubmit que ya vienen por defecto para usarlas en el formulario //values para restableser los valores del input  //isSubmitting para evitarque el boton envie datos mientras se esta enviando otros
        ) => (
          <Form onSubmit={handleSubmit}>
            <label>Title</label>
            <input
              type="text"
              name="title"//el name es muy importante en esta libreria para poder ubicar el campo del formulario y asi poder tenerlos en (values)
              placeholder="write a title"
              onChange={handleChange}
              value={values.title}
            />

            <label>Description</label>
            <textarea
              name="description"
              rows="3"
              placeholder="write a description"
              onChange={handleChange}
              value={values.description}
            ></textarea>

            <button type="submit" disabled={isSubmitting}>
              {isSubmitting ? "Saving..." : "Save"}
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default TaskForm;
