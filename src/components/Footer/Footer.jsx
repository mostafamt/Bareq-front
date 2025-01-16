import React from "react";
import { Container, Typography } from "@mui/material";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GoogleIcon from "@mui/icons-material/Google";
import FacebookIcon from "@mui/icons-material/Facebook";

import styles from "./footer.module.scss";
import Button from "../Button/Button";
import { Link } from "react-router-dom";

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
  iconslist: [
    <TwitterIcon />,
    <LinkedInIcon />,
    <GoogleIcon />,
    <FacebookIcon />,
  ],
  linkList: [
    {
      text: "من نحن",
      path: "#",
    },
    {
      text: "آخر الأخبار",
      path: "#",
    },
    {
      text: "الدعم الفني",
      path: "#",
    },
    {
      text: "سياسة الخصوصية",
      path: "#",
    },
  ],
};

const Footer = () => {
  return (
    <div className={styles.footer}>
      <Container fixed>
        <div>
          <div>
            <ul>
              {data.iconslist.map((icon, idx) => (
                <li key={idx}>
                  <Link to="#">{icon}</Link>
                </li>
              ))}
            </ul>
          </div>
          <ul>
            {data.linkList.map((link, idx) => (
              <li key={idx}>
                <Link to={link.path}> {link.text}</Link>
              </li>
            ))}
          </ul>
          <footer>
            جميع الحقوق محفوظة &copy; Kalemon {new Date().getFullYear()}
          </footer>
        </div>
      </Container>
    </div>
  );
};

export default Footer;
