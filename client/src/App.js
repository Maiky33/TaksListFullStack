import {Route,Routes} from 'react-router-dom'
import TasksPage from './Pages/TasksPage.jsx'
import TaskForm from './Pages/TaskFrom.jsx'
import NotFound from './Pages/NotFound.jsx';



function App() {
  return (
    <Routes>  
      <Route path="/" element={<TasksPage />} />
      <Route path="/new" element={<TaskForm />} />
      <Route path='*' element={<NotFound/>} />
    </Routes>
  );
}

export default App;
