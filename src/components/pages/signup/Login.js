import React, { useState } from "react";
import { Link } from "react-router-dom";
import { loginSchema } from "../../schema/formValidationSchema";
import { useFormik } from "formik";
import { useDispatch, useSelector } from "react-redux";
import { userLoginHandler } from "../../store/loginSlice";
import { useNavigate } from "react-router-dom";
import Button from "../../UI/ReusableComponent/Button";
import Input from "../../UI/ReusableComponent/Input";
import Label from "../../UI/ReusableComponent/Label";
const onSubmit = () => {
  console.log("submit");
};

const initialValues = {
  email: "",
  password: "",
  checkbox: false,
};
const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const loginHandler = () => {
    dispatch(userLoginHandler());
    navigate("/");
  };

  const externalImage =
    "https://images.unsplash.com/photo-1631897276150-96234ffc0b3c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE3fHx8ZW58MHx8fHx8&w=1000&q=80";

  const formik = useFormik({
    initialValues,
    validationSchema: loginSchema,
    onSubmit,
  });
  return (
    <div class="flex flex-col md:flex-row h-screen bg-gray-100 ">
      <div
        class="w-full md:w-[30rem] bg-cover bg-center"
        style={{
          backgroundImage: `url(${externalImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div class="flex mx-5 my-6">
          <Link to="/" className="flex">
            <img
              src="https://t3.ftcdn.net/jpg/02/52/84/92/360_F_252849218_Acdc6N696mDekuQvrCmqlFDMx4UYYF2Y.jpg"
              alt="Logo"
              class="h-9 w-9 rounded-full"
            />
            <h1 class="ml-2 p-1 text-2xl font-bold tracking-normal text-white">
              PAWTASTIC
            </h1>
          </Link>
        </div>
        <ul class="ml-5 md:ml-12 md:p-5">
          <h2 class="text-white font-semibold text-3xl">Welcome</h2>
          <li class="text-white flex items-center py-2 p-2 mt-4 md:mt-8 font-semibold">
            <span class="w-4 md:w-3 h-2 bg-white rounded-full mr-2"></span>
            We're animal lovers simply dummy text of the printing and
            typesetting industry.
          </li>
          <li class="text-white flex items-center p-2 py-2 mt-2 font-semibold">
            <span class="w-4 md:w-3 h-2 bg-white rounded-full mr-2"></span>
            We're animal lovers simply dummy text of the printing and
            typesetting industry.
          </li>
          <li class="text-white mb-5 flex items-center p-2 py-2  mt-2 font-semibold">
            <span class="w-4 md:w-3 h-2 bg-white rounded-full mr-2"></span>
            We're animal lovers simply dummy text of the printing and
            typesetting industry.
          </li>
        </ul>
      </div>
      <form onSubmit={formik.onSubmit} class="flex-1  bg-red-100 relative">
        <div className="md:p-14 md:ml-10">
          <div class="ml-8 p-4">
            <h2 class="text-2xl md:text-3xl font-bold tracking-wide">
              Good News! We care for <br /> Pets in Winter Park. Let's <br />{" "}
              create your account.
            </h2>
          </div>
          <div class="md:mt-4  ml-10 md:mx-8 md:p-5">
            <div className="flex flex-col">
              <Label htmlFor="email">Email Id</Label>
              <Input
                type="email"
                placeholder="Email"
                name="email"
                className={`w-10/12 md:w-2/3 border border-gray-300 rounded p-2 mb-4 ${
                  formik.errors.email && formik.touched.email
                    ? "border-red-600"
                    : "border-gray-300"
                } `}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              {formik.touched.email && formik.errors.email ? (
                <div class="text-red-500  text-sm ">{formik.errors.email}</div>
              ) : null}
            </div>
            <div className="mt-3 flex flex-col">
              <Label htmlFor="password">Password</Label>
              <Input
                type="password"
                placeholder="Password"
                name="password"
                className={`w-10/12 md:w-2/3 border border-gray-300 rounded p-2 mb-4 ${
                  formik.errors.password && formik.touched.password
                    ? "border-red-600"
                    : "border-gray-300"
                } `}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.password}
              />
              {formik.touched.password && formik.errors.password ? (
                <div class="text-red-500  text-sm ">
                  {formik.errors.password}
                </div>
              ) : null}
            </div>
            <Label className="flex items-center mb-4 mt-6" htmlFor="checkbox">
              <Input
                type="checkbox"
                name="checkbox"
                className="mb-12"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                checked={formik.values.checkbox}
              />
              <span className="ml-2 text-xs md:text-sm mb-9">
                I have read the privacy and policy and agree to the terms and
                conditions
              </span>
            </Label>

            {formik.touched.email &&
            formik.touched.password &&
            !formik.values.checkbox ? (
              <div className="text-red-500 text-sm mb-4">
                Please accept the terms and conditions
              </div>
            ) : null}
          </div>
          <div class="mt-auto bg-white  flex justify-between absolute md:bottom-0 left-0 right-0 p-[1rem] ">
            <Link to="/signup">
              {" "}
              Not a member ? <span class="font-semibold">Signup</span>
            </Link>
            <Button
              className={`text-white rounded-full px-16 py-2  md:mt-0 md:ml-2 ${
                !(formik.isValid && formik.dirty)
                  ? "bg-gray-400 cursor-not-allowed"
                  : "bg-gray-700"
              }`}
              type="submit"
              disabled={!(formik.isValid && formik.dirty)}
              onClick={loginHandler}
            >
              Login
            </Button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Login;
