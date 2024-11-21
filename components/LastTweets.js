import styles from "../styles/LastTweets.module.css";

function LastTweets() {
  return (
    <div>
      <div className={tweetContainer}>
        <div className={tweetHeader}>
          <img src="" className={userPhoto} />
          <text className={userFirstName}></text>
          <text className={tweetedTime}></text>
        </div>
        <div className={tweetAndHastag}>
          <div className={tweetName}></div>
          <div className={hashtag}></div>
        </div>
        <div className={likesAndCounts}>
          <div className={likes}></div>
          <div className={likes_counter}></div>
        </div>
      </div>
    </div>
  );
}

export default LastTweets;
