import React from "react";

export default function Clock01(props) {
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

  //
  // HTML 태그를 동적으로 생성하여 JSX Element의
  // 특정 속성(dangerouslySetInnerHTML)으로 렌더링 하는 작업을 금하고 있지만
  // XSS(Cross-site-Scripting) 보호기능을 끄고 사용할 수 있다.
  return <div dangerouslySetInnerHTML={{ __html: htmls }} />;
}
