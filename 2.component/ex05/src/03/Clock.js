import React, { Component } from "react";
import "./assets/scss/Clock.scss";

export default class Clock extends Component {
  constructor() {
    super(...arguments);
  }

  render() {
    const addText0 = (time) => (time < 10 ? "0" + time : time);
    return (
      <div className="clock-field">
        <div>
          <p className="hours">
            {addText0(
              this.props.hours < 12 ? this.props.hours : this.props.hours - 12
            )}
          </p>
          <p className="placeholder"></p>
        </div>
        <div className="colon">
          <p>:</p>
        </div>
        <div className="numbers">
          <p>{addText0(this.props.minutes)}</p>
          <p className="placeholder"></p>
        </div>
        <div className="colon">
          <p>:</p>
        </div>
        <div className="numbers">
          <p>{addText0(this.props.seconds)}</p>
          <p className="placeholder"></p>
        </div>
        <div className="AmPm">
          <div>
            <p className={this.props.hours < 12 ? "on" : "off"}>am</p>
          </div>
          <div>
            <p className={this.props.hours < 12 ? "off" : "on"}>pm</p>
          </div>
        </div>
      </div>
    );
  }

  componentWillUnmount() {
    console.log("Clock", "componentWillUnmount");
  }
}
