import React , { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import MainMenu from './components/Main_menu'
import Studentlist from './components/Studentlist'
import Testtable from './components/Testtable'
import Course from './components/Course'
import Login from './components/Login'
import Profile from './components/Profile'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { apiResponse: "" };
  }

  callAPI() {
    fetch("http://localhost:3001/")
        .then(res => res.text())
        .then(res => this.setState({ apiResponse: res }));
  }

  componentWillMount() {
      //this.callAPI();
  }

  requireAuth = (nextState, replaceState) => {
    if (!localStorage.getItem('token')){
      console.log('kuy');
      replaceState({ nextPathname: nextState.location.pathname }, '/');
    }
  }

  render(){
    return (
    <Router>
      <div className="App">
        <Route exact path="/" component={Login} />
        <Route path="/me" component={Profile} />
        <Route path="/mainmenu" component={MainMenu} onEnter={this.requireAuth} />
        <Route path="/Studentlist" component={Studentlist} />
        <Route path="/Testtable" component={Testtable}/>
        <Route path="/Course" component={Course}/>
      </div>
    </Router>
    );
  }
}

export default App;
