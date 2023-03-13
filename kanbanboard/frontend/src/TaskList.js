import React, { useState } from "react";
import Task from "./Task";

export default function TaskList({ tasks, callback }) {
  return (
    <div>
      <ul>
        {tasks.map((task) => {
          task.key = task.no;
          return <Task {...task} callback={callback} />;
        })}
      </ul>
    </div>
  );
}
