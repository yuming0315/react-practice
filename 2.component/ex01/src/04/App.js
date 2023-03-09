import React from "react";
import MyComponent from "./MyComponent";

function App() {
  return (
    <div id="App">
      <MyComponent
        props02={10}
        props03={true}
        props04={{ no: 1, name: "dooly" }}
        props05={[1, 2, 3, 4, 5]}
        props06={() => "함수"}
        props07={10}
        props08={[true, false, true, false]}
        props09={{ no: 1, name: "dooly", email: "dooly@gmail.com" }}
      />
    </div>
  );
}

export default App;
