import React from "react";

import styles from "./login.module.scss";
import LoginCard from "../../components/Login/LoginCard/LoginCard";

const Login = () => {
  return (
    <div className={styles.login}>
      <LoginCard />
    </div>
  );
};

export default Login;
