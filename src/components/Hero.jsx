import React, { useEffect, useRef, useContext, useState } from "react";
import Typed from "typed.js";
import { motion } from "framer-motion";
import heroImage from "../assets/imgs.png";
import { useTranslation } from "react-i18next";
import { BackgroundBeams } from "@/components/ui/shadcn-io/background-beams";
import { AppContext } from "@/AppContext";

const Hero = () => {
  const { t } = useTranslation();
  const { theme } = useContext(AppContext);
  const { isDark } = theme;

  const typedRef = useRef(null);
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    if (!typedRef.current) return;

    // Формируем строку с HTML для выделения части текста
    const typedString = `${t("hero_item_1_part")} <span class="${isDark ? "text-white" : "text-[#004D57]"
      }">${t("hero_item_2_part")}</span> ${t("hero_item_3_part")}`;

    const typed = new Typed(typedRef.current, {
      strings: [typedString],
      typeSpeed: 50,
      backSpeed: 30,
      loop: false,
      smartBackspace: true,
      onComplete: () => setShowContent(true),
      contentType: "html", // позволяет использовать HTML в строках
    });

    return () => typed.destroy();
  }, [t, isDark]);

  return (
    <section
      id="home"
      className="relative flex flex-col md:flex-row justify-between items-center 
      px-4 sm:px-6 lg:px-8 pt-44 pb-16 container mx-auto overflow-hidden"
    >
      {/* Фон */}
      <BackgroundBeams
        className={`absolute inset-0 pointer-events-none ${isDark ? "bg-[#232323]" : "bg-white"
          }`}
      />

      {/* Левая колонка */}
      <div className="w-full md:w-1/2 space-y-8 relative z-10">
        <h1
          className={`text-4xl md:text-5xl lg:text-6xl font-bold leading-tight ${isDark ? "text-white" : "text-black"
            }`}
        >
          <span ref={typedRef}></span>
        </h1>

        {showContent && (
          <>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              className="text-gray-600 text-lg md:text-xl max-w-xl"
            >
              {t("hero_description")}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.2 }}
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
                  {t("hero_contact_us")}
                </button>
              </a>
            </motion.div>
          </>
        )}
      </div>

      {/* Правая колонка */}
      <motion.div
        className="w-full md:w-1/2 mt-16 md:mt-0 pl-0 md:pl-12 relative z-10"
        animate={{
          x: [8, 8, -7, 5, 2],
          y: [3, -6, 5, -5, 7],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <div className="relative">
          <img
            src={heroImage}
            alt="Team meeting"
            className="bottom-8 relative z-10 w-[100%] hover:scale-[1.02] transition-transform duration-300 pointer-events-none"
          />
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
