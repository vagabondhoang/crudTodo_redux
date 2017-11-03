import React, { Component } from 'react';
import { connect } from 'react-redux';
import TodoItem from '../containers/TodoItem.jsx';


class TodoList extends Component {

  render() {
    return (
      <div>
        <ul>
          { this.props.todos.map(todo => <TodoItem {...todo} key={todo.id} />) }
        </ul>
      </div>
    )
  }
}



const mapStateToProps = (state) => ({
  todos: state.todoReducer.todoLists
})

export default connect(mapStateToProps)(TodoList)