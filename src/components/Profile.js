import React , { Component } from 'react';

export default class Profile extends Component {
    constructor(props) {
        super(props);
        this.state = { apiResponse: {} };
    }

    callAPI() {
        fetch('/me', {
            method : 'GET',
            headers : {
                'Authorization' : 'Bearer ' + localStorage.getItem('token')
            }
        })
        .then(res => res.json())
        .then(res => {
            this.setState({ apiResponse: res });
            console.log(this.state.apiResponse.name);
        });
    }

    componentWillMount() {
        this.callAPI();
    }

    render(){
        return (
          <div>
            <p>{this.state.apiResponse.name}</p>
          </div>
        );
    }
}
