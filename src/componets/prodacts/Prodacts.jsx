import React, { useState } from "react";
import { useGetMovieQuery } from "../../redux/api/movie-api";
import { MOVIE_LISTS } from "../../statik";
import Pagination from "@mui/material/Pagination";
import PaginationItem from "@mui/material/PaginationItem";
import { NavLink, useNavigate, useSearchParams } from "react-router-dom";

const Products = () => {
  const [params, setParams] = useSearchParams();
  const [page, setPage] = useState(+params.get("count") || 1);
  const [type, setType] = useState(params.get("path") || "now_playing");
  const { data } = useGetMovieQuery({ type, params: { page } });
  const navigate = useNavigate();

  const handlePageChange = (event, value) => {
    setPage(value);
    const updatedParams = new URLSearchParams(params);
    updatedParams.set("count", value);
    setParams(updatedParams);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleTypeChange = (path) => {
    setType(path);
    setPage(1);
    setParams({ path, count: 1 });

    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      <div className="flex container items-center justify-between">
        <div className="flex gap-4 container">
          {MOVIE_LISTS?.map((item) => (
            <button
              key={item.id}
              onClick={() => handleTypeChange(item.path)}
              className={`border p-3 px-6 rounded-full mt-5 mb-10 text-sm font-medium transition-all duration-300 ${
                type === item.path
                  ? "bg-colorsMain text-white dark:bg-colorsMain dark:text-white shadow-lg"
                  : "bg-gray-200 text-black dark:bg-gray-700 dark:text-white dark:border-gray-600 border-2 "
              }`}
            >
              {item.title}
            </button>
          ))}
        </div>
        <div className="flex gap-4 pr-[50px]">
          <NavLink className={"navber__link text-xs"} to="/about">
            <button
              className={`border p-3 px-9 rounded-full mt-5 mb-10 text-sm font-medium transition-all duration-300 ${"bg-gray-200 text-black dark:bg-gray-700 dark:text-white dark:border-gray-600 border-2"}`}
            >
              Жанр
            </button>
          </NavLink>
        </div>
      </div>

      <div className="container flex flex-wrap justify-between gap-6">
        {data?.results?.map((product) => (
          <div className="w-[260px] mb-12" key={product.id}>
            <img
              onClick={() => navigate(`/movie/${product.id}`)}
              className="w-[260px] h-[380px] rounded-3xl cursor-pointer transition-all duration-300 hover:scale-105"
              src={`${import.meta.env.VITE_IMAGE_URL}${product.poster_path}`}
              alt={product.original_title}
            />
            <div className="flex items-center justify-between mt-3 mb-5">
              <h2 className="text-xl font-semibold text-black dark:text-white transition-colors duration-300">
                {product.original_title}
              </h2>
              <p className="mr-2 rounded-full p-3 bg-gray-200 text-black dark:bg-gray-700 dark:text-white dark:border-white border-2 transition-all duration-300">
                {product.vote_average.toFixed(1)}
              </p>
            </div>
          </div>
        ))}
      </div>

      <div className="flex justify-center mb-14 mt-5">
        <Pagination
          count={data?.total_pages > 500 ? 500 : data?.total_pages}
          page={page}
          onChange={handlePageChange}
          className="dark:bg-gray-800 dark:text-white dark:border-white bg-white text-black border-2 border-gray-300 rounded-full p-2 transition-all duration-300"
          renderItem={(item) => (
            <PaginationItem
              {...item}
              className={`${
                item.selected
                  ? "bg-colorsMain text-white"
                  : "bg-gray-200 text-black dark:bg-gray-700 dark:text-white"
              } rounded-full p-2 transition-colors duration-300`}
            />
          )}
        />
      </div>
    </>
  );
};

export default Products;
