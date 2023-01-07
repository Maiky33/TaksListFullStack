import './css/TaskFilter.css'
import { useLocalStorage } from 'usehooks-ts'


const TaskFilter = ({handleClickCompleted,handleClickAll,handleClickSoples}) => {

  const [Active] = useLocalStorage('darkTheme', true)

  return (
    <div className={Active? "Filters" : "FiltersDarth"}>
      <div onClick={()=>handleClickAll()} className={Active?'Filters_box':'Filters_boxDart'}>All</div>
      <div onClick={()=>handleClickSoples()} className={Active?'Filters_box':'Filters_boxDart'}>Slopes</div>
      <div onClick={()=>handleClickCompleted()} className={Active?'Filters_box':'Filters_boxDart'}>Completed</div>
    </div>
  )
}

export default TaskFilter