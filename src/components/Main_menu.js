import React from 'react'
import { Link } from 'react-router-dom';


export default function MainMenu() {
    return (
    <div className="container mt-5">
            <h5 className="card-title">Option</h5>
            <Link to="/Drop"> 
              <h3>
                <button type="button" className="btn btn-primary">Drop</button>
              </h3>
            </Link>

            <Link to="/Testtable">
              <h3>
                <button type="button" className="btn btn-primary">Register sunj</button>
              </h3>
            </Link>

            <Link   to="/Manage">
              <h3>
                <button type="button" className="btn btn-primary">Manage subj</button>
              </h3>
            </Link>

            <Link to="/Studentlist">
              <h3>
                <button type="button" className="btn btn-primary">Student list</button>
              </h3>
            </Link>
              
    </div>  
    )
}