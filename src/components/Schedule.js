import React , { Component } from 'react';

class Schedule extends Component{
    constructor(props){
        super(props);
        this.state = {
            schedule : this.props.schedule
        }
    }

    render(){
        return(
            <div>
                <table className="table is-fullwidth">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Name</th>
                            <th>Credits</th>
                            <th>Day</th>
                            <th>Time</th>
                        </tr>
                    </thead>
                    <tbody>
                    {this.state.schedule.map((course, i) => {
                        return(
                            <tr key={i}>
                                <td>{course.id}</td>
                                <td>{course.name}</td>
                                <td>{course.credit}</td>
                                <td>{course.day}</td>
                                <td>{course.time}</td>
                            </tr>
                        );
                    })}
                    </tbody>
                </table>
            </div>
        );
    }
}

export default Schedule;