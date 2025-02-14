import React from "react";
import { NavLink, useParams } from "react-router-dom";
import {
  useGetDetailImgQuery,
  useGetDetailQuery,
} from "../../redux/api/movie-api";
import { LuArchive } from "react-icons/lu";
import rasim from "../../assets/image 11.svg";
import rasim2 from "../../assets/LOGOTYPE.svg";
import Swaper from "../../componets/swaper/Swaper";
import Mainswiper from "../../componets/swipermain/Mainswiper";
import { FaEye } from "react-icons/fa6";

const Detail = () => {
  const { id } = useParams();
  const { data } = useGetDetailQuery(id);
  const { data: images } = useGetDetailImgQuery(id);

  return (
    <>
      <div className="relative container  h-[700px]">
        {data && (
          <div>
            <div className="flex items-center gap-3 absolute z-10 top-4 left-10 font-bold text-gray-700  dark:text-gray-300">
              <FaEye />
              <p className="">{data?.popularity}</p>
            </div>
            <img
              src={import.meta.env.VITE_IMAGE_URL + data.backdrop_path}
              alt=""
              className="absolute top-0 w-[1460px]  rounded-[28px] h-[640px]"
            />
            <div className="relative  text-center pt-[440px]">
              <h2 className="text-3xl text-white font-extrabold mb-2">
                {data.title}
              </h2>
              <p className="text-xl text-white font-mono mb-3">
                {data.release_date}
              </p>
              <button className="ml-[520px] text-colorsMain rounded-xl flex gap-2 items-center bg-colorText pt-2 pb-2 pl-[150px] pr-[150px] font-s hover:text-colorText transition duration-300 ease-in-out transform hover:bg-colorsMain hover:scale-110">
                <LuArchive className=" text-xl" />
                Купить билет
              </button>
            </div>
          </div>
        )}
      </div>
      <div className="container text-white mt-8">
        <div className="flex items-center text-gray-800 justify-center gap-16 dark:text-gray-400">
          <div className="flex ">
            <p className="m-4 text-[20px] font-bold items-center gap-0">
              {data?.vote_average}
            </p>
            <img src={rasim} alt="" />
          </div>
          <div className="flex items-center text-gray-800 font-bold gap-3 dark:text-gray-400">
            <p className="m-4 text-[20px] ">{data?.vote_count}</p>
            <img src={rasim2} alt="" />
          </div>
        </div>

        <div className="mt-3 flex items-center justify-center gap-2 mb-10">
          {data?.genres.map((genre) => (
            <span
              key={genre.id}
              className="ml-2 bg-gray-700 px-2 py-1 rounded-lg"
            >
              {genre.name}
            </span>
          ))}
        </div>
        <div className="flex justify-center mb-5">
          <hr className="w-[500px]" />
        </div>
        <div className="ml-[508px] mb-16">
          <h2 className="mb-5 text-[18px] font-semibold text-gray-600 dark:text-gray-300">
            Syujet
          </h2>
          <p className="w-[500px] font-medium text-gray-700 dark:text-gray-300">
            {data?.overview}
          </p>
        </div>
      </div>
      <div className="container flex flex-wrap gap-4 mb-[48px]">
        {images?.backdrops?.slice(0, 6).map((image) => (
          <img
            className="w-[475px] rounded-xl "
            src={import.meta.env.VITE_IMAGE_URL + image.file_path}
            key={image.file_path}
            alt=""
          />
        ))}
      </div>
      <div>
        <Mainswiper />
      </div>
    </>
  );
};

export default Detail;
