"use client";
import React, { useEffect, useState } from "react";
import { toast } from "react-hot-toast";
import ProductCard from "@/common/ProductCard";

const ProductOfList = ({ product, isLoading, cart, setCart }) => {
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
            <ProductCard
              addProduct={() => getProduct(id)}
              id={id}
              title={title}
              img={img}
              price={price}
              rating={rating}
              category={cat}
            />
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
