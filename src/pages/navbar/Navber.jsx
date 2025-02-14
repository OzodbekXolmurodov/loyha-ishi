import React from "react";
import diyor from "../../assets/photo_2025-02-13_23-28-10.jpg";
import ozod from "../../assets/photo_2025-02-13_23-32-30.jpg";
import asil from "../../assets/photo_2025-02-13_23-32-55.jpg";
import doston from "../../assets/photo_2025-02-13_23-37-15.jpg";

const Navber = () => {
  return (
    <>
      <div className="container flex justify-center mt-10">
        <h1 className="text-[50px] font-medium dark:text-gray-400">Adminlar</h1>
      </div>
      <div className="container flex items-center justify-between">
        <div>
          <img
            className="w-[350px] h-[400px] rounded-2xl mt-10 mb-10"
            src={diyor}
            alt=""
          />
        </div>
        <img
          className="w-[350px] h-[400px] rounded-2xl mt-10 mb-10"
          src={ozod}
          alt=""
        />
        <img
          className="w-[350px] h-[400px] rounded-2xl mt-10 mb-10"
          src={asil}
          alt=""
        />
        <img
          className="w-[350px] h-[400px] rounded-2xl mt-10 mb-10"
          src={doston}
          alt=""
        />
      </div>
    </>
  );
};

export default Navber;
