//importamos libreria useLocalStorage para resivir los datos del localStorage
import { useLocalStorage } from 'usehooks-ts' 
import './css/TaskFilter.css'


//Filtros resivimos por parametros las funciones para usarlas en los filtros  
const TaskFilter = ({handleClickCompleted,handleClickAll,handleClickSoples}) => {

  //resivimos el dato en este caso (false/true) para cambiar el tema 
  const [Active] = useLocalStorage('darkTheme', true) 

  //Ejecutamos las funciones resividas en un onClick 
  return (
    <div className={Active? "Filters" : "FiltersDarth"}>
      <div onClick={()=>handleClickAll()} className={Active?'Filters_box':'Filters_boxDart'}>All</div>
      <div onClick={()=>handleClickSoples()} className={Active?'Filters_box':'Filters_boxDart'}>Slopes</div>
      <div onClick={()=>handleClickCompleted()} className={Active?'Filters_box':'Filters_boxDart'}>Completed</div>
    </div>
  )
}

export default TaskFilter