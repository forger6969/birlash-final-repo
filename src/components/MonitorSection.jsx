import { motion } from "framer-motion";
import { fadeIn, textVariant } from "../utils/motion";
import 'swiper/css';
import 'swiper/css/navigation';
import monitorCardBg from '../assets/monitor-card.webp';
import { useContext } from "react";
import { AppContext } from "@/AppContext";
import { useTranslation } from "react-i18next";

const MonitorSection = () => {
  const { theme } = useContext(AppContext)
  const { isDark } = theme
  const { t } = useTranslation()

  // Динамические стили
  const textColor = isDark ? "text-gray-300" : "text-gray-600";
  const headingColor = isDark ? "text-white" : "text-[#004D57]";
  const spanColor = isDark ? "text-yellow-400" : "text-[#C7A964]";
  const bgColor = isDark ? "bg-[#232323]" : "bg-white";

  return (
    <motion.section
      variants={fadeIn('up', 0.2)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      className={` mx-auto px-4 py-16 md:py-24 ${bgColor}`}
    >
      <div className="flex flex-col md:flex-row items-center gap-12">
        {/* Left side - Content */}
        <motion.div
          variants={fadeIn('right', 0.3)}
          className="w-full md:w-1/2"
        >
          <motion.span
            variants={fadeIn('up', 0.4)}
            className={`font-semibold ${spanColor}`}
          >
            {t("wallet_section.mini_head")}
          </motion.span>
          <motion.h2
            variants={textVariant(0.5)}
            className={`text-xl md:text-4xl font-bold mt-4 mb-6 md:w-4/5 ${headingColor}`}
          >
            {t("wallet_section.head_item")}

          </motion.h2>
          <motion.p
            variants={fadeIn('up', 0.6)}
            className={`text-[13px] mb-8 md:w-4/5 ${textColor}`}
          >
            {t("wallet_section.describe")}

          </motion.p>
        </motion.div>

        {/* Right side - Image */}
        <motion.div
          variants={fadeIn('left', 0.3)}
          className="w-full md:w-1/2 relative"
        >
          <motion.div
            variants={fadeIn('up', 0.4)}
            className="p-4"
          >
            <motion.img
              variants={fadeIn('up', 0.5)}
              src={monitorCardBg}
              alt="Dashboard statistics"
              className="w-full h-auto rounded-lg"
            />
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  )
}

export default MonitorSection
