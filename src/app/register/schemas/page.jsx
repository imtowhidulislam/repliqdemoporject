import * as yup from "yup";

const passValidator = "^(?=.*[A-Za-z])(?=.*d)[A-Za-zd]{8,}$";
export const formSchema = yup.object().shape({
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

export const productSchema = yup.object().shape({
  title: yup.string().required("title is required"),
  desc: yup.string().required("description is required"),
  price: yup.number().required("price is required"),
  category: yup.string().required("category is required"),
  file: yup.mixed().required("Image is required"),
});
export const loginSchema = yup.object().shape({
  email: yup
    .string()
    .email("Invalid email address")
    .required("Email is required"),
  password: yup.string().required("Password is required"),
});
