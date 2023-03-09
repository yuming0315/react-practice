import React from "react";

export default function Content(props) {
  return <props.style>{props.children}</props.style>;
}
