 import React , { Component } from 'react';
import 'bulma/css/bulma.css'
import coursedata from './coursetabledata';
export default class Course extends Component  {    
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
        {coursedata.map(user => {
                        const {CourseID,Title,Day,Credit} = user;
                        return(
                        
                                <tbody id={this.name}>
                                    <td>{CourseID}</td>
                                    <td>{Title}</td>
                                    <td>{Day[0].date}-{Day[1].date}</td>
                                    <td>{Day[0].stime}-{Day[0].etime}</td>
                                    <td>{Credit}</td>
                                    <td><button class="btn btn-primary" type="button" >Register</button></td>
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


