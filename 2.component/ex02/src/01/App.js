import React from "react";

export default function App(props) {
  const h1Style = {
    width: 200,
    height: "50px",
    color: "#111",
    padding: 20,
    backgroundColor: "#eeff99",
  };
  return (
    <div id="App">
      <h1 style={h1Style}>Inline Styling</h1>
    </div>
  );
}
