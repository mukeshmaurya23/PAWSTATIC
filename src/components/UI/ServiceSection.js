import React from "react";
import { Link } from "react-router-dom";
import Button from "./ReusableComponent/Button";

const ServiceSection = () => {
  return (
    <div className="flex flex-col lg:flex-row bg-red-200 overflow-hidden">
      <div className="w-full lg:w-1/2 lg:h-1/4">
        <img
          src="https://static.wixstatic.com/media/adb133_c733450cf64d4b5ba9687cf5996481fd~mv2.jpg/v1/fit/w_2500,h_1330,al_c/adb133_c733450cf64d4b5ba9687cf5996481fd~mv2.jpg"
          alt=""
          className="mr-2 rounded-md object-cover h-[25%] opacity-50"
        />
      </div>
      <div className="w-full lg:w-1/2">
        <div className="m-6 lg:mx-10 lg:my-12">
          <h2 className="text-2xl lg:text-4xl font-semibold mx-2 p-2  ">
            Service tailored to your needs
          </h2>
          <p className="text-sm lg:text-base mx-2 p-3">
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout.orem Ipsum
            is that it has a more-or-less normal distribution of letters, as
            opposed to using 'Content here, content here', making
          </p>
          <Link to="/signup">
            <Button className="bg-gray-700 mt-5 rounded-full w-full lg:w-1/3 p-2 mx-2 lg:mx-8 hover:bg-slate-600 focus:bg-slate-500 text-white font-semibold text-sm lg:text-base">
              Schedule visit
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ServiceSection;
