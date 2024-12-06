import React from "react";

import Swaper from "../../componets/swaper/Swaper";
import Mainswiper from "../../componets/swipermain/Mainswiper";

const Home = () => (
  <>
    <div className=" dark:bg-slate-950 dark:text-warmGray-300">
      <Swaper />
      <Mainswiper />
    </div>
  </>
);

export default Home;
