import React , { Component } from 'react';

export default class Table extends Component{

    state = {
        isLoading: true,
        users: [],
        error: null
    }

    render(){
        return(
           <div>
                <div><h3>Student List</h3></div>

                {error ? <p>{error.mesage}</p> : null}}

                {!isLoading ? (
                    users.map(user => {
                        const { name, email} = user;
                        return(
                        
                            <table class="table dataTable my-0" id="dataTable">
                                <thead>
                                    <tr>
                                        <th>Name</th>
                                        <th>Email</th>
                                        {/* <th>Student ID</th> */}
                                    </tr>
                                </thead>

                                <tbody id={name}>
                                    <td>{name}</td>
                                    <td>{email}</td>
                                </tbody>
                            </table>
                        
                        );
        })
      // If there is a delay in data, let's let the user know it's loading
      ) : (
        <h3>Loading...</h3>
      )}
                        )
                    })
                )
           </div>
        )
    }
}