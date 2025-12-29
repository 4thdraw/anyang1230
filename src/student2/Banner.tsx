import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';

import 'swiper/css';

export default function Slider() {
  return (
    <Swiper
      modules={[Autoplay]}
      slidesPerView={1}   // 하나씩
      spaceBetween={0}    // 간격 없음
      loop={true}
      autoplay={{
        delay: 4000,
        disableOnInteraction: false,
      }}
      speed={800}
    >
      <SwiperSlide>
        <img src="/banner/m_1.jpg" className='w-full' w-full alt="slide 1" />
      </SwiperSlide>
      <SwiperSlide>
        <img src="/banner/m_2.jpg" className='w-full' alt="slide 2" />
      </SwiperSlide>
      <SwiperSlide>
        <img src="/banner/m_3.jpg" className='w-full' alt="slide 3" />
      </SwiperSlide>
      <SwiperSlide>
        <img src="/banner/m_4.jpg" className='w-full' alt="slide 4" />
      </SwiperSlide>
    </Swiper>
  );
}
