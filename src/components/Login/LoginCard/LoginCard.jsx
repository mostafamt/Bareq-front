import React from "react";
import LoginForm from "../LoginForm/LoginForm";

import styles from "./loginCard.module.scss";
import LoginPanel from "../LoginPanel/LoginPanel";

const LoginCard = () => {
  return (
    <div className={styles["login-card"]}>
      <LoginForm />
      <LoginPanel />
    </div>
  );
};

export default LoginCard;
