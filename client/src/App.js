import { Route, Routes } from 'react-router-dom'
import TasksPage from './Pages/TasksPage.jsx'
import TaskForm from './Pages/TaskForm.jsx'
import NotFound from './Pages/NotFound.jsx';
import Navbar from './components/Navbar'
import { useLocalStorage } from 'usehooks-ts'
import {TaskContextProvider} from './context/TaskContext'//importamos para usar las funciones que retorna este componente
import './css/App.css';

function App() {

  const [Active] = useLocalStorage('darkTheme', true)


  return (//importamos y usamos el textContentProvider aqui para que todos los componentes puedan acceder a este
    <TaskContextProvider> 
      <div className={Active? "Ligthmode" : "dartmode"}>
        <Navbar/>
        <Routes>  
          <Route path="/" element={<TasksPage/>} />
          <Route path="/form" element={<TaskForm/>} />
          <Route path="/edit/:id" element={<TaskForm/>} />
          <Route path='*' element={<NotFound/>} />
        </Routes> 
      </div>
    </TaskContextProvider>
  );
}

export default App;