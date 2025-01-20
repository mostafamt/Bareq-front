import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Container, Typography, Grid2 } from "@mui/material"; // Assuming you're using MUI
import axios from "axios";

const ArticleDetails = () => {
  const { id } = useParams(); // Get the article ID from the URL
  const [article, setArticle] = useState(null);

  const [blogsDetailsData, setblogsDetailsData] = useState([]);
  const [loading, setLoading] = useState(false);
  console.log(id);
  useEffect(() => {
    const fetchBlogsData = async (id) => {
      try {
        setLoading(true);
        const result = await axios({
          method: "GET",
          url: `https://www.almotahidaeducation.com/index.php?rest_route=/wp/v2/posts/${id}`,
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
        });

        setblogsDetailsData(result); // Assuming result.data is an array of posts
        console.log(result.data);
        setLoading(false);
      } catch (err) {
        setLoading(false);
        console.error("Error fetching data", err);
      }
    };

    if(id){
      fetchBlogsData(id)
    };
  }, []);

  return (
    <Container>
      <Grid2 container spacing={2}>
        <Grid2 size={12}>
          <Typography variant="h4">article.title</Typography>
          <Typography variant="body1">article.date</Typography>
          <Typography variant="body1" sx={{ marginTop: 2 }}>
            article.conten
          </Typography>
        </Grid2>
      </Grid2>
    </Container>
  );
};

export default ArticleDetails;
