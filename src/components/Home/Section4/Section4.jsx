import React from "react";

import styles from "./section4.module.scss";
import { Container, Typography } from "@mui/material";

const data = {
  title: "اختر نمط التعلم المناسب لك",
  list: [
    {
      image: {
        src: "/assets/bareqnew.jpg",
        alt: "bareqnew",
      },
      title: "التعلم الذاتي",
      text: "يقدم بارق برنامجًا لتعلم اللغة العربية ذاتيا بداية من المستوى المبتدئ حتى مستوى الكفاءة اللغوية. ابدأ بتحديد مستواك عبر الإنترنت، ثم انطلق لتحسين مهاراتك اللغوية بدءًا من أساسيات الأبجدية العربية والنطق والمفردات، كما تمتاز منصة بارق بحزمة متطورة من المواد التعليمية الملائمة لقدرات كل متعلم ومستوى إنجازه ووقته، بما يحقق أعلى كفاءة ممكنة في أقل وقت.",
    },
    {
      image: {
        src: "/assets/bareqHOMEARABIC.jpg",
        alt: "bareqHOMEARABIC",
      },
      title: "التعلم المختلط",
      text: "يقدم بارق برنامجًا لتعلم اللغة العربية ذاتيا بداية من المستوى المبتدئ حتى مستوى الكفاءة اللغوية. ابدأ بتحديد مستواك عبر الإنترنت، ثم انطلق لتحسين مهاراتك اللغوية بدءًا من أساسيات الأبجدية العربية والنطق والمفردات، كما تمتاز منصة بارق بحزمة متطورة من المواد التعليمية الملائمة لقدرات كل متعلم ومستوى إنجازه ووقته، بما يحقق أعلى كفاءة ممكنة في أقل وقت.",
    },
    {
      image: {
        src: "/assets/bareqHOMEARABIC2.jpg",
        alt: "bareqHOMEARABIC2",
      },
      title: "التعلم النظامي",
      text: "تدعم منصة بارق أغراض العملية التعليمية التكميلية للمناهج الدراسية، ويمكن استخدام منصة بارق كبرنامج علاجي لمشكلات تعلم اللغة العربية لدى المتعلمين في التعليم النظامي. خطط الدروس وأساليب التقويم في منصة بارق تتيح للمتعلمين فرصا متعددة لممارسة المهارات اللغوية خلال كل درس.",
    },
  ],
};

const Section4 = () => {
  return (
    <section className={styles.section4}>
      <Container fixed>
        <Typography variant="h3" component="h2">
          {data.title}
        </Typography>
        <ul>
          {data.list.map((item, idx) => (
            <li key={idx}>
              <div>
                <img src={item.image.src} alt={item.image.alt} />
              </div>
              <div>
                <Typography variant="h6" component="h6">
                  {item.title}
                </Typography>
                <Typography>{item.text}</Typography>
              </div>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
};

export default Section4;
