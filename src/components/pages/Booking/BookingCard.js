import React from "react";
import { BOOKING_DUMMY_DATA } from "../../../constant";
const BookingCard = ({ handleActiveCard }) => {
  const handleNextCard = (cardID) => {
    handleActiveCard(cardID);
  };
  return (
    <>
      <div className="p-2">
        <h2 className="mb-2  md:ml-5 px-2 sm:px-12 py-3 w-full sm:w-2/3 md:mt-7 text-2xl sm:text-4xl font-semibold text-black">
          We can't wait to see your pets. How can I help you?
        </h2>
        <div className="md:ml-4 sm:ml-16 flex flex-col flex-wrap overflow-hidden pr-[1.5rem] md:px-6 sm:px-12">
          {BOOKING_DUMMY_DATA.map((item, index) => (
            <div
              key={index}
              className={`ml-2 sm:ml-10 cursor-pointer m-2 flex items-center justify-center rounded ${
                index === 0 ? "bg-red-200" : "bg-white"
              } p-3 sm:w-2/3 w-full`}
              role="button"
              onClick={() => handleNextCard(item.id)}
            >
              <div className="px-4 py-3 bg-red-100 text-center rounded-full">
                <i
                  className={`${item.icon} text-lg sm:text-xl text-center text-red-400`}
                  aria-hidden="true"
                ></i>
              </div>
              <div className="ml-2 sm:ml-4 flex flex-col flex-grow">
                <div className="flex items-center">
                  <div className="mr-3 sm:mr-5">
                    <h1 className="text-lg sm:text-xl text-black font-semibold">
                      {item.title}
                    </h1>
                    <p className="text-gray-700 w-[14rem] sm:w-[23rem]">
                      {item.text}
                    </p>
                  </div>
                  <div className="flex flex-col text-sm">
                    <p className="text-base sm:text-lg text-black font-semibold">
                      {item.price}
                    </p>
                    <p className="text-xs sm:text-sm">{item.priceText}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
          <p className="ml-2 sm:ml-7 p-3">
            Want to learn more?{" "}
            <span className="font-semibold">Read more about our services</span>
          </p>
        </div>
      </div>
    </>
  );
};

export default BookingCard;
