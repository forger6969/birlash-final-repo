import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import slide1 from '../assets/slides/Снимок экрана 2025-11-30 205507.png'
import slide2 from '../assets/slides/Снимок экрана 2025-11-30 205446.png'
import slide3 from '../assets/slides/Снимок экрана 2025-11-30 205438.png'
import slide4 from '../assets/slides/Снимок экрана 2025-11-30 205526.png'
import slide5 from '../assets/slides/Снимок экрана 2025-11-30 205545.png'

const slides = [
    slide1,
    slide2,
    slide3,
    slide4,
    slide5,
];

export default function SwiperForger() {
    return (
        <div className="w-full max-w-[1400px] mx-auto py-10">
            <Swiper
                modules={[Navigation, Pagination, Autoplay]}
                slidesPerView="auto"
                centeredSlides={true}
                loop={true}
                spaceBetween={60}
                speed={600}
                pagination={{ clickable: true }}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}

                className="apple-slider"
            >
                {slides.map((src, i) => (
                    <SwiperSlide
                        key={i}
                        className="max-w-[1100px] transition-all duration-500 rounded-3xl overflow-hidden"
                    >
                        <img
                            src={src}
                            className="w-full h-[550px] object-cover rounded-3xl"
                            alt=""
                        />
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
}
