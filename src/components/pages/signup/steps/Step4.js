import { useFormik } from "formik";
import * as Yup from "yup";
import Input from "../../../UI/ReusableComponent/Input";
import Label from "../../../UI/ReusableComponent/Label";
import Button from "../../../UI/ReusableComponent/Button";

const Step4 = ({ handleBack, handleNext }) => {
  const validationSchema = Yup.object().shape({
    checkboxes: Yup.array().min(1, "Please select at least one checkbox"),
    description: Yup.string().required("Description is required"),
    habits: Yup.string().required("Habits are required"),
  });

  const formik = useFormik({
    initialValues: {
      checkboxes: [],
      description: "",
      habits: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      console.log(values);
    },
  });

  return (
    <>
      <div class="mt-4 mx-4 md:mx-8 md:p-5">
        <h2 class="text-2xl md:text-3xl font-bold tracking-wide p-1">
          Thanks! now give all details about your Gingeer
        </h2>
        <div class="w-full px-3 mb-6 md:mb-0 p-3">
          <Label
            htmlFor=""
            className="block  tracking-wide text-gray-700 text-xs font-bold mb-2 md:mt-11"
          >
            Favourite things
          </Label>
          <div class="flex text-white">
            <div class="w-1/3">
              <Input
                id="checkbox1"
                type="checkbox"
                name="checkboxes"
                value="checkbox1"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                checked={formik.values.checkboxes.includes("checkbox1")}
                className="w-4 h-4 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
              />
              <Label
                htmlFor="checkbox1"
                className="w-full py-3 ml-2 text-sm font-medium text-gray-900 "
              >
                Checkbox 1
              </Label>
            </div>
            <div class="w-1/3">
              <Input
                id="checkbox2"
                type="checkbox"
                name="checkboxes"
                value="checkbox2"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                checked={formik.values.checkboxes.includes("checkbox2")}
                className="w-4 h-4 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
              />
              <Label
                htmlFor="checkbox2"
                className="w-full py-3 ml-2 text-sm font-medium text-gray-900 "
              >
                Checkbox 2
              </Label>
            </div>
            <div class="w-1/3">
              <Input
                id="checkbox3"
                type="checkbox"
                name="checkboxes"
                value="checkbox3"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                checked={formik.values.checkboxes.includes("checkbox3")}
                className="w-4 h-4 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
              />
              <Label
                htmlFor="checkbox3"
                className="w-full py-3 ml-2 text-sm font-medium text-gray-900 "
              >
                Checkbox 3
              </Label>
            </div>
          </div>
          <div class="flex mt-2">
            <div class="w-1/3">
              <Input
                id="checkbox4"
                type="checkbox"
                name="checkboxes"
                value="checkbox4"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                checked={formik.values.checkboxes.includes("checkbox4")}
                className="w-4 h-4 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
              />
              <Label
                htmlFor="checkbox4"
                className="w-full py-3 ml-2 text-sm font-medium text-gray-900 "
              >
                Checkbox 4
              </Label>
            </div>
            <div class="w-1/3">
              <Input
                id="checkbox5"
                type="checkbox"
                name="checkboxes"
                value="checkbox5"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                checked={formik.values.checkboxes.includes("checkbox5")}
                className="w-4 h-4 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
              />
              <Label
                htmlFor="checkbox5"
                className="w-full py-3 ml-2 text-sm font-medium text-gray-900 "
              >
                Checkbox 5
              </Label>
            </div>
            <div class="w-1/3">
              <Input
                id="checkbox6"
                type="checkbox"
                name="checkboxes"
                value="checkbox6"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                checked={formik.values.checkboxes.includes("checkbox6")}
                className="w-4 h-4 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
              />
              <Label
                htmlFor="checkbox6"
                className="w-full py-3 ml-2 text-sm font-medium text-gray-900 "
              >
                Checkbox 6
              </Label>
            </div>
          </div>
          <div class="flex mt-2">
            <div class="w-1/3">
              <Input
                id="checkbox7"
                type="checkbox"
                name="checkboxes"
                value="checkbox7"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                checked={formik.values.checkboxes.includes("checkbox7")}
                className="w-4 h-4 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
              />
              <Label
                htmlFor="checkbox7"
                className="w-full py-3 ml-2 text-sm font-medium text-gray-900 "
              >
                Checkbox 7
              </Label>
            </div>
            <div class="w-1/3">
              <Input
                id="checkbox8"
                type="checkbox"
                name="checkboxes"
                value="checkbox8"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                checked={formik.values.checkboxes.includes("checkbox8")}
                className="w-4 h-4 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
              />
              <Label
                htmlFor="checkbox8"
                className="w-full py-3 ml-2 text-sm font-medium text-gray-900 "
              >
                Checkbox 8
              </Label>
            </div>
            <div class="w-1/3">
              <Input
                id="checkbox9"
                type="checkbox"
                name="checkboxes"
                value="checkbox9"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                checked={formik.values.checkboxes.includes("checkbox9")}
                className="w-4 h-4 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
              />
              <Label
                htmlFor="checkbox9"
                className="w-full py-3 ml-2 text-sm font-medium text-gray-900 "
              >
                Checkbox 9
              </Label>
            </div>
          </div>
          {formik.touched.checkboxes && formik.errors.checkboxes ? (
            <div className="text-red-500 mt-3 text-sm">
              {formik.errors.checkboxes}
            </div>
          ) : null}
        </div>

        <div class="flex flex-wrap -mx-3 mb-6">
          <div class="w-full px-4 mt-4">
            <Label
              className="block  tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="description"
            >
              Pet Description
            </Label>
            <textarea
              class={`appearance-none block w-full  border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 ${
                formik.errors.description && formik.touched.description
                  ? "border-red-600"
                  : "border-gray-300"
              }  `}
              id="pet-description"
              rows="4"
              name="description"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.description}
            ></textarea>
            {formik.touched.description && formik.errors.description ? (
              <div class="text-red-500 mt-3  text-sm ">
                {formik.errors.description}
              </div>
            ) : null}
          </div>
        </div>

        <div class="flex flex-wrap -mx-3 mb-6">
          <div class="w-full px-3">
            <Label
              className="block  tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="habits"
            >
              Pet Habits
            </Label>
            <textarea
              class={`appearance-none block w-full  border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 ${
                formik.errors.habits && formik.touched.habits
                  ? "border-red-600"
                  : "border-gray-300"
              }  `}
              rows="4"
              name="habits"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.habits}
            ></textarea>

            {formik.touched.habits && formik.errors.habits ? (
              <div class="text-red-500 mt-3  text-sm ">
                {formik.errors.habits}
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
              !formik.dirty || !formik.isValid ? "bg-gray-300" : "bg-gray-900"
            }`}
            disabled={!(formik.isValid && formik.dirty)}
            onClick={handleNext}
          >
            Next
          </Button>
        </div>
      </div>
    </>
  );
};

export default Step4;
