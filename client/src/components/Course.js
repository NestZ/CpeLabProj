import React , { Component } from 'react';
import courses from './coursetabledata';

export default class Course extends Component  {
  constructor(props){
    super(props);
    this.state = {
      isLoading: true,
      usersCourse: [],
      allCourse : []
    };
  }

  aler(){
    alert("Your schedule overlapping!");
  }

  aler1(){
    alert("Register Success!");
  }

  checktimed(Id){
    if(this.state.usersCourse.length === 0)return true;
    else{
      for(let i = 0;i < this.state.usersCourse.length;i++){
        if((this.state.usersCourse[i].day === this.state.allCourse[Id].day) &&
          (this.state.usersCourse[i].time === this.state.allCourse[Id].time)){
          return false;
        }
      }
      return true;
    }
  }

  checkcourse() {
    let temp = []
    courses.forEach((item) => { temp.push(item) });
    this.setState({allCourse : temp});
    for(let i = 0;i < this.state.usersCourse.length;i++){
      for(let j = 0;j < this.state.allCourse.length;j++){  
        if(this.state.usersCourse[i].id === this.state.allCourse[j].id){
          this.state.allCourse.splice(j, 1);
          j--;
        }
      }
    }
    this.setState({
      allCourse : this.state.allCourse,
      isLoading : false
    });
  }

  register = (id) =>{
    if(this.state.isLoading){
      alert('Do not register too fast! server is slow like turtle');
      return;
    }
    if(this.checktimed(id)){
      this.setState({isLoading : true});
      this.aler1()
      fetch('/reg',{
        method : 'POST',
        body : JSON.stringify(this.state.allCourse[id]),
        headers : {
          'Content-Type' : 'application/json',
          'Authorization': 'Bearer ' + sessionStorage.getItem('token')
        },
      })
      .then(response => {
        if(response.status === 200){
          this.state.allCourse.splice(id, 1);
          this.setState({ allCourse : this.state.allCourse });
          this.fetchUsers();
        }
        this.setState({isLoading : false});
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
      this.setState({ usersCourse: data.courses });
      this.checkcourse();
    })
    .catch(error => this.setState({ isLoading : false }));
  }

  componentDidMount() {
    this.fetchUsers();
  }

  renderTableData(){
    return(
        this.state.allCourse.map((course, i) => {
            return(
                <tr key={i}>
                    <td>{course.id}</td>
                    <td>{course.name}</td>
                    <td>{course.day}</td>
                    <td>{course.time}</td>
                    <td>{course.credits}</td>
                    <td>
                      <button
                        className="button is-success"
                        type="button"
                        key={i}
                        onClick={() => this.register(i)}>
                          Register
                      </button>
                    </td>
                </tr>
            );
        })
    );
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
                  <th>CourseName</th>
                  <th>Day</th>
                  <th>Time</th>
                  <th>Credit</th>
                  <th>Register</th>
                </tr>
              </thead>
              <tbody>
                { !this.state.isLoading ? (this.renderTableData()) : (<tr><td>Loading...</td></tr>) }
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  }
}


