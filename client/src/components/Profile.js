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
        <div className="is-fullheight">
            <section className="hero is-info is-bold">
                <div className="hero-body">
                    <div className="container">
                        <h1 className="title">
                            My Profile
                        </h1>
                        <h2 className="subtitle">
                            Registration Office
                        </h2>
                    </div>
                </div>
            </section>
            <section className="hero has-text-centered is-fullwidth">
                <div className="hero-body">
                    <div className="container">
                        <div className="columns is-centered">
                            <div className="column is-fullwidth">
                                <div className="box has-text-left">
                                    <div className="field is-large">
                                        <h1 className="is-size-4 has-text-weight-bold">Name</h1>
                                        <p className="is-size-4">{this.state.profile.name}</p>
                                    </div>
                                    <div className="field is-large">
                                        <h1 className="is-size-4 has-text-weight-bold">Email</h1>
                                        <p className="is-size-4">{this.state.profile.email}</p>
                                    </div>
                                    <div className="field is-large has-text-centered">
                                        <h1 className="is-size-3 has-text-weight-bold">Registered Course</h1>
                                    </div>
                                    {
                                        !this.state.isLoading ?
                                        (<Schedule schedule={this.state.profile.courses}/>) : (<h3>Loading...</h3>)
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
        );
    }
}

export default Profile;