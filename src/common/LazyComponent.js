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
                    width={280}
                    height={200}
                    // sizes="(max-width: 250px)"
                />
            </div>
        </>
    );
};

export default LazyComponent;
