import React , { Component } from 'react';
import 'bulma/css/bulma.css'



export default class Credit extends Component{
    render(){
        return(
            <div>
                <section className="hero">
                    <figure className="image">
                        <img src={require('../picture/ba.png')}></img>
                    </figure>
                </section>
                <section className="section">
                    <div className="container has-text-centered">
                        <h2 className="title a">Team A</h2>
                        <p>We have created a fictional band website. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est
                laborum consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                        <div className="columns is-centered" style={{padding: 35}} >
                            <div className="column">
                                <div className="card">
                                    <div className="card-image">
                                        <figure className="image is-1by0">
                                            <img src={require('../picture/nest.jpg')}></img>
                                        </figure>
                                    </div>
                                    <div className="card-content">
                                        <div className="media">
                                            <div className="media-content">
                                                <p>Nest</p>
                                            </div>
                                            <div className="content">
                                                
                                                <br></br><p>Thaneat Saithong (610610587) <br></br>
                                                Faculty of Engineering Chiang Mai University
                                                </p>
                                                Responsible<br></br>
                                                -Authentication <br></br>
                                                -Change profile <br></br>
                                                -API 

                                
                                            </div>        
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="column">
                                <div className="card">
                                    <div className="card-image">
                                        <figure className="image is-1by1">
                                            <img src={require('../picture/tee.jpg')}></img>
                                        </figure>
                                    </div>
                                    <div className="card-content">
                                        <div className="media">
                                            <div className="media-content">
                                                <h2>Tee</h2>
                                            </div>
                                            <div className="content">

                                                <br></br><p>Titi Kingkan (610610588) <br></br>
                                                Faculty of Engineering Chiang Mai University
                                                </p>
                                                Responsible<br></br>
                                                -Student list Page <br></br>
                                                -Main Menu Page <br></br>
                                                -Drop subj. Page <br></br> 
                                                -Credit Page

                                            </div>        
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="column">
                                <div className="card">
                                    <div className="card-image">
                                        <figure className="image is-1by1">
                                            <img src={require('../picture/billy.jpg')}></img>
                                        </figure>
                                    </div>
                                    <div className="card-content">
                                        <div className="media">
                                            <div className="media-content">
                                                <p>Billy</p>
                                            </div>
                                            <div className="content">
                                            <br></br><p>Theerasuwat Thungthanaphon (610610590) <br></br>
                                                Faculty of Engineering Chiang Mai University
                                                </p>
                                                Responsible<br></br>
                                                -Register subj. Page <br></br>
                                                -Change profile <br></br>
                                                -API 
                                            </div>        
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                    </div>
                </section>
            </div>
        )
    }
}
