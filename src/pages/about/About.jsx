import React, { useEffect, useState } from "react";
import { useGetMovieDiscoverQuery } from "../../redux/api/movie-api";
import { Pagination, PaginationItem } from "@mui/material";
import { useNavigate, useSearchParams } from "react-router-dom";
import { useGetGenerQuery } from "../../redux/api/ganer-api";

const About = () => {
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();
  const [selectedGener, setSelectedGener] = useState(() => {
    const genresFromParams = searchParams.get("gener");
    return genresFromParams ? genresFromParams.split("-") : [];
  });
  const [page, setPage] = useState(() => {
    const pageFromParams = searchParams.get("page");
    return pageFromParams ? parseInt(pageFromParams, 10) : 1;
  });

  const { data: geners } = useGetGenerQuery();

  useEffect(() => {
    const genresFromParams = searchParams.get("gener");
    setSelectedGener(genresFromParams ? genresFromParams.split("-") : []);
  }, [searchParams]);

  useEffect(() => {
    setSearchParams({
      gener: selectedGener.join("-"),
      page: page,
    });
  }, [selectedGener, page]);

  const { data } = useGetMovieDiscoverQuery({
    with_genres: selectedGener.join(","),
    page,
  });

  const handelChangeGener = (id) => {
    setSelectedGener((prev) =>
      prev.includes(String(id))
        ? prev.filter((i) => i !== String(id))
        : [...prev, String(id)]
    );
  };

  const handlePageChange = (event, value) => {
    setPage(value);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="container">
      <div className="flex flex-wrap gap-3 items-center justify-start p-10">
        {geners?.genres?.map((gener) => (
          <div key={gener.id} className="flex justify-center items-center">
            <button
              onClick={() => handelChangeGener(gener.id)}
              className={`border w-[160px] py-3 rounded-full mb-3 text-sm font-semibold transition-all duration-300 ease-in-out ${
                selectedGener.includes(String(gener.id))
                  ? "bg-colorsMain text-white dark:bg-colorsMain dark:text-white shadow-xl"
                  : "bg-gray-200 text-black dark:bg-gray-700 dark:text-white dark:border-gray-600 border-2"
              }`}
            >
              {gener.name}
            </button>
          </div>
        ))}
      </div>

      <div className="flex flex-wrap justify-between gap-6 mb-12">
        {data?.results?.map((item) => (
          <div className="w-[260px] mb-12" key={item.id}>
            <img
              onClick={() => navigate(`/movie/${item.id}`)}
              className="w-[260px] h-[380px] rounded-3xl cursor-pointer transition-all duration-300 hover:scale-105"
              src={`${import.meta.env.VITE_IMAGE_URL}${item.poster_path}`}
              alt=""
            />
            <div className="flex items-center justify-between mt-3 mb-5">
              <h2 className="text-xl font-semibold text-black dark:text-white transition-colors duration-300">
                {item.original_title}
              </h2>
              <p className="mr-2 rounded-full p-3 bg-gray-200 text-black dark:bg-gray-700 dark:text-white dark:border-white border-2 transition-all duration-300">
                {item.vote_average.toFixed(1)}
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
    </div>
  );
};

export default About;
