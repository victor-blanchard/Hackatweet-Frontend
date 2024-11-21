import styles from "../styles/Login.module.css";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faXmark } from "@fortawesome/free-solid-svg-icons";
import React, { useState } from "react";
import { Button, Modal } from "antd";
import { useDispatch, useSelector } from "react-redux";

function SignUp() {
  return (
    <div className="styles.allContainer">
      <img className={styles.logo} src="logo.svg" alt="Logo" />
      <h2 className={styles.ModalMessage}>Create your Hackatweet account</h2>
      <div className={styles.signUpForm}>
        <input
          className={styles.modalFirstName}
          type="text"
          placeholder="First Name"
        />
        <input
          className={styles.modalUserName}
          type="text"
          placeholder="Username"
        />
        <input
          className={styles.modalPassword}
          type="password"
          placeholder="Password"
        />
      </div>
      <button className={styles.signUpButton}>Sign up</button>
    </div>
  );
}

export default SignUp;
