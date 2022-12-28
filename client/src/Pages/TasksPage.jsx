import { useEffect, useState } from "react";
import {getTasksRequest} from '../api/tasks.api';
import TaskCard from '../components/TaskCard'
import TaskFilter from '../components/TaksFilter'
import TasksCalendar from '../components/TasksCalendar'
import './css/TasksPage.css'

const TasksPage = () => {

  const [Tasks, setTasks] = useState([])

  useEffect(() => {

    const loadTasks = async() => {
      const response = await getTasksRequest()
      setTasks(response.data);
    }

    loadTasks();

  }, []);

  return (
    <>
      <div className="Container_Filter_Calendar"> 
        <TaskFilter />
        <TasksCalendar/>
      </div>
      
      <div className="Container_task">
        {
          Tasks.map(task => (  
            <TaskCard task={task} key={task.id}/>
          ))
        }
      </div>
    </>

  );
};

export default TasksPage;
