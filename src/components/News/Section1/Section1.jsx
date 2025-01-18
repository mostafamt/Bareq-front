import { Container, Grid2, Typography } from "@mui/material";
import Button from "../../Button/Button";
import { useTranslation } from "react-i18next";

import data from "./data.json";
import styles from "./section1.module.scss";
import ArticleSection from "./ArticleSection";



const Section1 = () => {
  const { t } = useTranslation();

  return (
    <div className={styles.section}>
      <Container fixed>
        <Grid2 container spacing={2}>
          <ArticleSection/>
        </Grid2>
      </Container>
    </div>
  );
};

export default Section1;
