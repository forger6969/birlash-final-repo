import { useState, useContext } from 'react';
import { motion } from 'framer-motion';
import { AppContext } from "@/AppContext";

// Пример fadeIn + textVariant (замени на свои настоящие)
const fadeIn = (direction, delay) => ({
  hidden: { opacity: 0, y: direction === 'up' ? 40 : direction === 'down' ? -40 : 0, x: direction === 'left' ? 40 : direction === 'right' ? -40 : 0 },
  show: {
    opacity: 1,
    y: 0,
    x: 0,
    transition: { duration: 0.6, delay }
  }
});

const textVariant = (delay) => ({
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay }
  }
});

export default function ServicesSection() {
  const { theme } = useContext(AppContext);
  const { isDark } = theme;

  const [services] = useState([
    {
      id: 1,
      title: "Natijali Marketing va Sotuv",
      description: "(Strategiya, PR, Reklama, Brand, Media, Shaxsiy Brend)",
      icon: <div className="w-10 h-10 bg-indigo-200 rounded-xl" />,
      link: '#'
    },
    {
      id: 2,
      title: "Tizimlash",
      description: "Biznes jarayonlarni standartlashtirish, avtomatlashtirish",
      icon: <div className="w-10 h-10 bg-indigo-200 rounded-xl" />,
      link: '#'
    },
    {
      id: 3,
      title: "Moliya",
      description: "Hisobotlarni boshqarish, rejlashtirish, moliyaviy tahlil va nazorat",
      icon: <div className="w-10 h-10 bg-indigo-200 rounded-xl" />,
      link: '#'
    },
    {
      id: 4,
      title: "Soliq va Yurispridensiya",
      description: "Soliq kodeksi va huquqiy jarayonlar bo‘yicha qo‘llanma",
      icon: <div className="w-10 h-10 bg-indigo-200 rounded-xl" />,
      link: '#'
    }
  ]);

  // Динамические цвета для темы
  const sectionBg = isDark ? 'bg-[#004D57]' : 'bg-white';
  const headingColor = isDark ? 'text-white' : 'text-gray-900';
  const paragraphColor = isDark ? 'text-gray-300' : 'text-gray-600';
  const cardBg = isDark ? 'bg-gray-800' : 'bg-[#004D57]';
  const cardTitleColor = isDark ? 'text-yellow-400' : 'text-white';
  const cardDescColor = isDark ? 'text-gray-200' : 'text-[#C7A964]';

  return (
    <section id="services" className={`py-20 container mx-auto px-4 sm:px-6 lg:px-8 ${sectionBg}`}>
      <motion.div
        variants={fadeIn('up', 0.3)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="flex flex-col md:flex-row items-center justify-between gap-12 lg:gap-24"
      >
        {/* LEFT TEXT BLOCK */}
        <motion.div variants={fadeIn('right', 0.4)} className="md:w-1/3">
          <motion.h2 variants={textVariant(0.2)} className={`text-3xl md:text-4xl font-bold mb-6 md:w-4/5 ${headingColor}`}>
            LEKSIYA EMAS — REAL BIZNES
          </motion.h2>

          <motion.p variants={fadeIn('up', 0.5)} className={`text-lg mb-4 md:w-4/5 ${paragraphColor}`}>
            YIRIK KORXONA VA HOLDINGLAR AMALIYOTCHILARIDAN
            <br /><br />
            SIZDA NAFAQAT BILIM — SIZDA TIZIMLI HARAKATLAR PAYDO BO‘LADI.
          </motion.p>

          <motion.div variants={fadeIn('up', 0.6)} className="space-y-3">
            <motion.div variants={fadeIn('right', 0.7)} className="flex items-center gap-2">
              <div className="w-5 h-5 rounded-full bg-indigo-100 flex items-center justify-center">
                <div className="w-2.5 h-2.5 rounded-full bg-indigo-600" />
              </div>
              <span className={`${paragraphColor}`}>3 OYLIK OFLAYN TA’LIM</span>
            </motion.div>

            <motion.div variants={fadeIn('right', 0.8)} className="flex items-center gap-2">
              <div className="w-5 h-5 rounded-full bg-indigo-100 flex items-center justify-center">
                <div className="w-2.5 h-2.5 rounded-full bg-indigo-600" />
              </div>
              <span className={`${paragraphColor}`}>YIRIK KORXONA AMALIYOTCHILARIDAN TAJRIBA</span>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* SERVICE CARDS */}
        <motion.div variants={fadeIn('left', 0.4)} className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <motion.div
              layout
              key={service.id}
              variants={fadeIn('up', 0.3 * (index + 1))}
              whileHover={{ scale: 1.05 }}
              className={`max-w-72 cursor-pointer rounded-2xl p-6 hover:shadow-xl transition-shadow duration-300 flex flex-col justify-between gap-5 ${cardBg}`}
            >
              <motion.h3 variants={textVariant(0.3)} className={`text-xl font-semibold mb-2 ${cardTitleColor}`}>
                {service.title}
              </motion.h3>

              <motion.p variants={fadeIn('up', 0.5 * (index + 1))} className={`${cardDescColor} mb-4`}>
                {service.description}
              </motion.p>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}
