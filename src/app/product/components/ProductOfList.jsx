"use client";
import React, { useEffect, useState } from "react";
// import Button from '../../Util/Button';
import { BiArrowToLeft, BiArrowToRight } from "react-icons/bi";
import Link from "next/link";
import Image from "next/image";
import dynamic from "next/dynamic";
import { toast } from "react-hot-toast";
import Loading from "../loading";
import { HiShoppingCart, HiOutlineHeart, HiHeart } from "react-icons/hi";
import FavoriteBtn from "./FavoriteBtn";
import ButtonFilled from "../../../common/ButtonFilled";

const LazyComponent = dynamic(() => import("../../../common/LazyComponent"));

const ProductOfList = ({ product, isLoading, cart, setCart }) => {
  // const [productData, setProductData] = useState([]);

  const getProduct = (id) => {
    try {
      let quantity = 0;
      /* const checkProductInThere = cart.find(item => item.id === id ? item.quantity =+ 1 : (product.find((item) => {
        item.quantity = 1;
        return item.id === id;
      }))) */
      const checkProductInThere = product.find((item) => {
        item.quantity = 1;
        return item.id === id;
      });
      setCart((prevItem) => [...prevItem, checkProductInThere]);

      cart.find((item) => item.id === id && (item.quantity += 1));

      toast.success("Product Added");
    } catch (error) {
      toast.error("product not found");
    }
  };

  return (
    <>
      {isLoading ? (
        <h2 className="text-3xl font-bold text-lime-800">Fetching Data...</h2>
      ) : (
        product?.map((singleProduct) => {
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
            <div
              key={id}
              className="card relative z-10 flex h-max animate-moveUp flex-col items-center justify-between gap-2 bg-nutral3 transition-colors duration-100 ease-in-out hover:bg-[#f5f5f5]"
            >
              <div className="absolute right-3 top-3">
                <FavoriteBtn />
              </div>
              <Link href={`/product/${id}`} className="">
                <div>
                  <LazyComponent img={img} />

                  <div className="z-20 px-4 pb-4 pt-2 text-nutral2">
                    <h2 className="mt-2 text-base font-semibold uppercase">
                      {cat}
                    </h2>
                    <div>
                      <h2 className="line-clamp-1 sm:text-lg">
                        {" "}
                        {title.split(" ").length <= 5
                          ? `${titleLength}`
                          : `${titleLength}...`}
                      </h2>
                    </div>
                    <div className="flex items-center justify-between gap-4 py-2">
                      <h2>
                        {" "}
                        <span className="text-lg font-bold text-primary">
                          $ {price}
                        </span>
                      </h2>
                      <p className="text-base">
                        Rating :{" "}
                        <span className="text-base font-bold text-nutral2">
                          {rating.rate}
                        </span>
                      </p>
                    </div>
                  </div>
                </div>
              </Link>
              <div className="flex w-full items-center justify-between px-4 pb-4">
                <ButtonFilled
                  btnLebel="add to cart"
                  btnType="button"
                  onClick={() => getProduct(id)}
                  classNames="group flex w-full cursor-pointer items-center justify-center gap-2 rounded-md border border-primary bg-transparent  px-4 py-2 text-sm font-bold capitalize text-primary drop-shadow-lg transition-all duration-200 ease-in-out hover:border-transparent hover:bg-nutral3 hover:text-primary hover:drop-shadow-md"
                >
                  <span>
                    <HiShoppingCart className="text-2xl text-primary " />
                  </span>
                </ButtonFilled>
              </div>
            </div>
          );
        })
      )}
    </>
  );
};

export default ProductOfList;

/* 
<>
      <div className="grid gap-4 grid-cols-productLayout">
        <ProductData productData={currPageContent} />
      </div>
      <div className="flex items-center justify-center mt-8">
        <BiArrowToLeft
          className="text-2xl cursor-pointer"
          onClick={handlePrev}
        />
        {pageArr.map((page, indx) => {
          return (
            <p
              onClick={() => setCurrPage(indx + 1)}
              className={currPage === indx + 1 ? "text-base cursor-pointer transition-all ease-in-out duration-200 py-2 px-4 bg-lime-700 rounded-md text-white" : "text-base cursor-pointer py-2 px-4"}
              key={indx}
            >
              {page}
            </p>
          );
        })}
        <BiArrowToRight
          className="text-2xl cursor-pointer"
          onClick={handleNext}
        />
      </div>
    </>
 */
