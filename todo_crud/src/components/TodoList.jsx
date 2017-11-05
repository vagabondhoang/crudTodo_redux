import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types'
import TodoItem from '../containers/TodoItem.jsx';

class TodoList extends Component {
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
              {this.props.todos.map(todo => <TodoItem
                {...todo}
                key={todo.id}
              />)}
          </tbody>
        </table>
      </div>
    )
  }
}


const mapStateToProps = (state) => ({
  todos: state.todoReducer.todoLists
})

TodoList.propTypes = {
  todos: PropTypes.array.isRequired
}

export default connect(mapStateToProps)(TodoList)