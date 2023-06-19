import React, { useState } from "react";
import { Link } from "react-router-dom";
// import { useFormik } from "formik";
// import { DogProfileSchema } from "../../schema/formValidationSchema";
import TickIcon from "../../UI/TickIcon";
import Button from "../../UI/ReusableComponent/Button";

import Step1 from "./steps/Step1";
import Step2 from "./steps/Step2";
import Step3 from "./steps/Step3";
import Step4 from "./steps/Step4";
import Step5 from "./steps/Step5";
import Step6 from "./steps/Step6";
// const initialValues = {
//   firstName: "",
//   lastName: "",
//   phoneNumber: "",
//   landlineNumber: "",
//   label: "",
//   city: "",
//   zipcode: "",
//   dropdownField: "",
//   habits: "",
//   description: "",
//   checkboxes: [],
// };
// const onSubmit = (values) => {
//   console.log(values);
// };

const StepperSignup = ({ handleBacktoSignup }) => {
  // const formik = useFormik({
  //   initialValues,
  //   onSubmit,
  //   validationSchema: DogProfileSchema,
  // });
  // const step1 = () => {
  //   return (
  //     <>
  //       <div className="p-[18px] md:p-0">
  //         <div class="md:py-4 md:px-24 md:mt-10  ">
  //           <h2 class="w-full text-2xl md:text-3xl md:w-1/2 font-bold tracking-wide">
  //             Hello Please! tell us a little bit about yourself
  //           </h2>
  //         </div>
  //         <div class="mt-4  flex md:px-24 md:py-10 ">
  //           <form class="w-full max-w-lg" onSubmit={formik.handleSubmit}>
  //             <div class="flex flex-wrap  -mx-3 md:mb-6">
  //               <div class="w-full md:w-1/2 px-3  md:mb-0">
  //                 <Label
  //                   htmlFor="firstName"
  //                   className="block  tracking-wide text-gray-700 text-xs font-bold mb-2"
  //                 >
  //                   First Name
  //                 </Label>
  //                 <Input
  //                   name="firstName"
  //                   type="text"
  //                   onChange={formik.handleChange}
  //                   onBlur={formik.handleBlur}
  //                   value={formik.values.firstName}
  //                   placeholder="Mukesh"
  //                   className={`appearance-none block w-full  border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 ${
  //                     formik.errors.firstName && formik.touched.firstName
  //                       ? "border-red-600"
  //                       : "border-gray-300"
  //                   }  `}
  //                 />
  //                 {formik.touched.firstName && formik.errors.firstName ? (
  //                   <div class="text-red-500 mt-3 mb-3  text-sm ">
  //                     {formik.errors.firstName}
  //                   </div>
  //                 ) : null}
  //               </div>
  //               <div class="w-full md:w-1/2 px-3">
  //                 <Label
  //                   htmlFor="lastName"
  //                   className="block  tracking-wide text-gray-700 text-xs font-bold mb-2"
  //                 >
  //                   Last Name
  //                 </Label>
  //                 <Input
  //                   name="lastName"
  //                   type="text"
  //                   placeholder="Maurya"
  //                   onChange={formik.handleChange}
  //                   onBlur={formik.handleBlur}
  //                   value={formik.values.lastName}
  //                   className={`appearance-none block w-full  border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 ${
  //                     formik.errors.lastName && formik.touched.lastName
  //                       ? "border-red-600"
  //                       : "border-gray-300"
  //                   }  `}
  //                 />

  //                 {formik.touched.lastName && formik.errors.lastName ? (
  //                   <div class="text-red-500 mt-3  mb-3 text-sm ">
  //                     {formik.errors.lastName}
  //                   </div>
  //                 ) : null}
  //               </div>
  //               <div class="w-full md:w-1/2 px-3">
  //                 <Label
  //                   htmlFor="phoneNumber"
  //                   className="block  tracking-wide  text-xs font-bold mb-2"
  //                 >
  //                   Phone Number
  //                 </Label>
  //                 <Input
  //                   className={`appearance-none block w-full  border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 ${
  //                     formik.errors.phoneNumber && formik.touched.phoneNumber
  //                       ? "border-red-600"
  //                       : "border-gray-300"
  //                   }  `}
  //                   type="number"
  //                   placeholder="000000-000000"
  //                   min="0"
  //                   name="phoneNumber"
  //                   onChange={formik.handleChange}
  //                   onBlur={formik.handleBlur}
  //                   value={formik.values.phoneNumber}
  //                 />

  //                 {formik.touched.phoneNumber && formik.errors.phoneNumber ? (
  //                   <div class="text-red-500 mt-3 mb-3 text-sm ">
  //                     {formik.errors.phoneNumber}
  //                   </div>
  //                 ) : null}
  //               </div>
  //               <div class="w-full md:w-1/2 px-3">
  //                 <Label
  //                   className="block  tracking-wide text-xs font-bold mb-2"
  //                   htmlFor="landlineNumber"
  //                 >
  //                   LandLine
  //                 </Label>
  //                 <Input
  //                   className={`appearance-none block w-full  border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 ${
  //                     formik.errors.phoneNumber && formik.touched.phoneNumber
  //                       ? "border-red-600"
  //                       : "border-gray-300"
  //                   }  `}
  //                   type="number"
  //                   min="0"
  //                   name="landlineNumber"
  //                   placeholder="00000-00000-000"
  //                   onChange={formik.handleChange}
  //                   onBlur={formik.handleBlur}
  //                   value={formik.values.landlineNumber}
  //                 />

  //                 {formik.touched.landlineNumber &&
  //                 formik.errors.landlineNumber ? (
  //                   <div class="text-red-500 mt-3  mb-3 text-sm ">
  //                     {formik.errors.landlineNumber}
  //                   </div>
  //                 ) : null}
  //               </div>
  //             </div>
  //             <div class="flex flex-wrap -mx-3 md:mb-6">
  //               <div class="w-full px-3">
  //                 <Label
  //                   className="block  tracking-wide text-gray-700 text-xs font-bold mb-2"
  //                   htmlFor="label"
  //                 >
  //                   Label
  //                 </Label>
  //                 <Input
  //                   className={`appearance-none block w-full  border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 ${
  //                     formik.errors.label && formik.touched.label
  //                       ? "border-red-600"
  //                       : "border-gray-300"
  //                   }  `}
  //                   type="text"
  //                   name="label"
  //                   onChange={formik.handleChange}
  //                   onBlur={formik.handleBlur}
  //                   value={formik.values.label}
  //                 />

  //                 {formik.touched.label && formik.errors.label ? (
  //                   <div class="text-red-500 mt-3  mb-3 text-sm ">
  //                     {formik.errors.label}
  //                   </div>
  //                 ) : null}
  //               </div>
  //             </div>
  //             <div class="flex flex-wrap -mx-3 mb-2">
  //               <div class="w-full md:w-1/3 px-3  md:mb-0">
  //                 <Label
  //                   className="block  tracking-wide  text-xs font-bold mb-2"
  //                   htmlFor="city"
  //                 >
  //                   City
  //                 </Label>
  //                 <Input
  //                   className={`appearance-none block w-full  border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 ${
  //                     formik.errors.phoneNumber && formik.touched.phoneNumber
  //                       ? "border-red-600"
  //                       : "border-gray-300"
  //                   }  `}
  //                   type="text"
  //                   placeholder="Mumbai"
  //                   name="city"
  //                   onChange={formik.handleChange}
  //                   onBlur={formik.handleBlur}
  //                   value={formik.values.city}
  //                 />
  //                 {formik.touched.city && formik.errors.city ? (
  //                   <div class="text-red-500 mt-3  mb-3 text-sm ">
  //                     {formik.errors.city}
  //                   </div>
  //                 ) : null}
  //               </div>
  //               <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
  //                 <Label
  //                   className="block  tracking-wide  text-xs font-bold mb-2"
  //                   htmlFor="dropdownField"
  //                 >
  //                   State
  //                 </Label>
  //                 <div class="relative overflow-hidden">
  //                   <select
  //                     name="dropdownField"
  //                     className={`block appearance-none w-full border border-gray-200 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500 ${
  //                       formik.errors.dropdownField &&
  //                       formik.touched.dropdownField
  //                         ? "border-red-600"
  //                         : ""
  //                     }`}
  //                     value={formik.values.dropdownField}
  //                     onChange={formik.handleChange}
  //                     onBlur={formik.handleBlur}
  //                   >
  //                     <option value="">Select</option>
  //                     <option value="Mumbai">Mumbai</option>
  //                     <option value="Delhi">Delhi</option>
  //                     <option value="Goa">Goa</option>
  //                   </select>
  //                   {formik.errors.dropdownField &&
  //                     formik.touched.dropdownField && (
  //                       <div className="text-red-500 mb-3">
  //                         {formik.errors.dropdownField}
  //                       </div>
  //                     )}
  //                 </div>
  //               </div>
  //               <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
  //                 <Label
  //                   className="block  tracking-wide text-gray-700 text-xs font-bold mb-2"
  //                   htmlFor="zipcode"
  //                 >
  //                   Zip
  //                 </Label>
  //                 <Input
  //                   onChange={formik.handleChange}
  //                   value={formik.values.zipcode}
  //                   onBlur={formik.handleBlur}
  //                   className={`appearance-none block w-full  border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 ${
  //                     formik.errors.zipcode && formik.touched.zipcode
  //                       ? "border-red-600"
  //                       : "border-gray-300"
  //                   }  `}
  //                   min="0"
  //                   type="number"
  //                   placeholder="400081"
  //                   name="zipcode"
  //                 />
  //                 {formik.touched.zipcode && formik.errors.zipcode ? (
  //                   <div class="text-red-500 mt-3  mb-3  text-sm ">
  //                     {formik.errors.zipcode}
  //                   </div>
  //                 ) : null}
  //               </div>
  //             </div>

  //             <div className="flex justify-between absolute md:bottom-0 left-0 right-0 bg-white p-[1rem]">
  //               <Button
  //                 className="bg-gray-600 text-white px-16 py-2 rounded-full mt-4 md:mt-0 md:ml-2"
  //                 onClick={handleBack}
  //               >
  //                 Back
  //               </Button>

  //               <Button
  //                 type="submit"
  //                 className={`text-white rounded-full px-16 py-2 mt-4 md:mt-0 md:ml-2 ${
  //                   formik.isValid ? "bg-gray-300" : "bg-gray-900"
  //                 }`}
  //                 disabled={
  //                   !formik.isValid || (formik.touched && !formik.dirty)
  //                 }
  //                 onClick={handleNext}
  //               >
  //                 Nextttt
  //               </Button>
  //             </div>
  //           </form>
  //         </div>
  //       </div>
  //     </>
  //   );
  // };

  // const step2 = () => {
  //   return (
  //     <>
  //       <div className="m-5 md:m-0">
  //         <div class="md:mt-10 md:px-24 md:py-10 ">
  //           <h2 class="text-xl md:text-3xl md:w-1/2 font-bold tracking-wide ">
  //             Nice to mett you Megan Tell us all about your furry Fethery or
  //             scaley friend
  //           </h2>
  //         </div>
  //         <div class="flex flex-col mt-5 md:mt-0 md:px-24 md:py-1 ">
  //           <div class="flex flex-col md:flex-row mb-4 bg-white md:w-10/13 ">
  //             {DOG_DATA.map((item, index) => {
  //               return (
  //                 <>
  //                   <div
  //                     className={`${
  //                       index === 0 ? "bg-red-200" : "bg-gray-100"
  //                     } px-10 py-3 m-3 flex flex-col items-center justify-center md:flex-col md:justify-center`}
  //                     key={index}
  //                   >
  //                     <img
  //                       src={item.image}
  //                       alt="Images"
  //                       className="w-20 h-20 rounded-full mr-2"
  //                     />
  //                     <h2 className="text-center m-3">{item.name}</h2>
  //                   </div>
  //                 </>
  //               );
  //             })}
  //           </div>
  //           <p class="text-lg p-4 mb-9">
  //             It is a long established fact that a reader will be distracted by
  //             the
  //             <br />
  //             readable content of a page when looking at its layout. The point
  //             of
  //           </p>
  //         </div>

  //         <div className="flex justify-between absolute md:bottom-0 left-0 right-0 bg-white p-[1rem]">
  //           <Button
  //             className="bg-gray-600 text-white px-16 py-2 rounded-full mt-4 md:mt-0 md:ml-2"
  //             onClick={handleBack}
  //           >
  //             Back
  //           </Button>

  //           <Button
  //             type="submit"
  //             className={`text-white rounded-full px-16 py-2 mt-4 md:mt-0 md:ml-2 ${
  //               formik.isValid ? "bg-gray-300" : "bg-gray-900"
  //             }`}
  //             disabled={!formik.isValid || (formik.touched && !formik.dirty)}
  //             onClick={handleNext}
  //           >
  //             Nextttt
  //           </Button>
  //         </div>
  //       </div>
  //     </>
  //   );
  // };

  // const step3 = () => {
  //   return (
  //     <>
  //       <div class="md:ml-7 mt-6 p-[0.5rem] md:p-5">
  //         <h2 class="text-2xl md:text-3xl  font-bold tracking-wide px-4 md:w-1/2 ">
  //           Ya we love dogs ! give us some info about your pup
  //         </h2>
  //       </div>
  //       <div class="flex justify-center items-center mx-4 md:mx-8 p-[0.5rem] md:p-10">
  //         <form class="w-full">
  //           <div class="flex flex-wrap -mx-3 mb-6">
  //             <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
  //               <Label className="block  tracking-wide text-gray-700 text-xs font-bold mb-2">
  //                 Name
  //               </Label>
  //               <Input
  //                 className="appearance-none block w-full  rounded py-3 px-4 mb-3 text-red-400 leading-tight focus:outline-none focus:bg-white"
  //                 type="text"
  //                 defaultValue="Pet Name"
  //                 placeholder="John Doe"
  //               />
  //             </div>
  //             <div class="w-full md:w-1/2 mb-3 flex">
  //               <div className="bg-white rounded-full w-9 h-9 mt-6 ml-4 text-center flex">
  //                 <i
  //                   class="fa fa-camera-retro mt-2 mx-auto text-black"
  //                   role="file"
  //                   typeof="file"
  //                 ></i>
  //               </div>
  //               <Label className="block  tracking-wide mt-7 ml-4  text-gray-700 text-xs font-bold mb-2">
  //                 Upload Image
  //               </Label>
  //             </div>
  //             <div class="w-full md:w-1/2 px-3 mb-3">
  //               <Label
  //                 className="block  tracking-wide  text-xs font-bold mb-2"
  //                 htmlFor="grid-last-name"
  //               >
  //                 Breed
  //               </Label>
  //               <Input
  //                 className="appearance-none block w-full text-red-400 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
  //                 id="grid-last-name"
  //                 type="text"
  //                 defaultValue="Pets breed"
  //                 placeholder="Doe"
  //               />
  //             </div>
  //             <div class="w-full md:w-1/2 px-3">
  //               <Label
  //                 className="block  tracking-wide text-xs font-bold mb-2"
  //                 htmlFor="grid-last-name"
  //               >
  //                 BirthDay
  //               </Label>
  //               <Input
  //                 className="appearance-none block w-full text-red-400 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
  //                 type="number"
  //                 defaultValue="MM/DD/YYYY"
  //                 placeholder="MM/DD/YYYY"
  //               />
  //             </div>
  //             <div class="w-full md:w-1/2 px-3 mb-3">
  //               <Label className="block  tracking-wide text-xs font-bold mb-2 mt-3">
  //                 Gender
  //               </Label>
  //               <div class="bg-white flex justify-around ">
  //                 <div className="">
  //                   <Button className="p-2 " type="button">
  //                     Male
  //                   </Button>
  //                 </div>
  //                 <div className="border-r px-4  border-gray-400"></div>
  //                 <Button className="p-2 " type="button">
  //                   Female
  //                 </Button>
  //               </div>
  //             </div>
  //             <div class="w-full md:w-1/2 px-3 mb-3 ">
  //               <Label className="block  tracking-wide text-xs font-bold mb-2 mt-3">
  //                 Spayed or Netured
  //               </Label>
  //               <div class="bg-white flex justify-around">
  //                 <Button className="p-2" type="button">
  //                   Yes
  //                 </Button>
  //                 <div className="border-r px-4  border-gray-400"></div>
  //                 <Button className="p-2" type="button">
  //                   No
  //                 </Button>
  //               </div>
  //             </div>
  //           </div>
  //           <div class="flex flex-col md:flex-row flex-wrap -mx-3 mb-6">
  //             <div class="w-full  px-3">
  //               <Label className="block tracking-wide text-xs font-bold mb-2">
  //                 Weight
  //               </Label>
  //               <div className="bg-white">
  //                 <div className="flex flex-col md:flex-row">
  //                   <Button
  //                     className="p-2 ml-4 mb-2 md:mb-0 md:mr-2 px-2 md:px-[4rem] pl-2 md:pl-[1rem] border-r border-gray-400"
  //                     type="button"
  //                   >
  //                     10-20 pounds
  //                   </Button>
  //                   <Button
  //                     className=" bg-red-200 p-2 mb-2 md:mb-0 md:mr-2  md:px-[4rem] pl-2 md:pl-[1rem] border-r border-gray-400"
  //                     type="button"
  //                   >
  //                     20-50 pounds
  //                   </Button>
  //                   <Button
  //                     className="p-2 ml-4 mb-2 md:mb-0 md:mr-2 px-2 md:px-[4rem] pl-2 md:pl-[1rem] border-r border-gray-400"
  //                     type="button"
  //                   >
  //                     50-100 pounds
  //                   </Button>
  //                   <Button
  //                     className="p-2 ml-4 pl-2 md:pl-[1rem]"
  //                     type="button"
  //                   >
  //                     100+ pounds
  //                   </Button>
  //                 </div>
  //               </div>
  //             </div>
  //           </div>

  //           <div className="flex justify-between absolute md:bottom-0 left-0 right-0 bg-white p-[1rem]">
  //             <Button
  //               className="bg-gray-600 text-white px-16 py-2 rounded-full mt-4 md:mt-0 md:ml-2"
  //               onClick={handleBack}
  //             >
  //               Back
  //             </Button>

  //             <Button
  //               type="submit"
  //               className={`text-white rounded-full px-16 py-2 mt-4 md:mt-0 md:ml-2 ${
  //                 formik.isValid ? "bg-gray-300" : "bg-gray-900"
  //               }`}
  //               disabled={!formik.isValid || (formik.touched && !formik.dirty)}
  //               onClick={handleNext}
  //             >
  //               Next
  //             </Button>
  //           </div>
  //         </form>
  //       </div>
  //     </>
  //   );
  // };

  // const step4 = () => {
  //   return (
  //     <>
  //       <div class="mt-4 mx-4 md:mx-8 md:p-5">
  //         <h2 class="text-2xl md:text-3xl font-bold tracking-wide p-1">
  //           Thanks! now give all details about your Gingeer
  //         </h2>
  //         <div class="w-full px-3 mb-6 md:mb-0 p-3">
  //           <Label
  //             htmlFor=""
  //             className="block  tracking-wide text-gray-700 text-xs font-bold mb-2 md:mt-11"
  //           >
  //             Favourite things
  //           </Label>
  //           <div class="flex text-white">
  //             <div class="w-1/3">
  //               <Input
  //                 id="checkbox1"
  //                 type="checkboxes"
  //                 name="checkboxes"
  //                 value=""
  //                 className="w-4 h-4 bg-white border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600  "
  //               />
  //               <Label
  //                 htmlFor="checkbox1"
  //                 className="w-full py-3 ml-2 text-sm font-medium text-gray-900 "
  //               >
  //                 Checkbox 1
  //               </Label>
  //             </div>
  //             <div class="w-1/3">
  //               <Input
  //                 id="checkbox2"
  //                 type="checkbox"
  //                 value=""
  //                 className="w-4 h-4 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
  //               />
  //               <Label
  //                 htmlFor="checkbox2"
  //                 className="w-full py-3 ml-2 text-sm font-medium text-gray-900 "
  //               >
  //                 Checkbox 2
  //               </Label>
  //             </div>
  //             <div class="w-1/3">
  //               <Input
  //                 id="checkbox3"
  //                 type="checkbox"
  //                 value=""
  //                 className="w-4 h-4 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
  //               />
  //               <Label
  //                 htmlFor="checkbox3"
  //                 className="w-full py-3 ml-2 text-sm font-medium text-gray-900 "
  //               >
  //                 Checkbox 3
  //               </Label>
  //             </div>
  //           </div>
  //           <div class="flex mt-2">
  //             <div class="w-1/3">
  //               <Input
  //                 id="checkbox4"
  //                 type="checkbox"
  //                 value=""
  //                 className="w-4 h-4 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
  //               />
  //               <Label
  //                 htmlFor="checkbox4"
  //                 className="w-full py-3 ml-2 text-sm font-medium text-gray-900 "
  //               >
  //                 Checkbox 4
  //               </Label>
  //             </div>
  //             <div class="w-1/3">
  //               <Input
  //                 id="checkbox5"
  //                 type="checkbox"
  //                 value=""
  //                 className="w-4 h-4 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
  //               />
  //               <Label
  //                 htmlFor="checkbox5"
  //                 className="w-full py-3 ml-2 text-sm font-medium text-gray-900 "
  //               >
  //                 Checkbox 5
  //               </Label>
  //             </div>
  //             <div class="w-1/3">
  //               <Input
  //                 id="checkbox6"
  //                 type="checkbox"
  //                 value=""
  //                 className="w-4 h-4 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
  //               />
  //               <Label
  //                 htmlFor="checkbox6"
  //                 className="w-full py-3 ml-2 text-sm font-medium text-gray-900 "
  //               >
  //                 Checkbox 6
  //               </Label>
  //             </div>
  //           </div>
  //           <div class="flex mt-2">
  //             <div class="w-1/3">
  //               <Input
  //                 id="checkbox7"
  //                 type="checkbox"
  //                 value=""
  //                 className="w-4 h-4 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
  //               />
  //               <Label
  //                 htmlFor="checkbox7"
  //                 className="w-full py-3 ml-2 text-sm font-medium text-gray-900 "
  //               >
  //                 Checkbox 7
  //               </Label>
  //             </div>
  //             <div class="w-1/3">
  //               <Input
  //                 id="checkbox8"
  //                 type="checkbox"
  //                 value=""
  //                 className="w-4 h-4 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
  //               />
  //               <Label
  //                 htmlFor="checkbox8"
  //                 className="w-full py-3 ml-2 text-sm font-medium text-gray-900 "
  //               >
  //                 Checkbox 8
  //               </Label>
  //             </div>
  //             <div class="w-1/3">
  //               <Input
  //                 id="checkbox9"
  //                 type="checkbox"
  //                 value=""
  //                 className="w-4 h-4 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
  //               />
  //               <Label
  //                 htmlFor="checkbox9"
  //                 className="w-full py-3 ml-2 text-sm font-medium text-gray-900 "
  //               >
  //                 Checkbox 9
  //               </Label>
  //             </div>
  //           </div>
  //         </div>

  //         <div class="flex flex-wrap -mx-3 mb-6">
  //           <div class="w-full px-4 mt-4">
  //             <Label
  //               className="block  tracking-wide text-gray-700 text-xs font-bold mb-2"
  //               htmlFor="description"
  //             >
  //               Pet Description
  //             </Label>
  //             <textarea
  //               class={`appearance-none block w-full  border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 ${
  //                 formik.errors.description && formik.touched.description
  //                   ? "border-red-600"
  //                   : "border-gray-300"
  //               }  `}
  //               id="pet-description"
  //               rows="4"
  //               name="description"
  //               onChange={formik.handleChange}
  //               onBlur={formik.handleBlur}
  //               value={formik.values.description}
  //             ></textarea>
  //             {formik.touched.description && formik.errors.description ? (
  //               <div class="text-red-500 mt-3  ml-6 text-sm ">
  //                 {formik.errors.description}
  //               </div>
  //             ) : null}
  //           </div>
  //         </div>

  //         <div class="flex flex-wrap -mx-3 mb-6">
  //           <div class="w-full px-3">
  //             <Label
  //               className="block  tracking-wide text-gray-700 text-xs font-bold mb-2"
  //               htmlFor="habits"
  //             >
  //               Pet Habits
  //             </Label>
  //             <textarea
  //               class={`appearance-none block w-full  border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 ${
  //                 formik.errors.habits && formik.touched.habits
  //                   ? "border-red-600"
  //                   : "border-gray-300"
  //               }  `}
  //               rows="4"
  //               name="habits"
  //               onChange={formik.handleChange}
  //               onBlur={formik.handleBlur}
  //               value={formik.values.habits}
  //             ></textarea>

  //             {formik.touched.habits && formik.errors.habits ? (
  //               <div class="text-red-500 mt-3  ml-6 text-sm ">
  //                 {formik.errors.habits}
  //               </div>
  //             ) : null}
  //           </div>
  //         </div>

  //         <div className="flex justify-between absolute md:bottom-0 left-0 right-0 bg-white p-[1rem]">
  //           <Button
  //             className="bg-gray-600 text-white px-16 py-2 rounded-full mt-4 md:mt-0 md:ml-2"
  //             onClick={handleBack}
  //           >
  //             Back
  //           </Button>

  //           <Button
  //             type="submit"
  //             className={`text-white rounded-full px-16 py-2 mt-4 md:mt-0 md:ml-2 ${
  //               formik.isValid ? "bg-gray-300" : "bg-gray-900"
  //             }`}
  //             disabled={!formik.isValid || (formik.touched && !formik.dirty)}
  //             onClick={handleNext}
  //           >
  //             Nextttt
  //           </Button>
  //         </div>
  //       </div>
  //     </>
  //   );
  // };

  // const step5 = () => {
  //   return (
  //     <>
  //       <div className="p-3">
  //         <div class="md:mt-12  md:px-24 md:py-10 ">
  //           <h2 class="text-2xl md:text-3xl md:w-1/2 font-bold tracking-wide">
  //             Hello Please tell little about your Self
  //           </h2>
  //         </div>
  //         <div class="mt-4 flex md:px-24">
  //           <form class="w-full max-w-lg ">
  //             <div class="flex flex-wrap -mx-3 mb-6">
  //               <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
  //                 <Label
  //                   className="block  tracking-wide text-gray-700 text-xs font-bold mb-2"
  //                   htmlFor="grid-first-name"
  //                 >
  //                   First Name
  //                 </Label>
  //                 <Input
  //                   className="appearance-none block w-full  rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
  //                   id="grid-first-name"
  //                   type="text"
  //                   placeholder="Jane"
  //                 />
  //               </div>
  //               <div class="w-full md:w-1/2 px-3">
  //                 <Label
  //                   className="block  tracking-wide text-gray-700 text-xs font-bold mb-2"
  //                   htmlFor="grid-last-name"
  //                 >
  //                   Last Name
  //                 </Label>
  //                 <Input
  //                   className="appearance-none block w-full   border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
  //                   id="grid-last-name"
  //                   type="text"
  //                   placeholder="Doe"
  //                 />
  //               </div>
  //             </div>
  //             <div class="flex flex-wrap -mx-3 mb-6">
  //               <div class="w-full px-3">
  //                 <Label
  //                   className="block  tracking-wide text-gray-700 text-xs font-bold mb-2"
  //                   htmlFor="grid-password"
  //                 >
  //                   Label
  //                 </Label>
  //                 <Input
  //                   className="appearance-none block w-full  border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
  //                   type="text"
  //                 />
  //               </div>
  //             </div>
  //             <div class="flex flex-wrap -mx-3 mb-2">
  //               <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
  //                 <Label
  //                   className="block  tracking-wide  text-xs font-bold mb-2"
  //                   htmlFor="grid-city"
  //                 >
  //                   City
  //                 </Label>
  //                 <Input
  //                   className="appearance-none block w-full  border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
  //                   type="text"
  //                   placeholder="Albuquerque"
  //                 />
  //               </div>
  //               <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
  //                 <Label className="block  tracking-wide  text-xs font-bold mb-2">
  //                   State
  //                 </Label>
  //                 <div class="relative">
  //                   <select class="block appearance-none w-full border border-gray-200  py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500">
  //                     <option>New Mexico</option>
  //                     <option>Missouri</option>
  //                     <option>Texas</option>
  //                   </select>
  //                   <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
  //                     <svg
  //                       class="fill-current h-4 w-4"
  //                       xmlns="http://www.w3.org/2000/svg"
  //                       viewBox="0 0 20 20"
  //                     >
  //                       <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
  //                     </svg>
  //                   </div>
  //                 </div>
  //               </div>
  //               <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
  //                 <Label className="block  tracking-wide text-gray-700 text-xs font-bold mb-2">
  //                   Zip
  //                 </Label>
  //                 <Input
  //                   className="appearance-none block w-full border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
  //                   min="0"
  //                   type="number"
  //                   placeholder="400081"
  //                 />
  //               </div>
  //             </div>

  //             <div className="flex justify-between absolute md:bottom-0 left-0 right-0 bg-white p-[1rem]">
  //               <Button
  //                 className="bg-gray-600 text-white px-16 py-2 rounded-full mt-4 md:mt-0 md:ml-2"
  //                 onClick={handleBack}
  //               >
  //                 Back
  //               </Button>

  //               <Button
  //                 type="submit"
  //                 className={`text-white rounded-full px-16 py-2 mt-4 md:mt-0 md:ml-2 ${
  //                   formik.isValid ? "bg-gray-300" : "bg-gray-900"
  //                 }`}
  //                 disabled={
  //                   !formik.isValid || (formik.touched && !formik.dirty)
  //                 }
  //                 onClick={handleNext}
  //               >
  //                 Nextttt
  //               </Button>
  //             </div>
  //           </form>
  //         </div>
  //       </div>
  //     </>
  //   );
  // };

  // const step6 = () => {
  //   return (
  //     <>
  //       <div class="text-center mx-auto flex justify-center md:mt-10">
  //         <h2 class="text-2xl md:text-3xl md:w-1/2 font-bold tracking-wide  mt-4 p-2 md:p-0">
  //           Okay Ginger all set ! We will notify you when we find a match
  //         </h2>
  //       </div>
  //       <div class="md:mt-4 mx-4 md:mx-8 md:p-5 relative ">
  //         <div class="shadow-xl my-12 pb-6  justify-center items-center overflow-hidden md:w-1/2 rounded-lg  mx-auto bg-white">
  //           <div class="  h-24 w-24 absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2  border-white rounded-full overflow-hidden border-4">
  //             <img
  //               class="object-cover object-center w-full h-full "
  //               src="https://images.unsplash.com/photo-1611003228941-98852ba62227?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YmFieSUyMGRvZ3xlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80"
  //             />
  //           </div>
  //           <div class="mt-16">
  //             <h1 class="text-lg text-center font-semibold">Ginger</h1>
  //             <p class="text-sm  text-center">Golden Retreiver</p>
  //           </div>
  //           <div class="mt-6 pt-3 flex flex-wrap justify-center mx-6">
  //             <div className="border-t border-gray-400 w-full"></div>
  //             <div class="m-2">
  //               <h2 class="py-3 px-4 text-center">Favourite things</h2>
  //               <Button className="bg-red-50 py-1 px-4 rounded-full">
  //                 Barking
  //               </Button>
  //               <Button className="bg-red-50 ml-1 py-1 px-4 rounded-full">
  //                 Sungla
  //               </Button>
  //               <Button className="bg-red-50 ml-1 py-1 px-4 rounded-full">
  //                 Dancing
  //               </Button>
  //               <Button className="bg-red-50 ml-1 py-1 px-4 mt-2 md:mt-0 rounded-full">
  //                 Giving
  //               </Button>
  //             </div>
  //             <div className=" flex ">
  //               <div class="flex justify-between border mt-8 mx-4 ">
  //                 <div class=" border-r p-3 text-center">
  //                   <i
  //                     class="fa fa-snowflake-o text-center"
  //                     aria-hidden="true"
  //                   ></i>

  //                   <p>Female</p>
  //                 </div>
  //                 <div class="border-r p-4">
  //                   <p className="text-center">8</p>
  //                   <p>Years Old</p>
  //                 </div>
  //                 <div class=" border-r p-4 text-center">
  //                   <i
  //                     class="fa fa-handshake-o text-center"
  //                     aria-hidden="true"
  //                   ></i>

  //                   <p>Spayed</p>
  //                 </div>
  //                 <div class=" p-4">
  //                   <p>50-100</p>
  //                   <p>Pounds</p>
  //                 </div>
  //               </div>
  //             </div>
  //           </div>
  //         </div>

  //         <p className="text-center text-gray-600 mb-3">
  //           Got more pets?Lucky you!{" "}
  //           <span className="text-black font-semibold">
  //             Add another pet profile
  //           </span>
  //         </p>
  //       </div>
  //     </>
  //   );
  // };

  const externalImage =
    " https://images.unsplash.com/photo-1631897276150-96234ffc0b3c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE3fHx8ZW58MHx8fHx8&w=1000&q=80";

  const [step, setStep] = useState(1);

  const handleNext = () => {
    setStep((prevStep) => prevStep + 1);
  };
  const handleBack = () => {
    setStep((prevStep) => prevStep - 1);
  };

  const renderStep = () => {
    switch (step) {
      case 1:
        //return step1();
        return (
          <Step1 handleBack={handleBacktoSignup} handleNext={handleNext} />
        );
      case 2:
        // return step2();
        return <Step2 handleBack={handleBack} handleNext={handleNext} />;
      case 3:
        // return step3();

        return <Step3 handleBack={handleBack} handleNext={handleNext} />;
      case 4:
        //return step4();
        return <Step4 handleBack={handleBack} handleNext={handleNext} />;
      // case 5:
      //   // return step5();
      //   return <Step5 handleBack={handleBack} handleNext={handleNext} />;
      case 5:
        //return step6();
        return <Step6 />;

      default:
        return null;
    }
  };

  const externalImageData = [
    "https://images.unsplash.com/photo-1631897276150-96234ffc0b3c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE3fHx8ZW58MHx8fHx8&w=1000&q=80",
    "https://www.warrenphotographic.co.uk/photography/bigs/45148-Cute-black-and-grey-merle-Daxiedoodle-puppy-white-background.jpg",
    "https://www.warrenphotographic.co.uk/photography/bigs/43202-Grey-shaggy-Cadoodle-mutt-white-background.jpg",
  ];

  return (
    <>
      <div class="flex flex-col md:flex-row h-screen bg-red-200 md:bg-gray-100 overflow-hidden overflow-y-auto">
        <div
          class="w-full md:w-[30rem] bg-cover bg-center hidden md:block relative"
          style={{
            backgroundImage: `url(${externalImage})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            padding: "1.5rem",
          }}
        >
          <div class="flex m-10">
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

          <ol class="relative px-4  text-gray-500 border-l m-3 border-gray-200 dark:border-gray-700 dark:text-gray-400 ml-[5rem] ">
            <li class="mb-10 ml-6">
              <span class="absolute flex items-center justify-center w-8 h-8 bg-gray-200 rounded-full -left-4 ring-4 ring-white dark:ring-gray-900 dark:bg-green-900">
                {step == 1 ? (
                  <>
                    <TickIcon />
                  </>
                ) : null}
              </span>
              <h3 class="font-medium leading-tight text-white">
                Human Profile
              </h3>
            </li>
            <li class="mb-10 ml-6">
              <span class="absolute flex items-center justify-center w-8 h-8 bg-gray-100 rounded-full -left-4 ring-4 ring-white dark:ring-gray-900 dark:bg-gray-700">
                {step == 2 ? (
                  <>
                    <TickIcon />
                  </>
                ) : (
                  <>
                    <svg
                      aria-hidden="true"
                      class="w-5 h-5 text-gray-500 dark:text-gray-400"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M10 2a1 1 0 00-1 1v1a1 1 0 002 0V3a1 1 0 00-1-1zM4 4h3a3 3 0 006 0h3a2 2 0 012 2v9a2 2 0 01-2 2H4a2 2 0 01-2-2V6a2 2 0 012-2zm2.5 7a1.5 1.5 0 100-3 1.5 1.5 0 000 3zm2.45 4a2.5 2.5 0 10-4.9 0h4.9zM12 9a1 1 0 100 2h3a1 1 0 100-2h-3zm-1 4a1 1 0 011-1h2a1 1 0 110 2h-2a1 1 0 01-1-1z"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                  </>
                )}
              </span>
              <h3 class="font-medium leading-tight text-white">Pet Basic</h3>
            </li>
            <li class="mb-10 ml-6">
              <span class="absolute flex items-center justify-center w-8 h-8 bg-gray-100 rounded-full -left-4 ring-4 ring-white dark:ring-gray-900 dark:bg-gray-700">
                {step == 3 || step == 4 ? (
                  <>
                    <TickIcon />
                  </>
                ) : (
                  <>
                    <svg
                      aria-hidden="true"
                      class="w-5 h-5 text-gray-500 dark:text-gray-400"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z"></path>
                      <path
                        fill-rule="evenodd"
                        d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                  </>
                )}
              </span>
              <h3 class="font-medium leading-tight text-white">Pet Details</h3>
            </li>
            <li class="ml-6 mb-6">
              <span class="absolute flex items-center justify-center w-8 h-8 bg-gray-100 rounded-full -left-4 ring-4 ring-white dark:ring-gray-900 dark:bg-gray-700">
                {step == 5 ? (
                  <>
                    <TickIcon />
                  </>
                ) : (
                  <>
                    <svg
                      aria-hidden="true"
                      class="w-5 h-5 text-gray-500 dark:text-gray-400"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z"></path>
                      <path
                        fill-rule="evenodd"
                        d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm9.707 5.707a1 1 0 00-1.414-1.414L9 12.586l-1.293-1.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                  </>
                )}
              </span>
              <h3 class="font-medium leading-tight text-white">Confirm</h3>
            </li>
          </ol>
          <Link
            to="/"
            class="text-white  font-semibold fixed bottom-0 text-sm ml-[5rem] mb-5 "
          >
            Save and Exit
          </Link>
        </div>

        {/**Stepper for mobile */}
        <div className="block md:hidden lg:hidden">
          <div class="m-3 flex items-center justify-between">
            <Link to="/" className="flex justify-between">
              <img
                src="https://t3.ftcdn.net/jpg/02/52/84/92/360_F_252849218_Acdc6N696mDekuQvrCmqlFDMx4UYYF2Y.jpg"
                alt="Logo"
                class="h-9 w-9 rounded-full"
              />
              <h1 class="ml-[10rem] p-1 text-2xl font-bold tracking-normal text-black">
                PAWTASTIC
              </h1>
            </Link>
          </div>

          <div class="flex items-center  mt-[2rem] ">
            <ol class="flex space-x-8 ml-4 mb-5 border-t m-3 relative border-gray-500">
              <li className="">
                <span class="flex absolute left-0 items-center justify-center w-8 h-8 bg-gray-200 rounded-full ring-4 ring-white -top-4 dark:ring-gray-900 dark:bg-green-900">
                  {step == 1 ? (
                    <>
                      <TickIcon />
                    </>
                  ) : null}
                </span>
                <h3 class="font-medium leading-tight mt-5 text-black">
                  Human Profile
                </h3>
              </li>
              <li>
                <span class="flex absolute -top-4 items-center justify-center w-8 h-8 bg-gray-100 rounded-full ring-4 ring-white dark:ring-gray-900 dark:bg-gray-700 ">
                  <div className="border-l-2 border-gray-300"></div>
                  {step == 2 ? (
                    <>
                      <TickIcon />
                    </>
                  ) : (
                    <>
                      <svg
                        aria-hidden="true"
                        class="w-5 h-5 text-gray-500 dark:text-gray-400"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M10 2a1 1 0 00-1 1v1a1 1 0 002 0V3a1 1 0 00-1-1zM4 4h3a3 3 0 006 0h3a2 2 0 012 2v9a2 2 0 01-2 2H4a2 2 0 01-2-2V6a2 2 0 012-2zm2.5 7a1.5 1.5 0 100-3 1.5 1.5 0 000 3zm2.45 4a2.5 2.5 0 10-4.9 0h4.9zM12 9a1 1 0 100 2h3a1 1 0 100-2h-3zm-1 4a1 1 0 011-1h2a1 1 0 110 2h-2a1 1 0 01-1-1z"
                          clip-rule="evenodd"
                        ></path>
                      </svg>
                    </>
                  )}
                </span>
                <h3 class="font-medium leading-tight mt-5 text-black">
                  Pet Basic
                </h3>
              </li>
              <li>
                <div class="border-l-2 border-gray-300"></div>{" "}
                {/* Add the border line */}
                <span class="flex absolute -top-4  items-center justify-center w-8 h-8 bg-gray-100 rounded-full ring-4 ring-white dark:ring-gray-900 dark:bg-gray-700">
                  {step == 3 || step == 4 ? (
                    <>
                      <TickIcon />
                    </>
                  ) : (
                    <>
                      <svg
                        aria-hidden="true"
                        class="w-5 h-5 text-gray-500 dark:text-gray-400"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z"></path>
                        <path
                          fill-rule="evenodd"
                          d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z"
                          clip-rule="evenodd"
                        ></path>
                      </svg>
                    </>
                  )}
                </span>
                <h3 class="font-medium leading-tight mt-5 text-black">
                  Pet Details
                </h3>
              </li>
              <li>
                <span class="flex absolute -top-4 right-0 items-center justify-center w-8 h-8 bg-gray-100 rounded-full ring-4 ring-white dark:ring-gray-900 dark:bg-gray-700">
                  {step == 5 ? (
                    <>
                      <TickIcon />
                    </>
                  ) : (
                    <>
                      <svg
                        aria-hidden="true"
                        class="w-5 h-5 text-gray-500 dark:text-gray-400"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z"></path>
                        <path
                          fill-rule="evenodd"
                          d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm9.707 5.707a1 1 0 00-1.414-1.414L9 12.586l-1.293-1.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clip-rule="evenodd"
                        ></path>
                      </svg>
                    </>
                  )}
                </span>
                <h3 class="font-medium leading-tight text-black mt-5">
                  Confirm Details
                </h3>
              </li>
            </ol>
          </div>
        </div>

        <div className="flex-1 relative bg-red-100 ">
          <div>{renderStep()}</div>
          {step == 5 && (
            <div className="flex justify-between absolute md:bottom-0 left-0 right-0 bg-white p-[1rem]">
              <Button
                className="bg-gray-600 text-white px-16 py-2 rounded-full mt-4 md:mt-0 md:ml-2"
                onClick={handleBack}
              >
                Back
              </Button>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default StepperSignup;
{
  /* {step !== 6 && (
              <>
                <Button
                  className="bg-gray-600 text-white px-16 py-2  rounded-full mt-4 md:mt-0 md:ml-2"
                  onClick={handleNext}
                >
                  Next
                </Button>
              </>
            )} */
}
