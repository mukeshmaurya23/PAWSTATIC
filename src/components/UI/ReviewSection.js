import React from "react";
import { Link } from "react-router-dom";

const ReviewSection = () => {
  return (
    <div className="bg-gray-900">
      <div className="max-w-screen-lg mx-auto py-8 px-4 sm:py-12 sm:px-6">
        <h2 className="text-center text-white text-4xl font-bold mb-8">
          Pets (and their humans) love us
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">
          <div className="bg-white rounded-lg shadow-md flex items-center p-4 sm:p-6">
            <img
              src="https://media.istockphoto.com/id/1477820796/photo/a-grayscale-shot-of-a-morkie-dog-looking-at-the-camera.webp?s=170667a&w=0&k=20&c=Agwb0FMbmAe1nmzrc_wRllvlKGP_zl-MKurTcX-AffA="
              alt="Card 1"
              className="w-24 h-24 rounde object-cover mr-4 sm:w-32 sm:h-32"
            />
            <div>
              <h3 className="text-xl font-semibold mb-2">Lindsay M</h3>
              <p className="text-gray-500 text-sm">
                It is a long established fact that a reader will be distracted
                by the readable content of a page when looking at its layout.
              </p>
            </div>
          </div>
          <div className="bg-white rounded-lg shadow-md flex items-center p-4 sm:p-6">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJGYsJOb2Za6IuxNTDq3Okm3yod9GNKr7kNdzdawlrSM7nEFBDwbkHxwV4sDss03oSe08&usqp=CAU"
              alt="Card 2"
              className="w-24 h-24 rounded object-cover mr-4 sm:w-32 sm:h-32"
            />
            <div>
              <h3 className="text-xl font-semibold mb-2">Andrew C</h3>
              <p className="text-gray-500 text-sm">
                It is a long established fact that a reader will be distracted
                by the readable content of a page when looking at its layout.
              </p>
            </div>
          </div>
          <div className="bg-white rounded-lg shadow-md flex items-center p-4 sm:p-6">
            <img
              src="https://images.unsplash.com/photo-1598734340320-77143ebae277?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXRodW1ibmFpbHx8NDY2MjI3MjR8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=420&q=60"
              alt="Card 3"
              className="w-24 h-24 rounded object-cover mr-4 sm:w-32 sm:h-32"
            />
            <div>
              <h3 className="text-xl font-semibold mb-2">Mukesh M</h3>
              <p className="text-gray-500 text-sm">
                It is a long established fact that a reader will be distracted
                by the readable content of a page when looking at its layout.
              </p>
            </div>
          </div>
          <div className="bg-white rounded-lg shadow-md flex items-center p-4 sm:p-6">
            <img
              src="https://images.unsplash.com/photo-1603724819619-a0858e51e762?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE3fHx8ZW58MHx8fHx8&w=1000&q=80"
              alt="Card 4"
              className="w-24 h-24 rounded object-cover mr-4 sm:w-32 sm:h-32"
            />
            <div>
              <h3 className="text-xl font-semibold mb-2">Mypcot T</h3>
              <p className="text-gray-500 text-sm">
                It is a long established fact that a reader will be distracted
                by the readable content of a page when looking at its layout.
              </p>
            </div>
          </div>
        </div>
        <div className="flex justify-center items-center mt-6 ">
          <Link
            to="profile"
            className="bg-red-100 text-center rounded-full px-6 py-2 font-semibold"
          >
            Read all reviews
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ReviewSection;
