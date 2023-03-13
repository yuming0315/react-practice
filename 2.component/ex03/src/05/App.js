import React, { useRef } from "react";
import "../assets/scss/App.scss";

export default function App() {
  const outterRef = useRef(null);
  const innerRef = useRef(null);

  console.log(Array.from({ length: 5 }, (_, i) => i * i));

  return (
    <div
      ref={outterRef}
      className={"App"}
      onScroll={(e) => {
        console.log(
          outterRef.current.clientHeight,
          innerRef.current.clientHeight,
          outterRef.current.scrollTop
        );
      }}
    >
      <div ref={innerRef}>
        <ul>
          {Array.from({ length: 100 }, (_, i) => i + 1).map((i) => (
            <li key={i}>{`아이템 ${i} 입니다.`}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}
