import { useState } from "react";
import { DOG_DATA } from "../../../../constant";
import Button from "../../../UI/ReusableComponent/Button";
import { useSelector } from "react-redux";
const Step2 = ({ handleBack, handleNext }) => {
  const [selectedCardIndex, setSelectedCardIndex] = useState(0);
  const firstName = useSelector((store) => store.user.firstName);
  return (
    <>
      <div className="m-5 md:m-0">
        <div class="md:mt-10 md:px-24 md:py-10 ">
          <h2 class="text-xl md:text-3xl md:w-1/2 font-bold tracking-wide ">
            Nice to mett you <span className="text-red-900">{firstName}</span>{" "}
            Tell us all about your furry Fethery or scaley friend
          </h2>
        </div>
        <div class="flex flex-col mt-5 md:mt-0 md:px-24 md:py-1 ">
          <div class="flex flex-col md:flex-row w-full mb-4 px-10 bg-white ">
            {DOG_DATA.map((item, index) => {
              return (
                <div
                  className={`${
                    index === selectedCardIndex ? "bg-red-200" : "bg-gray-100"
                  } px-10 py-3 m-3 flex flex-col items-center justify-center md:flex-col md:justify-between cursor-pointer`}
                  key={index}
                  onClick={() => setSelectedCardIndex(index)}
                >
                  <img
                    src={item.image}
                    alt="Images"
                    className="w-20 h-20 rounded-full mr-2"
                  />
                  <h2 className="text-center m-3">{item.name}</h2>
                </div>
              );
            })}
          </div>
          <p class="text-lg p-4 mb-9">
            It is a long established fact that a reader will be distracted by
            the
            <br />
            readable content of a page when looking at its layout. The point of
          </p>
        </div>

        <div className="flex justify-between absolute md:bottom-0 left-0 right-0 bg-white p-[1rem]">
          <Button
            className="bg-gray-600 text-white px-16 py-2 rounded-full mt-4 md:mt-0 md:ml-2"
            onClick={handleBack}
          >
            Back
          </Button>

          <Button
            type="submit"
            className={`text-white rounded-full px-16 py-2 mt-4 md:mt-0 md:ml-2 bg-gray-700 `}
            onClick={handleNext}
          >
            Next
          </Button>
        </div>
      </div>
    </>
  );
};

export default Step2;
