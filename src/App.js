import React , { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import MainMenu from './components/Main_menu'
import Studentlist from './components/Studentlist'
import Testtable from './components/Testtable'
import Course from './components/Course'
import Login from './components/Login'
import Table from './components/Table';

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
      this.callAPI();
  }

  render(){
    return (
    <Router>
      <div className="App">
      <Route exact path="/" render={ props => (
          <div>
            <Login></Login>
          </div>
        )} />


        <Route path="/mainmenu" component={MainMenu} />
        <Route path="/Studentlist" component={Studentlist} />
        <Route path="/Testtable" component={Table}/>     
        <Route path="/Course" component={Course}/> 
        <Route path='/Login' component={Login}/>
      </div>
    </Router>
    );
  }
}

export default App;
