import React from "react";

import styles from "./loginPanel.module.scss";
import { Typography } from "@mui/material";

const data = {
  image: {
    src: "/assets/loginImage.png",
    alt: "loginImage",
  },
  text: "انضموا إلينا الآن للوصول لجميع عناصر المنصة",
};

const LoginPanel = () => {
  return (
    <div className={styles["login-panel"]}>
      <img src={data.image.src} alt={data.image.alt} />
      <Typography>{data.text}</Typography>
    </div>
  );
};

export default LoginPanel;
