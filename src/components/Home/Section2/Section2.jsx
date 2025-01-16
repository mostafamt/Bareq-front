import { Container, Grid2, Typography } from "@mui/material";

import data from "./data.json";
import styles from "./section2.module.scss";

const Section2 = () => {
  return (
    <div className={styles.section2}>
      <Container fixed>
        <Grid2 container spacing={2}>
          {data.map((item, idx) => (
            <Grid2 key={idx} size={3} className={styles.col}>
              <img src={item.image} alt={item.image} />
              <Typography variant="h4">{item.title}</Typography>
              <Typography>{item.text}</Typography>
            </Grid2>
          ))}
        </Grid2>
      </Container>
    </div>
  );
};

export default Section2;
