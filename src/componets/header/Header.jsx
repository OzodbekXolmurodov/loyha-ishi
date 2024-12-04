import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../../assets/logotip.svg";
import { LuAirplay, LuArchive, LuGalleryHorizontal } from "react-icons/lu";
import { IoSearch } from "react-icons/io5";
import { FaSun } from "react-icons/fa";

const Header = () => {
  const darkMode = () => {
    document.body.classList.toggle("dark");
  };
  return (
    <>
      <div className="container flex justify-between items-center mt-3 mb-3">
        <NavLink className={"navber__link "} to="/">
          <img src={logo} alt="" />
        </NavLink>
        <div className="flex items-center gap-14 ">
          <NavLink className={"navber__link  text-xs"} to="/about">
            <LuAirplay className="ml-2 text-xl" />
            Афиша
          </NavLink>
          <NavLink className={"navber__link text-xs"} to="/about">
            <LuGalleryHorizontal className="ml-3  text-xl" />
            Сеансы
          </NavLink>
          <NavLink className={"navber__link text-xs"} to="/about">
            <LuArchive className="ml-2  text-xl" />
            Билеты
          </NavLink>
          <div className="text-xs">
            <IoSearch className="ml-1  text-xl" />
            Поиск
          </div>
        </div>
        <div>
          <button className="p-4  rounded-3xl " onClick={darkMode}>
            <FaSun />
          </button>
          <button className="pl-9 pr-9 pt-2 pb-2 rounded-md text-slate-50 bg-colorsMain">
            Войти
          </button>
        </div>
      </div>
    </>
  );
};

export default Header;
