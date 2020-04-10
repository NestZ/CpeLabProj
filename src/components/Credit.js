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
                        <p>ddddddddddddd</p>
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
                                                master <br></br>
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
                                                <p>Tee</p>
                                            </div>
                                            <div className="content">
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
