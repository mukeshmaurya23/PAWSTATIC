import { useFormik } from "formik";
import Button from "../../../UI/ReusableComponent/Button";
import { DogProfileSchema } from "../../../schema/formValidationSchema";
import Label from "../../../UI/ReusableComponent/Label";
import Input from "../../../UI/ReusableComponent/Input";
import { useDispatch } from "react-redux";
import { setUserName } from "../../../store/userSlice";
import { useState, useEffect } from "react";
const initialValues = {
  firstName: "",
  lastName: "",
  phoneNumber: "",
  landlineNumber: "",
  label: "",
  city: "",
  zipcode: "",
  dropdownField: "",
};
// const onSubmit = (values) => {
//   console.log(values);
// };
const Step1 = ({ handleBack, handleNext }) => {
  const dispatch = useDispatch();

  const [formValues, setFormValues] = useState(initialValues);
  const formik = useFormik({
    initialValues,
    onSubmit: (values) => {
      console.log(values);
      console.log(values.firstName);
      dispatch(setUserName(values.firstName));
      handleNext();
      // dispatch(setUserName(values.firstName));
    },
    validationSchema: DogProfileSchema,

    // enableReinitialize: true,
    // keepDirtyOnReinitialize: true,
  });
  useEffect(() => {
    // Set form values when component mounts or form values change
    setFormValues(formik.values);
  }, [formik.values]);

  useEffect(() => {
    // Set form values when navigating back to the component
    setFormValues(initialValues);
  }, []);
  return (
    <>
      <div className="p-[18px] md:p-0">
        <div class="md:py-4 md:px-24 md:mt-10  ">
          <h2 class="w-full text-2xl md:text-3xl md:w-1/2 font-bold tracking-wide">
            Hello Please! tell us a little bit about yourself
          </h2>
        </div>
        <div class="mt-4  flex md:px-24 md:py-10 ">
          <form class="w-full max-w-lg" onSubmit={formik.handleSubmit}>
            <div class="flex flex-wrap  -mx-3 md:mb-6">
              <div class="w-full md:w-1/2 px-3  md:mb-0">
                <Label
                  htmlFor="firstName"
                  className="block  tracking-wide text-gray-700 text-xs font-bold mb-2"
                >
                  First Name
                </Label>
                <Input
                  name="firstName"
                  type="text"
                  pattern="[A-Za-z]+"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.firstName}
                  placeholder="Mukesh"
                  className={`appearance-none block w-full  border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 ${
                    formik.errors.firstName && formik.touched.firstName
                      ? "border-red-600"
                      : "border-gray-300"
                  }  `}
                />
                {formik.touched.firstName && formik.errors.firstName ? (
                  <div class="text-red-500 mt-3 mb-3  text-sm ">
                    {formik.errors.firstName}
                  </div>
                ) : null}
              </div>
              <div class="w-full md:w-1/2 px-3">
                <Label
                  htmlFor="lastName"
                  className="block  tracking-wide text-gray-700 text-xs font-bold mb-2"
                >
                  Last Name
                </Label>
                <Input
                  name="lastName"
                  type="text"
                  placeholder="Maurya"
                  pattern="[A-Za-z]+"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.lastName}
                  className={`appearance-none block w-full  border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 ${
                    formik.errors.lastName && formik.touched.lastName
                      ? "border-red-600"
                      : "border-gray-300"
                  }  `}
                />

                {formik.touched.lastName && formik.errors.lastName ? (
                  <div class="text-red-500 mt-3  mb-3 text-sm ">
                    {formik.errors.lastName}
                  </div>
                ) : null}
              </div>
              <div class="w-full md:w-1/2 px-3">
                <Label
                  htmlFor="phoneNumber"
                  className="block  tracking-wide  text-xs font-bold mb-2"
                >
                  Phone Number
                </Label>
                <Input
                  className={`appearance-none block w-full  border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 ${
                    formik.errors.phoneNumber && formik.touched.phoneNumber
                      ? "border-red-600"
                      : "border-gray-300"
                  }  `}
                  type="number"
                  placeholder="000000-000000"
                  min="0"
                  name="phoneNumber"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.phoneNumber}
                />

                {formik.touched.phoneNumber && formik.errors.phoneNumber ? (
                  <div class="text-red-500 mt-3 mb-3 text-sm ">
                    {formik.errors.phoneNumber}
                  </div>
                ) : null}
              </div>
              <div class="w-full md:w-1/2 px-3">
                <Label
                  className="block  tracking-wide text-xs font-bold mb-2"
                  htmlFor="landlineNumber"
                >
                  LandLine
                </Label>
                <Input
                  className={`appearance-none block w-full  border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 ${
                    formik.errors.phoneNumber && formik.touched.phoneNumber
                      ? "border-red-600"
                      : "border-gray-300"
                  }  `}
                  type="number"
                  min="0"
                  name="landlineNumber"
                  placeholder="00000-00000-000"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.landlineNumber}
                />

                {formik.touched.landlineNumber &&
                formik.errors.landlineNumber ? (
                  <div class="text-red-500 mt-3  mb-3 text-sm ">
                    {formik.errors.landlineNumber}
                  </div>
                ) : null}
              </div>
            </div>
            <div class="flex flex-wrap -mx-3 md:mb-6">
              <div class="w-full px-3">
                <Label
                  className="block  tracking-wide text-gray-700 text-xs font-bold mb-2"
                  htmlFor="label"
                >
                  Label
                </Label>
                <Input
                  className={`appearance-none block w-full  border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 ${
                    formik.errors.label && formik.touched.label
                      ? "border-red-600"
                      : "border-gray-300"
                  }  `}
                  type="text"
                  pattern="[A-Za-z]+"
                  name="label"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.label}
                />

                {formik.touched.label && formik.errors.label ? (
                  <div class="text-red-500 mt-3  mb-3 text-sm ">
                    {formik.errors.label}
                  </div>
                ) : null}
              </div>
            </div>
            <div class="flex flex-wrap -mx-3 mb-2">
              <div class="w-full md:w-1/3 px-3  md:mb-0">
                <Label
                  className="block  tracking-wide  text-xs font-bold mb-2"
                  htmlFor="city"
                >
                  City
                </Label>
                <Input
                  className={`appearance-none block w-full  border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 ${
                    formik.errors.phoneNumber && formik.touched.phoneNumber
                      ? "border-red-600"
                      : "border-gray-300"
                  }  `}
                  type="text"
                  placeholder="Mumbai"
                  name="city"
                  pattern="[A-Za-z]+"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.city}
                />
                {formik.touched.city && formik.errors.city ? (
                  <div class="text-red-500 mt-3  mb-3 text-sm ">
                    {formik.errors.city}
                  </div>
                ) : null}
              </div>
              <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                <Label
                  className="block  tracking-wide  text-xs font-bold mb-2"
                  htmlFor="dropdownField"
                >
                  State
                </Label>
                <div class="relative overflow-hidden">
                  <select
                    name="dropdownField"
                    className={`block appearance-none w-full border border-gray-200 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500 ${
                      formik.errors.dropdownField &&
                      formik.touched.dropdownField
                        ? "border-red-600"
                        : ""
                    }`}
                    value={formik.values.dropdownField}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  >
                    <option value="">Select</option>
                    <option value="Mumbai">Mumbai</option>
                    <option value="Delhi">Delhi</option>
                    <option value="Goa">Goa</option>
                  </select>
                  {formik.errors.dropdownField &&
                    formik.touched.dropdownField && (
                      <div className="text-red-500 mb-3">
                        {formik.errors.dropdownField}
                      </div>
                    )}
                </div>
              </div>
              <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                <Label
                  className="block  tracking-wide text-gray-700 text-xs font-bold mb-2"
                  htmlFor="zipcode"
                >
                  Zip
                </Label>
                <Input
                  onChange={formik.handleChange}
                  value={formik.values.zipcode}
                  onBlur={formik.handleBlur}
                  className={`appearance-none block w-full  border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 ${
                    formik.errors.zipcode && formik.touched.zipcode
                      ? "border-red-600"
                      : "border-gray-300"
                  }  `}
                  min="0"
                  type="number"
                  placeholder="40008"
                  name="zipcode"
                />
                {formik.touched.zipcode && formik.errors.zipcode ? (
                  <div class="text-red-500 mt-3  mb-3  text-sm ">
                    {formik.errors.zipcode}
                  </div>
                ) : null}
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
                onClick={formik.handleSubmit}
              >
                Next
              </Button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Step1;
