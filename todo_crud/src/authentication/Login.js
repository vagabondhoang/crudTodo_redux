import React, { Component } from 'react';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: ''
    }

    this.handleSubmit = this.handleSubmit.bind(this);
  }
  
  handleSubmit(e) {
    e.preventDefault();
    const { email, password } = this.state;
    
    if(email === 'hoangtuananhnamdinh@gmail.com' && password === 'abc') {
      localStorage.setItem('email', email);
      window.location.replace('http://localhost:3000/');
    } else {
      alert('Email or password is not correct')
    }
    
  }
  render() {
    return (
      <form>
        <label htmlFor="email">Email</label>
        <input  onChange={(e) => this.setState({ email: e.target.value })} name="email" />
        <label htmlFor="password"></label>
        <input type="password" onChange={(e) => this.setState({ password: e.target.value })} name="password" />
        <button type="submit" onClick={this.handleSubmit}>Login</button>
      </form>
    )
  }
}

export default Login;