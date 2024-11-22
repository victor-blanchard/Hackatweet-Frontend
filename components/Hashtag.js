import styles from "../styles/Hashtag.module.css";

function Hashtag() {
  return (
    <div>
      <div className={styles.hashtagSearchContainer}>
        <h1 className={styles.titreHashtag}>Hashtag</h1>
        <input className={styles.hashtagSearch}> </input>
      </div>
      <div className={hashtagViewContainer}></div>
    </div>
  );
}

export default Hashtag;
