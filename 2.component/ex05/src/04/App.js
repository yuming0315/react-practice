import React, { useState, useEffect } from "react";
import "./assets/scss/App.scss";
import Clock from "./Clock";

export default function App() {
  const [ticks, setTicks] = useState(0);

  useEffect(() => {
    setInterval(() => {}, 1000);
  }, []);
  return (
    <div>
      <span>{ticks}</span>
      {ticks % 10 === 0 ? null : (
        <Clock
          message={"ex05: useEffect Hook example"}
          hours={"11"}
          minutes={"02"}
          seconds={"30"}
        />
      )}
    </div>
  );
}
