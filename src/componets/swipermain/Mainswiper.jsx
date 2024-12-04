import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

const Mainswiper = () => {
  return (
    <>
      <div className="flex justify-center mt-12">
        <Swiper
          slidesPerView={1}
          spaceBetween={10}
          breakpoints={{
            640: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 4,
              spaceBetween: 40,
            },
            1024: {
              slidesPerView: 5,
              spaceBetween: 50,
            },
          }}
          className="mySwiper container mb-[120px]"
        >
          <SwiperSlide className="h-[400px] w-[280px] rounded-xl overflow-hidden">
            <img
              className="h-[400px]"
              src="https://static.norma.uz/images/179410_f2c14d7463fea016f4d01b28da70.jpg"
              alt=""
            />
          </SwiperSlide>
          <SwiperSlide className="h-[400px] w-[280px] rounded-xl overflow-hidden">
            <img
              className="h-[400px]"
              src="https://static.norma.uz/images/179410_f2c14d7463fea016f4d01b28da70.jpg"
              alt=""
            />
          </SwiperSlide>
          <SwiperSlide className="h-[400px] w-[280px] rounded-xl overflow-hidden">
            <img
              className="h-[400px]"
              src="https://static.norma.uz/images/179410_f2c14d7463fea016f4d01b28da70.jpg"
              alt=""
            />
          </SwiperSlide>
          <SwiperSlide className="h-[400px] w-[280px] rounded-xl overflow-hidden">
            <img
              className="h-[400px]"
              src="https://static.norma.uz/images/179410_f2c14d7463fea016f4d01b28da70.jpg"
              alt=""
            />
          </SwiperSlide>
          <SwiperSlide className="h-[400px] w-[280px] rounded-xl overflow-hidden">
            <img
              className="h-[400px]"
              src="https://static.norma.uz/images/179410_f2c14d7463fea016f4d01b28da70.jpg"
              alt=""
            />
          </SwiperSlide>
          <SwiperSlide className="h-[400px] w-[380px] rounded-xl overflow-hidden">
            <img
              className="h-[400px]"
              src="https://static.norma.uz/images/179410_f2c14d7463fea016f4d01b28da70.jpg"
              alt=""
            />
          </SwiperSlide>
          <SwiperSlide className="h-[400px] w-[280px] rounded-xl overflow-hidden">
            <img
              className="h-[400px]"
              src="https://static.norma.uz/images/179410_f2c14d7463fea016f4d01b28da70.jpg"
              alt=""
            />
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  );
};

export default Mainswiper;
