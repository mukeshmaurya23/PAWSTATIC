import React, { useState } from "react";
import Button from "../../UI/ReusableComponent/Button";
import Input from "../../UI/ReusableComponent/Input";
import { useFormik } from "formik";
import * as Yup from "yup";
import Label from "../../UI/ReusableComponent/Label";
const DogWalk = () => {
  const validationSchema = Yup.object().shape({
    frequency: Yup.boolean(),
    startDate: Yup.string()
      .required("Start date is required")
      .matches(
        /^(0[1-9]|1[0-9]|2[0-9]|3[01])\/(0[1-9]|1[012])\/\d{4}$/,
        "Date must be in the format DD/MM/YYYY"
      ),

    notes: Yup.string().required("Notes are required"),
  });
  const [selectedDays, setSelectedDays] = useState([]);
  const [selectedTimes, setSelectedTimes] = useState([]);

  const [frequency, setFrequency] = useState(true);

  const toggleSelected = (day) => {
    if (selectedDays.includes(day)) {
      setSelectedDays(selectedDays.filter((d) => d !== day));
    } else {
      setSelectedDays([...selectedDays, day]);
    }
  };

  const toggleSelectedTime = (time) => {
    if (selectedTimes.includes(time)) {
      setSelectedTimes(selectedTimes.filter((t) => t !== time));
    } else {
      setSelectedTimes([...selectedTimes, time]);
    }
  };

  const toggleHandler = () => {
    setFrequency(!frequency);
  };
  const formik = useFormik({
    initialValues: {
      frequency: true,
      startDate: "",

      notes: "",
    },
    validationSchema,
    onSubmit: (values) => {
      console.log(values);
    },
  });

  return (
    <>
      <div className="p-4 sm:p-10">
        <div className="ml-4 sm:ml-16 mb-6 sm:mb-10">
          <h2 className="text-xl sm:text-3xl font-bold mb-4 sm:mb-8 w-full sm:w-[30rem]">
            Okay, We'll take Ginger for a walk. Just tell us when!
          </h2>
        </div>
        <div className="flex mb-4 flex-col sm:flex-row ml-4 sm:ml-16">
          <div className="w-full mb-4 sm:mb-0 sm:mr-4">
            <Label htmlFor="frequency" className="block mb-2">
              Frequency
            </Label>
            <div className="flex mb-2 sm:mb-4 bg-white w-full sm:w-2/3">
              <Button
                className={`${
                  frequency ? "bg-red-300" : "bg-white"
                } flex-1 py-2`}
                onClick={toggleHandler}
              >
                Recurring
              </Button>
              <Button
                className={`${
                  frequency ? "bg-white" : "bg-red-300"
                } flex-1 py-2`}
                onClick={toggleHandler}
              >
                One Time
              </Button>
            </div>
          </div>
          <div className="w-full">
            <Label htmlFor="startDate" className="block mb-2">
              Start Date
            </Label>
            <Input
              type="text"
              id="startDate"
              name="startDate"
              className="w-full p-2"
              placeholder="MM/DD/YYYY"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.startDate}
            />
            {formik.touched.startDate && formik.errors.startDate && (
              <div className="text-red-500 text-sm">
                {formik.errors.startDate}
              </div>
            )}
          </div>
        </div>
        <div className="flex mb-4 flex-col  sm:mb-4 ml-4 sm:ml-16 cursor-pointer">
          <Label className="w-full mb-2">
            Days <span className="ml-2">Select all that apply</span>
          </Label>
          <div className="flex w-full sm:w-10/12 justify-between bg-white">
            <div
              className={`border-r items-center flex-1 text-center border-gray-400 py-2 ${
                selectedDays.includes("Mon") ? "bg-red-200" : ""
              }`}
              onClick={() => toggleSelected("Mon")}
            >
              <p className="mr-2">Mon</p>
            </div>
            <div
              className={`border-r items-center flex-1 text-center border-gray-400 py-2 ${
                selectedDays.includes("Tue") ? "bg-red-200" : ""
              }`}
              onClick={() => toggleSelected("Tue")}
            >
              <p className="mr-2">Tue</p>
            </div>
            <div
              className={`border-r items-center flex-1 text-center border-gray-400 py-2 ${
                selectedDays.includes("Wed") ? "bg-red-200" : ""
              }`}
              onClick={() => toggleSelected("Wed")}
            >
              <p className="mr-2">Wed</p>
            </div>
            <div
              className={`border-r items-center flex-1 text-center border-gray-400 py-2 ${
                selectedDays.includes("Thu") ? "bg-red-200" : ""
              }`}
              onClick={() => toggleSelected("Thu")}
            >
              <p className="mr-2">Thu</p>
            </div>
            <div
              className={`border-r items-center flex-1 text-center border-gray-400 py-2 ${
                selectedDays.includes("Fri") ? "bg-red-200" : ""
              }`}
              onClick={() => toggleSelected("Fri")}
            >
              <p className="mr-2">Fri</p>
            </div>
            <div
              className={`border-r items-center flex-1 text-center border-gray-400 py-2 ${
                selectedDays.includes("Sat") ? "bg-red-200" : ""
              }`}
              onClick={() => toggleSelected("Sat")}
            >
              <p className="mr-2">Sat</p>
            </div>
            <div
              className={` items-center flex-1 text-center  py-2 ${
                selectedDays.includes("Sun") ? "bg-red-200" : ""
              }`}
              onClick={() => toggleSelected("Sun")}
            >
              <p className="mr-2">Sun</p>
            </div>
          </div>
        </div>
        <div className="flex mb-2 sm:mb-4 ml-4 sm:ml-16 flex-col cursor-pointer">
          <Label className="w-full mb-2">
            Times <span className="ml-2">Select that apply</span>
          </Label>
          <div className="flex  w-full bg-white">
            <div
              className={`border-r px-[1.4rem] md:px-[6.5rem] py-2 border-gray-400 ${
                selectedTimes.includes("Morning") ? "bg-red-200" : ""
              }`}
              onClick={() => toggleSelectedTime("Morning")}
            >
              Morning
            </div>
            <div
              className={`border-r px-[1.4rem] md:px-[6.5rem] py-2 border-gray-400  ${
                selectedTimes.includes("Afternoon") ? "bg-red-200" : ""
              }`}
              onClick={() => toggleSelectedTime("Afternoon")}
            >
              Afternoon
            </div>
            <div
              className={` px-[1.3rem] md:px-[6.6rem] py-2 ${
                selectedTimes.includes("Evening") ? "bg-red-200" : ""
              }`}
              onClick={() => toggleSelectedTime("Evening")}
            >
              Evening
            </div>
          </div>
        </div>
        <div className="mb-2 sm:mb-4 ml-4 sm:ml-16">
          <label htmlFor="notes" className="block mb-2">
            Notes for your sitter
          </label>
          <textarea
            id="notes"
            name="notes"
            rows="4"
            className="w-full  px-4 py-2"
            defaultValue="Route preference, leash location, treats given, etc."
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          ></textarea>
          {formik.touched.notes && formik.errors.notes && (
            <div className="text-red-500 text-sm">{formik.errors.notes}</div>
          )}
        </div>
      </div>
    </>
  );
};

export default DogWalk;
