"use client";
import React, { useContext, useRef, useState } from "react";
import { RiShoppingBagFill, RiImage2Fill } from "react-icons/ri";
import { useFormik } from "formik";
import toast from "react-hot-toast";
import FormSchema from "./schemas/FromSchema";
import CartContextProvider from "../../context/cartContext";
import RegisterNav from "./components/RegisterNav";
import TextInputField from "../common/TextInputField";
import FileInputField from "../../common/FileInputField";
import PasswordInputField from "../../common/PasswordInputField";
import ButtonFilled from "../../common/ButtonFilled";

const page = () => {
  const imgRef = useRef(null);
  const { user } = useContext(CartContextProvider);
  const [users, setUsers] = user;

  const {
    values,
    setFieldValue,
    handleChange,
    touched,
    errors,
    handleSubmit,
    handleBlur,
  } = useFormik({
    initialValues: {
      fName: "",
      lName: "",
      email: "",
      file: null,
      password: "",
    },
    validationSchema: FormSchema,
    onSubmit: async (
      { fName, lName, email, password, file },
      { resetForm }
    ) => {
      const userId = new Date().getTime().toString();
      const newUser = { ...values, userId };
      setUsers([...users, newUser]);
      // resetForm();
      toast.success("Submitted successfully");
    },
  });

  const uploadImage = (e) => setFieldValue("file", e.target.files[0]);

  return (
    <>
      <div className="relative flex items-center justify-center w-full h-full overflow-y-hidden">
        <form
          onSubmit={handleSubmit}
          className="w-full max-w-md px-4 pt-0 pb-6 overflow-hidden border border-gray-200 rounded-md registerForm animate-moveUp bg-nutral3 shadow-nutral2 drop-shadow-lg sm:mx-0 md:mx-4 md:my-8"
        >
          <div className="flex items-center justify-center pb-1 text-6xl text-cyan-700"></div>
          <div className="pb-2">
            <h2 className="text-2xl font-bold text-center uppercase text-nutral2">
              sign up
            </h2>
          </div>

          <TextInputField
            type="text"
            name="fName"
            id="fName"
            label="First Name"
            value={values.fName}
            placeholder="Enter your first name"
            onChange={handleChange}
            onBlur={handleBlur}
            errors={errors.fName}
            touched={touched.fName}
          />

          <TextInputField
            type="text"
            name="lName"
            id="lName"
            label="Last Name"
            value={values.lName}
            placeholder="Enter your last name"
            onChange={handleChange}
            onBlur={handleBlur}
            errors={errors.lName}
            touched={touched.lName}
          />

          <TextInputField
            type="text"
            name="email"
            id="email"
            label="Email"
            value={values.email}
            placeholder="Enter your email"
            onChange={handleChange}
            onBlur={handleBlur}
            errors={errors.email}
            touched={touched.email}
          />

          <FileInputField
            type="file"
            btnLabel="Upload Image"
            name="file"
            onChange={uploadImage}
            errors={errors.file}
            touched={touched.file}
            label="Image"
            imgRef={imgRef}
            imgName={values.file?.name}
          >
            <RiImage2Fill className="text-2xl text-primary md:text-3xl" />
          </FileInputField>

          <PasswordInputField
            type="password"
            label="Password"
            name="password"
            values={values.password}
            onBlur={handleBlur}
            onChange={handleChange}
            placeholder="enter your password"
            errors={errors.password}
            touched={touched.password}
          />

          <div className="w-full mt-8 md:mt-12">
            <ButtonFilled
              classNames="w-full cursor-pointer rounded-md bg-primary/90 px-8 py-2 text-base font-bold capitalize text-nutral3 transition-all duration-200 ease-out hover:bg-primary"
              btnLebel="sign up"
              btnType="submit"
            />
            
            <div className="flex items-center justify-center gap-2">
              <p className="text-sm text-nutral2 md:text-base">
                Already have an account?{" "}
              </p>
              <span className="">
                <RegisterNav
                  registerRoute="/register/login"
                  registerType="sign in"
                />
              </span>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default page;
