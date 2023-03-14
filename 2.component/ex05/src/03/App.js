import React, { Component } from "react";
import "./assets/scss/App.scss";
import Clock from "./Clock";

export default class App extends Component {
  constructor() {
    super(...arguments);
  }

  componentDidMount() {
    this.interval = setInterval(() => {
      const { imgCoord } = this.state;
      if (imgCoord === rspCoords.rock) {
        this.setState({
          imgCoord: rspCoords.scissor,
        });
      } else if (imgCoord === rspCoords.scissor) {
        this.setState({
          imgCoord: rspCoords.paper,
        });
      } else if (imgCoord === rspCoords.paper) {
        this.setState({
          imgCoord: rspCoords.rock,
        });
      }
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    return (
      <div className="clock-display">
        <h2>ex05 - Component LifeCycle Practice</h2>
        <Clock hours={"11"} minutes={"02"} seconds={"30"} session={"am"} />
      </div>
    );
  }
}
