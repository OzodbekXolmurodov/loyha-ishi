import React, { useState } from "react";
import { FreeMode, Thumbs } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/thumbs";
import { useGetMovieQuery } from "../../redux/api/movie-api";
import { IoPlayOutline } from "react-icons/io5";

const Swaper = () => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const { data } = useGetMovieQuery({ type: "popular", params: { page: 1 } });

  return (
    <>
      <div className="flex flex-col items-center gap-5">
        <Swiper
          style={{
            "--swiper-navigation-color": "#fff",
            "--swiper-pagination-color": "#fff",
          }}
          loop={true}
          spaceBetween={10}
          thumbs={{ swiper: thumbsSwiper }}
          modules={[FreeMode, Thumbs]}
          className="mySwiper2 w-full relative"
        >
          {data?.results?.map((movie) => (
            <SwiperSlide key={movie.id}>
              <div className="container">
                <img
                  className="w-full h-[500px] object-cover rounded-lg"
                  src={import.meta.env.VITE_IMAGE_URL + movie.backdrop_path}
                  alt={movie.title}
                />
                <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-center">
                  <h2 className="text-3xl text-white font-extrabold mb-4">
                    {movie.title}
                  </h2>
                  <button className="text-colorsMain rounded-xl flex gap-2 items-center bg-colorText pt-2 pb-2 pl-[150px] pr-[150px] font-s hover:text-colorText transition duration-300 ease-in-out transform hover:bg-colorsMain hover:scale-110">
                    <IoPlayOutline className="text-xl " />
                    Смотреть
                  </button>
                </div>
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
          modules={[FreeMode, Thumbs]}
          className="mySwiper max-w-[800px] w-60 mb-5"
        >
          {data?.results?.map((movie) => (
            <SwiperSlide key={movie.id}>
              <img
                className="w-14 h-14 rounded-md object-cover transition-transform duration-300 ease-in-out transform hover:scale-110"
                src={import.meta.env.VITE_IMAGE_URL + movie.backdrop_path}
                alt={movie.title}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
};

export default Swaper;
