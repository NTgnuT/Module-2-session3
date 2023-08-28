import React, { Component } from "react";

export default class Lession10 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      confirmPassword: "",
      email: "",
    };
  }

  handleChange = (event) => {
    const value = event.target.value;
    const name = event.target.name;

    this.setState({
      [name]: value,
    });
  };

  handleSubmit = (e) => {
    // ngăn chặn sự kiện submit load lại trang
    e.preventDefault();

    const { username, password, confirmPassword, email } = this.state;
    if (password !== confirmPassword) {
      alert("confirmPassword không đúng");
      return;
    }

    const newUser = {
      username: this.state.username,
      password: this.state.password,
      confirmPassword: this.state.confirmPassword,
      email: this.state.email,
    };
    console.log("newUser:", newUser);
  };
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <div className="mb-3">
            <label htmlFor="username" className="form-label">
              UserName
            </label>
            <input
              className="form-control"
              id="username"
              onChange={this.handleChange}
              name="username"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="password" className="form-label">
              Password
            </label>
            <input
              type="password"
              className="form-control"
              id="password"
              onChange={this.handleChange}
              name="password"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="confirmPassword" className="form-label">
              Confirm Password
            </label>
            <input
              type="password"
              className="form-control"
              id="confirmPassword"
              onChange={this.handleChange}
              name="confirmPassword"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">
              Email Address
            </label>
            <input
              type="email"
              className="form-control"
              id="email"
              onChange={this.handleChange}
              name="email"
            />
          </div>

          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    );
  }
}
