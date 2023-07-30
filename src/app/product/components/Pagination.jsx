import React, { useState } from "react";
import { HiArrowCircleLeft, HiArrowCircleRight } from "react-icons/hi";

function Pagination({ product }) {
  const [currPage, setCurrPage] = useState(0);

  // !! Createing A variable to track the context per page.
  let contentPerPage = 4;

  // ?? Slicing the array into several page.
  const slicedData = product?.slice(
    currPage * contentPerPage,
    currPage + 1 * contentPerPage
  );

  // *** Creating approximate pages.
  const pages = Math.ceil(product?.length / contentPerPage);
  const generatedPages = Array.from({ length: pages }, (_, index) => index + 1);

  return (
    <div className="flex w-full items-center justify-center gap-1">
      <div className="grid place-items-center">
        <button disabled={currPage <= 1 ? true : false}>
          <HiArrowCircleLeft className="cursor-pointer text-2xl text-nutral2" />
        </button>
      </div>
      {generatedPages?.map((page, i) => {
        return (
          <div key={i} className="">
            <button className="p-1">{page}</button>
          </div>
        );
      })}
      <div className="grid place-items-center">
        <button disabled={currPage}>
          <HiArrowCircleRight className="cursor-pointer text-2xl text-nutral2" />
        </button>
      </div>
    </div>
  );
}

export default Pagination;
