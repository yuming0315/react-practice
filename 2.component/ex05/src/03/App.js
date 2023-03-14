import React, { Component } from "react";
import "./assets/scss/App.scss";
import Clock from "./Clock";

export default class App extends Component {
  constructor() {
    super(...arguments);
    this.state = {
      date: new Date(),
    };
  }

  componentDidMount() {
    while (new Date().getMilliseconds > 960) {}
    this.interval = setInterval(() => {
      this.setState({ date: new Date() });
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    const { date } = this.state;
    return (
      <div className="clock-display">
        <h2>ex05 - Component LifeCycle Practice</h2>
        <Clock
          hours={date.getHours()}
          minutes={date.getMinutes()}
          seconds={date.getSeconds()}
        />
      </div>
    );
  }
}
