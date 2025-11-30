import { useState, useRef } from "react";
import { motion } from "framer-motion";
import { fadeIn, textVariant } from "../utils/motion";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, FreeMode } from "swiper/modules";

import "swiper/css";
import "swiper/css/free-mode";

const PurposeSection = () => {
  const [isPlaying, setIsPlaying] = useState(true); // autoplay defaultda ON
  const swiperRef = useRef(null);

  const handleClick = () => {
    if (!swiperRef.current) return;

    if (isPlaying) {
      swiperRef.current.autoplay.stop();
      setIsPlaying(false);
    } else {
      swiperRef.current.autoplay.start();
      setIsPlaying(true);
    }
  };

  const features = [
    {
      title: "Global bozorlar uchun mo‘ljallangan",
      description:
        "MIX davlatlar tarmoqlariga ulanish orqali yangi bozorlar va xalqaro hamkorlik eshiklari ochiladi.",
    },
    {
      title: "Katta ta’sir uchun yaratilgan — Jahonga chiqishga tayyor",
      description:
        "MIX orqali davlatlar tarmoqlariga chiqib, yangi bozorlar va xalqaro hamkorlik imkoniyatlari ochiladi.",
    },
  ];

  return (
    <section id="about" className="w-full bg-gray-50 py-16 px-4 md:px-8">
      <div className="max-w-6xl mx-auto">
        <motion.div
          variants={fadeIn("right", 0.2)}
          initial="hidden"
          whileInView="show"
          className="grid md:grid-cols-3 grid-cols-1 gap-8"
        >
          {/* Left side */}
          <motion.div variants={fadeIn("right", 0.3)}>
            <motion.div
              variants={fadeIn("up", 0.4)}
              className="text-sm text-[#008B8B] font-medium mb-2"
            >
              Birlashish
            </motion.div>

            <motion.h2
              variants={textVariant(0.5)}
              className="text-3xl md:w-4/5 md:text-4xl font-bold text-gray-900"
            >
              Tadbirkorlarga nima bera olamiz?
            </motion.h2>

            <button
              onClick={handleClick}
              className="mt-4 px-4 py-2 bg-blue-500 text-white rounded"
            >
              {isPlaying ? "To‘xtatish" : "Yurish"}
            </button>
          </motion.div>

          {/* Right side swiper */}
          <motion.div variants={fadeIn("left", 0.3)} className="col-span-2">
            <Swiper
              modules={[Autoplay, FreeMode]}
              spaceBetween={24}
              slidesPerView={2}
              freeMode={true}
              freeModeMomentum={false}
              loop={true}
              autoplay={{
                delay: 0,
                disableOnInteraction: false,
              }}
              speed={11000}
              allowTouchMove={false}
              onSwiper={(swiper) => {
                swiperRef.current = swiper;
                swiper.autoplay.start();
              }}
              className="py-4"
            >
              {[...features, ...features].map((f, i) => (
                <SwiperSlide key={i}>
                  <div className="p-6 bg-white rounded-lg shadow h-full">
                    <h3 className="text-xl font-semibold mb-2">{f.title}</h3>
                    <p className="text-[#3B3B3B]">{f.description}</p>
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
