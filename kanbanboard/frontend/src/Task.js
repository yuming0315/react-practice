import React from "react";
import styles from "./assets/css/Task.css";

export default function Task({ no, name, done }) {
  return (
    <li className={styles.TaskList__Task}>
      <input type="checkbox" checked={done} />
      {name}
      <a href="#" className={styles.TaskList__Task__remove} />
    </li>
  );
}
