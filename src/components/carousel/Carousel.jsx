import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation, Autoplay } from "swiper";

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
                src="https://cdn.pixabay.com/photo/2022/03/20/15/40/nature-7081138__340.jpg"
                alt="image slide 1"
            />
        </SwiperSlide>
        <SwiperSlide>
            <img
                className="object-fill w-full h-screen"
                src="https://cdn.pixabay.com/photo/2022/07/24/17/55/wind-energy-7342177__340.jpg"
                alt="image slide 2"
            />
        </SwiperSlide>
        <SwiperSlide>
            <img
                className="object-fill w-full h-screen"
                src="https://cdn.pixabay.com/photo/2022/07/26/03/35/jogger-7344979__340.jpg"
                alt="image slide 3"
            />
        </SwiperSlide>
    </Swiper>
</>
        

  )
}

export default Carousel