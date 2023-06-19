import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import ConfirmationPage from "./ConfirmationPage";
import Input from "../../UI/ReusableComponent/Input";

const CardDetails = ({ activeCardId, showConfirmation }) => {
  const validationSchema = Yup.object().shape({
    name: Yup.string().required("Credit card holder name is required"),
    ccnum: Yup.string().required("Credit card number is required"),
    date: Yup.string().required("Expiration month is required"),
    year: Yup.string().required("Expiration year is required"),
    CVC: Yup.string().required("CVC is required").length(3, "Invalid CVC"),
  });

  const formik = useFormik({
    initialValues: {
      name: "",
      ccnum: "",
      date: "",
      year: "",
      CVC: "",
    },
    validationSchema,
    onSubmit: (values) => {
      console.log(values);
    },
  });

  return (
    <>
      {showConfirmation ? (
        <ConfirmationPage />
      ) : (
        <>
          <div className="p-2">
            <h2 className="mb-2 md:ml-[8rem] ml-4 md:px-12 md:w-2/3 mt-7 text-2xl md:text-4xl font-semibold text-black">
              Finally how would you like to pay? for {activeCardId} dog walk?
            </h2>
            <form className="flex flex-col" onSubmit={formik.handleSubmit}>
              <div className="md:p-10 md:ml-[8rem]">
                <div className="flex flex-col mb-4">
                  <div className="w-full md:w-[66%] pr-2 p-4">
                    <label
                      className="block mb-2 text-sm font-semibold"
                      htmlFor="name"
                    >
                      Credit card holder name
                    </label>
                    <Input
                      className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-gray-500"
                      type="text"
                      id="name"
                      name="name"
                      placeholder="Mukesh Maurya"
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      value={formik.values.name}
                    />
                    {formik.touched.name && formik.errors.name && (
                      <div className="text-red-500 text-sm">
                        {formik.errors.name}
                      </div>
                    )}
                  </div>
                  <div className="w-full md:w-[66%] pr-2 p-4">
                    <label
                      className="block mb-2 text-sm font-semibold"
                      htmlFor="ccnum"
                    >
                      Credit card number
                    </label>
                    <Input
                      className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-gray-500"
                      type="text"
                      id="ccnum"
                      name="ccnum"
                      placeholder="0000-0000-0000-0000"
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      value={formik.values.ccnum}
                    />
                    {formik.touched.ccnum && formik.errors.ccnum && (
                      <div className="text-red-500 text-sm">
                        {formik.errors.ccnum}
                      </div>
                    )}
                  </div>
                </div>

                <div className="flex">
                  <div className="w-full md:w-1/6 pl-2 pr-2 ml-2">
                    <label
                      className="block mb-2 text-sm font-semibold"
                      htmlFor="date"
                    >
                      Expiration date
                    </label>
                    <select
                      className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-gray-500 border-r"
                      id="date"
                      name="date"
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      value={formik.values.date}
                    >
                      <option value="" disabled>
                        Month
                      </option>
                      <option value="01june">01 June</option>
                      <option value="02may">02 May</option>
                    </select>
                    {formik.touched.date && formik.errors.date && (
                      <div className="text-red-500 text-sm">
                        {formik.errors.date}
                      </div>
                    )}
                  </div>
                  <div className="w-full md:w-1/6 pl-2 pr-2 mt-7">
                    <select
                      className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-gray-500 border-r"
                      id="year"
                      name="year"
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      value={formik.values.year}
                    >
                      <option value="" disabled>
                        Year
                      </option>
                      <option value="2019">2019</option>
                      <option value="2020">2020</option>
                    </select>
                    {formik.touched.year && formik.errors.year && (
                      <div className="text-red-500 text-sm">
                        {formik.errors.year}
                      </div>
                    )}
                  </div>
                  <div className="w-full md:w-1/6 pl-2">
                    <label
                      className="block mb-2 text-sm font-semibold"
                      htmlFor="CVC"
                    >
                      CVC
                    </label>
                    <Input
                      className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-gray-500"
                      type="text"
                      id="CVC"
                      name="CVC"
                      placeholder="111"
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      value={formik.values.CVC}
                    />
                    {formik.touched.CVC && formik.errors.CVC && (
                      <div className="text-red-500 text-sm">
                        {formik.errors.CVC}
                      </div>
                    )}
                  </div>
                </div>
                <div className="flex px-4 mt-5 ml-2">
                  <Input
                    className="px-3 py-2 mr-4 border border-gray-300 rounded focus:outline-none focus:border-gray-500"
                    type="checkbox"
                    id="saveCard"
                    name="saveCard"
                  />
                  <label
                    className="block mb-2 mt-2 text-sm font-semibold"
                    htmlFor="zip"
                  >
                    Save this card for future payments
                  </label>
                </div>
              </div>
            </form>
          </div>
        </>
      )}
    </>
  );
};

export default CardDetails;
