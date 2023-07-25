"use client";
import React, { useEffect, useContext, useRef, useState } from "react";
import { HiArchiveBoxXMark } from "react-icons/hi2";
import CartContextProvider from "../../context/cartContext";
import Image from "next/image";
import { toast } from "react-hot-toast";
import Counter from "../../components/Counter";

const Cart = () => {
  const { cart } = useContext(CartContextProvider);
  const [cartValue, setCartValue] = cart;
  const [uniqueCart, setUniqueCart] = useState([]);
  const counterRef = useRef(null);

  const deleteItem = () => {
    try {
      setCartValue([]);
      setUniqueCart([]);

      toast.success("All products are deleted");
    } catch (error) {
      toast.error("Can't perform the operation.");
    }
  };
  // ?? delete Individual Cart Item..
  const deleteCartItem = (id) => {
    try {
      setUniqueCart((currItem) => currItem.filter((item) => item.id !== id));
      setCartValue((currItem) => currItem.filter((item) => item.id !== id));
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
    <div className="py-16 cartHeight">
      <div className="container p-2 sm:p-4 md:p-0 ">
        <div className="flex flex-col items-start justify-between gap-4 mb-8 sm:items-center sm:flex-row sm:gap-20">
          <h2 className="text-2xl font-bold text-left capitalize cartTitle ms:text-4xl text-primary">
            {uniqueCart.length < 1
              ? "Your cart is empty"
              : `Your Cart has ${cartValue.length} ${
                  cartValue.length <= 1 ? "product" : "products"
                }`}
          </h2>
          <button
            type="button"
            onClick={deleteItem}
            className="flex items-center justify-between gap-2 px-4 py-2 capitalize rounded-md shadow-md cursor-pointer bg-nutral3 text-denger"
          >
            Delete All{" "}
            <span className="flex items-center justify-center rounded-full bg-[#fafafa] p-1 backdrop-blur-sm">
              <HiArchiveBoxXMark className="text-xl hover:animate-shake text-denger" />
            </span>
          </button>
        </div>
        <div className="grid gap-24 grid-cols-productLayout sm:place-items-stretch md:grid-cols-homepageLayoutHero">
          <div>
            {uniqueCart.map((item) => {
              const { id, title, price, image, category, quantity } = item;

              return (
                <div
                  key={id}
                  className="flex items-center justify-between gap-8 p-3 mb-2 border-b rounded-md group border-nutral1 bg-nutral3 shadow-nutral2 drop-shadow-md"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-20 h-20 overflow-hidden rounded-md shrink-0">
                      <Image
                        className="object-cover object-center h-full aspect-square"
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
                          onClick={() => deleteCartItem(id)}
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
    </div>
  );
};

export default Cart;
