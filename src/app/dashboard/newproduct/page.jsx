"use client";
import React, { useContext, useState } from "react";
import Image from "next/image";
import CartContextProvider from "../../../context/cartContext";
import Link from "next/link";
import ButtonOutlined from "../../../common/ButtonOutlined";
import EmptyProduct from "../../../../public/emptyImg2.svg";

const NewProduct = () => {
  const { product } = useContext(CartContextProvider);
  const [newProduct] = product;
  console.log(newProduct);
  return (
    <>
      <div className="z-10 mt-10 grid min-h-custom-min-h grid-cols-productLayout place-items-center gap-2 overflow-hidden md:mt-0 md:place-items-start">
        {newProduct.length > 0 ? (
          newProduct.map((product) => {
            const { userId: id, title, desc, category, price, file } = product;

            const descLength = desc.split(" ").slice(0, 5).join(" ");

            const [imageUrl, setImageurl] = useState(null);
            const reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onload = () => setImageurl(reader.result);

            return (
              <div key={id} className="border border-nutral3 p-2 rounded-md md:flex md:items-center w-max shadow-md gap-4 md:p-5 md:rounded-lg md:border-none md:bg-nutral3/60 md:justify-center">
                <div className="max-w-[150px] overflow-hidden rounded md:rounded-lg md:drop-shadow-md border-primary">
                  {/*  <Image
                    src={imageUrl}
                    alt={title}
                    width={300}
                    height={250}
                  />  */}
                  <img
                    className="aspect-square object-cover object-center"
                    src={imageUrl}
                    alt="preview"
                  />
                </div>
                <div className="py-4 md:py-0">
                  <div className="flex w-full flex-col justify-start gap-2 ">
                    <p className="mt-2 text-sm font-bold capitalize text-nutral2 md:text-xl">
                      {title}
                    </p>
                    <p className="line-clamp-1 text-small font-extrabold capitalize text-nutral2 sm:text-base">
                      {category}
                    </p>
                  </div>
                  <div className="mt-2 w-full">
                    <p className="mb-2 break-words text-small font-bold capitalize text-nutral2 sm:text-base sm:font-bold">
                      {desc.split(" ").length <= 5
                        ? `${descLength}`
                        : `${descLength}...`}
                      <p className="mt-1  break-words text-small font-bold capitalize text-primary sm:text-xl">
                        {price}$
                      </p>
                    </p>
                  </div>
                  <div className="mt-4 w-full shadow-nutral2 drop-shadow-md">
                    <button
                      type="button"
                      onClick={() => handleRemoveUser(id)}
                      className="w-full cursor-pointer rounded-full border-2 border-primary bg-transparent px-4 py-2 text-sm font-bold capitalize text-primary transition-all duration-200 ease-in-out hover:border-transparent hover:bg-baseClr1 hover:text-primary hover:drop-shadow-lg "
                    >
                      add Product
                    </button>
                  </div>
                </div>
              </div>
            );
          })
        ) : (
          <div className="grid w-full place-items-center overflow-hidden ">
            <div className="animate-moveInRight">
              <Image
                src={EmptyProduct}
                alt="empty product"
                width={400}
                height={400}
              />
            </div>
            <div className="grid place-items-center">
              <h2 className="py-4 text-center text-2xl font-bold md:text-left">
                Product Not Found.
              </h2>
              <Link
                className="w-full shadow-nutral2 drop-shadow-md"
                href="/dashboard/addproduct"
              >
                <ButtonOutlined btnLabel="Add New Product" btnType="button" />
              </Link>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default NewProduct;
