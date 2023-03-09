import React from "react";

export default function Email({ email }) {
  return (
    <li key={email.no}>
      {email.firstName + email.lastName}
      <br />
      {email.email}
    </li>
  );
}
