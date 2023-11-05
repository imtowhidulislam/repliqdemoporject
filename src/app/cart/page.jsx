"use client";
import React, { useEffect, useContext, useRef, useState } from "react";
import { HiArchiveBoxXMark } from "react-icons/hi2";
import CartContextProvider from "../../context/cartContext";
import Image from "next/image";
import { toast } from "react-hot-toast";
import AddToCart from "../../../public/addtocart.svg";
import ButtonFilled from "@/common/ButtonFilled";
import Link from "next/link";
import Modal from "@/common/Modal";

const Cart = () => {
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const { cart } = useContext(CartContextProvider);
    const [cartValue, setCartValue] = cart;
    const [uniqueCart, setUniqueCart] = useState([]);
    const counterRef = useRef(null);

    const deleteItem = () => {
        setModalIsOpen(true);
        uniqueCart.length === 0 && toast.error("Cart is empty");
    };
    // ?? delete Individual Cart Item..
    const deleteCartItem = (id) => {
        try {
            setUniqueCart((currItem) =>
                currItem.filter((item) => item.id !== id)
            );
            setCartValue((currItem) =>
                currItem.filter((item) => item.id !== id)
            );
            toast.success("Product Removed");
        } catch (error) {
            toast.error("Product not found");
        }
    };
    const fetchUniqueCart = () => {
        const uniqueItem = new Set(cartValue.map(JSON.stringify));
        const uniqueProduct = Array.from(uniqueItem).map(JSON.parse);
        setUniqueCart((prevItem) => [...prevItem, ...uniqueProduct]);
    };
    useEffect(() => {
        fetchUniqueCart();
    }, []);

    const total = uniqueCart
        .reduce((total, item) => total + item.quantity * item.price, 0)
        .toFixed(2);

    return (
        <div className="relative py-16 cartHeight">
            <div className="container p-2 sm:p-4 md:p-0">
                <div className="grid gap-24 grid-cols-productLayout sm:place-items-stretch md:grid-cols-homepageLayoutHero">
                    <div>
                        <div className="flex flex-col items-start justify-between gap-4 mb-8 w-max">
                            <h2 className="text-2xl font-bold text-left capitalize cartTitle ms:text-4xl text-primary">
                                {uniqueCart.length < 1
                                    ? "Your cart is empty"
                                    : `Your Cart has ${cartValue.length} ${
                                          cartValue.length <= 1
                                              ? "product"
                                              : "products"
                                      }`}
                            </h2>
                            <button
                                type="button"
                                onClick={deleteItem}
                                className="flex items-center justify-between gap-2 px-4 py-2 capitalize rounded-md cursor-pointer bg-nutral3 text-denger"
                            >
                                Delete All{" "}
                                <span className="flex items-center justify-center rounded-full bg-[#fafafa] p-1 backdrop-blur-sm">
                                    <HiArchiveBoxXMark className="text-xl hover:animate-shake text-denger" />
                                </span>
                            </button>
                        </div>
                        {uniqueCart.length >= 1 ? (
                            <div>
                                {uniqueCart.map((item) => {
                                    const {
                                        id,
                                        title,
                                        price,
                                        image,
                                        category,
                                        quantity,
                                    } = item;

                                    return (
                                        <div
                                            key={id}
                                            className="flex items-center justify-between gap-8 p-3 mb-2 border-b rounded-md group border-nutral1 bg-nutral3 shadow-nutral2 drop-shadow-md"
                                        >
                                            <div className="flex items-center gap-4">
                                                <div className="w-20 h-20 overflow-hidden rounded-md shrink-0">
                                                    <Image
                                                        className="w-full aspect-square"
                                                        src={image}
                                                        alt="image"
                                                        width={80}
                                                        height={80}
                                                    />
                                                </div>
                                                <div>
                                                    <h2 className="text-xs font-semibold text-left capitalize text-nutral2 md:text-base">
                                                        {title}
                                                    </h2>
                                                    <h2 className="py-1 text-xs font-bold text-left capitalize text-nutral2 md:text-xl">
                                                        {category}
                                                    </h2>
                                                    <h2 className="text-xl font-bold text-left capitalize text-primary md:text-base">
                                                        ${price}
                                                    </h2>
                                                </div>
                                            </div>
                                            <div>
                                                <div className="grid gap-2 place-items-center">
                                                    <div className="">
                                                        <button
                                                            onClick={() =>
                                                                deleteCartItem(
                                                                    id
                                                                )
                                                            }
                                                            className="mb-2 cursor-pointer"
                                                        >
                                                            <HiArchiveBoxXMark className="text-xl text-denger" />
                                                        </button>
                                                    </div>
                                                    {/* <Counter setUniqueCart={setUniqueCart} uniqueCart={uniqueCart} productId={id} quantity={quantity} /> */}
                                                    Qnty.
                                                    <div className="text-xl font-bold text-primary">
                                                        {quantity}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>
                        ) : (
                            <div className="grid w-full overflow-hidden place-items-center">
                                <div className="z-10 animate-moveUp">
                                    <Image
                                        src={AddToCart}
                                        alt="empty cart"
                                        width={400}
                                        height={400}
                                    />
                                </div>
                                <div className="z-20 grid w-full mt-6 place-items-center">
                                    <Link href="/product">
                                        <ButtonFilled
                                            btnLebel="add product"
                                            btnType="button"
                                            classNames="py-2 px-8 capitalize font-semibold cursor-pointer w-max bg-primary text-nutral3 hover:bg-[#0c349b] rounded-md transition-all ease-in-out duration-[300ms]"
                                        />
                                    </Link>
                                </div>
                            </div>
                        )}
                    </div>

                    <div className="flex flex-col items-start max-h-max">
                        <div className="w-full pb-4 mb-2 border-b border-gray-500">
                            <div className="flex items-center justify-between gap-4">
                                <h2 className="text-base font-medium text-left capitalize">
                                    subtotal
                                </h2>
                                <h2 className="text-base font-medium text-left capitalize">
                                    ${total}
                                </h2>
                            </div>
                            <div className="flex items-center justify-between gap-4">
                                <h2 className="text-base font-medium text-left capitalize">
                                    shipping
                                </h2>
                                <h2 className="text-base font-medium text-left capitalize">
                                    $3.45
                                </h2>
                            </div>
                        </div>
                        <div className="flex items-center justify-between w-full gap-4">
                            <h2 className="text-base font-bold text-left capitalize align-baseline text-primary md:text-xl">
                                total
                            </h2>
                            <h2 className="text-base font-bold text-left capitalize text-primary md:text-xl">
                                {cartValue.length > 0
                                    ? `$ ${(+total + 3.45).toFixed(2)}`
                                    : `$ ${0.0}`}
                            </h2>
                        </div>
                    </div>
                </div>
            </div>

            {uniqueCart.length >= 1 && (
                <div className="absolute left-2/4 top-4 z-[999] -translate-x-2/4 backdrop-blur-md">
                    {modalIsOpen && (
                        <Modal
                            setCartValue={setCartValue}
                            setUniqueCart={setUniqueCart}
                            setModalIsOpen={setModalIsOpen}
                        />
                    )}
                </div>
            )}
        </div>
    );
};

export default Cart;
