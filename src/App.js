import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import MainMenu from './components/Main_menu'
import Studentlist from './components/Studentlist'
import Testtable from './components/Testtable'


function App() {
  return (
    <Router>
      <div className="App">
      <Route exact path="/" render={ props => (
          <div>
            <MainMenu></MainMenu>
          </div>
        )} />


        <Route path="/mainmenu" component={MainMenu} />
        <Route path="/Studentlist" component={Studentlist} />
        <Route path="/Testtable" component={Testtable}/>      
      </div>
    </Router>
  );
}

export default App;
