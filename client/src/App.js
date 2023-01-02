import { Route, Routes } from 'react-router-dom'
import TasksPage from './Pages/TasksPage.jsx'
import TaskForm from './Pages/TaskForm.jsx'
import NotFound from './Pages/NotFound.jsx';
import Navbar from './components/Navbar'
import {TaskContextProvider} from './context/TaskContext'
import './css/App.css';

function App() {
  return (
    <TaskContextProvider> 
      <div className='App_Background'>
        <Navbar/>
        <Routes>  
          <Route path="/" element={<TasksPage />} />
          <Route path="/form" element={<TaskForm/>} />
          <Route path="/edit/:id" element={<TaskForm/>} />
          <Route path='*' element={<NotFound/>} />
        </Routes> 
      </div>
    </TaskContextProvider>
  );
}

export default App;