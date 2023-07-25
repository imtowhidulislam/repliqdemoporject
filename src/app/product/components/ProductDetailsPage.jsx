import Image from "next/image";
import React, { useEffect, useState } from "react";
import { FaStar } from "react-icons/fa";

const ProductDetailsPage = ({
  product,
  uniqueItem,
  cart,
  setProduct,
  setCart,
}) => {
  const getProduct = (id) => {
    const fetchCartItem = product.find((item) => item.id === id);
    setCart((prevValue) => [...prevValue, fetchCartItem]);
  };

  return (
    <div className="my-20 min-h-screen">
      <h2 className="mb-24 text-center text-3xl font-bold font-sans capitalize first-letter:text-blue-600">
        let know about the product
      </h2>
      {uniqueItem.map((itemId) => {
        const { id, category, image, title, description, price, rating } =
          itemId;
        return (
          <div
            key={id}
            className="container grid grid-cols-homepageLayoutHero1 place-items-center gap-6 border-2 border-red-200"
          >
            <div className="">
              <div className="singleItmeImg">
                <Image src={image} alt="image" width={300} height={300} />
              </div>
            </div>
            <div className="text-left capitalize">
              <h2 className="text-sm sm:text-base font-bold pb-4">{title}</h2>
              <h2 className="text-sm sm:text-base font-light pb-4">
                {description}
              </h2>
              <h2 className="text-sm sm:text-base font-bold pb-4 text-green-400">
                ${price} USD
              </h2>
              <h2 className="text-sm sm:text-base flex items-center justify-start font-bold pb-4 text-yellow-400">
                <span className="mr-2">
                  <FaStar />
                </span>{" "}
                {rating.rate}
                <span className="pl-2 text-sm sm:text-base font-bold text-blue-600">
                  ({rating.count})
                </span>
              </h2>
              <h2 className="text-sm sm:text-base font-bold pb-4">
                {category}
              </h2>
              <div className="w-full">
                <button
                  onClick={() => getProduct(id)}
                  className="bg-blue-400 text-black py-2 px-8 rounded-lg drop-shadow-md cursor-pointer hover:bg-blue-700 hover:text-gray-50 transition-all duration-200 ease-in-out capitalize mt-6"
                >
                  add to cart
                </button>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ProductDetailsPage;
