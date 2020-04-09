import React , { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import MainMenu from './components/Main_menu'
import Course from './components/Course'
import Login from './components/Login'
import Studentlist from './components/Studentlist';
import Drop from './components/Drop'

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

  render(){
    return (
    <Router>
      <div className="App">
        <Route exact path="/" component={Login} />
        <Route path="/Mainmenu" component={MainMenu} />
        <Route path="/Studentlist" component={Studentlist}/>
        <Route path="/Course" component={Course}/>
        <Route path="/Drop" component={Drop}></Route>
        <Route path='/Login' component={Login}/>
      </div>
    </Router>
    );
  }
}

export default App;
