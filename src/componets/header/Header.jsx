import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import logo from "../../assets/logotip.svg";
import {
  LuAirplay,
  LuArchive,
  LuChevronDown,
  LuGalleryHorizontal,
} from "react-icons/lu";
import { IoSearch } from "react-icons/io5";
import { FaSun, FaMoon } from "react-icons/fa";
import { useTranslation } from "react-i18next";

const Header = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const { t, i18n } = useTranslation();

  const toggleDarkMode = () => setIsDarkMode(!isDarkMode);

  useEffect(() => {
    const savedMode = localStorage.getItem("darkMode") === "true";
    setIsDarkMode(savedMode);
    document.body.classList.toggle("dark", savedMode);
  }, []);

  useEffect(() => {
    localStorage.setItem("darkMode", isDarkMode);
    document.body.classList.toggle("dark", isDarkMode);
  }, [isDarkMode]);

  const handleLanguageChange = (event) => {
    i18n.changeLanguage(event.target.value);
  };

  return (
    <div className="dark:bg-slate-950 dark:text-warmGray-300">
      <div className="container flex justify-between items-center pt-3 pb-3 pl-12 pr-12">
        <NavLink className="navber__link" to="/">
          <img src={logo} alt="Logo" />
        </NavLink>

        <div className="flex items-center gap-12 ml-[200px]">
          <NavLink
            className="navber__link text-xs flex flex-col items-center"
            to="/about"
          >
            <LuAirplay className="text-2xl mb-1" />
            <span className="text-center">{t("header.home")}</span>
          </NavLink>

          <NavLink
            className="navber__link text-xs flex flex-col items-center"
            to="/afisha"
          >
            <LuGalleryHorizontal className="text-2xl mb-1" />
            <span className="text-center">{t("header.about")}</span>
          </NavLink>

          <NavLink
            className="navber__link text-xs flex flex-col items-center"
            to="/chipta"
          >
            <LuArchive className="text-2xl mb-1" />
            <span className="text-center">{t("header.ticket")}</span>
          </NavLink>

          <NavLink
            className="navber__link text-xs flex flex-col items-center"
            to="/sorch"
          >
            <IoSearch className="text-2xl mb-1" />
            <span className="text-center">{t("header.search")}</span>
          </NavLink>
        </div>

        <div className="flex gap-5 items-center">
          <section className="relative">
            <LuChevronDown className="absolute top-[9px] left-[63px]" />
            <select
              onChange={handleLanguageChange}
              className="block appearance-none w-full py-1 px-3 pr-5 bg-white dark:bg-gray-700 text-gray-800 dark:text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-colorsMain transition-all duration-300 ease-in-out border dark:border-gray-500 border-gray-300"
            >
              <option
                value="uz"
                className="bg-white dark:bg-gray-700 text-gray-800 dark:text-white hover:text-colorsMain"
              >
                Uzbek
              </option>
              <option
                value="eng"
                className="bg-white dark:bg-gray-700 text-gray-800 dark:text-white hover:text-colorsMain"
              >
                English
              </option>
            </select>
          </section>
          <button
            className={`p-4 rounded-full transition-all duration-300 ease-in-out ${
              isDarkMode ? "bg-gray-800 text-white" : "bg-gray-200 text-black"
            }`}
            onClick={toggleDarkMode}
          >
            {isDarkMode ? <FaMoon /> : <FaSun />}
          </button>

          <button className="pl-9 pr-9 pt-3 pb-3 rounded-md text-slate-50 bg-colorsMain">
            {t("header.access")}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
