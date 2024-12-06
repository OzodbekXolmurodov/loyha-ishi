import React, { useState } from "react";
import { useGetMovieQuery } from "../../redux/api/movie-api";
import { MOVIE_LISTS } from "../../statik";
import Pagination from "@mui/material/Pagination";
import { useNavigate, useSearchParams } from "react-router-dom";
const Prodacts = () => {
  const [params, setParams] = useSearchParams();
  const [page, setPage] = useState(+params.get(+"count") || 1);
  const [type, setType] = useState(params.get("path") || "now_playing");
  const { data } = useGetMovieQuery({ type, params: { page } });
  const usenavigate = useNavigate();

  const handleChange = (event, value) => {
    setPage(value);
    const p = new URLSearchParams(params);
    p.set("count", value);
    setParams(p);
  };

  const handleChangeTayp = (path) => {
    setType(path);
    setPage(1);
    setParams({ path, caunt: 1 });
  };

  return (
    <>
      <div className="flex gap-4 container">
        {MOVIE_LISTS?.map((item) => (
          <button
            key={item.id}
            onClick={() => handleChangeTayp(item.path)}
            className={`border p-2 pl-4 pr-4 rounded-full mt-5 mb-10 ${
              type === item.path ? "bg-colorsMain text-white" : "bg-gray-200"
            }`}
          >
            {item.title}
          </button>
        ))}
      </div>
      <div className="container flex flex-wrap justify-between">
        {data?.results?.map((prodacts) => (
          <div className="w-[260px]" key={prodacts.id}>
            <img
              onClick={() => usenavigate(`/movie/${prodacts.id}`)}
              className="w-[260px] rounded-3xl "
              src={import.meta.env.VITE_IMAGE_URL + prodacts.poster_path}
              alt="rasim"
            />
            <div className="flex items-center justify-between mt-3 mb-10">
              <h2 className="text-2xl">{prodacts.original_title}</h2>
              <p className="mr-2 rounded-full p-3 main-p">
                {prodacts.vote_average.toFixed(1)}
              </p>
            </div>
          </div>
        ))}
      </div>
      <div className="flex justify-center mb-14 mt-5 ">
        <Pagination
          count={data?.total_pages > 500 ? 500 : data?.total_pages}
          page={page}
          onChange={handleChange}
        />
      </div>
    </>
  );
};

export default Prodacts;
