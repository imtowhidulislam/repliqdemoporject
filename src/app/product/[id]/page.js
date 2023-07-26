"use client";
import { useQuery } from "@tanstack/react-query";
import React, { useContext, useEffect, useState } from "react";
import { FaStar } from "react-icons/fa";
import Link from "next/link";
import Image from "next/image";
import { HiHeart, HiStar } from "react-icons/hi2";
import CartContextProvider from "../../../context/cartContext";
import { HiShoppingCart } from "react-icons/hi";
import { toast } from "react-hot-toast";
import ButtonFilled from "../../../common/ButtonFilled";

const ProductDetailsPage = ({ params }) => {
  const { cart } = useContext(CartContextProvider);
  const [myCart, setMyCart] = cart;
  const productId = +params.id;
  const [product, setProduct] = useState([]);
  const [uniqueItem, setUniqueItem] = useState([]);

  const fetchData = async () => {
    const res = await fetch("https://fakestoreapi.com/products");
    const data = await res.json();
    if (!res.ok) throw Error("Url might be not found.");

    const fetchSingleProduct = data.find((item) => item.id === productId);
    setUniqueItem([fetchSingleProduct]);
    setProduct([data]);

    return data;
  };
  const { isLoading, error, data } = useQuery({
    queryKey: ["singleProduct"],
    queryFn: fetchData,
  });

  if (error) return "Product not Found!!" + error.message;

  const getProduct = (id) => {
    try {
      let quantity = 0;
      /* const checkProductInThere = cart.find(item => item.id === id ? item.quantity =+ 1 : (product.find((item) => {
        item.quantity = 1;
        return item.id === id;
      }))) */
      const checkProductIsThere = data?.find((item) => {
        item.quantity = 1;
        return item.id === id;
      });
      console.log(checkProductIsThere);
      setMyCart((prevItem) => [...prevItem, checkProductIsThere]);

      cart.find((item) => item.id === id && (item.quantity += 1));

      toast.success("Product Added");
    } catch (error) {
      toast.error("product not found");
    }
  };
  return (
    <div className="">
      <div className="container lg:min-h-custom-h-form">
        <>
          {uniqueItem?.map((singleProduct) => {
            const {
              id,
              title,
              description: desc,
              image: img,
              price,
              rating,
              category: cat,
            } = singleProduct;

            const titleLength = title.split(" ").slice(0, 5).join(" ");
            return (
              <div key={id} className="mt-20">
                <div className="grid grid-cols-productLayout gap-3 rounded-lg sm:gap-4 md:bg-primary/5 md:p-5">
                  <div className="grid animate-moveInLeft place-items-center rounded-md bg-nutral3 drop-shadow-lg">
                    <Image
                      className="m-4 aspect-square rounded-md object-cover object-center"
                      src={img}
                      n
                      alt=""
                      width={350}
                      height={350}
                    />

                    <div className="items-cener my-4 flex justify-between gap-3">
                      <div className="grid h-16 w-16 place-items-center overflow-hidden rounded-md bg-baseClr1 p-1 shadow-md transition-all duration-200 ease-out hover:scale-[1.1] md:h-24 md:w-24 ">
                        <Image
                          className="aspect-square object-cover object-center"
                          src={img}
                          alt=""
                          width={50}
                          height={50}
                        />
                      </div>
                      <div className="grid h-16 w-16 place-items-center overflow-hidden rounded-md bg-baseClr1 p-1 shadow-md transition-all duration-200 ease-out hover:scale-[1.1] md:h-24 md:w-24">
                        <Image
                          className="aspect-square object-cover object-center"
                          src={img}
                          alt=""
                          width={50}
                          height={50}
                        />
                      </div>
                      <div className="grid h-16 w-16 place-items-center overflow-hidden rounded-md bg-baseClr1 p-1 shadow-md transition-all duration-200 ease-out hover:scale-[1.1] md:h-24 md:w-24">
                        <Image
                          className="aspect-square object-cover object-center"
                          src={img}
                          alt=""
                          width={50}
                          height={50}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="z-20 flex flex-col items-start justify-center rounded-lg p-4 px-1 pb-4 pt-4 text-gray-700 md:px-4">
                    <h2 className="text-pimary max-w-lg text-xl font-semibold capitalize text-nutral2">
                      {cat}
                    </h2>
                    <div>
                      <h2 className="text-2xl font-bold">
                        {" "}
                        {title.split(" ").length <= 5
                          ? `${titleLength}`
                          : `${titleLength}...`}
                      </h2>
                    </div>
                    <div className="py-2">
                      <h2 className="max-w-md py-4 font-semibold text-nutral2">
                        <span className="line-clamp-4">{desc}</span>
                      </h2>
                      <h2 className="pb-2">
                        {" "}
                        <span className="text-2xl font-bold text-primary">
                          $ {price}
                        </span>
                      </h2>
                      <p className="flex items-center justify-start gap-2">
                        <HiStar className="text-2xl font-bold text-yellow-500" />
                        <span className="text-xl font-bold text-nutral2">
                          {rating.rate}
                        </span>
                      </p>
                    </div>
                    <div className="my-2 grid gap-2">
                      <p className="text-base font-bold capitalize">
                        choose size:
                      </p>
                      <div className="flex gap-4 text-base font-bold capitalize text-nutral3">
                        <p className="grid h-8 w-8 place-items-center rounded-lg bg-nutral2/20 text-nutral2">
                          s
                        </p>
                        <p className="grid h-8 w-8 place-items-center rounded-lg bg-primary/80 ">
                          m
                        </p>
                        <p className="grid h-8 w-8 place-items-center rounded-lg bg-nutral2/20 text-nutral2">
                          l
                        </p>
                        <p className="grid h-8 w-8 place-items-center rounded-lg bg-nutral2/20 text-nutral2">
                          xl
                        </p>
                      </div>
                    </div>
                    <div className="items-justify-center mt-4 flex w-full gap-4 ">
                      <ButtonFilled
                        btnLebel="add to cart"
                        btnType="button"
                        onClick={() => getProduct(id)}
                        classNames="group flex w-full max-w-[320px] cursor-pointer items-center justify-center gap-2 rounded-md border-2 border-primary bg-transparent px-4  py-2 text-sm font-bold capitalize text-primary drop-shadow-lg transition-all duration-200 ease-in-out hover:border-transparent hover:bg-baseClr1 hover:text-primary hover:drop-shadow-md"
                      >
                        <span>
                          <HiShoppingCart className="text-2xl text-primary" />
                        </span>
                      </ButtonFilled>
                      {/* <button
                        type="button"
                        onClick={() => getProduct(id)}
                        className="flex items-center justify-center w-full max-w-sm gap-2 px-4 py-2 text-sm font-bold capitalize transition-all duration-200 ease-in-out bg-transparent border-2 rounded-md cursor-pointer group border-primary text-primary drop-shadow-lg hover:border-transparent hover:bg-baseClr1 hover:text-primary hover:drop-shadow-md"
                      >
                        add to cart{" "}
                        <span>
                          <HiShoppingCart className="text-2xl text-primary group-hover:animate-cartAnimate" />
                        </span>
                      </button> */}
                      <Link
                        className="group grid w-24 place-items-center rounded-md bg-baseClr1/75 text-2xl text-[#949393f1] shadow-nutral2 drop-shadow-md "
                        href="/cart"
                      >
                        <HiHeart className="transition-all duration-200 ease-in-out group-hover:text-3xl" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </>
      </div>

      <div className="my-6 grid place-items-center md:my-0 md:mb-8 md:mt-8">
        <Link href="/product" className="">
          <ButtonFilled
            btnLebel="back to product"
            btnType="button"
            classNames="flex w-full max-w-sm cursor-pointer items-center justify-center gap-2 rounded-md bg-primary px-4  py-2 text-sm font-bold capitalize text-nutral3"
          />
        </Link>
      </div>
    </div>
  );
};

export default ProductDetailsPage;
