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
            <Typography variant="h1" component="h4">
              {t("home_title")}
            </Typography>

            <div className={styles.actions}>
              <Button>{data.button1}</Button>
              <Button>{data.button2}</Button>
            </div>
          </Grid2>
          <Grid2 size={6}>
            <img src={data.image.url} alt={data.image.alt} />
          </Grid2>
        </Grid2>
      </Container>
    </div>
  );
};

export default Section1;
