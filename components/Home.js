import styles from "../styles/Home.module.css";
import { useDispatch, useSelector } from "react-redux";
import React, { useState } from "react";
import { login, logout } from "../reducers/user";

function Home() {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user.value);
console.log(user)
  

  return (
    <div className={styles.allOfHome}>
      <img className={styles.logo} src="logo.svg" href="index.js" />
      <div className={styles.userInfoAndLogout}>
        <div className={styles.userInfos}>
          <img className={styles.userPhoto} src=""></img>
          <div className={styles.userFirstNameAndLastName}>
            <text className={styles.userFirstName}>{user.firstName}</text>
            <text className={styles.userName}>@{user.userName} </text>
          </div>
        </div>
        <button className={styles.logout}>Log out</button>
      </div>
    </div>
  );
}

export default Home;
