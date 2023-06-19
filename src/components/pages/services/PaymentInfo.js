import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import Modal from "../../UI/Modal";
import Button from "../../UI/ReusableComponent/Button";
import Input from "../../UI/ReusableComponent/Input";
import Label from "../../UI/ReusableComponent/Label";
import Card from "../../UI/Card";
const PaymentInfo = () => {
  const [ccName, setccName] = useState("");
  const [ccNum, setccNum] = useState("");
  const [ccExpMonth, setccExpMonth] = useState("");
  const [ccExpYear, setExpYear] = useState("");
  const [ccCvv, setccCvv] = useState("");
  const [allData, setAllData] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  console.log("all Data", allData);
  const [error, setError] = useState({
    ccName: "",
    ccNum: "",
    ccExpMonth: "",
    ccExpYear: "",
    ccCvv: "",
  });
  useEffect(() => {
    if (localStorage.getItem("paymentInfo")) {
      setAllData(JSON.parse(localStorage.getItem("paymentInfo")));
      const firstUser = JSON.parse(localStorage.getItem("paymentInfo"))[0];
      if (firstUser) {
        setccName(firstUser.ccName);
        setccNum(firstUser.ccNum);
        setccExpMonth(firstUser.ccExpMonth);
        setExpYear(firstUser.ccExpYear);
        setccCvv(firstUser.ccCvv);
      }
    }
  }, []);

  const AddData = () => {
    if (
      ccName.length === 0 ||
      ccNum.length === 0 ||
      ccExpMonth.length === 0 ||
      ccExpYear.length === 0 ||
      ccCvv.length === 0
    ) {
      return;
    }

    const newItem = {
      ccName,
      ccNum,
      ccExpMonth,
      ccExpYear,
      ccCvv,
    };
    setAllData([...allData, newItem]);

    console.log("allData", allData);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      ccName.length === 0 ||
      ccNum.length === 0 ||
      ccExpMonth.length === 0 ||
      ccExpYear.length === 0 ||
      ccCvv.length === 0
    ) {
      return;
    }
    localStorage.setItem("paymentInfo", JSON.stringify(allData));
    setccName("");
    setccNum("");
    setccExpMonth("");
    setExpYear("");
    setccCvv("");
  };
  const openModal = () => {
    setIsModalOpen(true);
  };
  const closeModal = () => {
    setIsModalOpen(false);
  };
  // const removeAllData = () => {
  //   localStorage.removeItem("paymentInfo");
  //   setAllData([]);
  // };
  const addNewCard = () => {
    setccName("");
    setccNum("");
    setccExpMonth("");
    setExpYear("");
    setccCvv("");
  };
  return (
    <>
      {/**md:h-screen  */}
      <div className="bg-red-50  flex flex-col relative">
        <p className="p-4">Payment methods</p>
        <div className="border-b border-gray-400"></div>

        <form
          className="flex flex-col overflow-hidden h-screen  "
          onSubmit={handleSubmit}
        >
          <div className="md:px-10 md:mx-7 my-2 py-2 mr-2">
            <div className="flex flex-col mb-4">
              <div className="w-full md:w-[66%] pr-2 p-4">
                <Label
                  className="block mb-2 text-sm font-semibold"
                  htmlFor="name"
                >
                  Credit card holder name
                </Label>
                <Input
                  className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-gray-500"
                  type="text"
                  id="name"
                  name="name"
                  onChange={(e) => {
                    setccName(e.target.value);
                  }}
                  value={ccName}
                  onBlur={(e) =>
                    e.target.value.length === 0 &&
                    setError({ ccName: "Name is required" })
                  }
                  placeholder="Mukesh Maurya"
                />
                {error && <p className="text-red-500">{error.ccName}</p>}
              </div>
              <div className="w-full md:w-[66%] pr-2 p-4">
                <Label
                  className="block mb-2 text-sm font-semibold"
                  htmlFor="ccnum"
                >
                  Credit card number
                </Label>
                <Input
                  className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-gray-500"
                  type="number"
                  id="ccnum"
                  name="ccnum"
                  onChange={(e) => {
                    setccNum(e.target.value);
                  }}
                  value={ccNum}
                  onBlur={(e) =>
                    e.target.value.length === 0 &&
                    setError({ ccNum: "Card number is required" })
                  }
                  placeholder="0000-0000-0000-0000"
                />
                {error && <p className="text-red-500">{error.ccNum}</p>}
              </div>
            </div>

            <div className="flex">
              <div className="w-full md:w-1/6 pl-2 pr-2 ml-2">
                <Label
                  className="block mb-2 text-sm font-semibold"
                  htmlFor="date"
                >
                  Expiration date
                </Label>
                <select
                  className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-gray-500 border-r"
                  id="date"
                  name="date"
                  onChange={(e) => {
                    setccExpMonth(e.target.value);
                  }}
                  onBlur={(e) =>
                    e.target.value.length === 0 &&
                    setError({ ccExpMonth: "Required" })
                  }
                  value={ccExpMonth}
                >
                  <option value="" disabled selected>
                    Month
                  </option>
                  <option value="01june">01 June</option>
                  <option value="02may">02 May</option>
                </select>
                {error && <p className="text-red-500">{error.ccExpMonth}</p>}
              </div>
              <div className="w-full md:w-1/6 pl-2 pr-2 mt-7">
                <select
                  className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-gray-500 border-r"
                  id="year"
                  name="year"
                  onChange={(e) => {
                    setExpYear(e.target.value);
                  }}
                  onBlur={(e) =>
                    e.target.value.length === 0 &&
                    setError({ ccExpYear: "Year Required" })
                  }
                  value={ccExpYear}
                >
                  <option value="" disabled selected>
                    Year
                  </option>
                  <option value="2019">2019</option>
                  <option value="2020">2020</option>
                </select>
                {error && <p className="text-red-500">{error.ccExpYear}</p>}
              </div>
              <div className="w-full md:w-1/6 pl-2">
                <Label
                  className="block mb-2 text-sm font-semibold"
                  htmlFor="CVC"
                >
                  CVC
                </Label>
                <Input
                  className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-gray-500"
                  type="text"
                  id="CVC"
                  name="CVC"
                  onChange={(e) => {
                    setccCvv(e.target.value);
                  }}
                  onBlur={(e) =>
                    e.target.value.length === 0 &&
                    setError({ ccCvv: "CVC Required" })
                  }
                  value={ccCvv}
                  placeholder="111"
                />
              </div>
              {error && <p className="text-red-500">{error.ccCvv}</p>}
            </div>

            <Button
              className="mt-3 ml-4 bg-gray-300 px-3 py-2 rounded"
              onClick={AddData}
              type="button"
            >
              Save
            </Button>
            <div className="px-4 py-4 flex m-2">
              <div>
                <i
                  className="fa fa-times text-center text-red-400 mr-3"
                  aria-hidden="true"
                ></i>
              </div>

              <Button onClick={openModal} className="text-red-400 mr-3">
                Delete this card
              </Button>
            </div>
          </div>
          <div className="border-b border-gray-400 w-full"></div>
          <div className="flex m-3 md:ml-[4rem]">
            <i
              className="fa fa-plus text-black ml-3 mt-2 w-6 h-6  rounded-full"
              aria-hidden="true"
            ></i>
            <Button
              onClick={addNewCard}
              className="text-black px-4 py-1 cursor-pointer"
            >
              Add new card
            </Button>
          </div>
          <div className="flex justify-center flex-wrap overflow-y-auto myClass  mx-2 ml-2 mb-4 mr-0">
            {allData.map((item, index) => {
              return (
                <>
                  <Card
                    key={index}
                    name={item.ccName}
                    number={item.ccNum}
                    expiry={item.ccExpMonth}
                    cvc={item.ccCvv}
                    year={item.ccExpYear}
                    onClick={() => {
                      setccName(item.ccName);
                      setccNum(item.ccNum);
                      setccExpMonth(item.ccExpMonth);
                      setExpYear(item.ccExpYear);
                      setccCvv(item.ccCvv);
                    }}
                  />
                  {/* <div
                    key={index}
                    className="flex flex-col border border-gray-500 m-2 px-2 py-2 mb-4 cursor-pointer"
                    onClick={() => {
                      setccName(item.ccName);
                      setccNum(item.ccNum);
                      setccExpMonth(item.ccExpMonth);
                      setExpYear(item.ccExpYear);
                      setccCvv(item.ccCvv);
                    }}
                  >
                    {item.ccName}
                  </div> */}
                </>
              );
            })}
          </div>
          <div
            className="flex mt-auto justify-between  bg-white bottom-0 left-0 right-0  p-4 "
            // style={{
            //   position: "absolute",
            //   bottom: 0,
            //   left: 0,
            //   right: 0,
            //   background: "white",
            //   padding: "1rem",
            // }}
          >
            <Link
              to="/profile/account"
              className="px-4 py-2 bg-gray-700 text-white rounded-full hover:bg-gray-600"
            >
              Back
            </Link>
            <Button
              className={`px-4 py-2 bg-gray-700 text-white rounded-full hover:bg-gray-600 ${
                !ccName || !ccNum || !ccExpMonth || !ccExpYear || !ccCvv
                  ? "bg-gray-300 cursor-not-allowed"
                  : "bg-gray-700 hover:bg-gray-600"
              }`}
              type="submit"
              disabled={
                !ccName || !ccNum || !ccExpMonth || !ccExpYear || !ccCvv
              }
            >
              Save changess
            </Button>
          </div>
        </form>
      </div>
      {isModalOpen && <Modal closeModal={closeModal} setAllData={setAllData} />}
    </>
  );
};

export default PaymentInfo;
