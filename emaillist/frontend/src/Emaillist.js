import React from "react";
import styles from "./assets/css/Emaillist.css";
import Email from "./Email";

export default function Emaillist({ emails, deleteEmail }) {
  return (
    <ul className={styles.Emaillist}>
      {emails.map((e) => (
        <Email key={e.no} email={e} deleteEmail={deleteEmail} />
      ))}
    </ul>
  );
}
