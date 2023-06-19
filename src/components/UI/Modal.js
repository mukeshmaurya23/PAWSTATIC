import React from "react";

const Modal = ({ closeModal, setAllData }) => {
  console.log("I'm from modal", setAllData);

  const removeAllData = () => {
    localStorage.removeItem("paymentInfo");
    setAllData([]);
    closeModal();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div
        className="fixed inset-0 bg-gray-800 opacity-50 cursor-pointer"
        onClick={closeModal}
      ></div>
      <div className="relative bg-white rounded-lg shadow-lg">
        <div className="flex flex-col items-center p-8">
          <h3 className="text-3xl font-semibold mb-6">Remove all data?</h3>
          <div className="flex space-x-4">
            <button
              className="text-white bg-red-600 hover:bg-red-800 px-4 py-2 rounded-lg"
              onClick={removeAllData}
            >
              Yes, I'm sure
            </button>
            <button
              className="text-gray-500 bg-white hover:bg-gray-100 px-4 py-2 rounded-lg"
              onClick={closeModal}
            >
              No, cancel
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
