import styles from "../styles/Tweet.module.css";

function Tweet() {
  return (
    <div>
      <h1 className="titreTweet">Home</h1>
      <input className={tweetCreate} placeholder="What's up?">
        {" "}
      </input>
      <div className="counterSection">
        <div className="charCounter"></div>
        <button className="tweetButton"></button>
      </div>
    </div>
  );
}

export default Tweet;
