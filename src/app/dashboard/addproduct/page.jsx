"use client";
import React, { useContext, useRef, useState } from "react";
import { RiShoppingBagFill, RiImage2Fill } from "react-icons/ri";
import { useFormik } from "formik";
import toast from "react-hot-toast";

import CartContextProvider from "../../../context/cartContext";
import { useProductData } from "../../../Data/productData";
import { productSchema } from "../../register/schemas/page";
import NewProductProviderContext from "../../../context/newProduct";
import TextInputField from "../../../common/TextInputField";
import FileInputField from "../../../common/FileInputField";
import ButtonFilled from "../../../common/ButtonFilled";

const page = () => {
  const { data, isLoading, error } = useProductData();
  const { product } = useContext(CartContextProvider);
  const [newProduct, setNewProduct] = product;
  const imgRef = useRef(null);

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
      title: "",
      desc: "",
      price: null,
      file: null,
      category: "",
    },
    validationSchema: productSchema,
    onSubmit: async (values, { resetForm }) => {
      const userId = new Date().getTime().toString();
      const addNewProduct = { ...values, userId };
      setNewProduct([...newProduct, addNewProduct]);
      // resetForm();
      toast.success("New Product Added");
    },
  });

  console.log(values);
  const uploadImage = (e) => setFieldValue("file", e.target.files[0]);
  // const handleImg = () => imgRef.current.click();

  return (
    <>
      <div className="relative flex h-full w-full items-center justify-center overflow-y-hidden">
        <form
          onSubmit={handleSubmit}
          className="registerForm w-full max-w-md animate-moveUp overflow-hidden bg-nutral3 rounded-md border border-gray-200  px-4 pb-6 pt-0 shadow-nutral2 drop-shadow-lg sm:mx-0 md:mx-4 md:my-8"
        >
          <div className="flex items-center justify-center pb-1 text-6xl text-cyan-700"></div>
          <div className="pb-2">
            <h2 className="text-center text-2xl font-bold uppercase text-nutral2">
              Create Product
            </h2>
          </div>

          <TextInputField
            label="Product Name"
            type="text"
            id="title"
            name="title"
            values={values.title}
            onChange={handleChange}
            onBlur={handleBlur}
            errors={errors.title}
            touched={touched.title}
            placeholder="enter product title"
          />

          <TextInputField
            label="Product Desc"
            type="text"
            name="desc"
            id="desc"
            placeholder="enter product desc"
            onChange={handleChange}
            onBlur={handleBlur}
            errors={errors.desc}
            touched={touched.desc}
          />

          <TextInputField
            label="Product Price"
            type="text"
            name="price"
            id="price"
            placeholder="enter product price"
            onChange={handleChange}
            onBlur={handleBlur}
            errors={errors.price}
            touched={touched.price}
          />

          <FileInputField
            type="file"
            label="Product Image"
            name="file"
            id="file"
            btnLabel="Upload Product Image"
            onChange={uploadImage}
            // onBlur={handleBlur}
            errors={errors.file}
            touched={touched.file}
            imgRef={imgRef}
            imgName={values.file?.name}
          >
            <RiImage2Fill className="text-2xl text-primary md:text-3xl" />
          </FileInputField>

          <TextInputField
            label="Produt Category"
            type="text"
            name="category"
            id="category"
            placeholder="enter prodcut category"
            onChange={handleChange}
            onBlur={handleBlur}
            errors={errors.category}
            touched={touched.category}
          />

          <div className="mt-4 w-full md:mt-12">
            <ButtonFilled
              btnLebel="create product"
              btnType="submit"
              classNames="w-full cursor-pointer rounded-md border-2 border-nutral2 bg-transparent px-8 py-2 text-base font-bold capitalize text-nutral2 transition-all duration-200 ease-out hover:border-transparent hover:bg-accent hover:text-nutral3"
            />
          </div>

          {/* <div><p className='capitalize text-gray-300'>{account}<span><button type='button' className='uppercase text-sky-400 underline cursor-pointer'>{acctionType}</button></span></p></div> */}
        </form>
      </div>
    </>
  );
};

export default page;
