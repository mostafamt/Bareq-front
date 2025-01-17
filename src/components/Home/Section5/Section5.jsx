import React from "react";
import { Container, Typography } from "@mui/material";
import Button from "../../Button/Button";

import styles from "./section5.module.scss";

const data = {
  image: {
    src: "/assets/re.png",
    alt: "re",
  },
  title: "اختبار تحديد المستوى",
  text: [
    "ابدأ باختبار تحديد المستوى المجاني من ",
    "بارق",
    " الذي يحدد مستوى إتقانك للوصول إلى خطة الدرس الأكثر ملاءمة لاحتياجاتك.",
  ],
  button: {
    text: "ابدأ الآن",
  },
};

const Section5 = () => {
  return (
    <div className={styles.section5}>
      <Container fixed>
        <div>
          <img src={data.image.src} alt={data.image.alt} />
          <Typography variant="h4" component="h3">
            {data.title}
          </Typography>
          <Typography>
            {data.text.map((item) => (
              <span key={item}>{item}</span>
            ))}
          </Typography>
          <Button>{data.button.text}</Button>
        </div>
      </Container>
    </div>
  );
};

export default Section5;
