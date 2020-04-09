import React , { Component } from 'react';
import { Redirect } from 'react-router-dom';
import MainMenu from './Main_menu';

export default class Login extends Component{
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
        fetch('/login', {
            method : 'POST',
            body : JSON.stringify(this.state),
            headers : {
              'Content-Type' : 'application/json'
            }
        })
        .then(async res => {
            if(res.status === 200) {
                this.props.history.push('/mainmenu');
                const token = await res.json().then(token => token.token);
                localStorage.setItem('token', token);
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
      // if(localStorage.getItem('token'))return <MainMenu />;
      return (
        <form onSubmit={this.login}>
          <h1>Login Below!</h1>
          <input
            type="text"
            name="email"
            placeholder="Enter email"
            value={this.state.email}
            onChange={this.handleInputChange}
            required
          />
          <input
            type="text"
            name="password"
            placeholder="Enter password"
            value={this.state.password}
            onChange={this.handleInputChange}
            required
          />
          <input type="submit" value="Submit"/>
        </form>
      );
    }
}