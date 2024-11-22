import styles from "../styles/Login.module.css";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faXmark } from "@fortawesome/free-solid-svg-icons";
import Link from "react";
import { useDispatch, useSelector } from "react-redux";
import React, { useState } from "react";
import { login, logout } from "../reducers/user";

function SignIn() {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user.value);
  const [signInUsername, setsignInUsername] = useState("");
  const [signInPassword, setsignInPassword] = useState("");
  const [wrongInfosDisplay, setWrongInfosDisplay] = useState(false);

  const handleConnection = () => {
    fetch("http://localhost:3000/users/signin", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        userName: signInUsername,
        password: signInPassword,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.result) {
          dispatch(
            login({
              userName: data.data.userName,
              firstName: data.data.firstName,
              token: data.data.token,
            })
          );
          setsignInUsername("");
          setsignInPassword("");
          console.log("connecté avec succes");
          window.location.href = "tweets";
          console.log(user);
        }
        if (!data.result) {
          console.log("mdp ou username incorrect");
          setWrongInfosDisplay(true);
          console.log(user);
        }
      });
  };
  const handleHomepageClick = () => {
    window.location.href = "";
    setIsModalVisible("homepage");
  };

  return (
    <>
      {wrongInfosDisplay ? (
        <div className="styles.allContainer">
          <div className={styles.modalClosingIcon}></div>
          <img
            className={styles.logo}
            src="logo.svg"
            alt="Logo"
            onClick={() => handleHomepageClick()}
          />
          <h2 className={styles.ModalMessage}>Connect to your Hackatweet account</h2>
          <div className={styles.signInForm}>
            <input
              className={styles.modalUserName}
              id="signInUsername"
              type="text"
              placeholder="Username"
              onChange={(e) => setsignInUsername(e.target.value)}
              value={signInUsername}
            />{" "}
            <br></br>
            <input
              className={styles.modalPassword}
              type="password"
              id="signInPassword"
              placeholder="Password"
              onChange={(e) => setsignInPassword(e.target.value)}
              value={signInPassword}
            />
          </div>
          <h6>Wrong UserName or password</h6>
          <br></br>
          <button className={styles.signInButton} onClick={() => handleConnection()}>
            Sign in
          </button>
        </div>
      ) : (
        <div className="styles.allContainer">
          <img
            className={styles.logo}
            src="logo.svg"
            alt="Logo"
            onClick={() => handleHomepageClick()}
          />
          <h2 className={styles.ModalMessage}>Connect to your Hackatweet account</h2>
          <div className={styles.signInForm}>
            <input
              className={styles.modalUserName}
              id="signInUsername"
              type="text"
              placeholder="Username"
              onChange={(e) => setsignInUsername(e.target.value)}
              value={signInUsername}
            />{" "}
            <br></br>
            <input
              className={styles.modalPassword}
              type="password"
              id="signInPassword"
              placeholder="Password"
              onChange={(e) => setsignInPassword(e.target.value)}
              value={signInPassword}
            />
          </div>
          <br></br>
          <button className={styles.signInButton} onClick={() => handleConnection()}>
            Sign in
          </button>
        </div>
      )}
    </>
  );
}

export default SignIn;
