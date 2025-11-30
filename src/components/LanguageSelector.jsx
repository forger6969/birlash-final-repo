import React from "react";
import { useTranslation } from "react-i18next";
import '../languages/init.js'; // подключаем инициализацию i18next

const LanguageSelector = () => {
  const { i18n } = useTranslation();
  const languages = ["UZ", "EN", "RU"];

  const handleClick = (lang) => {
    i18n.changeLanguage(lang); // меняем язык в i18next
  };

  return (
    <div className="flex gap-2">
      {languages.map((lang) => (
        <button
          key={lang}
          onClick={() => handleClick(lang)}
          className={`px-3 py-1 rounded font-semibold text-sm transition-colors duration-200 ${
            i18n.language === lang
              ? "bg-[#004D57] text-white"
              : "bg-gray-100 text-[#004D57] hover:bg-[#004D57] hover:text-white"
          }`}
        >
          {lang}
        </button>
      ))}
    </div>
  );
};

export default LanguageSelector;
