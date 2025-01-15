import React from "react";
import { Container, Grid, Grid2, Typography } from "@mui/material";
import CheckIcon from "@mui/icons-material/Check";

import styles from "./section3.module.scss";

const data = [
  {
    image: "/assets/VectorSmartObject7.png",
    title: "للطلاب",
    list: [
      "تعلم عن بعد من خلال الدروس الافتراضية عبر الانترنت والتكليفات ، والتغذية الراجعة.",
      "تواصل مباشرة مع معلمي اللغة العربية ذوي الخبرة المعتمدين.",
      "نم لغتك عبر برامج مرنة توافق وقتك وحاجاتك بلا قيود.",
    ],
  },
  {
    image: "/assets/VectorSmartObject5.png",
    title: "للمعلمين",
    list: [
      "قم بتدريس وإدارة الدورات التعليمية عبر أنشطة تعليمية ومصادر تعلم متعددة ومتنوعة، مصممة خصيصًا لتلبية أهدافك.",
      "تتبع تقدم طلابك.",
      "قيِّم مهارات المتعلمين من خلال الاختبارات البنائية والختامية.",
    ],
  },
  {
    image: "/assets/VectorSmartObject6.png",
    title: "للمدارس",
    list: [
      "تحقيق نتائج التعلم المتوافقة مع معايير الـ ACTFL، CEFR والمعايير الوطنية المحددة.",
      "مراقبة تقدم كل طالب بشكل فردي من خلال تقارير الأداء التفصيلية.",
      "تقديم دعم فني أكاديمي عن بعد.",
    ],
  },
];

const Section3 = () => {
  return (
    <section className={styles.section3}>
      <Container fixed>
        <Grid2 container spacing={2}>
          {data.map((item, idx) => (
            <Grid2 size={4} key={idx} className={styles.col}>
              <div>
                <img src={item.image} alt={item.image} />
              </div>
              <Typography variant="h5" component="h3">
                {item.title}
              </Typography>
              <ul>
                {item.list.map((listItem, idx) => (
                  <li key={idx}>
                    <span>
                      <CheckIcon />
                    </span>
                    <span>{listItem}</span>
                  </li>
                ))}
              </ul>
            </Grid2>
          ))}
        </Grid2>
      </Container>
    </section>
  );
};

export default Section3;
