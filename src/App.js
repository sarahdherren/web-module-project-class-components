import React, { Component } from 'react';
import TodoList from './components/TodoList';
import TodoForm from './components/TodoForm';

export default class App extends Component {
  constructor(props) {
    super(props)
        this.state = {
            todos: [],
            task: ''
        };
        
    }
  

  createTodo = (newTodo) => {
    const newTodoList  = [...this.state.todos, newTodo]
    this.setState({
      todos: newTodoList
    });
    this.setState({
        task: ''
    })
  }

  changeHandler = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    });
  }
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  render() {
    
    return (
      <div>
        <h1>Today's Agenda!</h1>
        <TodoForm 
          createTodo={this.createTodo} 
          task={this.state.task} 
          changeHandler={this.changeHandler}
          />
        <TodoList todos={this.state.todos} />
      </div>
    );
  }
}
