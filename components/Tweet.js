import styles from "../styles/Tweet.module.css";
import { useDispatch, useSelector } from "react-redux";

import React, { useState } from "react";
import "antd/dist/reset.css";
import { Button } from "antd";
import { Input } from "antd";
import { Flex } from "antd";
import { Textarea } from "antd";

function Tweet() {
  const [tweetContent, setTweetContent] = useState("");
  const user = useSelector((state) => state.user.value);
  let handleTweet = () => {
    fetch("http://localhost:3000/tweets/add", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        userName: user.userName,
        tweetName: tweetContent,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.result) {
          setTweetContent("");
          window.location.href = "/tweets";
        }
        if (!data.result) {
          console.log("tweet not saved");
        }
      });
  };
  const handleKeyDown = (event) => {
    if (event.key == "Enter") {
      handleTweet();
    }
  };
  const Textarea = Input;
  return (
    <>
      <div className={styles.AllContainer}>
        <h1 className={styles.titreTweet}>Home</h1>
        <div className={styles.TextButton}>
          <Textarea
            onKeyDown={handleKeyDown}
            onChange={(e) => setTweetContent(e.target.value)}
            value={tweetContent}
            focus
            showCount
            maxLength={280}
            className={styles.tweetCreate}
            placeholder="What's up?"
            cols="30"
            rows="3"
          ></Textarea>
          <Button className={styles.tweetButton} onClick={() => handleTweet()}>
            Tweet
          </Button>
        </div>
      </div>
    </>
  );
}

export default Tweet;
