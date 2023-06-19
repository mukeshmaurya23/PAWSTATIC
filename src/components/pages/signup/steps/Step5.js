import { useFormik } from "formik";
import * as Yup from "yup";
import Input from "../../../UI/ReusableComponent/Input";
import Label from "../../../UI/ReusableComponent/Label";
import Button from "../../../UI/ReusableComponent/Button";

const Step5 = ({ handleBack, handleNext }) => {
  const validationSchema = Yup.object().shape({
    firstName: Yup.string().required("First Name is required"),
    lastName: Yup.string().required("Last Name is required"),
    label: Yup.string().required("Label is required"),
    city: Yup.string().required("City is required"),
    state: Yup.string().required("State is required"),
    zip: Yup.string().required("Zip is required"),
  });

  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      label: "",
      city: "",
      state: "",
      zip: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {},
  });

  return (
    <>
      <div className="p-3">
        <div className="md:mt-12 md:px-24 md:py-10">
          <h2 className="text-2xl md:text-3xl md:w-1/2 font-bold tracking-wide">
            Hello, please tell a little about yourself
          </h2>
        </div>
        <div className="mt-4 flex md:px-24">
          <form className="w-full max-w-lg" onSubmit={formik.handleSubmit}>
            <div className="flex flex-wrap -mx-3 mb-6">
              <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                <Label
                  className="block tracking-wide text-gray-700 text-xs font-bold mb-2"
                  htmlFor="grid-first-name"
                >
                  First Name
                </Label>
                <Input
                  className={`appearance-none block w-full rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white ${
                    formik.errors.firstName && formik.touched.firstName
                      ? "border-red-500"
                      : "border-gray-200"
                  }`}
                  id="grid-first-name"
                  type="text"
                  placeholder="Jane"
                  {...formik.getFieldProps("firstName")}
                />
                {formik.errors.firstName && formik.touched.firstName && (
                  <p className="text-red-500 text-xs ">
                    {formik.errors.firstName}
                  </p>
                )}
              </div>
              <div className="w-full md:w-1/2 px-3">
                <Label
                  className="block tracking-wide text-gray-700 text-xs font-bold mb-2"
                  htmlFor="grid-last-name"
                >
                  Last Name
                </Label>
                <Input
                  className={`appearance-none block w-full border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white ${
                    formik.errors.lastName && formik.touched.lastName
                      ? "border-red-500"
                      : "border-gray-200"
                  }`}
                  id="grid-last-name"
                  type="text"
                  placeholder="Doe"
                  {...formik.getFieldProps("lastName")}
                />
                {formik.errors.lastName && formik.touched.lastName && (
                  <p className="text-red-500 text-xs ">
                    {formik.errors.lastName}
                  </p>
                )}
              </div>
            </div>
            <div className="flex flex-wrap -mx-3 mb-6">
              <div className="w-full px-3">
                <Label
                  className="block tracking-wide text-gray-700 text-xs font-bold mb-2"
                  htmlFor="grid-label"
                >
                  Label
                </Label>
                <Input
                  className={`appearance-none block w-full border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white ${
                    formik.errors.label && formik.touched.label
                      ? "border-red-500"
                      : "border-gray-200"
                  }`}
                  id="grid-label"
                  type="text"
                  {...formik.getFieldProps("label")}
                />
                {formik.errors.label && formik.touched.label && (
                  <p className="text-red-500 text-xs ">{formik.errors.label}</p>
                )}
              </div>
            </div>
            <div className="flex flex-wrap -mx-3 mb-2">
              <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                <Label
                  className="block tracking-wide text-xs font-bold mb-2"
                  htmlFor="grid-city"
                >
                  City
                </Label>
                <Input
                  className={`appearance-none block w-full border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white ${
                    formik.errors.city && formik.touched.city
                      ? "border-red-500"
                      : "border-gray-200"
                  }`}
                  id="grid-city"
                  type="text"
                  placeholder="Albuquerque"
                  {...formik.getFieldProps("city")}
                />
                {formik.errors.city && formik.touched.city && (
                  <p className="text-red-500 text-xs ">{formik.errors.city}</p>
                )}
              </div>
              <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                <Label className="block tracking-wide text-xs font-bold mb-2">
                  State
                </Label>
                <div className="relative">
                  <select
                    className={`block appearance-none w-full border ${
                      formik.errors.state && formik.touched.state
                        ? "border-red-500"
                        : "border-gray-200"
                    } py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white`}
                    name="state"
                    {...formik.getFieldProps("state")}
                  >
                    <option value="">Select a state</option>
                    <option value="New Mexico">New Mexico</option>
                    <option value="Missouri">Missouri</option>
                    <option value="Texas">Texas</option>
                  </select>
                  <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                    <svg
                      className="fill-current h-4 w-4"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                    </svg>
                  </div>
                </div>
                {formik.errors.state && formik.touched.state && (
                  <p className="text-red-500 text-xs ">{formik.errors.state}</p>
                )}
              </div>
              <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                <Label className="block tracking-wide text-gray-700 text-xs font-bold mb-2">
                  Zip
                </Label>
                <Input
                  className={`appearance-none block w-full border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white ${
                    formik.errors.zip && formik.touched.zip
                      ? "border-red-500"
                      : "border-gray-200"
                  }`}
                  min="0"
                  type="number"
                  placeholder="400081"
                  {...formik.getFieldProps("zip")}
                />
                {formik.errors.zip && formik.touched.zip && (
                  <p className="text-red-500 text-xs ">{formik.errors.zip}</p>
                )}
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
                type="submit"
                className={`text-white rounded-full px-16 py-2 mt-4 md:mt-0 md:ml-2 ${
                  !formik.isValid ? "bg-gray-300" : "bg-gray-900"
                }`}
                disabled={!formik.isValid || (formik.touched && !formik.dirty)}
                onClick={handleNext}
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

export default Step5;
