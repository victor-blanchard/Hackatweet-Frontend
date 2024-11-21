import styles from '../styles/Hashtag.module.css';

function Hashtag() {
  return (
    <div>
    <h1 className={styles.titreHashtag}>Hashtag</h1>
    <input className={styles.hashtagSearch}>
      {" "}
    </input>
    
  </div>
  );
}

export default Hashtag;