import React , { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import 'bulma/css/bulma.css'

class Login extends Component{
    constructor(props) {
        super(props)
        this.state = {
          email : '',
          password: ''
        };
    }

    handleInputChange = (event) => {
      const { value, name } = event.target;
      this.setState({
        [name]: value
      });
    }

    login = (event) => {
        event.preventDefault();
        console.log(sessionStorage.getItem('token') + "kuy")
        fetch('/login', {
            method : 'POST',
            body : JSON.stringify(this.state),
            headers : {
              'Content-Type' : 'application/json'
            }
        })
        .then(async res => {
            if(res.status === 200) {
              const token = await res.json().then(token => token.token);
              sessionStorage.setItem('token', token);
              this.props.history.push('/mainmenu');
            }
            else{
                const error = new Error(res.error);
                throw error;
            }
        })
        .catch(err => {
            console.error(err);
            alert('Error logging in please try again');
        });
    }

    render() {
     
      return (
        <div className="is-fullheight">
          <section className="hero is-info is-bold">
            <div className="hero-body">
              <div className="container">
                <h1 className="title">
                  Registration Office
                </h1>
                <h2 className="subtitle">
                  Chiang Mai University
                </h2>
              </div>
            </div>
          </section>
          <section className="hero has-text-centered is-medium">
            <div className="hero-body">
              <div className="container">
                <div className="columns is-centered">
                    <div className="column is-7-tablet is-6-desktop is-5-widescreen">
                      <form className="box has-text-left">
                        <div className="field">
                          <label className="label">Email</label>
                          <input
                            type="email"
                            name="email"
                            className="input"
                            value={this.state.email}
                            onChange={this.handleInputChange}
                            required
                          />
                        </div>
                        <div className="field">
                          <label className="label">Password</label>
                          <input
                            type="password"
                            name="password"
                            className="input"
                            value={this.state.password}
                            onChange={this.handleInputChange}
                            required
                          />
                        </div>
                        <div className="buttons">
                          <button className="button is-success" onClick={this.login}>Login</button>
                          <Link to="/register"><button className="button is-info">Sign Up</button></Link>
                          <Link to="/credits"><button className="button is-warning">Credits</button></Link>
                        </div>
                      </form>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      );
    }
}

export default Login;