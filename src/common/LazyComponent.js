import React from "react";
import Image from "next/image";

const LazyComponent = ({ img }) => {
  return (
    <>
      <div className="m-auto mb-4 h-60 max-w-xs p-4">
        <Image
          className="objece-center block aspect-square h-60 object-cover"
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
