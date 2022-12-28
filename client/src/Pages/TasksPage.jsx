import { useEffect, useState } from "react";
import {getTasksRequest} from '../api/tasks.api';
import TaskCard from '../components/TaskCard'


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
    <div>
      <h1>Tasks</h1>
      {
        Tasks.map(task => (  
          <TaskCard task={task} key={task.id}/>
        ))
      }

    </div>

  );
};

export default TasksPage;
