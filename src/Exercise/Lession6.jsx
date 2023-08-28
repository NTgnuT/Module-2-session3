import React, { Component } from "react";

export default class Lession6 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      textBox: "",
    };
  }

  // Hàm lắng nghe sự thay đổi trong ô input
  textChange = (event) => {
    const value = event.target.value;
    console.log(value);
    const name = event.target.name;
    this.setState({ [name]: value });
  };

  // Hàm xử lý dữ liệu trong form khi submit
  textSubmit = (e) => {
    //Ngăn sự kiện submit load lại trang
    e.preventDefault();
    // In ra màn hình
    alert("Giá trị vừa nhập vào là:" + this.state.textBox);
  };
  render() {
    return (
      <>
        <form onSubmit={(e) => this.textSubmit(e)}>
          <label htmlFor="text">Nhập 1 nội dung bất kỳ:</label>
          <input
            type="text"
            id="text"
            name="textBox"
            onChange={this.textChange}
          />
          <button type="submit">Submit</button>
        </form>
      </>
    );
  }
}
