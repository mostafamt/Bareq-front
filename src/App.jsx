import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Rtl from "./components/Rtl/Rtl";
import Navbar1 from "./components/Navbar1/Navbar1";
import Navbar2 from "./components/Navbar2/Navbar2";
import "bootstrap/dist/css/bootstrap.css";
import { I18nextProvider, initReactI18next } from "react-i18next";
import i18next from "i18next";
import translationAR from "./locales/ar/translation.json";
import translationEN from "./locales/en/translation.json";
import Footer from "./components/Footer/Footer";

i18next.init({
  interpolation: { escapeValue: false }, // React already does escaping
});

const resources = {
  ar: {
    translation: translationAR,
  },
  en: {
    translation: translationEN,
  },
};

i18next.use(initReactI18next).init({
  resources,
  lng: localStorage.getItem("lang"),
  fallbackLng: "en",
  interpolation: {
    escapeValue: false,
  },
});

function App() {
  return (
    <I18nextProvider i18n={i18next}>
      <Rtl>
        <BrowserRouter>
          <Navbar1 />
          <Navbar2 />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
          </Routes>
          <Footer />
        </BrowserRouter>
      </Rtl>
    </I18nextProvider>
  );
}

export default App;
