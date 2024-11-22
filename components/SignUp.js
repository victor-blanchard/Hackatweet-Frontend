import styles from "../styles/Login.module.css";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faXmark } from "@fortawesome/free-solid-svg-icons";
import React, { useState } from "react";
import { Button, Modal } from "antd";
import { useDispatch, useSelector } from "react-redux";
import Link from "react";
import { login, logout } from "../reducers/user";
import { useNavigate } from "react-router-dom";

function SignUp() {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user.value);

  const [signUpUsername, setSignUpUsername] = useState("");
  const [signUpFirstName, setSignUpFirstName] = useState("");
  const [signUpPassword, setSignUpPassword] = useState("");

  const handleRegister = () => {
    fetch("http://localhost:3000/users/signup", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        userName: signUpUsername,
        firstName: signUpFirstName,
        password: signUpPassword,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.result) {
          dispatch(
            login({ userName: data.userName, firstName: data.firstName, token: data.token })
          );
          setSignUpUsername("");
          setSignUpFirstName("");
          setSignUpPassword("");
        }
      });
  };
  return (
    <div className="styles.allContainer">
      <img className={styles.logo} src="logo.svg" alt="Logo" />
      <h2 className={styles.ModalMessage}>Create your Hackatweet account</h2>
      <div className={styles.signUpForm}>
        <input
          className={styles.modalFirstName}
          type="text"
          placeholder="First Name"
          onChange={(e) => setSignUpFirstName(e.target.value)}
          value={signUpFirstName}
        />
        <br></br>
        <input
          className={styles.modalUserName}
          type="text"
          placeholder="Username"
          onChange={(e) => setSignUpUsername(e.target.value)}
          value={signUpUsername}
        />
        <br></br>
        <input
          className={styles.modalPassword}
          type="password"
          placeholder="Password"
          onChange={(e) => setSignUpPassword(e.target.value)}
          value={signUpPassword}
        />
      </div>
      <br></br>
      <button className={styles.signUpButton} onClick={() => handleRegister()}>
        Sign up
      </button>
    </div>
  );
}

export default SignUp;
