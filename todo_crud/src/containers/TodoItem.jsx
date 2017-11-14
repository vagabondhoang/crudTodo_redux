import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { deleteTodoRequest, updateTodoRequest } from '../actions/index';

class TodoItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isEditing: false,
    };

    this.renderAction = this.renderAction.bind(this);
    this.editTodo = this.editTodo.bind(this);
  }

  editTodo() {
    this.setState({
      isEditing: true,
    });
  }
  handleCancel() {
    this.setState({
      isEditing: false,
    });
  }
  updateTodo = async (event) => {
    try {
      event.preventDefault();
      const newTodo = this.refs.editInput.value;
      const { _id } = this.props;
      this.props.updateTodoRequest(_id, newTodo);
      this.setState({
        isEditing: false,
      });
    } catch (err) {
      console.log(err);// eslint-disable-line no-console
    }
  }

  renderTodo() {
    const { title } = this.props;

    if (this.state.isEditing) {
      return (
        <td>
          <form onSubmit={this.updateTodo}>
            <input type="text" defaultValue={title} ref="editInput" />
          </form>
        </td>
      );
    }
    return (
      <td>{title}</td>
      
    );
  }

  deleteTodo = () => {
    const { _id } = this.props;
    this.props.deleteTodoRequest(_id);
  }

  renderAction() {
    if (this.state.isEditing) {
      return (
        <td>
          <button onClick={this.updateTodo}>Save</button>
          <button onClick={() => this.handleCancel()}>Cancel</button>
        </td>
      );
    }
    return (
      <td>
        <button onClick={this.editTodo}>Edit</button>
        <button onClick={this.deleteTodo}>Delete</button>
      </td>
    );
  }

  render() {
    return (
      <tr>
        {this.renderTodo()}
        {this.renderAction()}
      </tr>
    );
  }
}

TodoItem.propTypes = {
  deleteTodoRequest: PropTypes.func.isRequired,
  updateTodoRequest: PropTypes.func.isRequired,
};

export default connect(null, { deleteTodoRequest, updateTodoRequest })(TodoItem);

