import styles from "../styles/Home.module.css";

function Home() {
  return (
    <div>
      <img className={styles.logo} src="logo.svg" href="index.js" />
      <div className={userInfos}>
        <img className={userPhoto} src=""></img>
        <text className={userFirstName}></text>
        <text className={userName}></text>
      </div>
      <button className={logout}>Log out</button>
    </div>
  );
}

export default Home;
