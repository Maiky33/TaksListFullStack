import React from 'react';
import ReactDOM from 'react-dom/client';
import { MuiPickersUtilsProvider } from '@material-ui/pickers'
import DateFnsUtils  from '@date-io/date-fns'
import App from './App';
import {BrowserRouter} from 'react-router-dom'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
    <BrowserRouter>
      <MuiPickersUtilsProvider utils={DateFnsUtils}> 
        <App />
      </MuiPickersUtilsProvider>
    </BrowserRouter>
  // </React.StrictMode>
);


