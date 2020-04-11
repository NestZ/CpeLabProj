import React , { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import MainMenu from './components/MainMenu'
import Course from './components/Course'
import Login from './components/Login'
import Register from './components/Register'
import Drop from './components/Drop'
import Profile from './components/Profile'
import RequireAuth from './components/RequireAuth'
import NotRequireAuth from './components/NotRequireAuth'
import Credits from './components/Credit'

class App extends Component {
  render(){
    return (
    <Router>
      <div>
        <NotRequireAuth exact path='/' component={Login} />
        <NotRequireAuth path='/mainmenu' component={MainMenu} />
        <NotRequireAuth path="/course" component={Course} />
        <NotRequireAuth path="/drop" component={Drop} />
        <NotRequireAuth path="/me" component={Profile} />
        <NotRequireAuth path='/register' component={Register}/>
        <NotRequireAuth path='/credits' component={Credits}/>
      </div>
    </Router>
    );
  }
}

export default App;
