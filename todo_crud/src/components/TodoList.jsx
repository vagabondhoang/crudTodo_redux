import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import TodoItem from '../containers/TodoItem.jsx';
import { getTodos } from '../actions/index';

class TodoList extends Component {
  constructor(props) {
    super(props);
    this.getTodos = this.getTodos.bind(this);
  }
  getTodos() {
    const url = 'http://localhost:8080/todos';
    const todo = this.props.todos;
    fetch(url, {
      method: 'GET',
      todo,
    })
      .then(response => this.props.getTodos(response.data.todo))
      .catch(err => console.log(err));// eslint-disable-line no-console
  }
  render() {
    const todos = this.getTodos();
    console.log(todos);
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
              {todos.map(todo => <TodoItem
                {...todo}
                key={todo.id}
              />)}
          </tbody>
        </table>
      </div>
    );
  }
}


const mapStateToProps = state => ({
  todos: state.todoReducer.todoLists,
});

TodoList.propTypes = {
  todos: PropTypes.array.isRequired,
};

export default connect(mapStateToProps, { getTodos })(TodoList);
