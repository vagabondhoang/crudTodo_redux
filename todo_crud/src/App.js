import React, { Component } from 'react';
import TodoList from './components/TodoList.jsx';
import AddTodo from './containers/AddTodo.jsx';
import './index.css';

class App extends Component {

  render() {
    return (
      <div className="mainApp">
          <h1>Todo App</h1>
          <AddTodo />
          <TodoList />
      </div>
    );
  }
}

export default App;
