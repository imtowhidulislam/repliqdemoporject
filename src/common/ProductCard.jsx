import React from "react";
import FavoriteBtn from "@/app/product/components/FavoriteBtn";
import Link from "next/link";
import dynamic from "next/dynamic";
import ButtonFilled from "./ButtonFilled";
import { HiShoppingCart } from "react-icons/hi";
const LazyComponent = dynamic(() => import("../common/LazyComponent"));

const ProductCard = (props) => {
  const {
    id,
    img,
    title,
    price,
    rating,
    category,
    addProduct = () => {},
  } = props;
  return (
    <>
      <div
        key={id}
        className={`card p-4 z-10 flex h-max animate-moveUp flex-col items-center justify-between gap-2 bg-nutral3`}
      >
        
        <Link href={`/product/${id}`} className="">
          <div>
            <LazyComponent img={img} />
            <div className="z-20 text-nutral2">
              <h2 className="mt-2 text-base font-semibold uppercase">
                {category}
              </h2>
              <div>
                <h2 className="line-clamp-1 sm:text-lg"> {title}</h2>
              </div>
              <div className="flex items-center justify-between gap-4 py-2">
                <h2>
                  {" "}
                  <span className="text-xl font-bold text-primary">
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
        <div className="flex items-center justify-between w-full gap-2">
          <ButtonFilled
            btnType="button"
            btnLebel="add to cart"
            onClick={addProduct}
            classNames="group flex w-full cursor-pointer items-center justify-center gap-2 rounded-md border border-primary bg-transparent py-2 text-sm font-bold capitalize text-primary drop-shadow-lg transition-all duration-200 ease-in-out hover:border-transparent hover:bg-nutral3 hover:text-primary hover:drop-shadow-md"
          >
            <span>
              <HiShoppingCart className="text-2xl text-primary" />
            </span>
          </ButtonFilled>
          <div className="px-2 py-1 border rounded-md border-primary w-max">
          <FavoriteBtn />
        </div>
        </div>
      </div>
    </>
  );
};

export default ProductCard;
