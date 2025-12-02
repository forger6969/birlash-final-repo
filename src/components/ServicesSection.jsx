import { useContext, useMemo } from 'react';
import { motion } from 'framer-motion';
import { AppContext } from "@/AppContext";
import { useTranslation } from 'react-i18next';

// --- ANIMATIONS --- //
const fadeIn = (direction, delay) => ({
  hidden: {
    opacity: 0,
    y: direction === 'up' ? 40 : direction === 'down' ? -40 : 0,
    x: direction === 'left' ? 40 : direction === 'right' ? -40 : 0
  },
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
  const { t, i18n } = useTranslation();

  // --- SERVICES: пересоздаются при смене языка --- //
  const services = useMemo(
    () => [
      {
        id: 1,
        title: t("real_business_section.cards.marketing.title"),
        description: t("real_business_section.cards.marketing.text"),
        link: "#"
      },
      {
        id: 2,
        title: t("real_business_section.cards.system.title"),
        description: t("real_business_section.cards.system.text"),
        link: "#"
      },
      {
        id: 3,
        title: t("real_business_section.cards.finance.title"),
        description: t("real_business_section.cards.finance.text"),
        link: "#"
      },
      {
        id: 4,
        title: t("real_business_section.cards.law.title"),
        description: t("real_business_section.cards.law.text"),
        link: "#"
      }
    ],
    [t, i18n.language]
  );

  // --- THEME COLORS --- //
  const sectionBg = isDark ? "bg-[#004D57]" : "bg-white";
  const headingColor = isDark ? "text-white" : "text-gray-900";
  const paragraphColor = isDark ? "text-gray-300" : "text-gray-600";
  const cardBg = isDark ? "bg-gray-800" : "bg-[#004D57]";
  const cardTitleColor = isDark ? "text-yellow-400" : "text-white";
  const cardDescColor = isDark ? "text-gray-200" : "text-[#C7A964]";

  return (
    <section
      id="services"
      className={`py-20 container mx-auto px-4 sm:px-6 lg:px-8 ${sectionBg}`}
    >
      <motion.div
        variants={fadeIn("up", 0.3)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="flex flex-col md:flex-row items-center justify-between gap-12 lg:gap-24"
      >
        {/* LEFT TEXT BLOCK */}
        <motion.div variants={fadeIn("right", 0.4)} className="md:w-1/3">
          <motion.h2
            variants={textVariant(0.2)}
            className={`text-3xl md:text-4xl font-bold mb-6 md:w-4/5 ${headingColor}`}
          >
            {t("real_business_section.title")}
          </motion.h2>

          <motion.p
            variants={fadeIn("up", 0.5)}
            className={`text-lg mb-4 md:w-4/5 ${paragraphColor}`}
          >
            {t("real_business_section.subtitle")}
            <br />
            <br />
            {t("real_business_section.description")}
          </motion.p>

          <motion.div variants={fadeIn("up", 0.6)} className="space-y-3">
            <motion.div
              variants={fadeIn("right", 0.7)}
              className="flex items-center gap-2"
            >
              <div className="w-5 h-5 rounded-full bg-indigo-100 flex items-center justify-center">
                <div className="w-2.5 h-2.5 rounded-full bg-indigo-600" />
              </div>
              <span className={`${paragraphColor}`}>
                {t("real_business_section.bullets.item1")}
              </span>
            </motion.div>

            <motion.div
              variants={fadeIn("right", 0.8)}
              className="flex items-center gap-2"
            >
              <div className="w-5 h-5 rounded-full bg-indigo-100 flex items-center justify-center">
                <div className="w-2.5 h-2.5 rounded-full bg-indigo-600" />
              </div>
              <span className={`${paragraphColor}`}>
                {t("real_business_section.bullets.item2")}
              </span>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* --- SERVICE CARDS --- */}
        <motion.div
          variants={fadeIn("left", 0.4)}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {services.map((service, index) => (
            <motion.div
              layout
              key={service.id}
              variants={fadeIn("up", 0.3 * (index + 1))}
              whileHover={{ scale: 1.05 }}
              className={`max-w-72 cursor-pointer rounded-2xl p-6 hover:shadow-xl transition-shadow duration-300 flex flex-col justify-between gap-5 ${cardBg}`}
            >
              <motion.h3
                variants={textVariant(0.3)}
                className={`text-xl font-semibold mb-2 ${cardTitleColor}`}
              >
                {service.title}
              </motion.h3>

              <motion.p
                variants={fadeIn("up", 0.5 * (index + 1))}
                className={`${cardDescColor} mb-4`}
              >
                {service.description}
              </motion.p>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}
