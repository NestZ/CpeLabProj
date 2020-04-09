import React , { Component } from 'react';

export default class  Studentlist extends Component {
    
    render(){
        return (
          <div>
            <div><h3>Student List</h3></div>
            <table class="table dataTable my-0" id="dataTable">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Student ID</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>1</td>
                        <td>Roronoa Zoro</td>
                        <td>61xxxxxxx</td>
                        <td><button class="btn btn-primary" type="button" >Button</button></td>
                    </tr>
    
                    <tr>
                    <td>2</td>
                        <td>Monkey D. Luffy</td>
                        <td>61xxxxxxx</td>
                        <td><button class="btn btn-primary" type="button" >Button</button></td>
                    </tr>
    
                    <tr>
                    <td>3</td>
                        <td>Vinsmoke Sanji</td>
                        <td>61xxxxxxx</td>
                        <td><button class="btn btn-primary" type="button" >Button</button></td>
                    </tr>
    
                    <tr>
                    <td>4</td>
                        <td>Jinbe</td>
                        <td>61xxxxxxx</td>
                        <td><button class="btn btn-primary" type="button" >Button</button></td>
                    </tr>
                
                </tbody>
                    <tfoot>
                        <tr>
                            <td><strong>No.</strong></td>
                            <td><strong>Name</strong></td>
                        </tr>
                    </tfoot>
            </table>
          </div>
        )
    }
  }