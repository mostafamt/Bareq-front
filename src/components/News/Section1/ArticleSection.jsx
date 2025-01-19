import React, { useEffect, useState } from "react";
import axios from "axios";
import data from "./data.json"; // Assuming you are using local data for testing
import { Container, Grid2, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import style from "./section1.module.scss";
import Parse from "html-react-parser";

const ArticleSection = () => {
  const [blogsData, setBlogsData] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchBlogsData = async () => {
      try {
        setLoading(true);
        const result = await axios({
          method: "GET",
          url: "https://www.almotahidaeducation.com/index.php?rest_route=%2Fwp%2Fv2%2Fposts&categories=761",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
        });

        setBlogsData(result.data); // Assuming result.data is an array of posts
        setLoading(false);
      } catch (err) {
        setLoading(false);
        console.error("Error fetching data", err);
      }
    };

    fetchBlogsData();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  // Format Date function
  const formatDate = (dateString) => {
    const date = new Date(dateString); // Parse the date string into a Date object

    const options = {
      day: 'numeric', // Day in numeric form (17)
      month: 'long',  // Month in long form (مارس)
      year: 'numeric', // Year in numeric form (2024)
    };

    // Use Intl.DateTimeFormat with the Arabic locale
    const formatter = new Intl.DateTimeFormat('ar-EG', options);
    return formatter.format(date); // Formats the date to the required format
  };

  // Function to decode HTML entities (like &#8220;)
  const decodeHtmlEntities = (text) => {
    const doc = new DOMParser().parseFromString(text, "text/html");
    return doc.documentElement.textContent || text;
  };

  return (
    <div>
      {/* Use Object.values() to ensure iteration over an array */}
      {blogsData.length > 0 && blogsData.map((item, idx) => {
        const date = item.date;

        return (
          <div className={style.articalsSection} key={idx}>
            <Container>
              <Grid2 container sx={{ padding: "5px" }} spacing={2}>
                <Grid2 size={2}>
                  <div className="article-image">
                    <img src={item.featured_media_src_url} alt={item.title} />
                  </div>
                </Grid2>
                <Grid2 size={10} className={style.caption}>
                  <Typography sx={{ color: "#00aeed", fontWeight: "800" }}>
                    {/* Decode HTML entities in the title */}
                    {decodeHtmlEntities(item.title.rendered)}
                  </Typography>
                  <Grid2 size={10} className={style.gridContent}>
                    <img
                      src={data.icon}
                      alt={data.image.alt}
                      style={{
                        marginLeft: "6px",
                        width: "18px",
                        height: "17px",
                        filter: "invert(38%) sepia(25%) saturate(200%) hue-rotate(175deg) brightness(90%)",
                      }}
                    />
                    <Typography variant="h6" sx={{ color: "#6E6E6E", fontSize: "0.8rem", fontWeight: "700" }}>
                      {formatDate(date)}
                    </Typography>
                  </Grid2>
                  <Typography sx={{ color: "#2E2D2DFF" }}>
                    {/* Decode HTML entities in the excerpt */}
                    {Parse(decodeHtmlEntities(item.excerpt.rendered))}
                  </Typography>
                  <Grid2 className={style.btnContent}>
                    <Link to={`/blog/${item.id}`}>
                      <Typography variant="h6" component="p" sx={{ color: "#00aeed", fontSize: "13px", fontWeight: "700" }}>
                        {data.button}
                      </Typography>
                    </Link>
                  </Grid2>
                </Grid2>
              </Grid2>
            </Container>
          </div>
        );
      })}
    </div>
  );
};

export default ArticleSection;
