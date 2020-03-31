import React from 'react';
import Task from '../task/Task';
import './TasksList.css';

const TasksLists = (props) => {
    const { dataTasks, deleteTask } = props;
    return <div >
        {
            dataTasks.map((task) => <Task deleteTask={ () => deleteTask(task.id) } key={ task.id } task={ task } />)
        }
    </div >
}

export default TasksLists;