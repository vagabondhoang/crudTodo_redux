import React from 'react';
import TodoList from './components/TodoList.jsx';
import AddTodo from './containers/AddTodo.jsx';
import './index.css';

const App = () => (
  <div className="mainApp">
    <h1>Todo App</h1>
    <AddTodo />
    <TodoList />
  </div>
);

export default App;
