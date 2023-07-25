import React, { useContext, useEffect, useState } from "react";
import { RxCross1 } from "react-icons/rx";
import Link from "next/link";
import dynamic from "next/dynamic";
import { useQuery } from "@tanstack/react-query";
import Image from "next/image";
import { useProductData } from "../../Data/productData";
import { toast } from "react-hot-toast";
import CartContextProvider from "../../context/cartContext";
import Loading from "@/app/product/loading";
import FavoriteBtn from "@/app/Product/components/FavoriteBtn";
import { HiShoppingCart } from "react-icons/hi";
import ButtonFilled from "../../common/ButtonFilled";
const LazyComponent = dynamic(() => import("../../common/LazyComponent"));

const HomeTopratedProduct = () => {
  const { cart } = useContext(CartContextProvider);
  // const { data, isLoading, error: error } = useProductData();
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

  console.log(data);
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
          <div className="mb-8 px-4 sm:px-0 md:mb-12">
            <h2
              className={
                isLoading
                  ? "animate-pulse bg-gradient-to-r from-nutral2 to-nutral2 bg-clip-text text-xl font-extrabold uppercase text-transparent md:text-5xl"
                  : "bg-gradient-to-r from-nutral2 to-nutral2 bg-clip-text text-xl font-extrabold uppercase text-transparent md:text-5xl"
              }
            >
              Top Rated Product
            </h2>
          </div>
          {isLoading ? (
            <h2 className="text-center text-2xl font-bold">Loading...</h2>
          ) : (
            <div className="ms:px-0 grid w-full grid-cols-productLayout place-items-center gap-4 overflow-hidden px-4 sm:grid-cols-productLayout">
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
                  <div
                    key={id}
                    className={`card relative z-10 flex h-max animate-moveUp flex-col items-center justify-between gap-2 bg-nutral3 transition-colors duration-100 ease-in-out hover:bg-[#f5f5f5]`}
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
                        btnType="button"
                        btnLebel="add to cart"
                        onClick={() => addToCart(id)}
                        classNames="group flex w-full cursor-pointer items-center justify-center gap-2 rounded-md border border-primary bg-transparent  px-4 py-2 text-sm font-bold capitalize text-primary drop-shadow-lg transition-all duration-200 ease-in-out hover:border-transparent hover:bg-nutral3 hover:text-primary hover:drop-shadow-md"
                      >
                        <span>
                          <HiShoppingCart className="text-2xl text-primary " />
                        </span>
                      </ButtonFilled>
                    </div>
                  </div>
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
