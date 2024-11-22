import styles from "../styles/Tweet.module.css";

function Tweet() {
  return (
    <div>
      <h1 className={styles.titreTweet}>Home</h1>
      <textarea className={styles.tweetCreate} placeholder="What's up?" cols="30" rows="3"></textarea>
      <div className={styles.counterSection}>
        <div className={styles.charCounter}></div>
        <button className={styles.tweetButton}></button>
      </div>
    </div>
  );
}

export default Tweet;
