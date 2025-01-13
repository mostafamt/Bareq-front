import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GoogleIcon from "@mui/icons-material/Google";
import FacebookIcon from "@mui/icons-material/Facebook";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import HttpsIcon from "@mui/icons-material/Https";
import { Link } from "react-router-dom";

import styles from "./navbar1.module.scss";

const Navbar1 = () => {
  return (
    <div className={styles.navbar}>
      <div className="container">
        <div>
          <ul>
            <li>
              <a href="#">
                <TwitterIcon fontSize="1rem" />
              </a>
            </li>
            <li>
              <a href="#">
                <LinkedInIcon fontSize="1rem" />
              </a>
            </li>
            <li>
              <a href="#">
                <GoogleIcon fontSize="1rem" />
              </a>
            </li>
            <li>
              <a href="#">
                <FacebookIcon fontSize="1rem" />
              </a>
            </li>
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
            <div>
              <button>language</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar1;
