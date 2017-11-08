import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addTodo } from '../actions/index';


class AddTodo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todo: '',
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    const url = 'http://localhost:8080/todo';
    const todo = this.state.todo.trim();
    if (todo !== '') {
      fetch(url, {
        method: 'POST',
        title: todo,
      })
        .then(response => this.props.addTodo(response.data.title))
        .catch(err => console.log(err));// eslint-disable-line no-console
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

export default connect(null, { addTodo })(AddTodo);
