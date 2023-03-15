import React from "react";

export default function Email({ email, deleteEmail }) {
  return (
    <li key={email.no} onClick={() => deleteEmail(email.no)}>
      {email.firstName + email.lastName}
      <br />
      {email.email}
    </li>
  );
}
