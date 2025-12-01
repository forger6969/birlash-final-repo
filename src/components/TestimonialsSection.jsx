import React from 'react';
import { MorphingDialogBasicTwo } from './MorphingDialogBasicTwo';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { BsChevronLeft, BsChevronRight } from 'react-icons/bs';

const packages = [
  { id: 1 },
  { id: 2 },
  { id: 3 },
  // можно добавить больше пакетов
];

const TestimonialsSection = () => {
  return (
    <section className="py-12 max-w-7xl mx-auto px-4 relative">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={24}
        slidesPerView={1}
        loop={true}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        navigation={{
          nextEl: '.swiper-button-next-custom',
          prevEl: '.swiper-button-prev-custom',
        }}
        breakpoints={{
          640: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
      >
        {packages.map((pkg) => (
          <SwiperSlide key={pkg.id} className="flex justify-center">
            <MorphingDialogBasicTwo packageId={pkg.id} />
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Навигация */}
      <div className="absolute top-1/2 -translate-y-1/2 left-0 z-10">
        <button className="swiper-button-prev-custom w-10 h-10 rounded-full bg-white shadow flex items-center justify-center hover:bg-blue-600 hover:text-white transition-colors">
          <BsChevronLeft size={20} />
        </button>
      </div>
      <div className="absolute top-1/2 -translate-y-1/2 right-0 z-10">
        <button className="swiper-button-next-custom w-10 h-10 rounded-full bg-white shadow flex items-center justify-center hover:bg-blue-600 hover:text-white transition-colors">
          <BsChevronRight size={20} />
        </button>
      </div>
    </section>
  );
};

export default TestimonialsSection;
