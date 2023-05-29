import * as yup from "yup";

export const loginValidationSchema = yup.object().shape({
  email: yup.string().email("Enter a valid Email").required("Required!"),
  password: yup.string().min(6).required("Required!"),
});

export const registerValidationSchema = yup.object().shape({
  firstName: yup.string().required("Required!"),
  lastName: yup.string().required("Required!"),
  occupation: yup.string().required("Required!"),
  location: yup.string().required("Required!"),
  picture: yup.string().required("Required!"),
  email: yup.string().email("Enter a valid Email").required("Required!"),
  password: yup.string().min(6).required("Required!"),
});
