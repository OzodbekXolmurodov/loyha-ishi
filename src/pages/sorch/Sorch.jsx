import React, { useRef, useState, useEffect } from "react";
import { useGetMovieBySearchQuery } from "../../redux/api/movie-api";
import { useNavigate, useSearchParams } from "react-router-dom";
import { AiOutlineSearch } from "react-icons/ai";

const Sorch = () => {
  const searchValue = useRef(null);
  const [search, setSearch] = useState("");
  const [params, setParams] = useSearchParams();
  const [localData, setLocalData] = useState(null);
  const { data, error } = useGetMovieBySearchQuery(
    { query: search },
    { skip: !search }
  );
  const navigate = useNavigate();

  useEffect(() => {
    const query = params.get("query") || "";
    setSearch(query);
    if (searchValue.current) searchValue.current.value = query;
  }, []);

  const handleSubmet = (e) => {
    e.preventDefault();
    const query = searchValue.current.value.trim();
    if (query === "") {
      setSearch("");
      setParams({});
      setLocalData(null);
    } else {
      setSearch(query);
      setParams({ query });
    }
  };

  useEffect(() => {
    if (data) {
      setLocalData(data?.results);
    }
  }, [data]);

  return (
    <>
      <div className="container">
        <form
          onSubmit={handleSubmet}
          action=""
          className="relative mb-14 mt-5 "
        >
          <input
            ref={searchValue}
            type="text"
            defaultValue={search}
            placeholder="Filmni qidirish..."
            className="w-full p-3 pr-14 text-base rounded-full border-2 pl-10 dark:border-gray-700 bg-white dark:bg-gray-800 
            text-black dark:text-white transition-all "
          />
          <button
            type="submit"
            className="absolute top-1/2 right-4 transform -translate-y-1/2 text-gray-500 dark:text-gray-300 
            transition-all duration-300"
          >
            <AiOutlineSearch size={24} />
          </button>
        </form>
        {localData?.length === 0 && (
          <div className="mt-10 text-center">
            <p className="text-lg text-gray-700 dark:text-white mb-5 pt-[150px]">
              По вашему запросу ничего не найдено
            </p>
            <button
              onClick={() => navigate("/")}
              className="bg-colorsMain text-white py-3 px-8 rounded-full"
            >
              Иди домой
            </button>
          </div>
        )}

        <div className="container flex flex-wrap justify-between gap-6 mb-10">
          {localData?.map((product) => (
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
      </div>
    </>
  );
};

export default Sorch;
