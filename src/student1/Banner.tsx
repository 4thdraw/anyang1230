// src/components/MySwiper.jsx
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';

import 'swiper/css';

export default function MySwiper() {
  return (
    <Swiper
      modules={[Autoplay]}
      slidesPerView={1}
      spaceBetween={0}
      loop={true}
      autoplay={{
        delay: 4000,               // 4초마다 자동 롤링
        disableOnInteraction: false,
      }}
    >
      <SwiperSlide><img src="/banner/m_1.jpg" alt="slide1" className="w-full h-full object-cover block" /></SwiperSlide>
      <SwiperSlide><img src="/banner/m_2.jpg" alt="slide1" className="w-full h-full object-cover block"/></SwiperSlide>
      <SwiperSlide><img src="/banner/m_3.jpg" alt="slide1" className="w-full h-full object-cover block"/></SwiperSlide>
      <SwiperSlide><img src="/banner/m_4.jpg" alt="slide1" className="w-full h-full object-cover block"/></SwiperSlide>
    </Swiper>
  );
}
