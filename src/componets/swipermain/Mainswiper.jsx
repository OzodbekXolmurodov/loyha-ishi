import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { useGetMovieQuery } from "../../redux/api/movie-api";

const Mainswiper = () => {
  const { data } = useGetMovieQuery({ type: "upcoming", params: { page: 1 } });
  const { data: top_ratedData } = useGetMovieQuery({
    type: "top_rated",
    params: { page: 1 },
  });

  return (
    <>
      <div className="flex justify-center mt-12">
        <Swiper
          slidesPerView={4}
          spaceBetween={10}
          breakpoints={{
            640: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 3,
              spaceBetween: 30,
            },
            1024: {
              slidesPerView: 4,
              spaceBetween: 40,
            },
          }}
          className="mySwiper container mb-[20px] w-full"
        >
          {data?.results?.map((movie) => (
            <SwiperSlide className="relative h-[400px] w-[280px] overflow-hidden group">
              <img
                className="h-full object-cover rounded-xl w-[315px]"
                src={import.meta.env.VITE_IMAGE_URL + movie.poster_path}
                alt="Image"
              />
              <div className="absolute inset-0 flex flex-col justify-end items-center opacity-0 group-hover:opacity-100 transform translate-y-5 group-hover:translate-y-0 transition-all duration-300 ease-in-out">
                <h2 className="text-white text-3xl font-bold mb-[5px] text-center group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-gray-900 group-hover:bg-clip-text group-hover:text-transparent">
                  {movie.title}
                </h2>
                <p className="text-white text-xl mb-[50px] group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-gray-900 group-hover:bg-clip-text group-hover:text-transparent">
                  {movie.release_date}
                </p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div className="flex justify-center mt-12">
        <Swiper
          slidesPerView={4}
          spaceBetween={10}
          breakpoints={{
            640: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 3,
              spaceBetween: 30,
            },
            1024: {
              slidesPerView: 4,
              spaceBetween: 40,
            },
          }}
          className="mySwiper container mb-[120px] w-full"
        >
          {top_ratedData?.results?.map((movie) => (
            <SwiperSlide className="relative h-[400px] w-[280px] overflow-hidden group">
              <img
                className="h-full w-[315px] object-cover rounded-xl"
                src={import.meta.env.VITE_IMAGE_URL + movie.poster_path}
                alt="Image"
              />
              <div className="absolute inset-0 flex flex-col justify-end items-center opacity-0 group-hover:opacity-100 transform translate-y-5 group-hover:translate-y-0 transition-all duration-300 ease-in-out">
                <h2 className="text-white text-3xl font-bold mb-[5px] text-center group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-gray-900 group-hover:bg-clip-text group-hover:text-transparent">
                  {movie.title}
                </h2>
                <p className="text-white text-xl mb-[50px] group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-gray-900 group-hover:bg-clip-text group-hover:text-transparent">
                  {movie.release_date}
                </p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
};

export default Mainswiper;
