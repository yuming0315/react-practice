import React from "react";
import styles from "./assets/css/Task.css";

export default function Task({ no, name, done, callback }) {
  return (
    <li className={styles.TaskList__Task}>
      <input
        type="checkbox"
        checked={done}
        onChange={(e) => callback(no, !done)}
      />
      {name}
      <a href="#" className={styles.TaskList__Task__remove} />
    </li>
  );
}
