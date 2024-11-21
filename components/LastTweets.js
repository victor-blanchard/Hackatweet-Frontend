import styles from "../styles/LastTweets.module.css";

function LastTweets() {
  return (
    <div>
      <div className={styles.tweetContainer}>
        <div className={styles.tweetHeader}>
          <img src="" className={styles.userPhoto} />
          <text className={styles.userFirstName}></text>
          <text className={styles.tweetedTime}></text>
        </div>
        <div className={styles.tweetAndHastag}>
          <div className={styles.tweetName}></div>
          <div className={styles.hashtag}></div>
        </div>
        <div className={styles.likesAndCounts}>
          <div className={styles.likes}></div>
          <div className={styles.likes_counter}></div>
        </div>
      </div>
    </div>
  );
}

export default LastTweets;
