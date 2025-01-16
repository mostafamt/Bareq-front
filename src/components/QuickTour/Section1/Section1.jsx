import { Container, Grid2, Typography } from "@mui/material";
import Button from "../../Button/Button";
import { useTranslation } from "react-i18next";

import data from "./data.json";
import styles from "./section1.module.scss";

const Section1 = () => {
  const { t } = useTranslation();

  return (
    <div className={styles.section}>
      <Container fixed>
        <Grid2 container spacing={2}>
          <Grid2 size={6} className={styles.left}>
        </Grid2>
 
        </Grid2>
        <Grid2 size={6}>
        <video width="100%" height="auto" controls>
        <source src="https://bareq.me/assets/videos/video.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
</Grid2>
      </Container>
    </div>
  );
};

export default Section1;
