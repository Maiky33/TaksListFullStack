import './css/TaskFilter.css'
import { useLocalStorage } from 'usehooks-ts'


const TaskFilter = ({handleClickCompleted,handleClickAll,handleClickSoples}) => {

  const [Active] = useLocalStorage('darkTheme', true)

  
  const All = () => {
    handleClickAll()
  }

  const slopes = () => {
    handleClickSoples()
  }

  const Completed = () => {  
    handleClickCompleted()
  }

  return (
    <div className={Active? "Filters" : "FiltersDarth"}>
      <div onClick={()=>All()} className={Active?'Filters_box':'Filters_boxDart'}>All</div>
      <div className={Active?'Filters_box':'Filters_boxDart'}>Today</div>
      <div onClick={()=>slopes()} className={Active?'Filters_box':'Filters_boxDart'}>slopes</div>
      <div onClick={()=>Completed()} className={Active?'Filters_box':'Filters_boxDart'}>Completed</div>
    </div>
  )
}

export default TaskFilter