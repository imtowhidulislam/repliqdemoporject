"use client";
import React, { useEffect, useState } from "react";
import { toast } from "react-hot-toast";
import ProductCard from "@/common/ProductCard";

const ProductOfList = ({ product, isLoading, cart, setCart }) => {
    const getProduct = (id) => {
        try {
            const checkProductInThere = product.find((item) => {
                item.quantity = 1;
                return item.id === id;
            });
            setCart((prevItem) => [...prevItem, checkProductInThere]);

            cart.find((item) => item.id === id && (item.quantity += 1));

            toast.success("Product Added");
        } catch (error) {
            toast.error("product not found");
        }
    };

    return (
        <>
            {isLoading ? (
                <h2 className="text-3xl font-bold text-lime-800">
                    Fetching Data...
                </h2>
            ) : (
                product?.map((singleProduct) => {
                    const {
                        id,
                        title,
                        description: desc,
                        image: img,
                        price,
                        rating,
                        category: cat,
                    } = singleProduct;
                    const titleLength = title.split(" ").slice(0, 5).join(" ");
                    return (
                        <ProductCard
                            addProduct={() => getProduct(id)}
                            id={id}
                            title={title}
                            img={img}
                            price={price}
                            rating={rating}
                            category={cat}
                        />
                    );
                })
            )}
        </>
    );
};

export default ProductOfList;
