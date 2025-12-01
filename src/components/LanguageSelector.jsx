import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import "../languages/init.js"; // i18next init
import Loader from "./Loader.jsx";

const LanguageSelector = ({ onLanguageChange }) => {
  const { i18n } = useTranslation();
  const languages = ["UZ", "EN", "RU"];
  const [open, setOpen] = useState(false);
  const [isLoader, setLoader] = useState(false)

  const handleClick = (lang) => {
    setOpen(false);
    if (onLanguageChange) onLanguageChange();

    setLoader(true)
    setTimeout(() => {
      i18n.changeLanguage(lang);
      setLoader(false)
    }, 1500);
  };

  return (
    <div className="relative inline-block text-left">

      <div
        onClick={() => setOpen(!open)}
        className="
          px-3 py-2 rounded-lg font-semibold text-sm cursor-pointer
          transition-all duration-300
          bg-gradient-to-r from-gray-100 to-gray-200
          text-[#004D57]
          shadow-sm
          hover:shadow-md
          hover:from-[#004D57] hover:to-[#00646F]
          hover:text-white
          focus:outline-none
          flex items-center justify-between
          min-w-[80px]
        "
      >
        {i18n.language.toUpperCase()}
        <span className="ml-2 text-xs">▼</span>
      </div>

      {open && (
        <div
          className="
            absolute mt-2 w-full rounded-lg shadow-md bg-white z-20
            border border-gray-200 overflow-hidden
          "
        >
          {languages.map((lang) => (
            <div
              key={lang}
              onClick={() => handleClick(lang)}
              className="
                px-3 py-2 cursor-pointer text-[#004D57] font-medium
                hover:bg-[#004D57] hover:text-white transition
              "
            >
              {lang}
            </div>
          ))}
        </div>
      )}

      {isLoader &&
        <Loader />
      }

    </div>
  );
};

export default LanguageSelector;
