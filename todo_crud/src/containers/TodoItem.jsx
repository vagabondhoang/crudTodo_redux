import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { deleteTodo, updateTodo } from '../actions/index.js';

class TodoItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isEditing: false
    }

    this.renderAction = this.renderAction.bind(this);
    this.editTodo = this.editTodo.bind(this);
    this.updateTodo = this.updateTodo.bind(this);
  }

  editTodo() {
    this.setState({
      isEditing: true
    })
  }
  handleCancel() {
    this.setState({
      isEditing: false
    })
  }
  updateTodo(event) {
    event.preventDefault();
    const newTodo = this.refs.editInput.value;
    const { id } = this.props;
    this.props.updateTodo(id, newTodo)
  }

  renderTodo() {
    const { todo } = this.props;

    if (this.state.isEditing) {
      return (
        <td>
          <form onSubmit={this.updateTodo}>
            <input type="text" defaultValue={todo} ref="editInput" />
          </form>
        </td>
      )
    }
    return (
      <td>{todo}</td>
    )
  }

  renderAction() {
    const { id } = this.props; 

    if (this.state.isEditing) {
      return (
        <td>
          <button onClick={this.updateTodo}>Save</button>
          <button onClick={() => this.handleCancel()}>Cancel</button>
        </td>
      )
    }
    
    return (
      <td>
        <button onClick={this.editTodo}>Edit</button>
        <button onClick={() => this.props.deleteTodo(id)}>Delete</button>
      </td>
    )
  }

  render() {
    return (
      <tr>
        {this.renderTodo()}
        {this.renderAction()}
      </tr>
    )
  }
}

TodoItem.propTypes = {
  todo: PropTypes.string.isRequired,
  deleteTodo: PropTypes.func.isRequired,
  updateTodo: PropTypes.func.isRequired
}

export default connect(null, {deleteTodo, updateTodo})(TodoItem);