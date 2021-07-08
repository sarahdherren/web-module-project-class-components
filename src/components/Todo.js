import React, { Component } from 'react'

export default class Todo extends Component {
    render() {
        return (
                <div 
                    className='todo'
                    style={{textDecoration: this.props.task.completed ? 'line-through' : 'none' }}
                    onClick={() => this.props.toggleHandler(this.props.task.id)} >
                        {this.props.task.task}
                </div>
        )
    }
};
