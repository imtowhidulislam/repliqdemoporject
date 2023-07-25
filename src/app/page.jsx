"use client";
import { useContext, useState } from "react";
import Image from "next/image";
import { RiH2 } from "react-icons/ri";
import ImageOne from "../../public/shopping.svg";
// import ImageTwo from "../..public/imageTwo.svg"
import Link from "next/link";
import TopratedProduct from "../components/TopratedProduct";
import { useQuery } from "@tanstack/react-query";
import Subscribe from "../components/Subscribe";
import { HiOutlineArrowCircleUp } from "react-icons/hi";
import HomeTopratedProduct from "../components/HomeProduct/page";
import CartContextProvider from "../context/cartContext";
import { useProductData } from "../Data/productData";
// import CounterOne from "./components/CounterOne";
// import CounterTwo from "./components/CounterTwo";

export default function Home() {
  const { data, isLoading, error: error } = useProductData();
  const { cart } = useContext(CartContextProvider);
  const [cartValue, setCartValue] = cart;
  const [product, setProduct] = useState([]);

  return (
    <>
      <div>
        <div>
          <div className="z-10 mt-16 overflow-hidden py-12 md:py-20 md:mt-0">
            <header className="container z-0 grid grid-cols-homepageLayoutHero1 place-items-center gap-12 md:gap-16 lg:gap-20">
              <div className="z-0 animate-moveUp">
                <div>
                  <h2 className="bg-gradient-to-r from-accent to-primary bg-clip-text text-left text-4xl font-extrabold uppercase text-transparent md:text-5xl lg:text-7xl">
                    shopping and department store
                  </h2>
                </div>

                <p className="py-4 text-left text-sm text-nutral2 sm:text-base md:text-base">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Dolores eaque eligendi animi accusamus voluptatibus cupiditate
                  consequuntur doloribus repudiandae adipisci temporibus?
                </p>
                <p className="pb-4 text-left text-sm text-nutral2 sm:text-base md:text-base">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Reprehenderit, voluptatem!
                </p>
                <div className="">
                  <li className=" flex w-max cursor-pointer justify-start rounded-full bg-nutral3 px-8 py-3 font-extrabold text-nutral2 drop-shadow-md transition-colors duration-300 ease-in-out hover:bg-primary  hover:text-nutral3">
                    <Link href="/product">
                      <button className="flex items-center justify-between gap-2 capitalize">
                        shop now{" "}
                        <HiOutlineArrowCircleUp className="animate-pulse text-xl" />{" "}
                      </button>
                    </Link>
                  </li>
                </div>
              </div>
              <div className="animate-moveUp md:m-8 lg:m-12">
                <Image src={ImageOne} alt="" width={700} height={700} />
              </div>
            </header>
          </div>
          <HomeTopratedProduct />
          <div className="z-0">
            <Subscribe />
          </div>
        </div>
      </div>
    </>
  );
}
