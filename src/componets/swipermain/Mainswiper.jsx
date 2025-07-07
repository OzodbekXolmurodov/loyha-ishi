import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { useGetMovieQuery } from "../../redux/api/movie-api";
import { GoChevronRight } from "react-icons/go";
import { NavLink } from "react-router-dom";

const Mainswiper = () => {
  const { data } = useGetMovieQuery({ type: "upcoming", params: { page: 1 } });
  const { data: top_ratedData } = useGetMovieQuery({
    type: "top_rated",
    params: { page: 1 },
  });

  return (
    <>
      <div className=" container flex items-center justify-between pl-6 pr-10">
        <h2 className="text-xl font-medium">На неделе</h2>

        <NavLink
          className="flex items-center gap-1 text-xl font-medium  text-colorsMain"
          to={"/afisha"}
        >
          Показать все
          <GoChevronRight className="mt-1" />
        </NavLink>
      </div>
      <div className="flex justify-center mt-10 ">
        <Swiper
          slidesPerView={4}
          spaceBetween={10}
          loop={top_ratedData?.results?.length >= 4}
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
            <SwiperSlide key={movie.id}>
              <img
                className="h-[400px] object-cover rounded-xl w-[300px]"
                src={import.meta.env.VITE_IMAGE_URL + movie.poster_path}
                alt="Image"
              />
              <div className="w-full ml-[75px] mt-2">
                <h2 className="text-lg font-bold   dark:text-gray-400">
                  {movie.title}
                </h2>
                <p className="text-sm   dark:text-gray-500">
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
            <SwiperSlide
              key={movie.id}
              className="h-[470px] w-[300px] flex flex-col items-center"
            >
              <img
                className="h-[400px] object-cover rounded-xl w-[300px]"
                src={import.meta.env.VITE_IMAGE_URL + movie.poster_path}
                alt="Image"
              />

              <div className="w-full ml-[75px] mt-2">
                <h2 className="text-lg font-bold   dark:text-gray-400">
                  {movie.title}
                </h2>
                <p className="text-sm   dark:text-gray-500">
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
