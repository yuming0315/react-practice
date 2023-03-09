import React from "react";
import "./assets/css/App.css";
import KanbanBoard from "./Kanbanboard";

export default function App(props) {
  return (
    <div id="App" className={"App"}>
      <KanbanBoard />
    </div>
  );
}
