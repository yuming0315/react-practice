import React from "react";

export default function Clock(props) {
  const now = new Date();
  let hours = now.getHours();
  const minutes = now.getMinutes();
  const seconds = now.getSeconds();
  let session = "AM";

  if (hours > 12) {
    session = "PM";
    hours -= 12;
  }

  const fn = (e) => (e < 10 ? "0" + e : e);

  const htmls =
    "<span> " +
    fn(hours) +
    ":" +
    fn(minutes) +
    ":" +
    fn(seconds) +
    session +
    "</span>";

  // comment01: JSX 밖은 JavaScript 구문(주석 구문)이 가능하다.
  return (
    <div /* comment02: 여기서도 주석이 가능하다: 비추 */>
      {/*
        comment03: 이런 방식으로 표현식이 실행되는 블록안에서 주석을 달아야 한다: 강추
        comment04: JSX는 HTML이 아니다!!!!!
        <!-- --> HTML 주석은 사용할 수없다.
      */}
      // coment05: JSX안에서 JavaScript 주석 구문을 사용하면 화면에 그대로
      나온다.
      {fn(hours)}:{fn(minutes)}:{fn(seconds)} {session}
    </div>
  );
}
