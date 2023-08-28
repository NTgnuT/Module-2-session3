import React, { Component } from "react";

export default class Form_C2 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      dateOfBirth: "",
      email: "",
      password: "",
    };
  }

  //hàm lắng nghe sự thay đổi trong các ô input
  handleChange = (event) => {
    const value = event.target.value;
    const name = event.target.name;

    this.setState({
      [name]: value,
    });

    // cập nhật lại state
    //     if (name === "username") {
    //       this.setState({
    //         username: value,
    //       });
    //     } else if (name === "dateOfBirth") {
    //       this.setState({
    //         dateOfBirth: value,
    //       });
    //     } else if (name === "email") {
    //       this.setState({
    //         email: value,
    //       });
    //     } else if (name === "password") {
    //       this.setState({
    //         password: value,
    //       });
    //     }
  };

  //hàm xử lý gửi dữ liệu
  handleSubmit = (e) => {
    // ngăn chặn sự kiện submit của form
    e.preventDefault();
    // đối tượng newUser
    const newUser = {
      username: this.state.username,
      dateOfBirth: this.state.dateOfBirth,
      email: this.state.email,
      password: this.state.password,
    };
    console.log("newUser:", newUser);
  };
  render() {
    console.log("username", this.state.username);
    return (
      <div>
        <form onSubmit={(e) => this.handleSubmit(e)}>
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
            <label htmlFor="dateOfBirth" className="form-label">
              DateOfBirth
            </label>
            <input
              type="date"
              className="form-control"
              id="dateOfBirth"
              onChange={this.handleChange}
              name="dateOfBirth"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">
              Email
            </label>
            <input
              type="text"
              className="form-control"
              id="email"
              onChange={this.handleChange}
              name="email"
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
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    );
  }
}
