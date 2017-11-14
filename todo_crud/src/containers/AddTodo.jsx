import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addTodoRequest } from '../actions/index';


class AddTodo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todo: '',
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit = async (e) => {
    try {
      e.preventDefault();
      const todo = this.state.todo.trim();
      if (todo.length < 3 || todo.length > 50) {
        return alert('todo should have at least 3 characters and no more than 50');
      }
      this.props.addTodoRequest(todo);
    } catch (err) {
      console.log(err);// eslint-disable-line no-console
    }
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
        placeholder="please fill some text"
        onChange={event => this.setState({ todo: event.target.value })}
        />
      </form>
    );
  }
}

export default connect(null, { addTodoRequest })(AddTodo);
