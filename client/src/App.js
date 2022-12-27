import {Route,Routes} from 'react-router-dom'
import TasksPage from './Pages/TasksPage.jsx'
import TaskForm from './Pages/TaskFrom.jsx'
import NotFound from './Pages/NotFound.jsx';
import Navbar from './components/Navbar'

function App() {
  return (
    <>
      <Navbar/>
      <Routes>  
        <Route path="/" element={<TasksPage />} />
        <Route path="/form" element={<TaskForm />} />
        <Route path='*' element={<NotFound/>} />
      </Routes> 
    </>
  );
}

export default App;