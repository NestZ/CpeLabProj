import React , { Component } from 'react';
import Schedule from './Schedule'

class Profile extends Component{
    constructor(props){
        super(props);
        this.state = {
            profile : {},
            isLoading : true
        };
    }

    fetchProfile(){
        fetch('/me', {
            method : 'GET',
            headers : {
                'Authorization' : 'Bearer ' + localStorage.getItem('token')
            }
        })
        .then(res => res.json())
        .then(res => {
            this.setState({
                profile : res,
                isLoading : false
            });
        });
    }

    componentWillMount(){
        this.fetchProfile();
    }

    render(){
        return (
          <div>
            <p>{this.state.profile.email}</p>
            {
                !this.state.isLoading ?
                (<Schedule schedule={this.state.profile.courses}/>) : (<h3>Loading...</h3>)
            }
          </div>
        );
    }
}

export default Profile;