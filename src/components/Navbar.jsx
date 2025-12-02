import React, { useContext, useState } from 'react';
import { HiMenu, HiX } from 'react-icons/hi';
import { motion } from "framer-motion";
import { fadeIn } from "../utils/motion";
import logos from "../assets/logos.png";
import LanguageSelector from './LanguageSelector';
import { AppContext } from '@/AppContext';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState('#home');

  const { theme } = useContext(AppContext);
  const { isDark, setTheme } = theme; // isDark: true/false, setTheme: функция

  const navLinks = [
    { href: "#home", label: "Home" },
    { href: "#about", label: "About Us" },
    { href: "#services", label: "Our Service" },
  ];

  const toggleTheme = () => {
    setTheme(!isDark); // переключаем значение true/false
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
            {isDark ? "🌙" : "☀️"}
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
