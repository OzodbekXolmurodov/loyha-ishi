import React from "react";
import Header from "../../componets/header/Header";
import { Outlet } from "react-router-dom";
import Futer from "../../componets/futer/Futer";

const List = () => {
  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
      <Futer />
    </>
  );
};

export default List;
