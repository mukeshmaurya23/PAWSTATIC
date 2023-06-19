import React, { useState } from "react";

import BookingCard from "./BookingCard";
import { BOOKING_DUMMY_DATA } from "../../../constant";
import DogWalk from "./DogWalk";

import { Link } from "react-router-dom";
import CardDetails from "./CardDetails";
import { toast } from "react-toastify";
import Button from "../../UI/ReusableComponent/Button";
const Booking = () => {
  const [activeCardId, setActiveCardId] = useState(null);
  const [showCardDetails, setShowCardDetails] = useState(false);
  const [showConfirmation, setShowConfirmation] = useState(false);

  const handleActiveCard = (cardID) => {
    setActiveCardId(cardID);
  };
  const handleNext = () => {
    if (showCardDetails) {
      setShowConfirmation(true);
    } else {
      setShowCardDetails(true);
    }
  };

  const handleBack = () => {
    if (showConfirmation) {
      setShowConfirmation(false);
      setShowCardDetails(true);
    } else {
      setShowCardDetails(false);
      setActiveCardId(null);
    }
  };
  const getActiveCardComponent = () => {
    const activeCard = BOOKING_DUMMY_DATA.find(
      (item) => item.id === activeCardId
    );
    if (activeCard) {
      switch (activeCard.id) {
        case "0":
          return <DogWalk />;
        case "1":
          return <DogWalk />;
        case "2":
          return <DogWalk />;
        default:
          return null;
      }
    }
    return null;
  };
  const handleScheduleService = () => {
    toast.success("Services Schedule SuccessFully");
  };
  const image =
    "https://images.unsplash.com/photo-1631897276150-96234ffc0b3c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE3fHx8ZW58MHx8fHx8&w=1000&q=80";
  return (
    <div class="flex flex-col ">
      <div class="flex flex-col lg:flex-row">
        {/*md:h-[100vh] */}
        <aside
          class="bg-gray-900 bg-cover bg-center lg:w-1/3 md:h-screen  overflow-hidden "
          style={{
            backgroundImage: `url(${image})`,
          }}
        >
          <div class="p-4">
            <div class="mb-4 md:ml-7 mt-6 flex items-center">
              <img
                src="https://t3.ftcdn.net/jpg/02/52/84/92/360_F_252849218_Acdc6N696mDekuQvrCmqlFDMx4UYYF2Y.jpg"
                alt="Logo"
                class="h-9 w-9 rounded-full"
              />
              <Link
                to="/"
                class="ml-2 p-1 text-2xl font-bold tracking-normal text-white"
              >
                PAWTASTIC
              </Link>
            </div>
            <ul class="ml-5 md:ml-12 md:mt-9">
              <h2 class="text-xl mt-5 font-semibold text-white">
                All Services Included
              </h2>
              <li class="mt-3 flex items-center p-2 font-semibold text-white">
                <span class="mr-2 h-2 w-4 md:w-3 rounded-full bg-white"></span>
                We're animal lovers simply dummy text of the printing and
                typesetting industry.
              </li>
              <li class="md:mt-5 flex items-center p-2 font-semibold text-white">
                <span class="mr-2 h-2 w-4 md:w-3 rounded-full bg-white"></span>
                We're animal lovers simply dummy text of the printing and
                typesetting industry.
              </li>
              <li class="md:mt-5 flex items-center p-2 font-semibold text-white">
                <span class="mr-2 h-2 w-4 md:w-3 rounded-full bg-white"></span>
                We're animal lovers simply dummy text of the printing and
                typesetting industry.
              </li>
            </ul>
          </div>
        </aside>
        <main class="flex flex-1 flex-col overflow-y-auto bg-red-100">
          {activeCardId === null ? (
            <BookingCard handleActiveCard={handleActiveCard} />
          ) : showCardDetails ? (
            <CardDetails
              activeCardId={activeCardId}
              showConfirmation={showConfirmation}
            />
          ) : (
            getActiveCardComponent()
          )}

          <div class="mt-auto flex w-full items-center justify-between bg-white p-5 ">
            <Button
              className="mx-10 rounded-full bg-gray-700 px-9 py-2 text-white"
              onClick={handleBack}
            >
              <Link to="/profile"> Back</Link>
            </Button>
            {activeCardId && (
              <Button
                className="rounded-full bg-gray-700 px-9 py-2 text-white"
                onClick={showConfirmation ? handleScheduleService : handleNext}
              >
                {showConfirmation ? "Schedule" : "Next"}
              </Button>
            )}
          </div>
        </main>
      </div>
    </div>
  );
};

export default Booking;
