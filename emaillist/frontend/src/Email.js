import React from "react";

export default function Email({ email, deleteEmail }) {
  return (
    <li key={email.no}>
      {email.firstName + email.lastName}
      <br />
      {email.email}
      <a href="" onClick={() => deleteEmail(email.no)} />
    </li>
  );
}
