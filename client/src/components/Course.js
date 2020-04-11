import React , { Component } from 'react';
import 'bulma/css/bulma.css'
import coursedata from './coursetabledata';

export default class Course extends Component  {
  constructor(props){
    super(props);
    this.state = {
      isLoading: true,
      usersCourse: [],
      allCourse : []
    };
  }

  refreshPage() {
    window.location.reload(false);
  }

  aler(){
    alert("Can not register!!!!");
  }

  aler1(){
    alert("Register Succes!!!!");
  }

  checktimed(Id){
    if(this.state.usersCourse.length === 0)return true;
    else{
      for(let i = 0;i < this.state.usersCourse.length;i++){
        if(this.state.usersCourse[i].day === this.state.allCourse[Id].day ||
          this.state.usersCourse[i].time === this.state.allCourse[Id].time){
            return false;
        }
      }
      return true;
    }
  }

  checkcourse() {
    for(let i = 0;i < this.state.usersCourse.length;i++){
      for(let j = 0;j < this.state.allCourse.length;j++){  
        if(this.state.usersCourse[i].id === this.state.allCourse[j].id){
          this.state.allCourse.splice(j, 1);
        }
      }
    }
    this.setState({allCourse:this.state.allCourse});
  }

  register = (Id) =>{
    if(this.checktimed(Id)){
      this.aler1()
      fetch('/reg',{
        method : 'POST',
        body : JSON.stringify(this.state.allCourse[Id]),
        headers : {
          'Content-Type' : 'application/json',
          'Authorization': 'Bearer ' + sessionStorage.getItem('token')
        },
      })
      // this.refreshPage()
      .then(response => {
        if(response.status === 200){
          this.state.allCourse[Id].splice(Id, 1);
          this.setState({ allCourse:this.state.allCourse });
        }
      });
    }
    else{
      this.aler();
    }
  }

  fetchUsers() {
    fetch('/me/course', {
        method : 'Get',
        headers : {
            'Authorization' : 'Bearer ' + sessionStorage.getItem('token')
        }
    })
    .then(response => response.json())
    .then(data => {
      this.setState({
        usersCourse: data.courses,
        isLoading: false,
      });
      this.checkcourse();
    })
    .catch(error => this.setState({ isLoading : false }));
  }

  componentDidMount() {
    this.fetchUsers();
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
        <div className="contianer">
        <div className="column is-three-fifths is-offset-one-fifth">
        <table className="table is-striped is-narrow is-hoverable is-fullwidth pricing__table is-fullwidth" id="dataTable">
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
          <tbody>
          {
            this.state.allCourse.map((course, i) => {
              const { id, name, credits, time, day } = course;
              return (
                <div>
                  <td>{id}</td>
                  <td>{name}</td>
                  <td>{day}</td>
                  <td>{time}</td>
                  <td>{credits}</td>
                  <td>
                    <button
                      className="button is-success"
                      type="button"
                      key={i}
                      onClick={() => this.register(i)}>
                        Register
                    </button>
                  </td>
                </div>
              );
            })
          }
          </tbody>
        </table>
      </div>
    </div>
    </div>
    );
  }
}


