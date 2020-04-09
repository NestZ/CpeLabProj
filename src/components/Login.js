import React , { Component } from 'react';
export default class Login extends Component{
render(){
    return (
   <div>     
    <div><h3>Login</h3></div>
    <form>
    <label>
        Email:
    <input type="text" name="Email"/>
    </label>
    <label>
        Password:
    <input type="text" name="Password"/>
    </label>
     <input type="submit" value="Submit" />
    </form>
    </div>
     )
}
}