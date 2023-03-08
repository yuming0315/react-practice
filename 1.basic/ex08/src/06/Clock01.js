import React from "react";

export default function Clock01(props) {
  const now = new Date();
  let hours = now.getHours();
  let minutes = now.getMinutes();
  let seconds = now.getSeconds();
  let session = "AM";

  if (hours > 12) {
    session = "PM";
    hours -= 12;
  }

  const fn = (e) => (e < 10 ? "0" + e : e);

  return (
    <div>
      {fn(hours)}:{fn(minutes)}:{fn(seconds)} {session}
    </div>
  );
}
