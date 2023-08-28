import { Component } from "react";
import "./App.css";
import Lifecycle_Comp from "./component/Lifecycle_Comp";
import Form from "./component/Form";
import Form_C2 from "./component/FormC2";
import FormUnControled from "./component/FormUnControled";
import Lession1 from "./Exercise/Lession5";
import Lession5 from "./Exercise/Lession5";
import Lession6 from "./Exercise/Lession6";
import Lession10 from "./Exercise/Lession10";
import Lession12 from "./Exercise/Lession12";
import Lession13 from "./Exercise/Lession13";
import Lession14 from "./Exercise/Lession14";

class App extends Component {
  // khởi tạo contructor
  // constructor(props) {
  //   super(props);
  //   //khai báo state
  //   this.state = {
  //     show: false,
  //     company: "Rikkei Academy",
  //     showForm: false, // state quyết định trạng thái của form
  //   };
  // }

  // handleShow = (e) => {
  //   console.log("Event", e);
  //   this.setState({
  //     show: !this.state.show,
  //   });
  // };
  render() {
    return (
      <>
        {/* Khu vực hiển thị button
        <button onClick={this.handleShow}>Show</button>
        <button onClick={() => this.setState({ company: "Rikkei Soft" })}>
          Change Props
        </button>

        <button
          onClick={() =>
            this.setState({
              showForm: !this.state.showForm,
            })
          }
        >
          Show Form
        </button>

        {/* Khu vực hiển thị các Comp */}
        {/* {this.state.show === true ? (
          <Lifecycle_Comp company={this.state.company} />
        ) : (
          <></>
        )}
        {/* Hiển thị form */}
        {/* {this.state.showForm === true ? <FormUnControled /> : <></>}  */}

        {/* <Lession5 /> */}
        {/* <Lession6 /> */}
        {/* <Lession10 /> */}
        {/* <Lession12 /> */}
        {/* <Lession13 /> */}
        <Lession14 />
      </>
    );
  }
}

export default App;
