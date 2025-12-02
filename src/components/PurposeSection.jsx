import { useState, useRef, useContext } from "react";
import { motion } from "framer-motion";
import { fadeIn, textVariant } from "../utils/motion";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, FreeMode } from "swiper/modules";

import "swiper/css";
import "swiper/css/free-mode";
import { useTranslation } from "react-i18next";
import { AppContext } from "@/AppContext";

const PurposeSection = () => {
  const { t } = useTranslation()

  const [isPlaying, setIsPlaying] = useState(true); // autoplay defaultda ON
  const swiperRef = useRef(null);
  const { theme } = useContext(AppContext)
  const { isDark } = theme


  const features = [
    {
      title: t("swiper_card_1_item"),
      description:
        t("swiper_card_1_describe"),
    },
    {
      title: t("swiper_card_2_item"),
      description: t("swiper_card_2_describe"),
    },
  ];

  return (
    <section id="about" className={`w-full  py-12 px-4 sm:px-6 md:px-8 lg:px-10 ${isDark ? "bg-[#232323]" : "bg-[#004D57]"}`}>
      <div className="min-w-6xl mx-auto">
        <motion.div
          variants={fadeIn("right", 0.2)}
          initial="hidden"
          whileInView="show"
          className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start"
        >
          {/* Left */}
          <motion.div variants={fadeIn("right", 0.3)} className="flex flex-col justify-center">
            <motion.div
              variants={fadeIn("up", 0.4)}
              className="text-sm text-[#008B8B] font-medium mb-2"
            >

              Birlashish
            </motion.div>

            <motion.h2
              variants={textVariant(0.5)}
              className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#C7A964] leading-snug md:w-4/5"
            >

              {t("swiper_card_section_item")}
            </motion.h2>


          </motion.div>

          {/* Right - Swiper */}
          <motion.div
            variants={fadeIn("left", 0.3)}
            className="col-span-2 w-full"
          >
            <Swiper
              modules={[Autoplay, FreeMode]}
              slidesPerView={1}
              breakpoints={{
                480: { slidesPerView: 1.3 },

                640: { slidesPerView: 1.7 },
                768: { slidesPerView: 2 },
                1024: { slidesPerView: 2.3 },
              }}
              freeModeMomentum={false}
              loop={true}
              autoplay={{
                delay: 0,
                disableOnInteraction: false,
              }}
              speed={11000}
              allowTouchMove={true}
              onSwiper={(swiper) => {
                swiperRef.current = swiper;
                swiper.autoplay.start();
              }}
              className="py-4"
            >
              {[...features, ...features].map((f, i) => (
                <SwiperSlide key={i}>
                  <div className={`min-h-[250px] p-6 rounded-lg shadow mr-3 sm:mr-4 ${isDark ? "bg-[#004D57]" : "bg-white"}`}>
                    <h3 className={`text-lg sm:text-xl font-semibold mb-2 whitespace-normal ${isDark ? "text-white" : "text-black"}`}>
                      {f.title}
                    </h3>
                    <p className={` text-sm sm:text-base ${isDark ? "text-[#ffffff6e]" : "text-[#3B3B3B]"}`}>
                      {f.description}
                    </p>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </motion.div>
        </motion.div>
      </div>
    </section>

  );
};

export default PurposeSection;
