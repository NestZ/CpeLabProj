import React , { Component } from 'react';
export default class Login extends Component{
constructor(props){
    super(props)
    this.state = {
        name :'',
        email:'',
        password:''
    };
    }
handleInputChange = (event) => {
    const { value, name } = event.target;
    this.setState({
    [name]: value
        });
    }
onSubmit = (event) =>{
    event.preventDefault();
    fetch('/signup',{
        method: 'POST',
        body: JSON.stringify(this.state),
        headers: {
          'Content-Type': 'application/json'
        }
      })
      .then(res => {
        if (res.status === 201) {
          this.props.history.push('/Login');
          alert('Finish');
        } else {
          const error = new Error(res.status);
          throw error;
        }
      })
      .catch(err => {
        console.error(err);
        alert('Error Signup in please try again');
      });
    }
render(){
    return (
    <form onSubmit={this.onSubmit}>
        <h1>Register</h1>
        <input
         type="text"
         name="name"
         placeholder="Name"
         value={this.state.name}
         onChange={this.handleInputChange}
         required
         /><br/>
         <input
         type="email"
         name="email"
         placeholder="Email"
         value={this.state.email}
         onChange={this.handleInputChange}
         required
         /><br/>
        <input
         type="password"
         name="password"
         placeholder="Password"
         value={this.state.password}
         onChange={this.handleInputChange}
         required
         /><br/>  
     <input type="submit" value="Submit" />
    </form>
     )
}
}