import React, { useState } from "react";
import { Link } from "react-router-dom";
import StepperSignup from "./StepperSignup";
import { useFormik } from "formik";
import { signupSchema } from "../../schema/formValidationSchema";
import Button from "../../UI/ReusableComponent/Button";
import Input from "../../UI/ReusableComponent/Input";
import Label from "../../UI/ReusableComponent/Label";

const initialValues = {
  zipcode: "",
  email: "",
  password: "",
  confirmPassword: "",
  checkbox: false,
};
const onSubmit = (values) => {
  console.log(values);
};

const Signup = () => {
  const externalImageStep1 =
    "https://images.unsplash.com/photo-1631897276150-96234ffc0b3c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE3fHx8ZW58MHx8fHx8&w=1000&q=80";
  const externalImageStep2 =
    "https://hips.hearstapps.com/hmg-prod/images/portrait-of-japanese-akita-over-black-background-royalty-free-image-1657912401.jpg";

  //for validation logic

  const formik = useFormik({
    initialValues,
    onSubmit,
    validationSchema: signupSchema,
  });

  // console.log("formik error",formik.errors)
  // console.log("formik values",formik.values)
  // console.log("formik touched",formik.touched)

  const [step, setStep] = useState(1);

  const handleNext = () => {
    setStep((prevStep) => prevStep + 1);
  };

  const handleBack = () => {
    setStep((prevStep) => prevStep - 1);
  };

  const renderStep1 = () => {
    return (
      <>
        <form onSubmit={formik.handleSubmit} className="w-full ">
          <div class="mt-[8rem] mb-5 lg:mt-[20rem] md:mt-[14rem] ">
            <h2 class="text-2xl md:text-3xl font-bold tracking-wide text-center mb-4">
              First, let's make sure <br /> we serve your area
            </h2>
            <div class="flex ml-5 justify-center">
              <Input
                type="number"
                onChange={formik.handleChange}
                value={formik.values.zipcode}
                onBlur={formik.handleBlur}
                min="0"
                placeholder="Enter your ZIP code"
                name="zipcode"
                className={`px-4 py-2 border  rounded-lg mr-2 ${
                  formik.errors.zipcode && formik.touched.zipcode
                    ? "border-red-600"
                    : "border-gray-300"
                }`}
              />
            </div>
            {formik.touched.zipcode && formik.errors.zipcode ? (
              <div class="text-red-500 mt-3 text-center  text-sm ">
                {formik.errors.zipcode}
              </div>
            ) : null}
          </div>
        </form>
      </>
    );
  };

  const renderStep2 = () => {
    return (
      <>
        <form class="w-full  p-5 md:p-0" onSubmit={formik.handleSubmit}>
          <h2 class="text-2xl   md:text-3xl font-bold md:mt-10 lg:w-[30rem] lg:ml-[10rem] md:w-[30rem] md:ml-[10rem] lg:mb-4 md:mb-4">
            Good News! We care for your Dogs in your area Let's get you Create
            an account
          </h2>
          <div class="flex flex-wrap justify-center mb-6">
            <div class=" w-full mt-8 md:w-2/3">
              <Label
                htmlFor="email"
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              >
                Email ID
              </Label>
              <Input
                id="email"
                type="email"
                name="email"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.email}
                placeholder="Enter email"
                className={`appearance-none block w-full  border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 ${
                  formik.errors.email && formik.touched.email
                    ? "border-red-600"
                    : "border-gray-300"
                }  `}
              />
              {formik.touched.email && formik.errors.email ? (
                <div class="text-red-500 mt-3   text-sm ">
                  {formik.errors.email}
                </div>
              ) : null}
            </div>
          </div>
          <div class="flex flex-wrap justify-center mb-6 ">
            <div class="w-full  md:px-1 md:w-1/3  mb-6 md:mb-0 ">
              <Label
                htmlFor="password"
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              >
                Password
              </Label>
              <Input
                id="password"
                type="password"
                placeholder="***********"
                name="password"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.password}
                className={`appearance-none block w-full  border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 ${
                  formik.errors.password && formik.touched.password
                    ? "border-red-600"
                    : "border-gray-300"
                }  `}
              />
              {formik.touched.password && formik.errors.password ? (
                <div class="text-red-500 mt-3  text-sm ">
                  {formik.errors.password}
                </div>
              ) : null}
            </div>
            <div class="w-full md:w-1/3  md:mb-6 md:mb-0 md:ml-2">
              <Label
                htmlFor="confirmPassword"
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              >
                Confirm Password
              </Label>
              <Input
                id="confirm-password"
                type="password"
                placeholder="*****************"
                name="confirmPassword"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.confirmPassword}
                className={`appearance-none block w-full  border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 ${
                  formik.errors.confirmPassword &&
                  formik.touched.confirmPassword
                    ? "border-red-600"
                    : "border-gray-300"
                }  `}
              />
              {formik.touched.confirmPassword &&
              formik.errors.confirmPassword ? (
                <div class="text-red-500 text-sm ">
                  {formik.errors.confirmPassword}
                </div>
              ) : null}
            </div>
          </div>
          <div class="flex ml-0  md:ml-[10rem]">
            <Input
              type="checkbox"
              id="privacy-policy"
              className="form-checkbox"
              name="checkbox"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              checked={formik.values.checkbox}
            />
            <Label htmlFor="checkbox" className="ml-3 text-xs md:text-sm">
              I have read the privacy policy and agree to the terms and
              conditions
            </Label>
          </div>
          {formik.values.email &&
          formik.values.password &&
          formik.values.confirmPassword &&
          !formik.values.checkbox ? (
            <div className="text-red-500 md:ml-[10rem] mt-3 text-sm">
              Please accept the terms and conditions
            </div>
          ) : null}
        </form>
      </>
    );
  };

  const renderStep = () => {
    switch (step) {
      case 1:
        return renderStep1();
      case 2:
        return renderStep2();

      default:
        return null;
    }
  };

  return (
    <>
      {step !== 3 ? (
        <>
          <div class="flex flex-col ">
            <div class="flex flex-col lg:flex-row h-screen">
              {/*Aside */}
              <aside
                class="bg-gray-900  bg-cover bg-center lg:w-1/3 lg:h-[100vh] md:h-[100vh] md:overflow-hidden "
                style={{
                  backgroundImage:
                    step === 1
                      ? `url(${externalImageStep1})`
                      : `url(${externalImageStep2})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  backgroundRepeat: "no-repeat",
                }}
              >
                <div class="p-3">
                  <div class="mb-4 ml-5 md:mt-7 flex items-center">
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
                  <ul class=" ml-5 md:ml-12 md:mt-9">
                    <h2 class="text-xl font-semibold text-white">Welcome</h2>
                    <li class="mt-3 flex items-center p-2 font-semibold text-white">
                      <span class="mr-2 h-2 w-4 md:w-3 rounded-full bg-white"></span>
                      We're animal lovers simply dummy text of the printing and
                      typesetting industry.
                    </li>
                    <li class="mt-3 flex items-center p-2 font-semibold text-white">
                      <span class="mr-2 h-2 w-4 md:w-3 rounded-full bg-white"></span>
                      We're animal lovers simply dummy text of the printing and
                      typesetting industry.
                    </li>
                    <li class="mt-3 mb-6 flex items-center p-2 font-semibold text-white">
                      <span class="mr-2 h-2 w-4 md:w-3 rounded-full bg-white"></span>
                      We're animal lovers simply dummy text of the printing and
                      typesetting industry.
                    </li>
                  </ul>
                </div>
              </aside>
              <main class="flex flex-1  flex-col md:overflow-y-auto bg-red-100 relative">
                {/*Main */}
                {step !== 3 && renderStep()}

                {step === 1 && (
                  <>
                    <div class="mt-auto flex w-full items-center justify-end  bg-white p-5 md:p-3 ">
                      <Button
                        className={`text-white px-16 py-2 rounded-full  mt-4 md:mt-0 md:ml-2 ${
                          !(
                            formik.values.zipcode &&
                            /^\d{5}$/.test(formik.values.zipcode)
                          )
                            ? "bg-gray-300"
                            : "bg-gray-900"
                        }`}
                        onClick={() => handleNext()}
                        disabled={
                          !(
                            formik.values.zipcode &&
                            /^\d{5}$/.test(formik.values.zipcode)
                          )
                        }
                      >
                        Next
                      </Button>
                    </div>
                  </>
                )}

                {step == 2 && (
                  <>
                    <div class="mt-auto flex w-full justify-between items-center  bg-white  ">
                      <div class=" px-3 flex ">
                        <div class=" mt-3 md:ml-4">
                          <span class="text-gray-700 text-xs md:text-sm mr-2">
                            Already a member?
                          </span>
                          <Link
                            to="/login"
                            className="font-semibold text-black"
                          >
                            Login
                          </Link>
                        </div>
                      </div>
                      <div class=" py-6 px-3 flex justify-end ">
                        <Button
                          className={`text-white rounded-full px-16 py-2 mt-4 md:mt-0 md:ml-2 ${
                            !formik.isValid ? "bg-gray-300" : "bg-gray-900"
                          }`}
                          disabled={!formik.isValid}
                          onClick={handleNext}
                        >
                          Next
                        </Button>
                      </div>
                    </div>
                  </>
                )}
              </main>
            </div>
          </div>
        </>
      ) : (
        <>
          <StepperSignup
            handleBacktoSignup={handleBack}
            handleNext={handleNext}
          />
        </>
      )}
    </>
  );
};

export default Signup;
