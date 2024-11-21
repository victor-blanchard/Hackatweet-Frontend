import styles from "../styles/Trends.module.css";

function Trends() {
  return (
    <div>
      <h1 className={styles.titreTrends}>Trends</h1>
      <div className={styles.trendsContainer}>
        <div className={styles.hashtagName}></div>
        <div className={styles.hashtagCounter}></div>
      </div>
    </div>
  );
}

export default Trends;
