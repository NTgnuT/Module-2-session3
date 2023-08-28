import React, { Component } from "react";

export default class Lession14 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      stafId: "",
      email: "",
      password: "",
    };
  }

  handleChange = (event) => {
    const value = event.target.value;
    console.log(event.target.value);
    const name = event.target.name;
    this.setState({
      [name]: value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();

    // const checkEmail =
    //   /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;

    const { stafId, email, password } = this.state;
    if (stafId === "") {
      alert("Mã không được để trống");
    } else if (stafId[0] != "N" && stafId[1] != "V") {
      alert("Mã không đúng định dạng");
    } else if (stafId.length < 8) {
      alert("Mã không được nhỏ hơn 8 ký tự");
    } else if (stafId.length > 16) {
      alert("Mã không được lớn hơn 16 ký tự");
    } else if (email == "") {
      alert("Email không được để trống");
    } else if (email != /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/) {
      alert("Email không đúng định dạng");
    } else if (password.length < 8) {
      alert("Mật khẩu không được nhỏ hơn 8 ký tự");
    } else {
      alert("Đăng ký thành công");
    }

    const newUser = {
      stafId: this.state.stafId,
      email: this.state.email,
      password: this.state.password,
    };
    console.log("newUser:", newUser);
  };

  render() {
    return (
      <>
        <form onSubmit={this.handleSubmit}>
          <div className="mb-3">
            <label htmlFor="stafId" className="form-label">
              Code:
            </label>
            <input
              className="form-control"
              id="stafId"
              onChange={this.handleChange}
              name="stafId"
              value={this.state.stafId}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">
              Email:
            </label>
            <input
              type="text"
              className="form-control"
              id="email"
              onChange={this.handleChange}
              name="email"
              value={this.state.email}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="password" className="form-label">
              Password:
            </label>
            <input
              type="text"
              className="form-control"
              id="password"
              onChange={this.handleChange}
              name="password"
              value={this.state.password}
            />
          </div>

          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </>
    );
  }
}
