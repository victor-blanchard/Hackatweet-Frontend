import styles from "../styles/tweets.module.css";
import Hashtag from "../components/Hashtag";
import LastTweets from "../components/LastTweets";
import React, { useState } from "react";
import Trends from "../components/Trends";
import Tweet from "../components/Tweet";
import Home from "../components/Home";
import { useDispatch, useSelector } from "react-redux";

function pageTweets() {
  const [connected, setConnected] = useState(true);
  const user = useSelector((state) => state.user.value);
  const dispatch = useDispatch();

  if (user.token) {
    setConnected(true);
  }

  console.log(user);

  return (
    <>
      {true ? (
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
          <link href="index" />
        </div>
      )}
    </>
  );
}

export default pageTweets;
