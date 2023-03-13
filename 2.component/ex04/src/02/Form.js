import React, { useState } from "react";
import "./assets/Form.css";

export default function Form() {
  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
    validEmail: false,
    gender: "female",
  });

  const onChange = (e) => {
    if (e.target.name === "name") {
      e.target.value = e.target.value.substr(0, 10);
    }
    if (e.target.name === "email") {
      const re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/g;
      //re.test()결과가 false일때 이메일 형식이 아니고 true일때 이메일 형식
      if (re.test(e.target.value)) {
        setData((prevState) => {
          return { ...prevState, validEmail: true };
        });
      } else {
        setData((prevState) => {
          return { ...prevState, validEmail: false };
        });
      }
    }
    if (e.target.name === "gender") {
      e.target.defaultChecked = true;
    }
    setData((prevState) => {
      return { ...prevState, [e.target.name]: e.target.value };
    });
  };

  return (
    <form id="joinForm" name="joinForm" method="post" action="/do/not/post">
      <label htmlFor="name">이름</label>
      <input
        id="name"
        name="name"
        type="text"
        value={data.name}
        onChange={onChange}
      />

      <label htmlFor="email">이메일</label>
      <input
        id="email"
        name="email"
        type="text"
        value={data.email}
        onChange={onChange}
      />
      {data.email === "" ? null : data.validEmail ? <b>O</b> : <b>X</b>}

      <label htmlFor="password">패스워드</label>
      <input
        id="password"
        name="password"
        type="password"
        value={data.password}
        onChange={onChange}
      />

      <fieldset>
        <legend>성별</legend>
        <label>여</label>{" "}
        <input
          type="radio"
          name="gender"
          value={"female"}
          defaultChecked={true}
          onChange={onChange}
        />
        <label>남</label>{" "}
        <input
          type="radio"
          name="gender"
          value={"male"}
          defaultChecked={false}
          onChange={onChange}
        />
      </fieldset>

      <label htmlFor="birthYear">생년</label>
      <select id="birthYear">
        <option value="1984">1984년</option>
        <option value="1985">1985년</option>
        <option value="1986">1986년</option>
        <option value="1987">1987년</option>
        <option value="1988">1988년</option>
        <option value="1989">1989년</option>
        <option value="1990">1990년</option>
      </select>

      <label htmlFor="birthYear">자기소개</label>
      <textarea value={""} />

      <fieldset>
        <legend>약관동의</legend>
        <input
          id="agree-prov"
          type="checkbox"
          name="agreeProv"
          value={"yes"}
          defaultChecked={false}
        />
        <label>서비스 약관에 동의합니다.</label>
      </fieldset>

      <input type="submit" value="가입" />
    </form>
  );
}
