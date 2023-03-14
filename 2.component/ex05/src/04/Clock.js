import React, { useEffect } from "react";
import SevenSegmentLED from "./SevenSegmentLED";
import SessionAmPm from "./SessionAmPm";
import "./assets/scss/Clock.scss";

export default function Clock({ message, hours, minutes, seconds }) {
  const addText0 = (time) => (time < 10 ? "0" + time : time);
  return (
    <div className={"clock-display"}>
      <h2>{message}</h2>
      <div className={"Clock"}>
        <SevenSegmentLED
          number={addText0(hours < 12 ? hours : hours - 12)}
          colon={true}
        />
        <SevenSegmentLED number={addText0(minutes)} colon={true} />
        <SevenSegmentLED number={addText0(seconds)} colon={false} />
        <SessionAmPm session={parseInt(hours) > 12 ? "pm" : "am"} />
      </div>
    </div>
  );
}
