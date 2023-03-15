import React from "react";
import styles from "./assets/css/Task.css";

export default function Task({ no, name, done, callbackChangeTaskDone }) {
  return (
    <li className={styles.TaskList__Task}>
      <input
        type="checkbox"
        checked={done === "Y"}
        onChange={(e) =>
          callbackChangeTaskDone(no, e.target.checked ? "Y" : "N")
        }
      />
      {name}
      <a href="#" className={styles.TaskList__Task__remove} />
    </li>
  );
}
