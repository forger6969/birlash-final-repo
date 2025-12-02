import React, { useContext } from "react";
import { motion } from "framer-motion";
import { fadeIn, textVariant } from "../utils/motion";
import heroImage from "../assets/imgs.png";
import { useTranslation } from "react-i18next";

// shadcn background beams
import { BackgroundBeams } from "@/components/ui/shadcn-io/background-beams";
import { AppContext } from "@/AppContext";

const Hero = () => {
  const { t } = useTranslation();
  const { theme } = useContext(AppContext)
  const { isDark } = theme

  const fadeIn = (direction = "up", delay = 0) => {
    let x = 0, y = 0;
    if (direction === "left") x = [-50, 0]; // x bo‘yicha keyframe
    if (direction === "right") x = [50, 0];
    if (direction === "up") y = [50, 0];
    if (direction === "down") y = [-50, 0];

    return {
      hidden: { opacity: 0, x: 0, y: 0 },
      show: {
        opacity: [0, 0.5, 1], // keyframe
        x: x,
        y: y,
        transition: {
          duration: 1,       // animatsiya davomiyligi
          delay: delay,      // kechikish
          ease: "easeInOut"
        }
      }
    };
  };


  return (
    <section
      id="home"
      className="relative flex flex-col md:flex-row justify-between items-center 
      px-4 sm:px-6 lg:px-8 pt-44 pb-16 container mx-auto overflow-hidden"
    >
      {/* Background Effect */}
      <BackgroundBeams className={`absolute inset-0 pointer-events-none ${isDark ? "bg-[#232323]":"bg-white"}`} />

      {/* Left Column */}
      <div className="w-full md:w-1/2 space-y-8 relative z-10">
        <motion.div
          variants={fadeIn("right", 0.2)}
          initial="hidden"
          whileInView="show"
        ></motion.div>

        <motion.h1
          variants={textVariant(0.3)}
          initial="hidden"
          whileInView="show"
          className="text-4xl md:text-5xl lg:text-6xl font-bold taxt-[] leading-tight"
        >
          {t("hero_item_1_part")}
          <span className="text-[#004D57] relative inline-block">
            {t("hero_item_2_part")}
            <span className="absolute bottom-0 left-0 w-full h-0.5 bg-blue-200/60"></span>
          </span>{" "}
          {t("hero_item_3_part")}
        </motion.h1>

        <motion.p
          variants={fadeIn("up", 0.4)}
          initial="hidden"
          whileInView="show"
          className="text-gray-600 text-lg md:text-xl max-w-xl"
        >
          {t("hero_description")}
        </motion.p>

        <motion.div
          variants={fadeIn("up", 0.5)}
          initial="hidden"
          whileInView="show"
          className="flex gap-3 max-w-md"
        >
          <a href="#newsletter">
            <button
              className="
      bg-[#008B8B] 
      text-white
      px-8 py-4
      rounded-xl
      transition-all duration-300
      cursor-pointer

      hover:bg-[#006E6E]
      hover:shadow-[0_6px_20px_rgba(199,169,100,0.35)]
      active:scale-95
    "
            >
              {t('hero_contact_us')}
            </button>
          </a>
        </motion.div>
      </div>

      {/* Right Column */}

      <motion.div
        className="w-full md:w-1/2 mt-16 md:mt-0 pl-0 md:pl-12 relative z-10"
        animate={{
          x: [8, 8, -7, 5, 2],
          y: [3, -6, 5, -5, 7],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        <div className="relative">
          <img
            src={heroImage}
            alt="Team meeting"
            className="bottom-8 relative z-10 w-[10000px] hover:scale-[1.02] transition-transform duration-300 pointer-events-none"
          />
        </div>
      </motion.div>

    </section>
  );
};

export default Hero;
