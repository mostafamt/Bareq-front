import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import { useNavigate } from "react-router-dom";
import TextField from "@mui/material/TextField";
import SearchIcon from "@mui/icons-material/Search";

const pages = [
  {
    name: "الرئيسية",
    path: "/",
  },
  { name: "جولة سريعة", path: "/quickTour" },
  { name: "دروس مجانية", path: "/freeLessons" },
  { name: "الأخبار", path: "/" },
  { name: "مساعدة", path: "/" },
  { name: "من نحن", path: "/about" },
  { name: "اتصل بنا", path: "/" },
];
function ResponsiveAppBar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const [selectIndex, setSelectIndex] = React.useState(0);

  const [searchQuery, setSearchQuery] = React.useState("");

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const navigate = useNavigate();
  const handelNavigate = (path, index) => {
    navigate(path);
    setSelectIndex(index);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
    console.log(event.target.value);
  };

  return (
    <AppBar position="static" style={{ backgroundColor: "#C8E7F8A1" }}>
      <Container fixed>
        <Toolbar disableGutters>
          <div style={{ flexGrow: 1 }}>
            <img src="/assets/logo-arabic.png" alt="logo-arabic" />
          </div>

          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{ display: { xs: "block", md: "none", color: "#434343" } }}
            >
              {pages.map((page, index) => (
                <MenuItem key={page.name} onClick={handleCloseNavMenu}>
                  <Button onClick={() => handelNavigate(page.path)}>
                    {" "}
                    <Typography
                      sx={{
                        textAlign: "center",
                        color: selectIndex == index ? "#BB1212FF" : "#434343",
                      }}
                    >
                      {page.name}
                    </Typography>
                  </Button>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            {pages.map((page, index) => (
              <Button
                key={page.name}
                onClick={() => handelNavigate(page.path, index)}
              >
                {" "}
                <Typography
                  sx={{
                    textAlign: "center",
                    color: selectIndex == index ? "#BB1212FF" : "#434343",
                  }}
                >
                  {page.name}
                </Typography>
              </Button>
            ))}
          </Box>
          <Box
            sx={{ display: "flex", alignItems: "center", marginLeft: "auto" }}
          >
            <TextField
              value={searchQuery}
              onChange={handleSearchChange}
              variant="outlined"
              size="small"
              placeholder="بحث..."
              sx={{
                backgroundColor: "white",
                borderRadius: 1,
                width: 200,
                marginRight: 2,
              }}
            />
            <IconButton>
              <SearchIcon />
            </IconButton>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default ResponsiveAppBar;
