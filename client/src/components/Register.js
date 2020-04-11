import React , { Component } from 'react';
import 'bulma/css/bulma.css'
export default class Login extends Component{
  constructor(props){
    super(props);
    this.state = {
        name : '',
        email: '',
        password: ''
    };
  }
handleInputChange = (event) => {
    const { value, name } = event.target;
    this.setState({
      [name]: value
    });
}
onSubmit = (event) => {
    event.preventDefault();
    fetch('/signup',{
        method: 'POST',
        body: JSON.stringify(this.state),
        headers: {
          'Content-Type': 'application/json'
        }
      })
      .then(res => {
        if (res.status === 201) {
          this.props.history.push('/');
          alert('Finish');
        } else {
          const error = new Error(res.status);
          throw error;
        }
      })
      .catch(err => {
        console.error(err);
        alert('Error Signup in please try again');
      });
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
    <section className="hero has-text-centered is-medium">
            <div className="hero-body">
              <div className="container">
                <div className="columns is-centered">
                    <div className="column is-7-tablet is-6-desktop is-5-widescreen is-fullheight">
                      <form className="box has-text-left">
                        <div className="field">
                          <label className="label">Register</label>
                          <label className="label">Name</label>
                            <input
                              type="text"
                              name="name"
                              placeholder="Name"
                              className="input"
                              value={this.state.name}
                              onChange={this.handleInputChange}
                              required
                              />
                        </div>
                        <div className="field">
                        <label class="label">Email</label>
                            <input
                              type="email"
                              name="email"
                              placeholder="Email"
                              className="input"
                              value={this.state.email}
                              onChange={this.handleInputChange}
                              required
                            />
                          </div>
                        <div className="field">
                          <label className="label">Password</label>
                              <input
                                type="password"
                                name="password"
                                placeholder="Password"
                                className="input"
                                value={this.state.password}
                                onChange={this.handleInputChange}
                                required
                                />
                            <div className="field">
                              <br/>
            
                              <button className="button is-success button is-fullwidth" onClick={this.onSubmit}>Register</button>
                              
                            </div>
                         </div>
                      </form>
                  </div>
                </div>
              </div>
            </div>
        </section>
      </div>
     )
}
}