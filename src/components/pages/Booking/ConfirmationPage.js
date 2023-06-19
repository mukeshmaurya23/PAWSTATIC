import React from "react";

const ConfirmationPage = () => {
  return (
    <div className="m-[18px] mb:m-0">
      <h2 className="mb-6 sm:mb-14 ml-4 sm:ml-28 px-2 sm:px-12 mt-3 sm:mt-9 w-full sm:w-2/3 text-2xl sm:text-4xl font-semibold text-black">
        Almost done! Just a few more details to confirm your booking
      </h2>

      <div className="flex items-center  justify-center md:h-[55vh]">
        <div className="bg-white w-full sm:w-2/3 rounded-lg shadow-lg">
          <div className="flex items-center justify-between mb-2 sm:mb-4 p-2 sm:p-3 m-2 sm:m-3">
            <h2 className="text-base sm:text-lg font-bold">
              Dog Walk for Ginger
            </h2>
            <img
              src="https://images.unsplash.com/photo-1611003228941-98852ba62227?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80"
              alt="Logo"
              className="w-10 h-10 sm:w-12 sm:h-12 rounded-full"
            />
          </div>
          <hr className="border-b-2 border-gray-200 " />
          <div className="grid grid-cols-1 gap-2 sm:gap-4 bg-blue-50 px-2 sm:px-7 py-2 sm:py-4">
            <div className="flex justify-between">
              <div className="flex ml-2 items-center">
                <p className="text-xs sm:text-sm uppercase tracking-wider">
                  Service Type
                </p>
                <p className="text-xs sm:text-sm ml-2 bg-white rounded-full px-4 sm:px-6 py-1 sm:py-2">
                  Dog walk
                </p>
              </div>
              <p className="text-base sm:text-lg">$15 / walk</p>
            </div>
            <hr className="border-b border-gray-200 " />
            <div className="flex justify-between">
              <div className="flex ml-2 items-center">
                <p className="text-xs sm:text-sm uppercase tracking-wider">
                  Service Time
                </p>
                <p className="text-xs sm:text-sm ml-2 bg-white rounded-full px-4 sm:px-6 py-1 sm:py-2">
                  Mornings
                </p>
              </div>
              <p className="text-base sm:text-lg">x 2</p>
            </div>
            <hr className="border-b border-gray-200 my-1" />
            <div className="flex justify-between ">
              <div className="flex items-center">
                <p className="text-xs sm:text-sm uppercase tracking-wider ml-2">
                  Recurring
                </p>
                <p className="text-xs sm:text-sm ml-2 w-6 h-6 sm:w-8 sm:h-8 text-center rounded-full px-1 sm:px-2 py-0.5 sm:py-1 bg-white">
                  M
                </p>
                <p className="text-xs sm:text-sm ml-2 w-6 h-6 sm:w-8 sm:h-8 text-center rounded-full px-1 sm:px-2 py-0.5 sm:py-1 bg-white">
                  T
                </p>
                <p className="text-xs sm:text-sm ml-2 w-6 h-6 sm:w-8 sm:h-8 text-center rounded-full px-1 sm:px-2 py-0.5 sm:py-1 bg-white">
                  W
                </p>
                <p className="text-xs sm:text-sm ml-2 w-6 h-6 sm:w-8 sm:h-8 text-center rounded-full px-1 sm:px-2 py-0.5 sm:py-1 bg-white">
                  T
                </p>
                <p className="text-xs sm:text-sm ml-2 w-6 h-6 sm:w-8 sm:h-8 text-center rounded-full px-1 sm:px-2 py-0.5 sm:py-1 bg-white">
                  F
                </p>
              </div>
              <p className="text-base sm:text-lg">x 5</p>
            </div>
            <hr className="border-b border-gray-200 my-1" />
            <div className="flex items-center">
              <p className="text-xs sm:text-sm uppercase tracking-wider ml-2">
                Payment Type
              </p>
              <div className="flex">
                <select className="text-base sm:text-lg ml-2 p-2 sm:p-3 w-full sm:w-[25rem] border border-gray-400 ">
                  <option value="visa">Visa</option>
                  <option value="mastercard">MasterCard</option>
                  <option value="amex">Amex</option>
                </select>
              </div>
            </div>
          </div>
          <hr className="border-b-2 border-gray-200 " />
          <div className="flex items-center justify-between p-2 sm:p-3 m-2 sm:m-3">
            <p className="text-base sm:text-lg font-bold">Total $150/Week</p>
            <p className="text-xs sm:text-sm text-gray-600">
              Billed Weekly on Sunday
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConfirmationPage;
