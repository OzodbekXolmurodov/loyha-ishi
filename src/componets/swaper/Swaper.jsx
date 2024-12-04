import React, { useState } from "react";
import { FreeMode, Navigation, Thumbs } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";

const Swaper = () => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  return (
    <div className="flex flex-col items-center gap-1">
      <Swiper
        style={{
          "--swiper-navigation-color": "#fff",
          "--swiper-pagination-color": "#fff",
        }}
        loop={true}
        spaceBetween={10}
        navigation={true}
        thumbs={{ swiper: thumbsSwiper }}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper2 w-full "
      >
        {[...Array(10)].map((_, index) => (
          <SwiperSlide key={index}>
            <div className="container">
              <img
                className="w-full img object-cover"
                src={`https://swiperjs.com/demos/images/nature-${
                  index + 1
                }.jpg`}
                alt=""
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <Swiper
        onSwiper={setThumbsSwiper}
        loop={true}
        spaceBetween={5}
        slidesPerView={4}
        freeMode={true}
        watchSlidesProgress={true}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper max-w-[800px] w-60 mb-5"
      >
        {[...Array(10)].map((_, index) => (
          <SwiperSlide key={index}>
            <img
              className="w-14 h-14 rounded-md object-cover"
              src={`https://swiperjs.com/demos/images/nature-${index + 1}.jpg`}
              alt=""
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Swaper;
