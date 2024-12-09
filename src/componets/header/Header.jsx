import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import logo from "../../assets/logotip.svg";
import { LuAirplay, LuArchive, LuGalleryHorizontal } from "react-icons/lu";
import { IoSearch } from "react-icons/io5";
import { FaSun, FaMoon } from "react-icons/fa";

const Header = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  useEffect(() => {
    const savedMode = localStorage.getItem("darkMode") === "true";
    setIsDarkMode(savedMode);
    if (savedMode) {
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("darkMode", isDarkMode);
    if (isDarkMode) {
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
    }
  }, [isDarkMode]);

  return (
    <div className="dark:bg-slate-950 dark:text-warmGray-300">
      <div className="container flex justify-between items-center pt-3 pb-3 pl-12 pr-12">
        <NavLink className={"navber__link "} to="/">
          <img src={logo} alt="" />
        </NavLink>
        <div className="flex items-center gap-14">
          <NavLink className={"navber__link text-xs"} to="/about">
            <LuAirplay className="ml-2 text-xl" />
            Афиша
          </NavLink>
          <NavLink className={"navber__link text-xs"} to="/afisha">
            <LuGalleryHorizontal className="ml-3 text-xl" />
            Сеансы
          </NavLink>
          <NavLink className={"navber__link text-xs"} to="/chipta">
            <LuArchive className="ml-2 text-xl" />
            Билеты
          </NavLink>
          <div className="text-xs">
            <IoSearch className="ml-1 text-xl" />
            Поиск
          </div>
        </div>
        <div className="flex gap-5">
          <button
            className={`p-4 rounded-full transition-all duration-300 ease-in-out ${
              isDarkMode ? "bg-gray-800 text-white" : "bg-gray-200 text-black"
            }`}
            onClick={toggleDarkMode}
          >
            {isDarkMode ? <FaMoon /> : <FaSun />}
          </button>
          <button className="pl-9 pr-9 pt-2 pb-2 rounded-md text-slate-50 bg-colorsMain">
            Войти
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
