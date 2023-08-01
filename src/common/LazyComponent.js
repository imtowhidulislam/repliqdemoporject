import React from "react";
import Image from "next/image";
import FavoriteBtn from "@/app/product/components/FavoriteBtn";

const LazyComponent = ({ img }) => {
    return (
        <>
            <div className="grid max-w-xs  place-items-center  overflow-hidden">
                <Image
                    className="object-cover object-center aspect-square"
                    src={img}
                    alt=""
                    width={250}
                    height={200}
                />
            </div>
        </>
    );
};

export default LazyComponent;
