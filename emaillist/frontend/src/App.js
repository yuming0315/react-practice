import React, { useState } from "react";
import "./assets/css/App.css";
import Emaillist from "./Emaillist";
import RegisterForm from "./RegisterForm";
import Searchbar from "./Searchbar";
import data from "./assets/json/data.json";

export default function App(props) {
  const [emails, setEmails] = useState(data);
  const [newEmail, setNewEmail] = useState(emails);

  const notifyKeyWordChanged = (kwd) => {
    // keyword가 firstName or lastName or Email에 있으면
    const newEmail = emails.filter(
      (e) =>
        e.firstName.includes(kwd) ||
        e.lastName.includes(kwd) ||
        e.email.includes(kwd)
    );
    setNewEmail(newEmail);
  }; //필터

  return (
    <div id="App">
      <RegisterForm />
      <Searchbar callback={notifyKeyWordChanged} />
      <Emaillist emails={newEmail} />
    </div>
  );
}
