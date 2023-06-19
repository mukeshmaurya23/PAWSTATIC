import React from "react";
import MainConatiner from "./MainConatiner";
import { Outlet } from "react-router-dom";

const Body = () => {
  return (
    <>
      <MainConatiner />
      <div>
        <Outlet />
      </div>
    </>
  );
};

export default Body;
