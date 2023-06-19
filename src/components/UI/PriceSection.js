import React from "react";
import { Link } from "react-router-dom";

const PriceSection = () => {
  return (
    <div
      id="services"
      className="section relative pt-20 pb-8 md:pt-16 md:pb-0 bg-white"
    >
      <div className=" xl:max-w-6xl mx-auto px-4">
        <header className="text-center mb-12 lg:px-20">
          <h2 className="text-4xl leading-normal mb-2 font-bold mx-auto w-full lg:w-1/2 text-black">
            Affordable options tailored to your needs
          </h2>
          <p className="text-gray-600 font-semibold text-xl mx-auto pb-2 w-10/12">
            All services we focus on markets where technology, innovation, and
            capital can unlock long-term value and drive economic growth. &amp;
            Content for your dogs.
          </p>
        </header>

        <div className="flex flex-wrap justify-center flex-col md:flex-row -mx-4 text-center">
          <div className="flex-shrink mb-5 px-4 max-w-full w-full md:w-1/2 lg:w-1/3 lg:px-6">
            <div className="py-8 px-12 bg-gray-50 border-b border-gray-100">
              <div className="flex justify-center items-center relative">
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXFAum3iQTVoArVN1ai1Z5WX4st-UaUZjytvomTcWzniBNIbc3rqDguajCpXJvbba3nkg&usqp=CAU"
                  className="h-12 w-12 rounded-full absolute bottom-2"
                />
              </div>
              <h3 className="text-lg leading-normal mb-2 font-semibold text-black">
                Dog Talk
              </h3>
              <p className="text-gray-500">
                All services we focus on markets where technology, innovation,
                and capital can unlock long-term value and drive economic
                growth.
              </p>
            </div>
            <div className="bg-gray-300 mb-3 h-20 flex justify-center items-center">
              <p className="text-center content-center">
                $15 <br /> Per 30 Minutes
              </p>
            </div>
          </div>
          <div className="flex-shrink mb-5 px-4 max-w-full w-full md:w-1/2 lg:w-1/3 lg:px-6">
            <div className="py-8 px-12 bg-gray-50 border-b border-gray-100">
              <div className="flex justify-center items-center relative">
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXFAum3iQTVoArVN1ai1Z5WX4st-UaUZjytvomTcWzniBNIbc3rqDguajCpXJvbba3nkg&usqp=CAU"
                  className="h-12 w-12 rounded-full absolute bottom-2"
                />
              </div>
              <h3 className="text-lg leading-normal mb-2 font-semibold text-black">
                Social Dogs
              </h3>
              <p className="text-gray-500">
                All services we focus on markets where technology, innovation,
                and capital can unlock long-term value and drive economic
                growth.
              </p>
            </div>
            <div className="bg-gray-300 mb-3 h-20 flex justify-center items-center">
              <p className="text-center content-center">
                $34 <br /> Per 1 Day
              </p>
            </div>
          </div>
          <div className="flex-shrink  px-4 max-w-full w-full md:w-1/2 lg:w-1/3 lg:px-6">
            <div className="py-8 px-12 bg-gray-50 border-b border-gray-100">
              <div className="flex justify-center items-center relative">
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXFAum3iQTVoArVN1ai1Z5WX4st-UaUZjytvomTcWzniBNIbc3rqDguajCpXJvbba3nkg&usqp=CAU"
                  className="h-12 w-12 rounded-full absolute bottom-2"
                />
              </div>
              <h3 className="text-lg leading-normal mb-2 font-semibold text-black">
                Dog Watch
              </h3>
              <p className="text-gray-500">
                All services we focus on markets where technology, innovation,
                and capital can unlock long-term value and drive economic
                growth.
              </p>
            </div>
            <div className="bg-gray-300 mb-3 h-20 flex justify-center items-center">
              <p className="text-center content-center">
                $34 <br /> Per 2 Days
              </p>
            </div>
          </div>
        </div>
        <div className="flex justify-center">
          <Link
            to="/booking"
            className="mt-4 lg:mb-5 md:mb-5 text-center rounded-full bg-gray-600 px-6 py-2 text-white font-semibold hover:bg-gray-700"
          >
            Schedule a Service
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PriceSection;
