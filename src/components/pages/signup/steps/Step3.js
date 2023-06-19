import Button from "../../../UI/ReusableComponent/Button";

import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

import { useState, useRef } from "react";
import Label from "../../../UI/ReusableComponent/Label";
const Step3 = ({ handleBack, handleNext }) => {
  const validationSchema = Yup.object().shape({
    name: Yup.string().required("Name is required"),
    breed: Yup.string().required("Breed is required"),
    birthday: Yup.string()
      .required("Birthday is required")
      .matches(
        /^(0[1-9]|1[0-9]|2[0-9]|3[01])\/(0[1-9]|1[012])\/\d{4}$/,
        "Birthday must be in the format DD/MM/YYYY"
      ),
  });
  const [selectedImage, setSelectedImage] = useState(null);
  const inputFile = useRef(null);

  const onButtonClick = () => {
    inputFile.current.click();
  };
  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setSelectedImage(file);
  };
  const [selectedGender, setSelectedGender] = useState("male");
  const [selectedSpayedNeutered, setSelectedSpayedNeutered] = useState("yes");

  const handleGenderToggle = (gender) => {
    setSelectedGender(gender);
  };
  const handleSpayedNeuteredToggle = (spayedNeutered) => {
    setSelectedSpayedNeutered(spayedNeutered);
  };
  const [selectedWeight, setSelectedWeight] = useState("10-20 pounds");
  const handleWeightToggle = (weight) => {
    setSelectedWeight(weight);
  };

  return (
    <>
      <div class="md:ml-7 mt-6 p-[0.5rem] md:p-5">
        <h2 class="text-2xl md:text-3xl  font-bold tracking-wide px-4 md:w-2/3 ">
          Ya we love dogs! Give us some info about your pup
        </h2>
      </div>
      <div class="flex justify-center items-center mx-4 md:mx-8 p-[0.5rem] md:p-10">
        <Formik
          initialValues={{
            name: "",
            breed: "",
            birthday: "",
            gender: "male",
            spayedNeutered: "yes",
          }}
          validationSchema={validationSchema}
          onSubmit={(values) => {
            console.log(values);
          }}
        >
          {(formik) => (
            <Form className="w-full">
              <div class="flex flex-wrap -mx-3 mb-6">
                <div class="w-full md:w-1/2 px-3 mb-3 md:mb-0">
                  <label className="block tracking-wide text-xs font-bold mb-2">
                    Name
                  </label>
                  <Field
                    type="text"
                    name="name"
                    className="appearance-none block w-full rounded py-3 px-4 mb-3 text-red-400 leading-tight focus:outline-none focus:bg-white"
                  />
                  <ErrorMessage
                    name="name"
                    component="div"
                    className="text-red-500 md:mb-4"
                  />
                </div>
                <div class="w-full md:w-1/2 mb-3 flex">
                  <div className="bg-white rounded-full w-9 h-9 mt-6 ml-4 text-center flex justify-center">
                    <input
                      type="file"
                      id="file"
                      ref={inputFile}
                      onChange={handleFileChange}
                      style={{ display: "none" }}
                    />
                    <div className="" onClick={onButtonClick}>
                      <i class="fa fa-camera-retro mt-2 mx-auto text-center text-black"></i>
                    </div>
                  </div>
                  <Label className="block tracking-wide mt-8 ml-4 text-gray-700 text-xs font-bold mb-0">
                    {selectedImage ? selectedImage.name : "Upload Image"}
                  </Label>
                </div>
                <div class="w-full md:w-1/2 px-3 mb-3">
                  <Label
                    className="block tracking-wide text-xs font-bold mb-2"
                    htmlFor="grid-last-name"
                  >
                    Breed
                  </Label>
                  <Field
                    type="text"
                    name="breed"
                    className="appearance-none block w-full border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  />
                  <ErrorMessage
                    name="breed"
                    component="div"
                    className="text-red-500"
                  />
                </div>
                <div class="w-full md:w-1/2 px-3">
                  <label
                    className="block tracking-wide text-xs font-bold mb-2"
                    htmlFor="grid-last-name"
                  >
                    BirthDay
                  </label>
                  <Field
                    type="text"
                    name="birthday"
                    className="appearance-none block w-full  border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  />
                  <ErrorMessage
                    name="birthday"
                    component="div"
                    className="text-red-500"
                  />
                </div>
                <div class="w-full md:w-1/2 px-3 mb-3">
                  <Label className="block tracking-wide text-xs font-bold mb-2 mt-3">
                    Gender
                  </Label>
                  <div className="bg-white flex ">
                    <Button
                      type="button"
                      className={`p-2 px-16 md:px-[6rem] ${
                        selectedGender === "male" ? "bg-red-200" : ""
                      }`}
                      onClick={() => handleGenderToggle("male")}
                    >
                      Male
                    </Button>
                    <div className="border-r border-gray-400"></div>
                    <Button
                      type="button"
                      className={`p-2 px-[4.1rem] md:px-[5.2rem] ${
                        selectedGender === "female" ? "bg-red-200" : ""
                      }`}
                      onClick={() => handleGenderToggle("female")}
                    >
                      Female
                    </Button>
                  </div>
                </div>
                <div class="w-full md:w-1/2 px-3 mb-3">
                  <Label className="block tracking-wide text-xs font-bold mb-2 mt-3">
                    Spayed or Neutered
                  </Label>
                  <div className="bg-white flex ">
                    <Button
                      type="button"
                      className={`p-2 px-[4.7rem] md:px-[6.3rem] ${
                        selectedSpayedNeutered === "yes" ? "bg-red-200" : ""
                      }`}
                      onClick={() => handleSpayedNeuteredToggle("yes")}
                    >
                      Yes
                    </Button>
                    <div className="border-r border-gray-400"></div>
                    <Button
                      type="button"
                      className={`p-2 px-[4.7rem] md:px-[6.2rem] ${
                        selectedSpayedNeutered === "no" ? "bg-red-200" : ""
                      }`}
                      onClick={() => handleSpayedNeuteredToggle("no")}
                    >
                      No
                    </Button>
                  </div>
                </div>
              </div>
              <div class="flex flex-col md:flex-row flex-wrap -mx-3 mb-6">
                <div class="w-full  px-3">
                  <Label className="block tracking-wide text-xs font-bold mb-2">
                    Weight
                  </Label>
                  <div className="bg-white">
                    <div className="flex flex-col md:flex-row">
                      <Button
                        name="weight"
                        value="10-20 pounds"
                        className={` px-16 py-2 mb-2 md:mb-0 md:border-r md:border-gray-400 ${
                          selectedWeight === "10-20 pounds" ? "bg-red-200" : ""
                        } `}
                        onClick={() => handleWeightToggle("10-20 pounds")}
                      >
                        10-20 pounds
                      </Button>
                      <Button
                        type="button"
                        name="weight"
                        value="20-50 pounds"
                        className={`  px-16 py-2 mb-2 md:mb-0   md:px-[4rem]  md:border-r md:border-gray-400 ${
                          selectedWeight === "20-50 pounds" ? "bg-red-200" : ""
                        }`}
                        onClick={() => handleWeightToggle("20-50 pounds")}
                      >
                        20-50 pounds
                      </Button>
                      <Button
                        type="button"
                        name="weight"
                        value="50-100 pounds"
                        className={` mb-2 md:mb-0 px-2 py-2 md:px-[4rem]  md:border-r md:border-gray-400 ${
                          selectedWeight === "50-100 pounds" ? "bg-red-200" : ""
                        }`}
                        onClick={() => handleWeightToggle("50-100 pounds")}
                      >
                        50-100 pounds
                      </Button>
                      <Button
                        type="button"
                        name="weight"
                        value="100+ pounds"
                        className={`px-16 py-2 ${
                          selectedWeight === "100+ pounds" ? "bg-red-200" : ""
                        }`}
                        onClick={() => handleWeightToggle("100+ pounds")}
                      >
                        100+ pounds
                      </Button>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex justify-between absolute md:bottom-0 left-0 right-0 bg-white p-[1rem]">
                <Button
                  className="bg-gray-600 text-white px-16 py-2 rounded-full mt-4 md:mt-0 md:ml-2"
                  onClick={handleBack}
                >
                  Back
                </Button>

                <Button
                  className={`text-white rounded-full px-16 py-2 mt-4 md:mt-0 md:ml-2 ${
                    !formik.dirty || !formik.isValid
                      ? "bg-gray-300"
                      : "bg-gray-900"
                  }`}
                  disabled={!(formik.isValid && formik.dirty)}
                  onClick={handleNext}
                >
                  Next
                </Button>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </>
  );
};

export default Step3;
