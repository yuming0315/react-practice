import React from "react";
import styles from "./assets/css/RegisterForm.css";

export default function RegisterForm({ callbackAddEmail }) {
  const onSubmitHandler = (e) => {
    callbackAddEmail(
      e.target.firstName.value,
      e.target.lastName.value,
      e.target.email.value
    );
  };

  return (
    <form className={styles.RegisterForm} onSubmit={onSubmitHandler}>
      <input
        type="text"
        name="firstName"
        placeholder="성"
        className={styles.InputFirstName}
      />
      <input
        type="text"
        name="lastName"
        placeholder="이름"
        className={styles.InputLastName}
      />
      <input
        type="text"
        name="email"
        placeholder="이메일"
        className={styles.InputEmail}
      />
      <input type="submit" value="등록" />
    </form>
  );
}
