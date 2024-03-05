import React from "react";

// Direct React component imports
import { Swiper, SwiperSlide } from 'swiper/react';
// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';


import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/autoplay'

const FrasesSlide = () => {
  return ( <>
  <Swiper
        spaceBetween={30}
        autoplay={{
          delay: 5500,
          disableOnInteraction: true,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={false}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
      <SwiperSlide><h2>Danzamos para vivir con alegría de movernos, de disfrutar de la creación constante del cuerpo, él es un instrumento de comunicación que nos une desde lo ancestral de la danza…</h2>
                 </SwiperSlide>
      <SwiperSlide>
        <h2>Las plantas de nuestros pies transmiten las vibraciones de la tierra, del viento, el agua, los ríos, los mares y las rocas son las que nos conectan con el ritmo interno de nuestro corazón.
        </h2>
      </SwiperSlide>
    </Swiper>
  </>
  )
}
export default FrasesSlide;