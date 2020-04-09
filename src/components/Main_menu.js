import React, { Component } from 'react'
import { Link, Redirect } from 'react-router-dom';

export default class MainMenu extends Component {

  logout = (event) => {
    event.preventDefault();
    fetch('/logout', {
      method : 'POST',
      headers : {
        'Authorization' : 'Bearer ' + localStorage.getItem('token')
      }
    })
    .then(res => {
        if(res.status === 201) {
          localStorage.clear();
          this.props.history.push('/');
        }
        else{
            const error = new Error(res.error);
            throw error;
        }
    })
    .catch(err => {
        console.error(err);
        alert('Error logging out please try again');
    });
  }

  render(){
    // if(!localStorage.getItem('token'))return (<Redirect to='/'></Redirect>);
    return (
    <div className="container mt-5">
      <h5 className="card-title">Option</h5>
      <Link to="/me"> 
        <h3>
          <button type="button" className="btn btn-primary">My profile</button>
        </h3>
      </Link>
      <Link to="/Drop"> 
        <h3>
          <button type="button" className="btn btn-primary">Drop</button>
        </h3>
      </Link>
      <Link to="/Testtable">
        <h3>
          <button type="button" className="btn btn-primary">Register sunj</button>
        </h3>
      </Link>
      <Link   to="/Manage">
        <h3>
          <button type="button" className="btn btn-primary">Manage subj</button>
        </h3>
      </Link>
      <Link to="/Studentlist">
        <h3>
          <button type="button" className="btn btn-primary">Student list</button>
        </h3>
      </Link>
      <h3>
          <button type="button" className="btn btn-primary" onClick={this.logout}>Logout</button>
      </h3>
    </div>  
    );
  }
}