import React from "react";

function App() {
  return (
    <div>
      <h2>01</h2>
      <p>JSX Tutorial - 특징1: HTML과 차이점</p>
      {/*
        1. 속성은 Camel Case
        */}
      <input type="text" max-maxLength="10" />
      {/*
        2. Element 는 꼭 닫는다.
        */}
      <br />
      <hr />
      <img src="" />
      {/*
        3. JSX Element의 속성 이름은 DOM API와 일치한다.
        */}
    </div>
  );
}

export default App;
