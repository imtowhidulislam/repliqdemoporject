import React from "react";
import Image from "next/image";
import FavoriteBtn from "@/app/product/components/FavoriteBtn";

const LazyComponent = ({ img }) => {
  return (
    <>
      <div className="grid max-w-xs  place-items-center h-60">
        <Image
          className="block object-cover objece-center aspect-square h-60"
          src={img}
          alt=""
          width={300}
          height={400}
        />
      </div>
    </>
  );
};

export default LazyComponent;
