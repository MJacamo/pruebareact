import React from 'react';
import './Task.css';

const Task = (props) => {

    const { task, deleteTask } = props;

    return (
        <div className='task' >
            <li className="list-group-item">
                <div className="card">
                    <div className="card-body">
                        <h5 className="card-title">{ task.name }</h5>
                        <hr />
                        <p className="card-text">{ task.description }</p>
                        <button type='button' onClick={ () => deleteTask() } className="btn btn-primary">Delete</button>
                    </div>
                </div>
            </li>
        </div>)

}

export default Task;