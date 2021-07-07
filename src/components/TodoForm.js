import React, { Component } from 'react'

export default class TodoForm extends Component {

    submitHandler = e => {
        e.preventDefault();
        this.props.createTodo({ 
            task: this.props.task, 
            id: Date.now(),
            completed: false    
        });
        this.setState({
            task: ''
        })
    }

    render() {
        return (
            <form onSubmit = {this.submitHandler}>
                <label>Create New Task: </label>
                    <input
                        type='text'
                        placeholder='new task'
                        id='task'
                        name='task'
                        value={this.props.task}
                        onChange={this.props.changeHandler}
                    />
                    <button>Add Task!</button>
            </form>
        )
    }
}
