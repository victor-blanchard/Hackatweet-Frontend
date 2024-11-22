import styles from "../styles/LastTweets.module.css";
import React, { useState, useEffect } from "react";
import Tweet from "./Tweet";

function LastTweets() {
  let [tweetsData, settweetsData] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:3000/tweets/getAllTweets`)
      .then((response) => response.json())
      .then((data) => {
        settweetsData(data.tweets);
      });
  }, []);

  const tweets = tweetsData.map((data, i) => {
    let photo = data.userPhoto;
    let firstName = data.tweetedByUser;
    let tweetName = data.tweetName;
    let tweetTime = data.tweetTime;

    console.log(data.tweetName);
    return (
      <div>
        <div className={styles.tweetContainer}>
          <div className={styles.tweetHeader}>
            <img src="" className={styles.userPhoto}>
              {photo}
            </img>
            <text className={styles.userFirstName}>{firstName}</text>
            <text className={styles.tweetedTime}>{data.tweetedTime}</text>
          </div>
          <div className={styles.tweetAndHastag}>
            <div className={styles.tweetName}>{tweetName}</div>
            <div className={styles.hashtag}></div>
          </div>
          <div className={styles.likesAndCounts}>
            <div className={styles.likes}>Like</div>
            <div className={styles.likes_counter}>Counter</div>
          </div>
        </div>
      </div>
    );
  });
  return <div>{tweets}</div>
}

export default LastTweets;
