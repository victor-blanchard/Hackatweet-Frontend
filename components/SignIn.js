import styles from "../styles/Login.module.css";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faXmark } from "@fortawesome/free-solid-svg-icons";




function SignIn() {



  return (
    <div className="styles.allContainer">
      <div className={styles.modalClosingIcon}></div>
      <img className={styles.logo} src="logo.svg" alt="Logo" />
      <h2 className={styles.ModalMessage}>Create your Hackatweet account</h2>
      <div className={styles.signInForm}>
        <input
          className={styles.modalUserName}
          type="text"
          placeholder="Username"
        />
        <input
          className={styles.modalPassword}
          type="password"
          placeholder="Password"
        />
      </div>
      <button className={styles.signInButton}>Sign in</button>
    </div>
  )
}

export default SignIn;
