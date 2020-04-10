import React, { Component } from 'react'
import { Link } from 'react-router-dom';

class MainMenu extends Component {
  logout = (event) => {
    event.preventDefault();
    fetch('/logout', {
      method : 'POST',
      headers : {
        'Authorization' : 'Bearer ' + sessionStorage.getItem('token')
      }
    })
    .then(res => {
        if(res.status === 201) {
          sessionStorage.clear();
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
    return (
      <div className="is-fullheight">
        <section className="hero is-info is-bold">
          <div className="hero-body">
            <div className="container">
              <h1 className="title">
                Main Menu
              </h1>
              <h2 className="subtitle">
                Registration Office
              </h2>
            </div>
          </div>
        </section>
        <section className="hero has-text-centered is-medium">
          <div className="hero-body">
            <div className="container">
              <div className="columns is-centered">
                <div className="column is-8-tablet is-7-desktop is-6-widescreen">
                  <div className="field">
                    <Link to="/me">
                      <button className="button is-large is-info is-fullwidth">My schedule</button>
                    </Link>
                  </div>
                  <div className="field">
                    <Link to="/course">
                      <button className="button is-large is-info is-fullwidth">Register</button>
                    </Link>
                  </div>
                  <div className="field">
                    <Link to="/drop">
                      <button className="button is-large is-info is-fullwidth">Drop</button>
                    </Link>
                  </div>
                  <button className="button is-large is-danger is-fullwidth" onClick={this.logout}>Logout</button>
                </div>
              </div>
            </div>
        </div>
        </section>
      </div>
    );
  }
}

export default MainMenu;