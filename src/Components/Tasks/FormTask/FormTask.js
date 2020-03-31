import React, { useState } from 'react';

import { Modal } from 'react-bootstrap';

const FormTask = (props) => {

    const [ task, setTask ] = useState({
        name: '',
        description: ''
    });

    const handleInputChange = (e) => {
        const { value, name } = e.target;
        setTask({
            ...task,
            [ name ]: value
        });
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        props.addTask(task);
        setTask({ name: '', description: '' });
    }

    return (
        <div>
            <Modal show={ props.active } >
                <div className="card">
                    <form className="card-body" onSubmit={ handleSubmit }>
                        <div className="form-group">
                            <input
                                type="text"
                                name="name"
                                className="form-control"
                                value={ task.name }
                                onChange={ handleInputChange }
                                placeholder="Name"
                            />
                        </div>
                        <div className="form-group">
                            <input
                                type="text"
                                name="description"
                                className="form-control"
                                value={ task.description }
                                onChange={ handleInputChange }
                                placeholder="Description"
                            />
                        </div>
                        <button type="submit" className="btn btn-primary float-right">
                            Save
          </button>
                    </form>
                </div>

            </Modal>
        </div>
    );
}

export default FormTask;