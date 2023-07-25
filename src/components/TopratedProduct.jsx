import React, { useEffect, useState } from "react";
import { RxCross1 } from "react-icons/rx";
import Link from "next/link";
import { useQuery } from "@tanstack/react-query";
import Image from "next/image";
import { useProductData } from "../Data/productData";

const TopratedProduct = () => {
  const { data, isLoading, error:error } = useProductData();
  const [topRate, setTopRate] = useState([]);
  const [product, setProduct] = useState([]);

  const fetchingTopRatedProducts = () => {
    const topProducts = data?.filter((item) => item.rating.rate >= 4.0);
    return setTopRate(topProducts);
  }; 
  useEffect(() => {
    fetchingTopRatedProducts();
  },[])

  if (error) return "Url might not be found" + error.message;

    return (
    <div>
      <div>
        <div className="container py-20">
          <h2 className="text-xl uppercase mb-6 sm:text-2xl md:text-3xl font-bold font-mono text-left text-[#13194a]">
            Top Rated Items
          </h2>
          {isLoading ? (
            <h2 className="text-2xl font-bold text-center">Loading...</h2>
          ) : (
            <>
              <div className="grid place-items-center grid-cols-productLayout gap-8">
                {topRate?.map((topProduct) => {
                  const { id, title, price, rating, image } = topProduct;
                  const consizeTitle = title.split(" ").slice(0, 5).join(" ");
                  return (
                    <Link key={id} href={`/${id}`}>
                      <div className="flex items-start justify-between flex-col topCard w-72 p-4 shadow-lg rounded-md overflow-hidden bg-lime-200">
                        <div className="topImgCon rounded-md">
                          <Image
                            src={image}
                            alt="product Image"
                            width={300}
                            height={300}
                          />
                        </div>
                        <div className="text-left mt-4 w-full">
                          <h2 className="text-base capitalize font-bold">
                            {title.split(" ").length <= 5 ? `${consizeTitle}` : `${consizeTitle}...`}
                          </h2>
                          <h2 className="text-md font-bold capitalize my-3">
                            $<span className="text-blue-600">{price}</span> USD
                          </h2>
                          <h2 className="text-sm capitalize ">
                            rating :{" "}
                            <span className="text-bold text-blue-800">
                              {rating.rate}
                            </span>
                            <span className="capitalize text-blue-600 font-bold ml-4">
                              ({rating.count})
                            </span>
                          </h2>
                          <div>
                            <button className="capitalize font-base cursor-pointer py-2 px-8 rounded-full w-full mt-4 bg-lime-600 text-lime-100 hover:bg-lime-400 hover:text-lime-900 transition-all duration-200 ease-in-out font-bold font-serif">
                              add to cart
                            </button>
                          </div>
                        </div>
                      </div>
                    </Link>
                  );
                })}
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default TopratedProduct;
