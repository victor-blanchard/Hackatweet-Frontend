import styles from "../styles/Login.module.css";
import React, { useState } from "react";
import { Button, Modal } from "antd";
import { useDispatch, useSelector } from "react-redux";
import SignIn from "./SignIn";
import SignUp from "./SignUp";
import Link from "react";
import { userSlice } from "../reducers/user";

function Login() {
  const user = useSelector((state) => state.user.value);
  console.log(user);
  const [isModalVisible, setIsModalVisible] = useState("homepage");
  const handleSignUpClick = () => {
    setIsModalVisible("signUp");
    console.log(isModalVisible);
  };

  const handleSignInClick = () => {
    setIsModalVisible("signIn");
    console.log(isModalVisible);
  };

  const handleHomepageClick = () => {
    setIsModalVisible("homepage");
  };
  if (isModalVisible == "homepage")
    return (
      <div className={styles.allPage}>
        <div className={styles.landingPageLeftSide}></div>
        <div className={styles.landingPageRightSection}>
          <img className={styles.logo} src="logo.svg" href="index.js" />
          <h1 className={styles.landingPageWelcomeMessage}>See what's happening</h1>
          <h2 className={styles.landingPageWelcomeMessageDetail}>Join Hackatweet today.</h2>
          <div className={styles.buttonContainerLandingPage}>
            <button
              className={styles.signUpButton}
              type="primary"
              onClick={() => {
                handleSignUpClick();
              }}
            >
              Sign up
            </button>
            <p className={styles.signUpMessage}>Already have an account?</p>
            <button
              className={styles.signInButton}
              onClick={() => {
                handleSignInClick();
              }}
            >
              Sign in
            </button>
          </div>
        </div>
      </div>
    );
  else if (isModalVisible == "signUp") {
    return (
      <div>
        <div className={styles.allPage}>
          <div className={styles.landingPageLeftSide}></div>
          <div className={styles.landingPageRightSection}>
            <div>
              <SignUp />
            </div>
          </div>
        </div>
      </div>
    );
  } else if (isModalVisible == "signIn") {
    return (
      <div>
        <div className={styles.allPage}>
          <div className={styles.landingPageLeftSide}></div>
          <div className={styles.landingPageRightSection}>
            <div>
              <SignIn />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Login;
