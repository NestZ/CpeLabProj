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
        .then(response => {
            if (response.status === 200) {
                delete this.state.users[Id]
                this.setState({users:this.state.users})
            }
        })
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
                <div className="is-fullheight">
                    <section className="hero is-info is-bold">
                        <div className="hero-body">
                            <div className="container">
                                <h1 className="title">
                                    Drop
                                </h1>
                                <h2 className="subtitle">
                                    Chiang Mai University
                                </h2>
                            </div>
                        </div>
                    </section>
                    <div className="container">
                            <div className="column is-three-fifths is-offset-one-fifth">
                                <table class="table  is-striped is-narrow is-hoverable is-fullwidth">
                                    <thead>
                                        <tr>
                                            <th>CourseID</th>
                                            <th>Title</th>
                                            <th>Day</th>
                                            <th>Time</th>
                                            <th>Credit</th>
                                            <th>Drop</th>
                                        </tr>
                                    </thead>

                                    {!this.state.isLoading ? (
                                        this.state.users.map ((user,Id) => {
                                            console.log("kuy"+ Id)
                                            return(
                                                <tr>
                                                    
                                                        <td>{user.id}</td>
                                                        <td>{user.name}</td>
                                                        <td>{user.day}</td>
                                                        <td>{user.time}</td>
                                                        <td>{user.credits}</td>
                                                        <td><button class="button is-danger" key={user.id} onClick={() => this.Drop(Id)}>Drop</button></td>
                                                    </tr>
                                            
                                            );
                                        })) : (<h3>Loading...</h3>)}
                                </table>

                            </div>
                    </div>
                </div>
        )
    }
}