import React, { Component } from "react";

export default class TitelBar01 extends Component {
  constructor(props) {
    super(props);

    // this.no VS this.state.no
    this.no = 0;

    this.state = {
      no: 0,
    };
  }
  onClickHandler() {
    this.no++;
    console.log(`TitleBar01 Clicked: ${this.state.no}`);

    this.setState({ no: this.state.no + 1 });
  }
  render() {
    return (
      <div>
        <h1
          onClick={this.onClickHandler.bind(this)}
          style={{ cursor: "pointer" }}
        >
          Function Handler - Class
          <br />
          {
            // this.no VS this.state.no this.no가 업데이트되는 이유는 this.state.no를 다시 render 하면서 리렌더
            `${this.state.no} VS ${this.no}`
          }
        </h1>
      </div>
    );
  }
}
