import styles from "../styles/Tweet.module.css";

function Tweet() {
  return (
    <div>
      <h1 className={styles.titreTweet}>Home</h1>
      <input className={styles.tweetCreate} placeholder="What's up?">
        {" "}
      </input>
      <div className={styles.counterSection}>
        <div className={styles.charCounter}></div>
        <button className={styles.tweetButton}></button>
      </div>
    </div>
  );
}

export default Tweet;
