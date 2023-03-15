import React, { useState, useEffect } from "react";
import "./assets/css/App.css";
import Emaillist from "./Emaillist";
import RegisterForm from "./RegisterForm";
import Searchbar from "./Searchbar";

export default function App(props) {
  const [emails, setEmails] = useState([]);

  const [newEmail, setNewEmail] = useState([]);

  useEffect(() => {
    fetchEmail();
  }, []);

  useEffect(() => {
    setNewEmail(emails);
  }, [emails]);

  const deleteEmail = async (no) => {
    const removeEmail = {
      no: no,
    };
    try {
      const response = await fetch("/api", {
        method: "delete",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(removeEmail),
      });

      if (!response.ok) {
        throw new Error(`${response.status} ${response.statusText}`);
      }

      const json = await response.json();
      if (json.result !== "success") {
        throw new Error(`${json.result} ${json.message}`);
      }
      //fetchEmail();
      setEmails(emails.filter((e) => e.no !== json.data.no));
    } catch (err) {
      console.log(err.message);
    }
  };

  const addEmail = async (firstName, lastName, email) => {
    const addEmail = {
      no: null,
      firstName: firstName,
      lastName: lastName,
      email: email,
    };
    try {
      const response = await fetch("/api", {
        method: "post",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(addEmail),
      });

      if (!response.ok) {
        throw new Error(`${response.status} ${response.statusText}`);
      }

      const json = await response.json();
      if (json.result !== "success") {
        throw new Error(`${json.result} ${json.message}`);
      }
      fetchEmail();
    } catch (err) {
      console.log(err.message);
    }
  };

  const fetchEmail = async () => {
    try {
      const response = await fetch(`/api`, {
        method: "get",
        headers: {
          Accept: "application/json",
        },
      });
      if (!response.ok) {
        throw new Error(`${response.status} ${response.statusText}`);
      }

      const json = await response.json();
      if (json.result !== "success") {
        throw new Error(`${json.result} ${json.message}`);
      }

      setEmails(json.data);
    } catch (err) {
      console.log(err.message);
    }
  };

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
      <RegisterForm callbackAddEmail={addEmail} />
      <Searchbar callback={notifyKeyWordChanged} />
      <Emaillist emails={newEmail} deleteEmail={deleteEmail} />
    </div>
  );
}
