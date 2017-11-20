import React, { Component } from 'react';
import { connect } from 'react-redux';
import TodoItem from '../containers/TodoItem.jsx';
import { fetchTodosRequest } from '../actions';

export class TodoList extends Component {
  componentWillMount() {
    this.props.fetchTodosRequest();
  }
  render() {
    // console.log('mapp', this.props.todos);
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

export const mapDispatchToProps = dispatch => ({
  fetchTodosRequest: () => dispatch(fetchTodosRequest()),
});


export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
