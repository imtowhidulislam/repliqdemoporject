"use client";
import { useContext, useEffect, useRef, useState } from "react";
import ProductCategory from "./components/productCategory";
import ProductOfList from "./components/ProductOfList";
import { useQuery } from "@tanstack/react-query";
import { HiOutlineArrowUpCircle, HiArrowUpCircle } from "react-icons/hi2";
import { BiArrowToLeft, BiArrowToRight } from "react-icons/bi";
// import { useProductData } from "../Data/productData";
import CartContextProvider from "../../context/cartContext";
import Loading from "./loading";
import {buttonData} from "../../Data/buttonData"
import Example from "./components/productDropDown";
import Pagination from "./components/Pagination";

const Page = () => {
  const sectionRef = useRef(null);
  //   const { data, isLoading, error } = useProductData();
  const { cart, searchProduct } = useContext(CartContextProvider);
  const [cartValue, setCartValue] = cart;
  const [searchProducts, setSearchProducts] = searchProduct;
  const [backToTop, setBackToTop] = useState(false);
  //   const [productValue, setProductValue] = useState(data);
  const [productValue, setProductValue] = useState([]);
  const [button, setButton] = useState([]);
  const [filterProduct, setFilterProduct] = useState("All");
  const [jsonData, setJsonData] = useState([]);

  // !! Fetching Data from API.
  const fetchData = async () => {
    const res = await fetch("https://fakestoreapi.com/products");
    const data = await res.json();
    if (!res.ok) throw Error("Url might be not found.");

    let unique = [...new Set(data?.map((item) => item.category))];
    setButton(unique);

    setProductValue([...data]);
    return data;
  };

  // ?? Setting up the Data using TanStack Query.
  const { data, isLoading, error } = useQuery({
    queryKey: ["productData"],
    queryFn: fetchData,
  });
  // !!! Back To Top
  const handleTop = () => {
    sectionRef.current?.scrollIntoView({
      behavior: "smooth",
    });
  };

  // !! Fetching the Unique Category Product >>>
  const handleClick = (e) => {
    setFilterProduct(e.target.dataset.name);
  };

  const handleOptionChange = (e) => {
    setFilterProduct(e.target.value);
  };

  return (
    <div className="container px-3 py-8 sm:py-4 sm:pb-12 md:px-0 ">
      <div ref={sectionRef} className="mt-12 md-4 sm:mt-16 md:mb-12">
        <h2 className="text-2xl font-extrabold text-left text-transparent uppercase bg-gradient-to-r from-accent to-primary bg-clip-text md:text-center md:text-4xl lg:text-6xl">
          Get your desired Item.
        </h2>
      </div>
      <div className="hidden md:block">
        <div id="buttonSection" className="mt-4 btn_container md:mt-0 ">
          {button && (
            <button
              className={
                filterProduct === "All"
                  ? " cursor-pointer rounded-md border-2 border-primary/50 shadow-md bg-nutral3 px-8 py-2 text-center font-bold capitalize text-nutral2  hover:border-transparent hover:bg-nutral3 hover:text-primary"
                  : "cursor-pointer rounded-md border-2 border-primary/50 bg-transparent px-8 py-2 text-center font-bold capitalize text-nutral2  hover:border-transparent hover:bg-nutral3 hover:text-primary"
              }
              onClick={handleClick}
              data-name="All"
            >
              All
            </button>
          )}
          <div className="flex flex-wrap items-center justify-center gap-2">
            {button.length !== 0
              ? button.map((btns, i) => {
                  return (
                    <>
                      <button
                        key={i}
                        className={
                          filterProduct === btns
                            ? " cursor-pointer rounded-md border-2 border-primary/50 shadow-md bg-nutral3 px-8 py-2 text-center font-bold capitalize text-nutral2  hover:border-transparent hover:bg-nutral3 hover:text-primary"
                            : " cursor-pointer rounded-md border-2 border-primary/50 bg-transparent px-8 py-2 text-center font-bold capitalize text-nutral2 hover:border-transparent hover:bg-nutral3 hover:text-primary"
                        }
                        onClick={handleClick}
                        data-name={btns}
                      >
                        {btns}
                      </button>
                    </>
                  );
                })
              : buttonData.map((btns, i) => {
                  return (
                    <>
                      <button
                        key={i}
                        className={
                          filterProduct === btns
                            ? " cursor-pointer rounded-md border-2 border-primary/50 shadow-md bg-nutral3 px-8 py-2 text-center font-bold capitalize text-nutral2 hover:border-transparent hover:bg-nutral3 hover:text-primary"
                            : " cursor-pointer rounded-md border-2 border-primary/50 bg-transparent px-8 py-2 text-center font-bold capitalize text-nutral2 hover:border-transparent hover:bg-nutral3 hover:text-primary"
                        }
                        onClick={handleClick}
                        data-name={btns}
                      >
                        {btns}
                      </button>
                    </>
                  );
                })}
          </div>
        </div>
      </div>

      <div className="my-8 md:hidden">
        <Example
          setFilterProduct={setFilterProduct}
          people={buttonData || button}
          handleOptionChange={handleOptionChange}
        />
      </div>

      {/* !! fetching product categorically */}
      {isLoading ? (
        <Loading />
      ) : (
        <div
          // ref={sectionRef}
          className="z-10 grid gap-4 mt-10 overflow-hidden md:placeholder-start min-h-custom-min-h grid-cols-productLayout place-items-center"
        >
          {filterProduct === "All" ? (
            <>
              <ProductOfList
                filterProduct={filterProduct}
                product={searchProducts.length > 0 ? searchProducts : data}
                // setProduct={setProductValue}
                isLoading={isLoading}
                cart={cartValue}
                setCart={setCartValue}
              />
            </>
          ) : (
            <ProductCategory
              filterProduct={filterProduct}
              product={data}
              // setProduct={setProductValue}
              isLoading={isLoading}
              cart={cartValue}
              setCart={setCartValue}
            />
          )}
        </div>
      )}

      <div className="hidden py-4 mt-12">
        {filterProduct === "All" && <Pagination product={data} />}
      </div>
      {/* Move to Top Button. */}
      <div className="fixed bottom-5 left-[95%] z-50 w-full">
        <button
          className="p-1 border-2 rounded-full border-nutral2"
          onClick={handleTop}
        >
          {backToTop ? (
            <HiOutlineArrowUpCircle className="topBtn" />
          ) : (
            <HiArrowUpCircle className="topBtn" />
          )}
        </button>
      </div>
    </div>
  );
};

export default Page;
