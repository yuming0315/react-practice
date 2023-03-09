import React from "react";
import "./assets/css/App.css";
import Emaillist from "./Emaillist";
import RegisterForm from "./RegisterForm";
import Searchbar from "./Searchbar";
import emails from "./assets/json/data.json";

export default function App(props) {
  return (
    <div id="App">
      <RegisterForm />
      <Searchbar />
      <Emaillist emails={emails} />
    </div>
  );
}
