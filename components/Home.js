import styles from "../styles/Home.module.css";

function Home() {
  return (
    <div>
      <img className={styles.logo} src="logo.svg" href="index.js" />
      <div className={styles.userInfos}>
        <img className={styles.userPhoto} src=""></img>
        <text className={styles.userFirstName}></text>
        <text className={styles.userName}></text>
      </div>
      <button className={styles.logout}>Log out</button>
    </div>
  );
}

export default Home;
