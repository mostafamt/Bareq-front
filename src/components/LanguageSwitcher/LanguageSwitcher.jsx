import React from "react";
import { useTranslation } from "react-i18next";

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();

  React.useEffect(() => {
    const dir = i18n.dir(i18n.language);
    document.documentElement.dir = dir;
  }, [i18n, i18n.language]);

  const handleLanguageChange = (e) => {
    const newLang = e.target.value;
    i18n.changeLanguage(newLang);
    localStorage.setItem("lang", newLang);
  };

  return (
    <div>
      <select value={i18n.language} onChange={handleLanguageChange}>
        <option value="ar">Arabic</option>
        <option value="en">English</option>
      </select>
    </div>
  );
};

export default LanguageSwitcher;
