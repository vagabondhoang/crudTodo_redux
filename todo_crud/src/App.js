import React, { Component } from 'react';
import { Container } from 'semantic-ui-react';

import TodoList from './components/TodoList.jsx';
import AddTodo from './containers/AddTodo.jsx';

class App extends Component {
  
  render() {
    return (
      <Container>
        <h1>Todo App</h1>
        <AddTodo />
        <TodoList />
      </Container>
    );
  }
}

export default App;
