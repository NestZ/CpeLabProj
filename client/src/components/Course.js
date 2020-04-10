import React , { Component } from 'react';
import 'bulma/css/bulma.css'
import coursedata from './coursetabledata';
export default class Course extends Component  {
  state = {
    isLoading: true,
    users:[],
    error:null
  }
  Register = (Id) =>{
    console.log("Hee"+Id)
    console.log("Hee"+JSON.stringify(coursedata[Id]))
    fetch('/reg',{
      method :'POST',
      body:JSON.stringify(coursedata[Id]),
      headers :{
        'Content-Type' : 'application/json',
        'Authorization': 'Bearer' +localStorage.getItem('token')
      },
    })
    .then(response=>{console.log(response.status)})
  }
 render(){
    return (
    <div class="contianer">
      <div class="table__wrapper">
        <div class="card-header is-size-1"><h1 class="card-header-title is-size-1" >Course</h1></div>
             
        <table class="table is-striped is-narrow is-hoverable is-fullwidth pricing__table is-fullwidth" id="dataTable">
                                <thead>
                                    <tr>
                                        <th>CourseID</th>
                                        <th>Title</th>
                                        <th>Day</th>
                                        <th>Time</th>
                                        <th>Credit</th>
                                        <th>Register</th>
                                    </tr>
                                </thead>
        {coursedata.map((user,Id) => {
                        const {id,name,credits,time,day} = user;
                        return(
                        
                                <tbody id={this.name}>
                                    <td>{id}</td>
                                    <td>{name}</td>
                                    <td>{day}</td>
                                    <td>{time}</td>
                                    <td>{credits}</td>
                                    <td><button class="btn btn-primary" type="button" key={coursedata.id} onClick = {()=>this.Register(Id)}>Register</button></td>
                                </tbody>
                            
                        );
        }
        )
     }
                <tfoot>
                    <tr>
                     <th>CourseID</th>
                     <th>Title</th>
                     <th>Day</th>                               
                     <th>Time</th>
                     <th>Credit</th>
                     <th>Register</th>
                    </tr>
                </tfoot>
        </table>
      </div>
      </div>
    )
  }
}


