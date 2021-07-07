// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React, { Component } from 'react'
import Todo from './Todo';

export default class TodoList extends Component {

    render() {
        
        return (
            <ul>
               {this.props.todos.map(todo => (
                   <Todo
                    key={todo.id}
                    task={todo.task}
                   />
                ))} 
            </ul>
        )
    }
}
