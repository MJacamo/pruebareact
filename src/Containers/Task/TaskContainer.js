//CORE AND LIB
import React, { Component } from 'react';
import axios from 'axios';

//CSS
import './TaskContainer.css'
import { Row, Col } from 'react-bootstrap';

// CONSTANTES
import { URL, CONFIG } from '../../Const';

//COMPONENTES
import TasksLists from '../../Components/Tasks/tasksList/TasksList';
import FormTask from '../../Components/Tasks/FormTask/FormTask'


class TaskContainer extends Component {

    state = {
        tasks: [],
        activeModal: false,
        task: {
            name: '',
            description: ''
        }
    }

    componentDidMount() {
        const apiUrl = URL + 'tasks';
        axios.get(apiUrl, CONFIG)
            .then(tasks => this.getTasks(tasks.data.message))
            .catch(e => console.error(e));
    }

    componentDidUpdate() {
        const apiUrl = URL + 'tasks';
        axios.get(apiUrl, CONFIG)
            .then(tasks => this.getTasks(tasks.data.message))
            .catch(e => console.error(e));
    }

    addTask = (task) => {
        const apiUrl = URL + 'tasks';
        if (task.name.length > 0) {
            axios.post(apiUrl, task, { headers: CONFIG.headers })
                .then(task => console.log(task))
                .catch(e => console.log(e))
        }
        this.setState({
            activeModal: false
        })
    }

    deleteTask = (id) => {
        const apiUrl = URL + `tasks/${id}`;
        axios.delete(apiUrl, CONFIG)
            .then(task => console.log(task))
            .catch(e => console.error(e));
    }

    getTasks = (taskData) => {
        this.setState({
            tasks: taskData
        })
    }

    activaModal = () => {
        this.setState({
            activeModal: true
        })
    }

    render() {
        return (
            <div className='container mb-5'>
                <Row className="justify-content-md-center ">
                    <Col xs={ 7 }>
                        <div className='headerTask'>
                            <p>
                                List Tasks
                            </p>
                        </div>
                    </Col>
                </Row>
                <Row className="justify-content-md-center">
                    <Col xs={ 7 }>
                        <TasksLists
                            dataTasks={ this.state.tasks }
                            deleteTask={ (id) => this.deleteTask(id) }
                        />
                    </Col>
                </Row>
                <Row className=" justify-content-md-center">
                    <Col xs={ 7 } >
                        <button onClick={ () => this.activaModal() } className=' btnTask'> + New Task</button>
                    </Col>
                </Row>
                <FormTask
                    addTask={ (task) => this.addTask(task) }
                    active={ this.state.activeModal } />
            </div >
        );

    }
}

export default TaskContainer;