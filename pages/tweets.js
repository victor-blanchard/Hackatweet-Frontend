import styles from "../styles/tweets.module.css";
import Hashtag from "../components/Hashtag";
import LastTweets from "../components/LastTweets";
import React, { useEffect, useState } from "react";
import Trends from "../components/Trends";
import Tweet from "../components/Tweet";
import Home from "../components/Home";
import { useDispatch, useSelector } from "react-redux";
import { Button } from "antd";

function pageTweets() {
  const [sharedState, setSharedState] = useState("");
  const [connected, setConnected] = useState(false);
  const user = useSelector((state) => state.user.value);
  const dispatch = useDispatch();
  useEffect(() => {
    if (user.token) {
      setConnected(true);
    }
  });
  let handleLogin = () => {
    window.location.href = "/";
  };

  return (
    <>
      {connected ? (
        <div className={styles.allPage}>
          <div className={styles.Home}>
            <Home />
          </div>
          <div className={styles.TweetContainer}>
            <Tweet />
            <LastTweets />
          </div>
          <div className={styles.TrendsContainer}>
            <Trends />
          </div>
        </div>
      ) : (
        <div>
          <h1>Your are not connected</h1>
          <Button onClick={() => handleLogin()}>Se connecter</Button>
        </div>
      )}
    </>
  );
}

export default pageTweets;
