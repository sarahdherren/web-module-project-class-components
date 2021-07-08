import React, { Component } from 'react'
import AddCircleIcon from '@material-ui/icons/AddCircle';

export default class TodoForm extends Component {

    submitHandler = e => {
        e.preventDefault();
        this.props.createTodo({ 
            task: this.props.task, 
            id: Date.now(),
            completed: false    
        }); 
    }

    

    render() {
        return (
            <form onSubmit = {this.submitHandler} className='todoForm' >
                <input
                    type='text'
                    placeholder='new task'
                    id='task'
                    name='task'
                    value={this.props.task}
                    onChange={this.props.changeHandler}
                />
                <button><AddCircleIcon onClick={this.submitHandler} /></button>
                    
            </form>
        )
    }
}
