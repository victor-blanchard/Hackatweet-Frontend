import styles from "../styles/Login.module.css";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faXmark } from "@fortawesome/free-solid-svg-icons";
import Link from "react";
import { useDispatch, useSelector } from "react-redux";
import React, { useState } from "react";

function SignIn() {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user.value);
  const [signInUsername, setsignInUsername] = useState("");
  const [signInPassword, setsignInPassword] = useState("");
 

  const handleConnection = () => {
    fetch("http://localhost:3000/users/signin", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        username: signInUsername,
        password: signInPassword,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.result) {
          dispatch(login({ username: signInUsername, token: data.token }));
          setsignInUsername("");
          setsignInPassword("");
          setIsModalVisible(false);
        }
      });
  };

  return (
    <div className="styles.allContainer">
      <div className={styles.modalClosingIcon}></div>
      <img className={styles.logo} src="logo.svg" alt="Logo" />
      <h2 className={styles.ModalMessage}>
        Connect to your Hackatweet account
      </h2>
      <div className={styles.signInForm}>
        <input
          className={styles.modalUserName}
          id="signInUsername"
          type="text"
          placeholder="Username"
          onChange={(e) => setsignInUsername(e.target.value)}
        />{" "}
        <br></br>
        <input
          className={styles.modalPassword}
          type="password"
          id="signInPassword"
          placeholder="Password"
          onChange={(e) => setsignInPassword(e.target.value)}
        />
      </div>
      <br></br>
      <button
        className={styles.signInButton}
        onClick={() => handleConnection()}
      >
        Sign in
      </button>
    </div>
  );
}

export default SignIn;
