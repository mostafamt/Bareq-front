import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Container, Typography, Grid2 } from "@mui/material"; // Assuming you're using MUI

const ArticleDetails = () => {
  const { id } = useParams(); // Get the article ID from the URL
  const [article, setArticle] = useState(null);

  useEffect(() => {
    // Here, you would fetch the article details from your API or a local JSON file
    const fetchedArticle = {
      id: 1,
      title: "المتحدة للتعليم تدرب معلمي ماليزيا على تقنية التعليم بالألعاب",
      date: "17 مارس 2024",
      description: "بالتعاون مع مدرسة تامبار بارك الدولية نصت المجموعة المتحدة للتعليم بمايزيا ورشة عمل تدريب معلمي اللغة العربية على تقنية التعليم بالألعاب.",
      content: "في إطار التعاون بين المجموعة المتحدة للتعليم ومدرسة تامبار بارك الدولية في ماليزيا، تم تنظيم ورشة عمل تدريبية لمعلمي اللغة العربية تهدف إلى تحسين مهاراتهم في استخدام تقنية التعليم بالألعاب...",
      author: "المجموعة المتحدة للتعليم",
      image: {
        url: "https://www.almotahidaeducation.com/wp-content/uploads/2024/03/Almotahida-Malaysia-Gamification-Training-for-Arabic-Teachers-2-1-819x1024.jpg",
        alt: "Training image"
      }
    };
    setArticle(fetchedArticle);
  }, [id]);

  if (!article) return <div>Loading...</div>;

  return (
    <Container>
      <Grid2 container spacing={2}>
        <Grid2 size={12}>
          <Typography variant="h4">{article.title}</Typography>
          <Typography variant="body1">{article.date}</Typography>
          <Typography variant="body1" sx={{ marginTop: 2 }}>
            {article.content}
          </Typography>
          <img src={article.image.url} alt={article.image.alt} style={{ width: "100%", marginTop: 20 }} />
        </Grid2>
      </Grid2>
    </Container>
  );
};

export default ArticleDetails;
