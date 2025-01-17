import Box from "@mui/material/Box";
import styles from "./navbar2.module.scss";
import ResponsiveAppBar from "./NavBarResponsive";

const Navbar2 = () => {
  return (
    <Box className={styles.navbar}>
      <ResponsiveAppBar />
    </Box>
  );
};

export default Navbar2;
