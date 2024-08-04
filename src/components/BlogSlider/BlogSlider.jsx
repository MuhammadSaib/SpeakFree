import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./BlogSlider.css";

// import required modules
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper/modules";
import { MdArrowOutward } from "react-icons/md";

const BlogSlider = () => {
  const blogs = [
    {
      title: "Conduct User Testing for your Apps",
      text: "So, I'm here because I need to fill some space with dummy text about user testing. Let's dive into the magical world of user testing...",
      image: "/assets/resources/blog1.png",
    },
    {
      title: "Conduct User Testing for your Apps",
      text: "So, I'm here because I need to fill some space with dummy text about user testing. Let's dive into the magical world of user testing...",
      image: "/assets/resources/1.png",
    },
    {
      title: "Conduct User Testing for your Apps",
      text: "So, I'm here because I need to fill some space with dummy text about user testing. Let's dive into the magical world of user testing...",
      image: "/assets/resources/2.png",
    },
  ];

  return (
    <div className="p-[2rem] sm:p-[4rem] relative">
      <Swiper
        cssMode={true}
        pagination={{
        //   el: ".swiper-pagination",
          clickable: true,
        }}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        }}
        mousewheel={true}
        keyboard={true}
        modules={[Navigation, Pagination, Mousewheel, Keyboard]}
        spaceBetween={30}
        slidesPerView={1}
        className="h-full w-full relative overflow-visible"
      >
        {blogs.map((blog, index) => (
          <SwiperSlide>
            <div className="text-white rounded-lg flex flex-col custom-md:flex-row">
              <div className="relative md:mx-auto">
                <div className="h-64 w-full md:h-[400px] md:w-[400px]">
                  <img
                    src={blog.image}
                    alt="Dog with hat"
                    className="object-cover h-full w-full md:rounded-[20px]"
                  />
                </div>
                <span className="absolute top-2 left-2 bg-green-500 text-white text-xs font-semibold px-2 py-1 rounded-full">
                  Featured
                </span>
              </div>
              <div className="bg-[#242424] custom-md:my-[3rem] ml-[-1px] p-6 flex flex-col justify-around flex-1 custom-md:rounded-tr-[20px] custom-md:rounded-br-[20px]">
                {/* <div> */}
                <h2 className="text-2xl font-bold mb-2">{blog.title}</h2>
                {/* </div> */}
                <p className="text-gray-300 mb-4">{blog.text}</p>
                <a
                  href="#"
                  class="text-[#0C8F6F] flex items-center no-underline font-medium"
                >
                  Read more
                  <span className="text-[16px] h-[30px] w-[30px] flex justify-center items-center bg-[#0C8F6F] text-white rounded-[50%] ml-2">
                    <MdArrowOutward />
                  </span>
                </a>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Custom navigation buttons */}
      <div className="swiper-button-prev !w-[40px] !h-[40px] !text-[16px] absolute left-4 top-1/2 transform -translate-y-1/2 p-2 bg-gray-900 text-white rounded-[50%] cursor-pointer shadow-lg">
        <FaAngleLeft />
      </div>
      <div className="swiper-button-next !w-[40px] !h-[40px] !text-[16px] absolute right-4 top-1/2 transform -translate-y-1/2 p-2 bg-gray-900 text-white rounded-[50%] cursor-pointer shadow-lg">
        <FaAngleRight />
      </div>
      {/* <div className="swiper-pagination absolute top-0 left-10 h-[20px] w-[20px]"></div> */}
      {/* <div class="swiper-pagination swiper-pagination-clickable swiper-pagination-bullets swiper-pagination-horizontal absolute top-0 left-0">
        <span class="swiper-pagination-bullet swiper-pagination-bullet-active"></span>
        <span class="swiper-pagination-bullet"></span>
        <span class="swiper-pagination-bullet"></span>
      </div> */}
    </div>
  );
};

export default BlogSlider;
