import React, { Component } from 'react';
import { connect } from 'react-redux';
import TodoItem from '../containers/TodoItem.jsx';
import { fetchTodosRequest } from '../actions';

class TodoList extends Component {
  fetchTodos() {
    this.props.fetchTodosRequest();
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
              {this.props.todos.map((todo, index) => <TodoItem key={index} {...todo} />) }
          </tbody>
        </table>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  todos: state.todoReducer,
});


export default connect(mapStateToProps, { fetchTodosRequest })(TodoList);
