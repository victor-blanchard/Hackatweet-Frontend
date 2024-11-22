import styles from "../styles/LastTweets.module.css";
import React, { useState, useEffect } from "react";
import Tweet from "./Tweet";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { View, Text, TouchableOpacity, TextInput, StyleSheet } from 'react-native'
import moment from 'moment';




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
    

  
    let tweetTime = moment(data.tweetTime);
    let remain = tweetTime.fromNow(); 

    console.log(data.tweetName);
    return (
      <div>
        <div className={styles.tweetContainer}>
          <div className={styles.tweetHeader}>
            <img src="" className={styles.userPhoto}>
              {photo}
            </img>
            <text className={styles.userFirstName}>{firstName}</text>
            <text className={styles.tweetedTime}>{remain}</text>
          </div>
          <div className={styles.tweetAndHastag}>
            <div className={styles.tweetName}>{tweetName}</div>
            <div className={styles.hashtag}></div>
          </div>
          <div className={styles.likesAndCounts}>
            <FontAwesomeIcon className={styles.likes}  icon={faHeart}/>
            <div className={styles.likes_counter}>Counter</div>
          </div>
        </div>
      </div>
    );
  });
  return <div>{tweets}</div>
}

export default LastTweets;


