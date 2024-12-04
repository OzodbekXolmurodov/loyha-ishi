import React from "react";
import futerlogo from "../../assets/LOGOTYPE.svg";
import futerplay from "../../assets/image 8.svg";
import futeraple from "../../assets/image 7.svg";
import futerimg from "../../assets/file-list-2-line.png";

const Futer = () => {
  return (
    <>
      <div className="container flex justify-between items-center bg-[#11111190] p-7 rounded-xl">
        <div>
          <img className="mb-12" src={futerlogo} alt="" />
          <img className="mb-2" src={futerplay} alt="" />
          <img src={futeraple} alt="" />
        </div>
        <div>
          <p className="text-[#fff] mb-3">О нас</p>
          <div className="flex gap-1 mb-3">
            <img src={futerimg} alt="" />
            Публичная оферта
          </div>
          <div className="flex gap-1 mb-3">
            <img src={futerimg} alt="" />
            Публичная оферта
          </div>
          <div className="flex gap-1 mb-3">
            <img src={futerimg} alt="" />
            Публичная оферта
          </div>
          <div className="flex gap-1 mb-3">
            <img src={futerimg} alt="" />
            Публичная оферта
          </div>
        </div>
        <div>
          <p className="text-[#fff] mb-3">О нас</p>
          <div className="flex gap-1 mb-3">
            <img src={futerimg} alt="" />
            Публичная оферта
          </div>
          <div className="flex gap-1 mb-3">
            <img src={futerimg} alt="" />
            Публичная оферта
          </div>
          <div className="flex gap-1 mb-3">
            <img src={futerimg} alt="" />
            Публичная оферта
          </div>
          <div className="flex gap-1 mb-3">
            <img src={futerimg} alt="" />
            Публичная оферта
          </div>
        </div>
        <div>
          <p className="text-[#fff] mb-3">О нас</p>
          <div className="flex gap-1 mb-3">
            <img src={futerimg} alt="" />
            Публичная оферта
          </div>
          <div className="flex gap-1 mb-3">
            <img src={futerimg} alt="" />
            Публичная оферта
          </div>
          <div className="flex gap-1 mb-3">
            <img src={futerimg} alt="" />
            Публичная оферта
          </div>
          <div className="flex gap-1 mb-3">
            <img src={futerimg} alt="" />
            Публичная оферта
          </div>
        </div>
      </div>
    </>
  );
};

export default Futer;
