"use client";
import React from "react";
import { useProductData } from "../../Data/productData";

const Loading = () => {
  const { data } = useProductData();
  return (
    <>
      <div className="flex items-center mt-8">
        <div className="container grid my-16 grid-cols-productLayout gap-4">
          {data?.map((product) => {
            const { id } = product;
            return (
              <div key={id} className="z-10 animate-moveUp bg-gray-200 p-3 rounded-md">
                <div className="flex h-full flex-col items-center justify-between gap-2">
                  <div>
                    <div className="m-auto mb-2 h-44 w-60 rounded-md animate-pulse overflow-hidden bg-gray-300 p-4"></div>
                    <div className="z-20 rounded-md pb-4 pt-2 w-full">
                      <div>
                        <h2 className="h-5 w-full animate-pulse bg-gray-300"></h2>
                      </div>
                      <div className="flex items-center justify-between gap-4 py-2">
                        <h2 className="h-5 w-full animate-pulse bg-gray-300"></h2>
                        <p className="h-5 w-full animate-pulse bg-gray-300"></p>
                      </div>
                    </div>
                  </div>
                  <div className="flex h-8 w-full rounded-md animate-pulse items-center justify-between bg-gray-300 px-4 pb-4">
                    <button
                      type="button"
                      onClick={() => addToCart(id)}
                      className="w-full cursor-pointer rounded-md bg-transparent text-sm font-bold capitalize text-lime-900 transition-all duration-200 ease-in-out"
                    ></button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};
export default Loading;
