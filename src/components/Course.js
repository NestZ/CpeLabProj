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
    .then(response=>{
      if(response.status==200){
        coursedata[Id].splice(0,6)
      }
    })
  }
 render(){
    return (
      <div className="is-fullheight">
          <section className="hero is-info is-bold">
            <div className="hero-body">
              <div className="container">
                <h1 className="title">
                  Registration Office
                </h1>
                <h2 className="subtitle">
                  Chiang Mai University
                </h2>
              </div>
            </div>
          </section>
    <div class="contianer">
        <div className="column is-three-fifths is-offset-one-fifth">
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
                                    <td><button class="button is-success" type="button" key={coursedata.id} onClick = {()=>this.Register(Id)}>Register</button></td>
                                </tbody>
                            
                        );
        }
        )
     }
        </table>
        </div>
      </div>
      </div>
    )
  }
}


