import React, { Component } from "react";

export default class FormUnControled extends Component {
  constructor(props) {
    super(props);
    // khai báo tham chiếu cho biến username
    this.username = React.createRef();
    this.dateOfBirth = React.createRef();
    this.email = React.createRef();
    this.password = React.createRef();
  }

  //hàm xử lý gửi dữ liệu
  handleSubmit = (e) => {
    // ngăn chặn sự kiện subnit của form
    e.preventDefault();

    console.log("username", this.username.current.value);
    console.log("dateOfBirth", this.dateOfBirth.current.value);
    console.log("email", this.email.current.value);
    console.log("password", this.password.current.value);
  };
  render() {
    return (
      <div>
        <form onSubmit={(e) => this.handleSubmit(e)}>
          <div className="mb-3">
            <label htmlFor="username" className="form-label">
              UserName
            </label>
            <input
              ref={this.username}
              className="form-control"
              id="username"
              name="username"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="dateOfBirth" className="form-label">
              DateOfBirth
            </label>
            <input
              ref={this.dateOfBirth}
              type="date"
              className="form-control"
              id="dateOfBirth"
              name="dateOfBirth"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">
              Email
            </label>
            <input
              ref={this.email}
              type="text"
              className="form-control"
              id="email"
              name="email"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="password" className="form-label">
              Password
            </label>
            <input
              ref={this.password}
              type="password"
              className="form-control"
              id="password"
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
