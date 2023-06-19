import * as Yup from "yup";

export const loginSchema = Yup.object().shape({
  email: Yup.string()
    .matches(
      /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
      "Invalid email address"
    )
    .required("Email is required"),
  password: Yup.string()
    .min(5)
    .required("Please Enter your password")
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,
      "Must Contain 8 Characters, One Uppercase, Lowercase, Number and One Special Case Character"
    ),
  checkbox: Yup.boolean()
    .oneOf([true], "Please accept the terms and conditions")
    .required("Please accept the terms and conditions"),
});

export const signupSchema = Yup.object().shape({
  zipcode: Yup.string()
    .required("ZIP code is required")
    .matches(/^\d{5}$/, "ZIP code must be 5 digits"),
  email: Yup.string()
    .matches(
      /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
      "Invalid email address"
    )
    .required("Email is required"),
  password: Yup.string()
    .min(8, "Password must be at least 8 characters")
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]+$/,
      "Password must contain at least one uppercase letter, one lowercase letter, one digit, and one special character"
    )
    .required("Password is required"),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password"), null], "Passwords must match")
    .required("Please confirm your password"),
  checkbox: Yup.boolean()
    .oneOf([true], "Please accept the terms and conditions")
    .required("Please accept the terms and conditions"),
});

export const DogProfileSchema = Yup.object().shape({
  firstName: Yup.string()
    .required("First name is required")
    .matches(/^[a-zA-Z\s]*$/, "Only text characters are allowed"),
  lastName: Yup.string()
    .required("Last name is required")
    .matches(/^[a-zA-Z\s]*$/, "Only text characters are allowed"),
  phoneNumber: Yup.string()
    .required("Phone number is required")
    .matches(/^\d{10}$/, "Phone number must be 10 digits"),
  landlineNumber: Yup.string().required("Landline number is required"),
  label: Yup.string().required(
    "Please enter a valid label for this address type"
  ),
  city: Yup.string()
    .required("Please enter City")
    .matches(/^[a-zA-Z\s]*$/, "Only text characters are allowed"),
  zipcode: Yup.string()
    .required("Zipcode is Required")
    .matches(/^\d{5}$/, "ZIP code must be 5 digits"),
  dropdownField: Yup.string().required("Dropdown selection is required"),
});

export const CardValidationSchema = Yup.object({
  ccName: Yup.string().required("Required"),
  ccNum: Yup.string().required("Required"),
  ccExpMonth: Yup.string().required("Required"),
  ccExpYear: Yup.string().required("Required"),
  ccCvv: Yup.string()
    .matches(/^\d{3}$/, "Invalid CVV")
    .required("Required"),
});

export const cardValidationSchema = Yup.object().shape({
  name: Yup.string().required("Credit card holder name is required"),
  ccnum: Yup.string().required("Credit card number is required"),
  date: Yup.string().required("Expiration month is required"),
  year: Yup.string().required("Expiration year is required"),
  CVC: Yup.string().required("CVC is required").length(3, "Invalid CVC"),
});
