import { useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { FiChevronDown } from "react-icons/fi";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";

const PackagesSwiper = () => {
  const { t } = useTranslation();
  const packages = t("packages", { returnObjects: true }); // массив пакетов из i18next

  const [openId, setOpenId] = useState(null);
  const contentRefs = useRef([]);

  const toggle = (id, index) => {
    const currentEl = contentRefs.current[index];

    if (openId !== id) {
      // закрываем старый
      if (openId !== null) {
        const oldIndex = packages.findIndex((p) => p.id === openId);
        const oldEl = contentRefs.current[oldIndex];
        if (oldEl) {
          oldEl.style.height = oldEl.scrollHeight + "px";
          requestAnimationFrame(() => {
            oldEl.style.height = "0px";
          });
        }
      }

      // открываем новый
      currentEl.style.height = currentEl.scrollHeight + "px";
      setOpenId(id);

      setTimeout(() => {
        currentEl.style.height = "auto";
      }, 300);
      return;
    }

    // закрываем текущий
    if (openId === id) {
      currentEl.style.height = currentEl.scrollHeight + "px";
      requestAnimationFrame(() => {
        currentEl.style.height = "0px";
      });
      setTimeout(() => {
        setOpenId(null);
      }, 300);
    }
  };

  return (
    <section className="py-16 px-4 max-w-7xl mx-auto">
      <Swiper
        modules={[Navigation, Autoplay]}
        spaceBetween={24}
        loop={true}
        autoplay={{ delay: 2000, disableOnInteraction: false }}
        navigation={{
          nextEl: ".swiper-button-next-custom",
          prevEl: ".swiper-button-prev-custom",
        }}
        breakpoints={{
          0: { slidesPerView: 1 },
          640: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
      >
        {packages.map((pkg, index) => {
          const isOpen = openId === pkg.id;

          return (
            <SwiperSlide key={pkg.id} className="py-4">
              <div className="
                bg-white rounded-2xl shadow-sm border border-gray-200
                p-6 h-full flex flex-col justify-between
                hover:shadow-xl hover:border-gray-300 transition-all duration-300
              ">
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{pkg.title}</h3>

                  <p className="
                    text-2xl font-extrabold 
                    bg-gradient-to-r from-blue-600 to-indigo-600 
                    bg-clip-text text-transparent mb-4
                  ">
                    {pkg.price}
                  </p>

                  <div className="h-px w-full bg-gray-200 mb-4"></div>
                </div>

                {/* BUTTON */}
                <button
                  onClick={() => toggle(pkg.id, index)}
                  className="flex items-center gap-2 text-[15px] font-medium text-gray-700 hover:text-blue-600 transition"
                >
                  Подробнее
                  <FiChevronDown
                    className={`transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}
                    size={20}
                  />
                </button>

                {/* COLLAPSE */}
                <div
                  ref={(el) => (contentRefs.current[index] = el)}
                  className="overflow-hidden transition-all duration-300 h-0"
                >
                  <div className="p-4 bg-gray-100 rounded-xl text-gray-700 text-sm border border-gray-200 mt-3">
                    {pkg.details}
                  </div>
                </div>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>

      <div className="flex justify-center gap-4 mt-8">
        <button className="
          swiper-button-prev-custom w-12 h-12 rounded-full border border-gray-300
          flex items-center justify-center hover:bg-blue-600 hover:text-white
          transition-colors shadow-sm
        ">
          <BsChevronLeft className="w-6 h-6" />
        </button>
        <button className="
          swiper-button-next-custom w-12 h-12 rounded-full border border-gray-300
          flex items-center justify-center hover:bg-blue-600 hover:text-white
          transition-colors shadow-sm
        ">
          <BsChevronRight className="w-6 h-6" />
        </button>
      </div>
    </section>
  );
};

export default PackagesSwiper;
