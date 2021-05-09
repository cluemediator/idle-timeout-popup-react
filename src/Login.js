import React, { Component } from 'react';

class Login extends Component {

  handleLogin = () => {
    this.props.history.push('/dashboard');
  }

  render() {
    return <div className="w-25">
      <b className="mb-2 d-block">Login</b>
      <input className="d-block mb-2 form-control" type="text" placeholder="Email" />
      <input className="d-block mb-2 form-control" type="password" placeholder="Password" />
      <button className="btn btn-success" onClick={this.handleLogin}>Login</button>
    </div>
  }
}

export default Login;