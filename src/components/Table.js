import React , { Component } from 'react';

export default class Table extends Component{
    
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
           <div>
                <div><h3>Student List</h3></div>

                {this.state.error ? <p>{this.state.error.mesage}</p> : null}

                {!this.state.isLoading ? (
                    this.state.users.map (user => {
                        const { name, email} = user;
                        return(
                        
                            <table class="table dataTable my-0" id="dataTable">
                                <thead>
                                    <tr>
                                        <th>Name</th>
                                        <th>Email</th>
                                    </tr>
                                </thead>

                                <tbody id={this.name}>
                                    <td>{name}</td>
                                    <td>{email}</td>
                                </tbody>
                            </table>
                        
                        );
        })) : (<h3>Loading...</h3>)}
           </div>
        )
    }
}