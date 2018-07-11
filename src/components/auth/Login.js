import React from 'react';
import axios from 'axios';
class AuthLogin extends React.Component {

  state= {}

  handleSubmit = (e) => {
    e.preventDefault();
    axios({
      url: '/api/login',
      method: 'POST',
      data: this.state
    });
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div className="field">
          <label className="email">Email</label>
          <input className="input" name="email" placeholder="Email" onChange={this.handleChange} />
        </div>
        <div className="field">
          <label className="password">Password</label>
          <input className="input" type="password" name="password" placeholder="Password" onChange={this.handleChange} />
        </div>

        <button className="button">Submit</button>
      </form>
    );
  }
}

export default AuthLogin;
