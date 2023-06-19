import React from "react";
import { Link } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";
import Button from "../../UI/ReusableComponent/Button";
import Input from "../../UI/ReusableComponent/Input";
import Label from "../../UI/ReusableComponent/Label";

const HomeAddress = () => {
  const validationSchema = Yup.object().shape({
    firstName: Yup.string().required("First name is required"),
    lastName: Yup.string().required("Last name is required"),
    address: Yup.string().required("Address is required"),
    city: Yup.string().required("City is required"),
    state: Yup.string().required("State is required"),
    zip: Yup.string().required("Zip code is required"),
  });

  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      address: "",
      city: "",
      state: "",
      zip: "",
    },
    validationSchema,
    onSubmit: (values) => {
      // Handle form submission
      console.log(values);
    },
  });

  return (
    <div className="bg-red-50 flex flex-col md:h-screen relative">
      <p className="p-4">Home Address</p>
      <div className="border-b border-gray-400"></div>

      <form className="flex flex-col" onSubmit={formik.handleSubmit}>
        <div className="px-2 py-2 md:px-10 mx-4 md:mx-7 my-2 md:py-4">
          <div className="flex mb-4">
            <div className="w-full md:w-1/3 pr-2">
              <Label
                className="block mb-2 text-sm font-semibold"
                htmlFor="firstName"
              >
                First Name
              </Label>
              <Input
                className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-gray-500"
                type="text"
                id="firstName"
                name="firstName"
                placeholder="Enter first name"
                value={formik.values.firstName}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              {formik.touched.firstName && formik.errors.firstName && (
                <div className="text-red-500">{formik.errors.firstName}</div>
              )}
            </div>
            <div className="w-full md:w-1/3 pl-2">
              <Label
                className="block mb-2 text-sm font-semibold"
                htmlFor="lastName"
              >
                Last Name
              </Label>
              <Input
                className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-gray-500"
                type="text"
                id="lastName"
                name="lastName"
                placeholder="Enter last name"
                value={formik.values.lastName}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              {formik.touched.lastName && formik.errors.lastName && (
                <div className="text-red-500">{formik.errors.lastName}</div>
              )}
            </div>
          </div>

          <div className="mb-4">
            <Label
              className="block mb-2 text-sm font-semibold"
              htmlFor="address"
            >
              Address
            </Label>
            <Input
              className="w-full md:w-[67%] px-2 py-2 border border-gray-300 rounded focus:outline-none focus:border-gray-500"
              type="text"
              id="address"
              name="address"
              placeholder="Enter address"
              value={formik.values.address}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.touched.address && formik.errors.address && (
              <div className="text-red-500">{formik.errors.address}</div>
            )}
          </div>

          <div className="flex mb-4">
            <div className="w-full md:w-1/3 pr-2">
              <Label
                className="block mb-2 text-sm font-semibold"
                htmlFor="city"
              >
                City
              </Label>
              <Input
                className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-gray-500"
                type="text"
                id="city"
                name="city"
                placeholder="Enter city"
                value={formik.values.city}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              {formik.touched.city && formik.errors.city && (
                <div className="text-red-500">{formik.errors.city}</div>
              )}
            </div>
            <div className="w-full md:w-1/6 pl-2 pr-2">
              <Label
                className="block mb-2 text-sm font-semibold"
                htmlFor="state"
              >
                State
              </Label>
              <select
                className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-gray-500 border-r"
                id="state"
                name="state"
                value={formik.values.state}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              >
                <option value="" disabled>
                  Select
                </option>
                <option value="maharashtra">Maharashtra</option>
                <option value="uttarpradesh">Uttar Pradesh</option>
              </select>
              {formik.touched.state && formik.errors.state && (
                <div className="text-red-500">{formik.errors.state}</div>
              )}
            </div>
            <div className="w-full md:w-1/6 pl-2">
              <Label className="block mb-2 text-sm font-semibold" htmlFor="zip">
                Zip Code
              </Label>
              <Input
                className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-gray-500"
                type="text"
                id="zip"
                name="zip"
                placeholder="zip code"
                value={formik.values.zip}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              {formik.touched.zip && formik.errors.zip && (
                <div className="text-red-500">{formik.errors.zip}</div>
              )}
            </div>
          </div>
        </div>
        <div className="flex justify-between  bg-white p-5 md:absolute bottom-0 left-0 right-0  w-full  ">
          <Link
            to="/profile"
            className="px-4 py-2 bg-gray-700 text-white rounded-full hover:bg-gray-600"
          >
            Back
          </Link>
          <Button
            type="submit"
            className={`px-4 py-2  text-white rounded-full  ${
              !(formik.isValid && formik.dirty) ? "bg-gray-400" : "bg-gray-700"
            }`}
            disabled={!(formik.isValid && formik.dirty)}
          >
            Save changes
          </Button>
        </div>
      </form>
    </div>
  );
};

export default HomeAddress;
