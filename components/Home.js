import styles from "../styles/Home.module.css";
import { useDispatch, useSelector } from "react-redux";

function Home() {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user.value);

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
