import React from "react";
import { motion } from "framer-motion";
import { fadeIn, textVariant } from "../utils/motion";
import heroImage from "../assets/hero-image.png";
import { useTranslation } from "react-i18next";

// shadcn background beams
import { BackgroundBeams } from "@/components/ui/shadcn-io/background-beams";

const Hero = () => {
  const { t } = useTranslation();

  return (
    <section
      id="home"
      className="relative flex flex-col md:flex-row justify-between items-center 
      px-4 sm:px-6 lg:px-8 pt-44 pb-16 container mx-auto overflow-hidden"
    >
      {/* Background Effect */}
      <BackgroundBeams className="absolute inset-0 pointer-events-none" />

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
          className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight"
        >
          {t("hero_item_1_part")}
          <span className="text-blue-600 relative inline-block">
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
            <button className="bg-blue-600 text-white px-8 py-4 rounded-xl hover:bg-blue-700 cursor-pointer transition-all hover:shadow-lg hover:shadow-blue-100 active:scale-95">
              {t("hero_contact_us")}
            </button>
          </a>
        </motion.div>
      </div>

      {/* Right Column */}
      <motion.div
        variants={fadeIn("left", 0.5)}
        initial="hidden"
        whileInView="show"
        className="w-full md:w-1/2 mt-16 md:mt-0 pl-0 md:pl-12 relative z-10"
      >
        <div className="relative">
          <img
            src={heroImage}
            alt="Team meeting"
            className="rounded-lg relative z-10 hover:scale-[1.02] transition-transform duration-300"
          />
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
