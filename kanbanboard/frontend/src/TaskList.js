import React from "react";
import Task from "./Task";
import styles from "./assets/css/TaskList.css";

export default function TaskList({
  tasks,
  callbackAddTask,
  callbackChangeTaskDone,
}) {
  return (
    <div>
      <ul>
        {tasks.map((task) => {
          task.key = task.no;
          return (
            <Task {...task} callbackChangeTaskDone={callbackChangeTaskDone} />
          );
        })}
      </ul>
      <input
        type="text"
        placeholder={"테스크추가"}
        className={styles.TaskList__add_task}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            callbackAddTask(e.target.value);
            e.target.value = "";
          }
        }}
      />
    </div>
  );
}
