import * as yup from "yup";

const FormSchema = yup.object().shape({
  fName: yup.string().required("first name is required"),
  lName: yup.string().required("last name is required"),
  email: yup
    .string()
    .email("Please enter a valid email")
    .required("Email is required"),
  file: yup.mixed().required("Image is required"),
  password: yup
    .string()
    // .matches(passValidator, {
    //   message: "Minimum eight characters, at least one letter and one number",
    // })
    .required("password is required"),
});

export default FormSchema;
