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
import { useTranslation } from "react-i18next";

const Futer = () => {
  const { t } = useTranslation();

  return (
    <div className="dark:bg-slate-950 dark:text-warmGray-300">
      <div className="container flex flex-wrap justify-between items-start bg-[#11111190] p-7 rounded-xl mb-5">
        <div className="mb-8">
          <img className="mb-6" src={futerlogo} alt="Logo" />
          <img className="mb-2" src={futerplay} alt="Google Play" />
          <img src={futeraple} alt="Apple Store" />
        </div>

        <div className="mb-8">
          <p className="text-white mb-4 font-semibold">{t("futer.a")}</p>
          <div className="flex items-center gap-2 mb-3">
            <img src={futerimg} alt="offer" className="w-5 h-5" />
            <span>{t("futer.b")}</span>
          </div>
          <div className="flex items-center gap-2 mb-3">
            <img src={futerimg2} alt="reklama" className="w-5 h-5" />
            <span>{t("futer.c")}</span>
          </div>
          <div className="flex items-center gap-2 mb-3">
            <img src={futerimg3} alt="faq" className="w-5 h-5" />
            <span>{t("futer.d")}</span>
          </div>
          <div className="flex items-center gap-2 mb-3">
            <img src={futerimg4} alt="contacts" className="w-5 h-5" />
            <span>{t("futer.e")}</span>
          </div>
        </div>

        <div className="mb-8">
          <p className="text-white mb-4 font-semibold">{t("futer.f")}</p>
          <div className="flex items-center gap-2 mb-3">
            <img src={futerimg5} alt="kino" className="w-5 h-5" />
            <span>{t("futer.g")}</span>
          </div>
          <div className="flex items-center gap-2 mb-3">
            <img src={futerimg6} alt="teatr" className="w-5 h-5" />
            <span>{t("futer.i")}</span>
          </div>
          <div className="flex items-center gap-2 mb-3">
            <img src={futerimg7} alt="konsert" className="w-5 h-5" />
            <span>{t("futer.j")}</span>
          </div>
          <div className="flex items-center gap-2 mb-3">
            <img src={futerimg8} alt="sport" className="w-5 h-5" />
            <span>{t("futer.h")}</span>
          </div>
        </div>

        <div className="mb-8">
          <p className="text-white mb-4 font-semibold">{t("futer.k")}</p>
          <h2 className="text-red-500 text-xl mb-5">+998 (95) 897-33-38</h2>
          <p className="text-white mb-4 font-semibold">{t("futer.l")}</p>
          <div className="flex gap-4">
            <img src={futerimg9} alt="instagram" className="w-6 h-6" />
            <img src={futerimg10} alt="facebook" className="w-6 h-6" />
            <img src={futerimg11} alt="youtube" className="w-6 h-6" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Futer;
