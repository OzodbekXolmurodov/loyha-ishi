import React from "react";
import { useParams } from "react-router-dom";
import {
  useGetDetailImgQuery,
  useGetDetailQuery,
} from "../../redux/api/movie-api";
import { LuArchive } from "react-icons/lu";

const Detail = () => {
  const { id } = useParams();
  const { data } = useGetDetailQuery(id);
  const { data: images } = useGetDetailImgQuery(id);

  return (
    <>
      <div className="relative container  h-[700px]">
        {data && (
          <div>
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
      <div></div>
    </>
  );
};

export default Detail;
