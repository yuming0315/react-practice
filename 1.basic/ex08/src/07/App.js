import React, { Fragment } from "react";
import Content from "./Content";
import Header from "./Header";

function App() {
  return (
    // <Fragment>
    //   <Header />
    //   <Content />
    // </Fragment>

    React.createElement(
      Fragment,
      null,
      React.createElement(Header, null),
      React.createElement(Content, null)
    )
  );
}

export default App;
