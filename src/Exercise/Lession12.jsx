import React, { Component } from "react";

export default class Lession12 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      staffId: "",
      code: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
    };
  }

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  handleSubmit = (e) => {
    e.preventDefault();

    const { staffId } = this.state;
    if (staffId === "") {
      alert("Mã nhân viên không được để trống");
    } else {
      let findCode = this.state.code.findIndex(
        (code) => code == this.state.staffId
      );
      if (findCode != -1) {
        alert("Mã nhân viên đã tồn tại trong hệ thống");
      } else {
        alert("Thêm mã nhân viên thành công");
        this.setState({
          code: [...this.state.code, this.state.staffId],
          staffId: "",
        });
      }
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
