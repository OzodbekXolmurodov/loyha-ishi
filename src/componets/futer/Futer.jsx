import React from "react";
import futerlogo from "../../assets/LOGOTYPE.svg";
import futerplay from "../../assets/image 8.svg";
import futeraple from "../../assets/image 7.svg";
import futerimg from "../../assets/file-list-2-line.png";
import futerimg2 from "../../assets/shining-line.png";
import futerimg4 from "../../assets/phone-line.png";
import futerimg5 from "../../assets/movie-line.png";
import futerimg6 from "../../assets/clapperboard-line.png";
import futerimg7 from "../../assets/movie-2-line.svg";
import futerimg8 from "../../assets/basketball-line.png";
import futerimg9 from "../../assets/instagram-line.png";
import futerimg10 from "../../assets/facebook-circle-line.png";
import futerimg11 from "../../assets/youtube-line.png";

import futerimg3 from "../../assets/question-line.svg";

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
          <p className="text-[#fff] mb-3 font-semibold">О нас</p>
          <div className="flex gap-1 mb-3">
            <img src={futerimg} alt="" />
            Публичная оферта
          </div>
          <div className="flex gap-1 mb-3">
            <img src={futerimg2} alt="" />
            Реклама
          </div>
          <div className="flex gap-1 mb-3">
            <img src={futerimg3} alt="" />
            F.A.Q
          </div>
          <div className="flex gap-1 mb-3">
            <img src={futerimg4} alt="" />
            Контакты
          </div>
        </div>
        <div>
          <p className="text-[#fff] mb-3 font-semibold">Категории</p>
          <div className="flex gap-1 mb-3">
            <img src={futerimg5} alt="" />
            Кино
          </div>
          <div className="flex gap-1 mb-3">
            <img src={futerimg6} alt="" />
            Театр
          </div>
          <div className="flex gap-1 mb-3">
            <img src={futerimg7} alt="" />
            Концерты
          </div>
          <div className="flex gap-1 mb-3">
            <img src={futerimg8} alt="" />
            Спорт
          </div>
        </div>
        <div>
          <p className="text-[#fff] mb-3 font-semibold">Связаться с нами</p>
          <h2 className="text-[#C61F1F] text-xl mb-[50px] ">
            +998 (95) 897-33-38
          </h2>
          <p className="text-[#fff] mb-3 font-semibold">Социальные сети</p>
          <div className="flex gap-1">
            <img src={futerimg9} alt="" />
            <img src={futerimg10} alt="" />
            <img src={futerimg11} alt="" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Futer;
