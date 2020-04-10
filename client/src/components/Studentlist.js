import React , { Component } from 'react';
import 'bulma/css/bulma.css'

export default class Studentlist extends Component{
    
    state = {
        isLoading: true,
        users: [],
        error: null
    }
    
    
    fetchUsers() {
        fetch('/admin/students', {method : 'Get'
        })
        .then(response => response.json())
        .then(data =>
            this.setState({
                users: data,
                isLoading: false,
            })
            )
            // Catch any errors we hit and update the app
            .catch(error => this.setState({ error, isLoading: false }));
        }
        
        componentDidMount() {
            this.fetchUsers();
        }

        render(){
            return(
           <div class="container is-fullhd">
                    <div><h3 class="title">Student List</h3></div>
                                <table class="table is-fullwidth table is-responsive">
                                    <thead>
                                        <tr>
                                            <th>Name</th>
                                            <th>Email</th>
                                        </tr>
                                    </thead>

                    {this.state.error ? <p>{this.state.error.mesage}</p> : null}

                    {!this.state.isLoading ? (
                        this.state.users.map (user => {
                            const { name, email} = user;
                            return(
                                    <tbody>
                                        <td>{name}</td>
                                        <td>{email}</td>
                                    </tbody>
                            
                            );
                        })) : (<h3>Loading...</h3>)}
                        </table>
           </div>
        )
    }
}