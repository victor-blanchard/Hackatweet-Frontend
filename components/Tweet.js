import styles from "../styles/Tweet.module.css";

import React from "react";
import "antd/dist/reset.css";
import { Button } from "antd";
import { Input } from "antd";
import { Flex } from "antd";
import { Textarea } from "antd";

function Tweet() {
  const Textarea = Input;
  return (
    <>
      <div className={styles.AllContainer}>
        <h1 className={styles.titreTweet}>Home</h1>
        <div className={styles.TextButton}>
          <Textarea
            showCount
            maxLength={280}
            className={styles.tweetCreate}
            placeholder="What's up?"
            cols="30"
            rows="3"
          ></Textarea>
          <Button className={styles.tweetButton}>Tweet</Button>
        </div>
      </div>
    </>
  );
}

export default Tweet;
