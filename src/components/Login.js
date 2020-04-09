import React , { Component } from 'react';
import 'bulma/css/bulma.css'
export default class Login extends Component{
render(){
    return (
   <div>     
    <div><h1>Login</h1></div>
    <form>
    <label>
        Email:
    <input type="text" name="Email"/>
    </label><br/>
    <label>
        Password:
    <input type="text" name="Password"/>
    </label><br/>
     <input type="submit" value="Submit" />
    </form>
    </div>
     )
}
}