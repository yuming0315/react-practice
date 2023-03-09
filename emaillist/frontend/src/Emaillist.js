import React from "react";
import styles from "./assets/css/Emaillist.css";
import Email from "./Email";

export default function Emaillist({ emails }) {
  return (
    <ul className={styles.Emaillist}>
      {emails.map((e) => (
        <Email key={e.no} email={e} />
      ))}
    </ul>
  );
}
