import React from "react";
import styles from "../ui/login/login.module.css";

function LoginPage() {
  return (
    <div className={styles.container}>
      <form action="" className={styles.form}>
        <h2>Login</h2>
        <input type="text" placeholder="Username" name="username" />
        <input type="text" placeholder="Password" name="password" />
        <button>Login</button>
      </form>
    </div>
  );
}

export default LoginPage;
