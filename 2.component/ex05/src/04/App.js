import React, { useState, useEffect } from "react";
import "./assets/scss/App.scss";
import Clock from "./Clock";

export default function App() {
  const [time, setTime] = useState(new Date());
  const [ticks, setTicks] = useState(time.getSeconds());

  useEffect(() => {
    while (new Date().getMilliseconds > 960) {}
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    setTicks(time.getSeconds());
  }, [time]);

  return (
    <div>
      {ticks % 10 === 0 ? null : (
        <Clock
          message={"ex05: useEffect Hook example"}
          hours={time.getHours()}
          minutes={time.getMinutes()}
          seconds={time.getSeconds()}
        />
      )}
    </div>
  );
}
