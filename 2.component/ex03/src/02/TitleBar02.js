import React, { useState } from "react";

export default function TitelBar02() {
  const [no, setNo] = useState(0);

  const onClickHandler = () => {
    setNo(no + 1);
    console.log(`TitleBar02 Clicked: ${no}`); //stateNo를 no대신에 넣어도 숫자는 나옴
  };
  return (
    <div>
      <h1 onClick={onClickHandler} style={{ cursor: "pointer" }}>
        Function Handler - function
        <br />
        {no}
      </h1>
    </div>
  );
}
