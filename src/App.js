import React from 'react';
import logo from './logo.svg';
import './App.css';
import { SignupPage } from './pages/SignupPage/SignupPage';
import LoginPage from './pages/LoginPage/LoginPage';
import { BrowserRouter, Route,Switch } from 'react-router-dom';
import { TasksPage } from './pages/TasksPage/TasksPage';
import { TaskCreatePage } from './pages/TaskCreatePage/TaskCreatePage';


function App() {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route path='/login' component={LoginPage}/>
          <Route path='/signup' component={SignupPage}/>
          <Route path='/tasks' component={TasksPage}/>
          <Route path='/create' component={TaskCreatePage}/>
        </Switch>      
      </BrowserRouter>      
    </div>
  );
}

export default App;
