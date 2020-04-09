import React , { Component } from 'react';
import 'bulma/css/bulma.css'

export default class Drop extends Component{
    
    state = {
        isLoading: true,
        users: [],
        error: null
    }

    Drop = (Id) => {
       
        console.log("kuy"+ Id)
        console.log("kuy"+ JSON.stringify({id : this.state.users[Id].id }) )
        fetch('/drop',{
            method : 'DELETE',
            body : JSON.stringify({id : this.state.users[Id].id }),
            headers : {
                'Content-Type' : 'application/json',
                'Authorization' : 'Bearer ' + localStorage.getItem('token')
            },
        })
        .then(response => {console.log(response.status)})
        
    }
    
    fetchUsers() {
        fetch('/me/course', {
            method : 'Get',
            headers : {
                'Authorization' : 'Bearer ' + localStorage.getItem('token')
            }
        })
        .then(response => response.json())
        .then(data =>{
            this.setState({
                users: data.courses,
                isLoading: false,
            });
        })

            
            // Catch any errors we hit and update the app
            .catch(error => this.setState({ error, isLoading: false }));
        }
        
        componentDidMount() {
            this.fetchUsers();
        }
        
        render(){
            return(
                <div class="container is-fullhd">
                    <div><h3 class="title">Courses List</h3></div>
                                <table class="table is-fullwidth table is-responsive">
                                    <thead>
                                        <tr>
                                            <th>Courses</th>
                                            <th>Name</th>
                                            <th>Creadit</th>
                                            <th>Drop</th>
                                        </tr>
                                    </thead>

                    {this.state.error ? <p>{this.state.error.mesage}</p> : null}

                    {!this.state.isLoading ? (
                        this.state.users.map ((user,Id) => {
                            // console.log("kuy"+ Id)
                            return(
                                <tr>
                                    
                                        <td>{user.id}</td>
                                        <td>{user.name}</td>
                                        <td>{user.credits}</td>
                                        <td><button key={user.id} onClick={() => this.Drop(Id)}>Drop</button></td>
                                    </tr>
                            
                            );
                        })) : (<h3>Loading...</h3>)}
                        </table>
           </div>
           
        )
    }
}