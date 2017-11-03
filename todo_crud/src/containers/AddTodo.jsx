import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addTodo } from '../actions/index.js';

class AddTodo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todo: ''
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    const todo = this.state.todo.trim();
    if(todo !== '') {
      this.props.addTodo(todo); 
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
    )
  }
}


export default connect(null, { addTodo })(AddTodo);