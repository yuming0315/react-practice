import React from "react";
import Task from "./Task";

export default function TaskList({ tasks }) {
  return (
    <div>
      <ul>
        {tasks.map((task) => {
          task.key = task.no;
          return <Task {...task} />;
        })}
      </ul>
    </div>
  );
}
