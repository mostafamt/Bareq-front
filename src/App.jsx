import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import { ThemeProvider } from "@mui/material";
import { createTheme } from "@mui/material/styles";
import Rtl from "./components/Rtl/Rtl";
import Navbar1 from "./components/Navbar1/Navbar1";
import Navbar2 from "./components/Navbar2/Navbar2";
import "bootstrap/dist/css/bootstrap.css";

const theme = createTheme({
  direction: "rtl",
});

function App() {
  return (
    <Rtl>
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <Navbar1 />
          <Navbar2 />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
    </Rtl>
  );
}

export default App;
