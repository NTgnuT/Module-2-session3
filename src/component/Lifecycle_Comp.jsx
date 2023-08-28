import React, { Component } from "react";

export default class Lifecycle_Comp extends Component {
  // khởi tạo constructor
  constructor(props) {
    super(props);
    console.log("component được khởi tạo");
    this.state = {
      className: "JV-230630",
    };
  }

  componentWillMount() {
    console.log("Component Will Mount");
  }

  componentDidMount() {
    console.log("Component Did Mount");
  }

  componentWillReceiveProps(newProps) {
    console.log("props mới là:", newProps);
  }

  shouldComponentUpdate() {
    return true; // mặc định hàm này sẽ return true;
  }

  componentWillUpdate() {
    console.log("Component Will Update được chạy");
  }

  componentDidUpdate() {
    console.log("Component Did Update được gọi");
  }

  componentWillUnmount() {
    console.log("Component Will Unmount"); // thg đc sử dụng để clean sự kiện
  }

  render() {
    console.log("Component được render");
    return (
      <>
        <h1>Tên công ty ở Comp con {this.props.company}</h1>
        <h2>Tên lớp: {this.state.className}</h2>
        <button onClick={() => this.setState({ className: "HN/RA-JV-230630" })}>
          Change State
        </button>
      </>
    );
  }
}
