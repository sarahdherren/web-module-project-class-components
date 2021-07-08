import React, { Component } from 'react';
import TodoList from './components/TodoList';
import TodoForm from './components/TodoForm';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';


export default class App extends Component {
  constructor() {
    super()
        this.state = {
            todos: [],
            task: ''
        };
        
    }
  
  year = new Date().getFullYear();

  createTodo = (newTodo) => {
      console.log('added!')
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

  toggleHandler = (id) => {
      const updatedTodos = this.state.todos.map(todo => {
        if(todo.id === id) {
            return {...todo, completed: !todo.completed};
        }
        return todo;
      })
    this.setState({
        todos: updatedTodos
    });
  }

  removeHandler = () => {
      const remainingTodos = this.state.todos.filter(todo => todo.completed === false)
      console.log(remainingTodos)
    this.setState({
        todos: remainingTodos
    });

  }
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  render() {
    
    return (
      <div>
        <header>
            <h1><FavoriteBorderIcon /> Today's Agenda <FavoriteBorderIcon /></h1>
        </header>
        <TodoForm  
          createTodo={this.createTodo} 
          task={this.state.task} 
          changeHandler={this.changeHandler}
          
          />
        <TodoList 
            todos={this.state.todos}
            toggleHandler={this.toggleHandler}
            removeHandler={this.removeHandler}
         />
         <footer>
             <p>Copyright ⓒ {this.year}</p>
         </footer>
      </div>
    );
  }
}
