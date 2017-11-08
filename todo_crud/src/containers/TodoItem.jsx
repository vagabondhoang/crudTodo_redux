import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { deleteTodo, updateTodo } from '../actions/index';

class TodoItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isEditing: false,
    };

    this.renderAction = this.renderAction.bind(this);
    this.editTodo = this.editTodo.bind(this);
    this.updateTodo = this.updateTodo.bind(this);
    this.deleteTodo = this.deleteTodo.bind(this);
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
  updateTodo(event) {
    event.preventDefault();
    const newTodo = this.refs.editInput.value;
    const { id } = this.props;
    const url = `http://localhost:8080/todo/${id}`;
    fetch(url, {
      method: 'PUT',
      id,
      title: newTodo,
    })
      .then((response) => {
        this.props.updateTodo(response.data.id, response.data.title);
        this.setState({
          isEditing: false,
        });
      });
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
      );
    }
    return (
      <td>{todo}</td>
    );
  }

  deleteTodo() {
    const { id } = this.props;
    const url = `http://localhost:8080/todo/${id}`;
    fetch(url, {
      method: 'DELETE',
      id,
    })
      .then(response => this.props.deleteTodo(response.data.id))
      .catch(err => console.log(err));// eslint-disable-line no-console
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
        <button onClick={() => this.deleteTodo()}>Delete</button>
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
  todo: PropTypes.string.isRequired,
  deleteTodo: PropTypes.func.isRequired,
  updateTodo: PropTypes.func.isRequired,
};

export default connect(null, { deleteTodo, updateTodo })(TodoItem);

