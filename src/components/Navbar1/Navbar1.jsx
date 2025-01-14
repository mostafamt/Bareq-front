import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GoogleIcon from "@mui/icons-material/Google";
import FacebookIcon from "@mui/icons-material/Facebook";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import HttpsIcon from "@mui/icons-material/Https";
import { Link } from "react-router-dom";
import { Container } from "@mui/material";
import LanguageSwitcher from "../LanguageSwitcher/LanguageSwitcher";

import styles from "./navbar1.module.scss";

const icons = [
  { component: <TwitterIcon fontSize="1rem" /> },
  {
    component: <LinkedInIcon fontSize="1rem" />,
  },
  {
    component: <GoogleIcon fontSize="1rem" />,
  },
  {
    component: <FacebookIcon fontSize="1rem" />,
  },
];

const Navbar1 = () => {
  return (
    <div className={styles.navbar}>
      <Container fixed>
        <div>
          <ul>
            {icons?.map((item, idx) => (
              <li key={idx}>
                <a href="#">{item.component}</a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <ul>
            <li>
              <Link to="#">
                <PersonAddIcon />
                <span>مستخدم جديد</span>
                <span>&nbsp; | &nbsp;</span>
              </Link>
            </li>
            <li>
              <Link to="#">
                <HttpsIcon />
                <span>تسجيل دخول</span>
                <span>&nbsp; | &nbsp;</span>
              </Link>
            </li>
          </ul>
          <div>
            <LanguageSwitcher />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Navbar1;
