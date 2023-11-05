"use client"
import React, { useContext, useEffect, useState } from "react";
import Link from "next/link";
import dynamic from "next/dynamic";
import { useQuery } from "@tanstack/react-query";
import CartContextProvider from "../../context/cartContext";
import ButtonFilled from "../../common/ButtonFilled";
import ProductCard from "@/common/ProductCard";

const HomeTopratedProduct = () => {
  const { cart } = useContext(CartContextProvider);
  const [topRate, setTopRate] = useState([]);
  const [cartValue, setCartValue] = cart;

  // ?? Fetching Data use TanStack Query...
  const fetchData = async () => {
    const res = await fetch("https://fakestoreapi.com/products");
    const data = await res.json();
    if (!res.ok) throw new Error("Url might be not found.");

    const topProducts = data?.filter((item) => item.rating.rate >= 4.0);

    // !! Sorting Top Rated Item By Accending order..
    const sortTopRatedArray = topProducts.sort(
      (a, b) => a.rating.rate - b.rating.rate
    );
    setTopRate(sortTopRatedArray);

    return data;
  };
  const { data, isLoading, error } = useQuery({
    queryKey: ["productData"],
    queryFn: fetchData,
  });

  const addToCart = (id) => {
    try {
      const fetchCartItem = data?.find((item) => {
        item.quantity = 1;
        return item.id === id;
      });
      setCartValue((prevItem) => [...prevItem, fetchCartItem]);

      cartValue.find((item) => item.id === id && (item.quantity += 1));

      toast.success("Product Added");
    } catch (error) {
      toast.error("Product not found");
    }
  };

  if (error) return "Url might not be found" + error.message;

  return (
    <div>
      <div>
        <div className="container py-20">
          <div className="px-4 mb-8 sm:px-0 md:mb-12 flex items-baseline justify-between gap-4 flex-wrap">
            <h2
              className={
                isLoading
                  ? "animate-pulse bg-gradient-to-r from-nutral2 to-nutral2 bg-clip-text text-xl font-extrabold uppercase text-transparent md:text-5xl"
                  : "bg-gradient-to-r from-nutral2 to-nutral2 bg-clip-text text-xl font-extrabold uppercase text-transparent md:text-5xl"
              }
            >
              Top Rated Product
            </h2>
            <div>
              <Link href="/product">
                <ButtonFilled btnLebel="see all products" btnType="button" classNames="py-2 px-8 capitalize font-semibold cursor-pointer w-max bg-primary text-nutral3 hover:bg-[#0c349b] rounded-md transition-all ease-in-out duration-[300ms]" />
              </Link>
            </div>
          </div>
          {isLoading ? (
            <h2 className="text-2xl font-bold text-center">Loading...</h2>
          ) : (
            <div className="grid w-full gap-4 px-4 overflow-hidden ms:px-0  place-items-center grid-cols-productLayout">
              {topRate?.map((topProduct, inx) => {
                const {
                  id,
                  title,
                  price,
                  rating,
                  image: img,
                  category: cat,
                } = topProduct;
                const titleLength = title.split(" ").slice(0, 5).join(" ");
                return (
                  <>
                    <ProductCard
                      addProduct={() => addToCart(id)}
                      id={id}
                      title={title}
                      price={price}
                      rating={rating}
                      img={img}
                      category={cat}
                    />
                  </>
                );
              })}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default HomeTopratedProduct;
