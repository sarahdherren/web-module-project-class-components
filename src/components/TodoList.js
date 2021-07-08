// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React, { Component } from 'react'
import Todo from './Todo';
import DeleteIcon from '@material-ui/icons/Delete';

export default class TodoList extends Component {

    render() {
        
        return (
            <div className='todoList' >
               {this.props.todos.map(todo => (
                   <Todo
                    key={todo.id}
                    task={todo}
                    toggleHandler={this.props.toggleHandler}
                   />
                ))} 
                <button onClick={this.props.removeHandler}>
                    <p className='delete'>clear completed tasks</p>
                </button>
            </div>
        )
    }
}
