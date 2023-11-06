"use client";
import { useFormik } from "formik";
import toast from "react-hot-toast";
import { loginSchema } from "../schemas/page";
import RegisterNav from "../components/RegisterNav";
import TextInputField from "../../common/TextInputField";
import ButtonFilled from "../../../common/ButtonFilled";
import PasswordInputField from "@/common/PasswordInputField";

const page = () => {
  const {
    values,
    handleChange,
    touched,
    errors,
    handleSubmit,
    handleBlur,
  } = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: loginSchema,
    onSubmit: async (values, { resetForm }) => {
      resetForm();
      toast.success("Submitted successfully");
    },
  });

  return (
    <>
      <div className="relative flex items-start justify-center w-full h-full overflow-y-hidden ">
        <form
          onSubmit={handleSubmit}
          className="w-full max-w-md px-4 pt-0 pb-6 overflow-hidden border border-gray-200 rounded-md registerForm animate-moveUp bg-nutral3 shadow-nutral2 drop-shadow-lg sm:mx-0 md:mx-4 md:my-8"
        >
          <div className="flex items-center justify-center pb-1 text-6xl text-cyan-700"></div>
          <div className="pb-2">
            <h2 className="text-2xl font-bold text-center uppercase text-nutral2">
              Sign in
            </h2>
          </div>

          <TextInputField
            label="Email"
            type="text"
            name="email"
            id="email"
            onChange={handleChange}
            onBlur={handleBlur}
            placeholder="enter your email"
            errors={errors.email}
            touched={touched.email}
            values={values.email}
          />
          <PasswordInputField
            label="Password"
            type="pasword"
            name="password"
            id="password"
            onChange={handleChange}
            onBlur={handleBlur}
            placeholder="enter your password"
            errors={errors.password}
            touched={touched.password}
            values={values.password}
          />

          <div className="w-full mt-8 md:mt-12">
            <ButtonFilled
              btnLebel="sign in"
              btnType="submit"
              classNames="w-full cursor-pointer rounded-md bg-primary/90 px-8 py-2 text-base font-bold capitalize text-nutral3 transition-all duration-200 ease-out hover:bg-primary"
            />
            <div className="flex items-center justify-center gap-2">
              <p className="text-sm text-nutral2 md:text-base">
                Don't have any account?{" "}
              </p>
              <span>
                <RegisterNav registerRoute="/register" registerType="sign up" />
              </span>
            </div>
          </div>
          {/* <div><p className='text-gray-300 capitalize'>{account}<span><button type='button' className='underline uppercase cursor-pointer text-sky-400'>{acctionType}</button></span></p></div> */}
        </form>
      </div>
    </>
  );
};

export default page;
