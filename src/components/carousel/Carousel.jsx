import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation, Autoplay } from "swiper";
import homestay from "../../assets/homestay.jpeg"
import yana from "../../assets/yanahorizontal.jpeg"
import riverRafting from "../../assets/riverRafting.jpeg"

const Carousel = () => {
  return (  
    <>
    
    <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
            delay: 5000,
            disableOnInteraction: false,
        }}
        pagination={{
            clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
    >
    
        <SwiperSlide>
            <img
                className="object-fill w-full h-screen"
                src={homestay}
                alt=" slide 1"
            />
        </SwiperSlide>
        <SwiperSlide>
            <img
                className="object-fill w-full h-screen"
                src={yana}
                alt="slide 2"
            />
        </SwiperSlide>
        <SwiperSlide>
            <img
                className="object-fill w-full h-screen"
                src={riverRafting}
                alt="slide 3"
            />
        </SwiperSlide>
    </Swiper>
</>
        

  )
}

export default Carousel