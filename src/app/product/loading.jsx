"use client"
import React from "react";
import { useProductData } from "../../Data/productData";

const Loading = () => {
  const { data } = useProductData();
  return (
    <>
    <div className="flex items-center mt-8">
        <div className="container grid my-16 grid-cols-productLayout gap-4">
        {data?.map((product) => {
            const {id} = product;
            return (
            <div key={id} className="card z-10 animate-moveUp">
                <div
                className="flex h-full flex-col items-center justify-between gap-2"
                >
                <div>
                    <div className="m-auto mb-4 h-44 w-52 animate-pulse overflow-hidden bg-gray-200 p-4">
                    {/* <Image
                                className="block object-center object-cover"
                                src={image}
                                alt=""
                                width={250}
                                height={200}
                            /> */}
                    </div>
                    <div className="z-20 px-4 pb-4 pt-2 text-gray-700">
                    <div>
                        <h2 className="h-5 w-full animate-pulse bg-gray-200">
                        {/* Name :{" "} */}
                        {/* title.split(" ").length <= 5
                                    ? `${titleLength}`
                                    : `${titleLength}...` */}
                        </h2>
                    </div>
                    <div className="flex items-center justify-between gap-4 py-2">
                        <h2 className="h-5 w-full animate-pulse bg-gray-200">
                        {/* Price :{" "} */}
                        {/* <span className="text-sm font-bold text-lime-400"> */}
                        {/* {price}$ */}
                        {/* </span> */}
                        </h2>
                        <p className="h-5 w-full animate-pulse bg-gray-200">
                        {/* Rating :{" "} */}
                        {/* <span className="text-sm font-bold text-lime-400"> */}
                        {/* {rating.rate} */}
                        {/* </span> */}
                        </p>
                    </div>
                    </div>
                </div>
                <div className="flex h-5 w-full animate-pulse items-center justify-between bg-gray-200 px-2 pb-4">
                    <button
                    type="button"
                    onClick={() => addToCart(id)}
                    className="w-full cursor-pointer rounded-md border-2 border-[#cccccc]  bg-transparent px-4 py-2 text-sm font-bold capitalize text-lime-900 transition-all duration-200 ease-in-out"
                    >
                    {/* add to cart */}
                    </button>
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
export default Loading