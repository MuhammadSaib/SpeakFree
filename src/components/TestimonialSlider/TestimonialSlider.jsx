import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

import "./TestimonialSlider.css";

// import required modules
import { Autoplay, FreeMode, Pagination } from "swiper/modules";
import TestimonialBox from "../TestimonialBox/TestimonialBox";

const TestimonialSlider = () => {
  const [width, setWidth] = useState(window.innerWidth);
  window.addEventListener("resize", () => {
    setWidth(window.innerWidth);
  });

  return (
    <>
      <Swiper
        slidesPerView={width<600 ? 1.1 : width < 800 ? 1.5 : width < 1000 ? 2.2 : 2.7}
        spaceBetween={0}
        freeMode={true}
        // pagination={{
        //   clickable: true,
        // }}
        autoplay={{
          delay: 3000,
          disableOnInteraction: true,
        }}
        modules={[FreeMode, Pagination, Autoplay]}
        className="mySwiper"
      >
        <SwiperSlide>
          <TestimonialBox />
        </SwiperSlide>
        <SwiperSlide>
          <TestimonialBox />
        </SwiperSlide>
        <SwiperSlide>
          <TestimonialBox />
        </SwiperSlide>
        <SwiperSlide>
          <TestimonialBox />
        </SwiperSlide>
        <SwiperSlide>
          <TestimonialBox />
        </SwiperSlide>
        <SwiperSlide>
          <TestimonialBox />
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default TestimonialSlider;
