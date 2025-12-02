import React, { useContext, useState } from 'react';
import { HiMenu, HiX } from 'react-icons/hi';
import { motion } from "framer-motion";
import { fadeIn } from "../utils/motion";
import logos from "../assets/logos.png";
import LanguageSelector from './LanguageSelector';
import { AppContext } from '@/AppContext';
import { useTranslation } from 'react-i18next';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState('#home');

  const { theme } = useContext(AppContext);
  const { isDark, setTheme } = theme; // isDark: true/false, setTheme: функция
  const { t } = useTranslation()

  const navLinks = [
    { href: "#home", label: t("menu.home") },
    { href: "#about", label: t("menu.about") },
    { href: "#services", label: t("menu.service") },
  ];

  const toggleTheme = () => {
    setTheme(!isDark); // переключаем значение true/false
    localStorage.setItem(`theme`, JSON.stringify(!isDark))
  };

  return (
    <motion.nav
      variants={fadeIn('down', 0.2)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      className="fixed top-0 left-0 right-0 bg-[#004D57] backdrop-blur-sm z-50 border-b border-gray-100 shadow-sm"
    >
      <div className="w-full flex justify-between items-center container mx-auto px-4 sm:px-6 lg:px-8 md:h-20 h-16">
        {/* Logo */}
        <motion.div variants={fadeIn('right', 0.3)} className="flex items-center gap-1 cursor-pointer">
          <motion.div whileHover={{ scale: 1.1 }}>
            <img className='w-[50px] md:w-[85px] transition-all' src={logos} alt="Logo" />
          </motion.div>
        </motion.div>

        {/* Mobile Menu Button */}
        <motion.button
          variants={fadeIn('left', 0.3)}
          className="md:hidden p-2"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <HiX className="h-6 w-6" /> : <HiMenu className="h-6 w-6" />}
        </motion.button>

        {/* Desktop nav */}
        <motion.div variants={fadeIn('down', 0.3)} className="hidden md:flex items-center gap-10">
          {navLinks.map((link, index) => (
            <motion.a
              key={index}
              href={link.href}
              onClick={() => setActiveLink(link.href)}
              className={`px-2.5 py-1.5 rounded-md text-sm font-medium transition-all duration-200
                ${activeLink === link.href
                  ? "bg-[#008B8B] text-white shadow-[0_0_8px_rgba(0,139,139,0.22)]"
                  : "text-[#C7A964]"
                } hover:${activeLink === link.href ? "" : "bg-[#008B8B]/12"} focus:bg-[#008B8B] focus:text-white
              `}
            >
              {link.label}
            </motion.a>
          ))}

          {/* Theme toggle */}
          <button
            onClick={toggleTheme}
            className="w-9 h-9 rounded-full bg-gray-200 text-gray-800 flex items-center justify-center hover:scale-110 transition-transform"
          >
            {isDark ? <svg width="25px" height="25px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd" clip-rule="evenodd" d="M3.39703 11.6315C3.39703 16.602 7.42647 20.6315 12.397 20.6315C15.6858 20.6315 18.5656 18.8664 20.1358 16.23C16.7285 17.3289 12.6922 16.7548 9.98282 14.0455C7.25201 11.3146 6.72603 7.28415 7.86703 3.89293C5.20697 5.47927 3.39703 8.38932 3.39703 11.6315ZM21.187 13.5851C22.0125 13.1021 23.255 13.6488 23 14.5706C21.7144 19.2187 17.4543 22.6315 12.397 22.6315C6.3219 22.6315 1.39703 17.7066 1.39703 11.6315C1.39703 6.58874 4.93533 2.25845 9.61528 0.999986C10.5393 0.751502 11.0645 1.99378 10.5641 2.80935C8.70026 5.84656 8.83194 10.0661 11.397 12.6312C13.9319 15.1662 18.1365 15.3702 21.187 13.5851Z" fill="#0F0F0F" />
            </svg> : <svg width="25px" height="25px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 3V4M12 20V21M4 12H3M6.31412 6.31412L5.5 5.5M17.6859 6.31412L18.5 5.5M6.31412 17.69L5.5 18.5001M17.6859 17.69L18.5 18.5001M21 12H20M16 12C16 14.2091 14.2091 16 12 16C9.79086 16 8 14.2091 8 12C8 9.79086 9.79086 8 12 8C14.2091 8 16 9.79086 16 12Z" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
            </svg>}
          </button>

          <LanguageSelector />
        </motion.div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <motion.div
          variants={fadeIn('down', 0.2)}
          initial="hidden"
          animate="show"
          className="md:hidden bg-[#004D57] border-t py-4"
        >
          <motion.div variants={fadeIn('down', 0.3)} className="container mx-auto px-4 space-y-4">
            {navLinks.map((link, index) => (
              <motion.a
                key={index}
                href={link.href}
                onClick={() => { setActiveLink(link.href); setIsMenuOpen(false); }}
                className="text-white block text-sm font-medium py-2"
              >
                {link.label}
              </motion.a>
            ))}

            <div className='flex items-center gap-4'>
              <button
                onClick={toggleTheme}
                className="w-9 h-9 rounded-full bg-gray-200 text-gray-800 flex items-center justify-center hover:scale-110 transition-transform"
              >
                {isDark ? "🌙" : "☀️"}
              </button>
              <LanguageSelector onLanguageChange={() => setIsMenuOpen(false)} />
            </div>
          </motion.div>
        </motion.div>
      )}
    </motion.nav>
  );
};

export default Navbar;
