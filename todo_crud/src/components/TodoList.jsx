import React, { Component } from 'react';
import { connect } from 'react-redux';
import TodoItem from '../containers/TodoItem.jsx';
import { fetchTodos } from '../actions';

class TodoList extends Component {
  fetchTodos() {
    const url = 'http://localhost:8080/todos';
    fetch(url)
      .then(response => response.json())
      .then((data) => {
        this.props.fetchTodos(data);
      })
      .catch(err => console.log(err));// eslint-disable-line no-console
  }

  componentWillMount() {
    this.fetchTodos();
  }

  render() {
    return (
      <div>
        <table>
          <thead>
            <tr>
              <th>Todo Item</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
              {this.props.todos.map(todo => <TodoItem key={todo._id} {...todo} />) }
          </tbody>
        </table>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  todos: state.todoReducer,
});


export default connect(mapStateToProps, { fetchTodos })(TodoList);
