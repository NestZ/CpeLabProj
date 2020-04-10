import React , { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import MainMenu from './components/MainMenu'
import Course from './components/Course'
import Login from './components/Login'
import Register from './components/Register'
import Studentlist from './components/Studentlist';
import Drop from './components/Drop'
import Profile from './components/Profile'
import RequireAuth from './components/RequireAuth'
import NotRequireAuth from './components/NotRequireAuth'

class App extends Component {
  render(){
    return (
    <Router>
      <div>
        <NotRequireAuth exact path='/' component={Login} />
        <RequireAuth path='/mainmenu' component={MainMenu} />
        <RequireAuth path="/course" component={Course} />
        <RequireAuth path="/drop" component={Drop} />
        <RequireAuth path="/me" component={Profile} />
        <NotRequireAuth path='/register' component={Register}/>
      </div>
    </Router>
    );
  }
}

export default App;
