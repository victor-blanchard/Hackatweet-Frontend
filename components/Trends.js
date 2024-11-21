import styles from "../styles/Trends.module.css";

function Trends() {
  return (
    <div>
      <h1 className={titreTrends}>Trends</h1>
      <div className={trendsContainer}>
        <div className={hashtagName}></div>
        <div className={hashtagCounter}></div>
      </div>
    </div>
  );
}

export default Trends;
