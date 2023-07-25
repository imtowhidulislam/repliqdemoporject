"use client";
import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { RiShoppingBagFill } from "react-icons/ri";
import { FaTrash } from "react-icons/fa";
import Link from "next/link";
import { useQuery } from "@tanstack/react-query";
import { HiCheckCircle } from "react-icons/hi";
import Image from "next/image";

const Dashboard = () => {
  const [productValue, setProductValue] = useState([]);

  const fetchData = async () => {
    const res = await fetch("https://fakestoreapi.com/products");
    const data = await res.json();
    if (!res.ok) throw Error("Url might be not found.");

    setProductValue([...data]);
    return data;
  };

  const productList = useQuery({
    queryKey: ["productData"],
    queryFn: fetchData,
  });

  const removeItem = (id) => {
    try {
      setProductValue((current) => current.filter((item) => item.id !== id));
      toast.success("Product Deleted");
    } catch (error) {
      toast.error("Product not found");
    }
  };

  return (
    <div>
      <div>
        <h2 className="mb-4 text-base uppercase md:text-2xl font-bold ">
          total no of product is : {productValue.length}
        </h2>
        <div className="">
          {productValue.map((item) => {
            const { id, title, price, image, category } = item;
            const setDelay = id * 100;
            return (
              <div
                key={id}
                className={`border z-0 mb-2 flex animate-moveUp items-center justify-between gap-8 rounded-md border-baseClr1 bg-nutral3 p-3 drop-shadow-md delay-[${setDelay}]`}
              >
                <div className="flex items-center gap-3 md:gap-8">
                  <div className="h-20 shrink-0 w-20 overflow-hidden rounded-md">
                    <Image
                      className="h-20 w-full object-center object-cover aspect-square"
                      src={image}
                      alt="image"
                      width={50}
                      height={50}
                    />
                  </div>
                  <div className="text-nutral2">
                    <h2 className="text-left text-small font-medium capitalize md:text-base ">
                      {title}
                    </h2>
                    <h2 className="text-left text-xs font-bold capitalize text-nutral2 md:text-base">
                      {category}
                    </h2>
                    <h2 className="text-left text-base font-extrabold text-primary capitalize md:text-base">
                      ${price}
                    </h2>
                  </div>
                </div>
                <div>
                  <div>
                    <button
                      className="cursor-pointer text-xl text-red-400 transition-all duration-200 ease-in-out hover:animate-bounce hover:text-red-600"
                      onClick={() => removeItem(id)}
                    >
                      <FaTrash />
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
