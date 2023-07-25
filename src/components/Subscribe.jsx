import React from "react";
import { useFormik } from "formik";

const Subscribe = () => {
  const onSubmit = (values, action) => {
    console.log("submitted");
    console.log(values);
  };
  const { values, errors, handleChange, handleSubmit, touched } = useFormik({
    initialValues: {
      email: "",
    },
    onSubmit,
  });
  return (
    <div className="grid place-items-center bg-transparent px-4 py-16 md:px-0">
      <div className="footerStyle max-w-lg rounded-md border border-gray-300 p-4 md:hidden">
        <h2 className=" sm:text-nutral2">
          subscribe our newsletter and get 10% off!!
        </h2>
        <form className="" action="" onSubmit={handleSubmit}></form>
        <div className="w-full">
          <input
            className="mb-4 w-full rounded-sm border border-gray-300 bg-transparent px-4 py-2 placeholder:text-nutral2 active:border-primary sm:border-gray-300 sm:placeholder:text-nutral2"
            id="email"
            name="email"
            value={values.email}
            onChange={handleChange}
            placeholder="Email"
            type="email"
          />
        </div>
        <div className="subscribeBtn">
          <button
            type="submit"
            onClick={handleSubmit}
            className="w-full cursor-pointer text-center text-base capitalize "
          >
            subscribe
          </button>
        </div>
        <h2 className="mt-4 text-xs font-semibold capitalize text-nutral2 sm:text-primary">
          get regular updates on our product with our newsletter.
        </h2>
      </div>

      <div className="drop-shadow-lg container hidden md:block w-full">
        <div className="grid grid-cols-productLayout gap-4 place-content-center h-full w-full rounded-md border border-gray-300 p-4 ">
          <div className="">
            <h2 className=" sm:text-nutral2 capitalize">
              subscribe our newsletter and get 10% off!!
            </h2>
            <h2 className="mt-4 text-xs font-semibold capitalize text-nutral2 sm:text-primary">
              get regular updates on our product with our newsletter.
            </h2>
          </div>
          <form className="flex items-center justify-center rounded-md h-full border-2 border-gray-300" action="" onSubmit={handleSubmit}>
            <div className="w-full">
              <input
                className="w-full border-transparent outline-none rounded-md bg-transparent px-4 py-2 placeholder:text-nutral2 active:border-primary sm:border-nutral2 sm:placeholder:text-nutral2"
                id="email"
                name="email"
                value={values.email}
                onChange={handleChange}
                placeholder="Email"
                type="email"
              />
            </div>
          </form>
            <div className="subscribeBtn grid place-items-center">
              <button
                type="submit"
                onClick={handleSubmit}
                className="w-full cursor-pointer text-center font-bold text-base capitalize rounded-md"
              >
                subscribe
              </button>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Subscribe;
