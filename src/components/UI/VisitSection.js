import React from "react";
import { Link } from "react-router-dom";
import Button from "./ReusableComponent/Button";

const VisitSection = () => {
  return (
    <div className="flex flex-col lg:flex-row bg-white">
      <div className="w-full lg:w-1/2">
        <div className="mt-3 lg:mx-28  lg:my-12 lg:mt-[4rem]">
          <h2 className="text-2xl md:text-4xl font-semibold p-3 mx-7">
            Expert care of your furry feathery or scaley friends
          </h2>
          <p className=" text-sm p-3 mx-7">
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout.orem Ipsum
            is that it has a more-or-less normal distribution of letters, as
            opposed to using 'Content here, content here', making
          </p>
          <Link to="/signup">
            <Button className="bg-gray-700 mt-5 rounded-full w-1/2 mx-7 px-4 p-2 hover:bg-slate-600 focus:bg-slate-500 text-white font-semibold text-[17px]">
              Schedule visit
            </Button>
          </Link>
        </div>
      </div>
      <div className="w-full lg:w-1/2">
        <div className="grid grid-cols-2 gap-4 m-6 lg:mx-28 lg:my-12">
          <div className="bg-white rounded-lg shadow-md">
            <img
              src="https://images.unsplash.com/photo-1561037404-61cd46aa615b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZG9nJTIwc3R1ZGlvfGVufDB8fDB8fHww&w=1000&q=80"
              alt="Card 1"
              className="w-full h-48 object-cover rounded-t-lg opacity-70"
            />
          </div>
          <div className="bg-white rounded-lg shadow-md">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQscWEZ7g5ik45KzV3jYYzXpFtNu5sW-aP1XysS_vHrz_BPaTsRpMzAh_VdZdab9CK97a8&usqp=CAU"
              alt="Card 2"
              className="w-full h-48 object-cover rounded-t-lg opacity-70"
            />
          </div>
          <div className="bg-white rounded-lg shadow-md">
            <img
              src="https://images.unsplash.com/photo-1535930891776-0c2dfb7fda1a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8ZG9nc3xlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80"
              alt="Card 3"
              className="w-full h-48 object-cover rounded-t-lg opacity-70"
            />
          </div>
          <div className="bg-white rounded-lg shadow-md">
            <img
              src="https://media.istockphoto.com/id/482723401/photo/studious-pup.webp?b=1&s=170667a&w=0&k=20&c=C2VX0swCmT4mNm3HQAGzFRKf4fMkzPxH46DLOhZTEP4="
              alt="Card 4"
              className="w-full h-48 object-cover rounded-t-lg opacity-70"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default VisitSection;
