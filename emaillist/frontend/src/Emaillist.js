import React from "react";
import styles from "./assets/css/Emaillist.css";

export default function Emaillist({ emails }) {
  return (
    <ul className={styles.Emaillist}>
      {emails.map((e) => (
        <li key={e.no}>
          {e.firstName + e.lastName}
          <br />
          {e.email}
        </li>
      ))}
    </ul>
  );
}
