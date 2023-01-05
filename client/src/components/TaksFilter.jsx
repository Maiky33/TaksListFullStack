import './css/TaskFilter.css'
import { useLocalStorage } from 'usehooks-ts'


const TaskFilter = () => {

  const [Active] = useLocalStorage('darkTheme', true)


  return (
    <div className={Active? "Filters" : "FiltersDarth"}>
      <div className={Active?'Filters_box':'Filters_boxDart'}>All</div>
      <div className={Active?'Filters_box':'Filters_boxDart'}>Today</div>
      <div className={Active?'Filters_box':'Filters_boxDart'}>slopes</div>
      <div className={Active?'Filters_box':'Filters_boxDart'}>Completed</div>
    </div>
  )
}

export default TaskFilter