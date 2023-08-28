import React, { Component } from "react";

export default class Lession13 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      staffId: "",
      code: [],
    };
  }

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  handleSubmit = (e) => {
    e.preventDefault();

    const { staffId } = this.state;
    if (this.state.staffId === "") {
      alert("Mã nhân viên không được để trống");
    } else if (this.state.staffId[0] != "N" && this.state.staffId[1] != "V") {
      alert("Mã nhân viên không đúng định dạng");
    } else if (this.state.staffId.length < 8) {
      alert("Mã nhân viên không được ít hơn 8 ký tự");
    } else if (this.state.staffId.length > 16) {
      alert("Mã nhân viên không được dài hơn 16 ký tự");
    } else {
      alert("Thêm nhân viên mới thành công");
      this.setState({
        code: [...this.state.code, this.state.staffId],
        staffId: "",
      });
    }
  };
  render() {
    return (
      <>
        <form action="" onSubmit={this.handleSubmit}>
          <label htmlFor="staffId">Staff Code:</label>
          <input
            type="text"
            id="staffId"
            onChange={this.handleChange}
            name="staffId"
            value={this.state.staffId}
          />
          <button>Submit</button>
        </form>
      </>
    );
  }
}
