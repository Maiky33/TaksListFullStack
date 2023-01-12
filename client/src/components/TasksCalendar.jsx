import moment from "moment/moment";
import {useState} from 'react'
import { useLocalStorage } from "usehooks-ts";
import "./css/TasksCalendar.css";

const TasksCalendar = () => {
  //use localStorage theme
  const [Active] = useLocalStorage("darkTheme", true);

  //state actualizar hora
  const [Prueba, setPrueba] = useState()
  //variable hora usamos moment para obtenerla
  let DATA = moment()

  /*tambien funciona
  setInterval(() => { //setInterval lo actualiza(ejecuta) cada 1 segundo
    setPrueba(DATA)
  }, 1000);
  */
  
  /*Tambien funciona*/
  //actualizar hora cada segundo
  setTimeout(() => {  
    setPrueba(DATA)
  },1000)
  

  return (
    <div className={Active ? "Calendar_clock" : "Calendar_clockDart"}>
      <div className="Calentar_Column">
        <label>Date</label>
        <p className="fecha">{moment(Prueba).format('DD/MM/YYYY')}</p>
      </div>
      <div className="Calentar_Column">
        <label>Hour</label>
        <p className="hora">{moment(Prueba).format('hh:mm:ss')}</p>        
      </div>
    </div>
  );
};

export default TasksCalendar;
