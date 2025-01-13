import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { Container } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

import styles from "./navbar2.module.scss";

const navItems = [
  "الرئيسية",
  "جولة سريعة",
  "دروس مجانية",
  "الأخبار",
  "مساعدة",
  "من نحن",
  "اتصل بنا",
];

const Navbar2 = () => {
  return (
    <Box className={styles.navbar}>
      <AppBar
        position="static"
        style={{ backgroundColor: "rgb(241, 250, 255)" }}
      >
        <Container fixed>
          <Toolbar>
            {/* <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton> */}
            <div style={{ flexGrow: 1 }}>
              <img
                src="/assets/logo-arabic.png"
                alt="logo-arabic"
                width={200}
              />
            </div>
            <Box sx={{ display: "block" }}>
              {navItems.map((item) => (
                <Button
                  key={item}
                  sx={{ color: "#000", fontFamily: "Noto Kufi Arabic, serif" }}
                >
                  {item}
                </Button>
              ))}
              <Button sx={{ color: "#000" }}>
                <SearchIcon />
              </Button>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </Box>
  );
};

export default Navbar2;
