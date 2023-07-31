"use client";
import Link from "next/link";
import React, { useState, useEffect, useContext } from "react";
import { VscAccount } from "react-icons/vsc";
import { RiShoppingBagFill } from "react-icons/ri";
import { FaBars } from "react-icons/fa";
import { RxCross1 } from "react-icons/rx";
import { BsCartPlus } from "react-icons/bs";
import SearchButton from "../SearchButton";
import CartContextProvider from "../../context/cartContext";
import { usePathname } from "next/navigation";

const NavbarMain = ({ params }) => {
    const currentPath = usePathname();
    const { cart } = useContext(CartContextProvider);
    const [cartItem, setCartItem] = cart;
    const [toggleNav, setToggleNav] = useState(false);
    const [width, setWidth] = useState(window?.innerWidth);

    useEffect(() => {
        if (typeof window !== "undefined") {
            const calcSize = () => {
                setWidth(window.innerWidth);
            };

            setToggleNav(true);
            window.addEventListener("resize", calcSize);
            return () => {
                window.removeEventListener("resize", calcSize);
            };
        }
    }, []);

    // ? Navbar Toggle Functionality...
    const handleToggle = () => {
        setToggleNav(!toggleNav);
    };
    const toggleMobNav = () => {
        setToggleNav(true);
    };

    return (
        <div className="fixed left-0 top-0 z-[999] w-full bg-baseClr1 md:relative md:bg-transparent">
            <div className="container py-4">
                {width >= 768 ? (
                    <nav className="flex w-full max-w-7xl items-center justify-between gap-2">
                        <div>
                            <Link
                                href="/"
                                className="flex items-center justify-center"
                            >
                                <span className="text-4xl text-primary">
                                    <RiShoppingBagFill />
                                </span>
                                <h2 className="text-3xl font-bold uppercase text-primary">
                                    repliq
                                </h2>
                            </Link>
                        </div>
                        <div className="flexRow gap-2">
                            <Link
                                className={
                                    currentPath === "/"
                                        ? "navList navLink text-primary"
                                        : "navLink navList"
                                }
                                href="/"
                            >
                                Home
                            </Link>
                            <Link
                                className={
                                    currentPath === "/product"
                                        ? "navLink navList text-primary"
                                        : "navLink navList"
                                }
                                href="/product"
                            >
                                Product
                            </Link>
                            <Link
                                className={
                                    currentPath === "/dashboard"
                                        ? "navLink navList text-primary"
                                        : "navLink navList"
                                }
                                href="/dashboard"
                            >
                                Dashboard
                            </Link>
                        </div>
                        {currentPath === "/product" && (
                            <div className="flexRow gap-4">
                                <li>
                                    <SearchButton />
                                </li>
                            </div>
                        )}
                        <div className="flexRow gap-4">
                            <li className="flex items-center gap-2">
                                <Link
                                    className={
                                        currentPath === "/register"
                                            ? "navLink text-primary"
                                            : "navLink"
                                    }
                                    href="/register"
                                >
                                    {" "}
                                    <span>
                                        <span>
                                            <VscAccount className="pr-2 text-3xl" />
                                        </span>
                                    </span>
                                    Sign Up
                                </Link>
                            </li>
                            <li className="flex items-center gap-2 ">
                                <span className="countCart"></span>
                                <Link
                                    className={
                                        currentPath === "/cart"
                                            ? "navLink text-primary"
                                            : "navLink"
                                    }
                                    href="/cart"
                                >
                                    <span className="relative">
                                        <BsCartPlus className="pr-2 text-3xl" />
                                        <span>
                                            <p
                                                className={
                                                    currentPath === "/cart"
                                                        ? "absolute -top-2 left-1 mb-1 ml-1 flex h-5 w-5 items-center justify-center rounded-full bg-nutral2 text-base  font-semibold text-nutral3"
                                                        : "absolute -top-2 left-1 mb-1 ml-1 flex h-5 w-5 items-center justify-center rounded-full bg-nutral2 text-base  font-semibold text-nutral3"
                                                }
                                            >
                                                {cartItem.length}
                                            </p>
                                        </span>
                                    </span>
                                    Cart{" "}
                                </Link>
                            </li>
                        </div>
                    </nav>
                ) : (
                    <nav className="z-[999] flex items-center justify-between">
                        <div>
                            <h2 className="flex items-center gap-2 text-2xl font-bold uppercase text-primary">
                                <span className="text-primary">
                                    <RiShoppingBagFill />
                                </span>
                                repliq
                            </h2>
                        </div>
                        <div
                            className="z-[110] cursor-pointer font-bold text-nutral2 md:hidden"
                            onClick={handleToggle}
                        >
                            {toggleNav ? <FaBars /> : <RxCross1 />}
                        </div>
                        <div
                            className={
                                !toggleNav
                                    ? "fixed inset-y-0 right-0 w-3/4 bg-nutral3 px-6 py-28 backdrop-blur-md transition-all duration-500 ease-in-out md:static md:px-4 md:py-4"
                                    : "fixed inset-y-0 -right-full w-3/4 bg-nutral3 px-6 py-28 backdrop-blur-md transition-all delay-100 duration-500 ease-in-out md:bg-transparent md:px-4 md:py-0"
                            }
                        >
                            <div className="">
                                <div className="flex flex-col gap-4 md:flex-row md:items-center">
                                    <Link
                                        onClick={toggleMobNav}
                                        className={
                                            currentPath === "/"
                                                ? "navLink navList text-primary"
                                                : "navLink navList  text-nutral2"
                                        }
                                        href="/"
                                    >
                                        Home
                                    </Link>
                                    <Link
                                        onClick={toggleMobNav}
                                        className={
                                            currentPath === "/product"
                                                ? "navLink navList text-primary"
                                                : "navLink navList text-nutral2"
                                        }
                                        href="/product"
                                    >
                                        Product
                                    </Link>
                                    <Link
                                        onClick={toggleMobNav}
                                        className={
                                            currentPath === "/dashboard"
                                                ? "navLink navList text-primary"
                                                : "navLink navList text-nutral2"
                                        }
                                        href="/dashboard"
                                    >
                                        Dashboard
                                    </Link>
                                    <li className="navList flex items-center justify-start gap-2 py-2">
                                        <Link
                                            onClick={toggleMobNav}
                                            className={
                                                currentPath === "/register"
                                                    ? "flex items-center font-bold text-primary"
                                                    : "flex items-center font-bold text-nutral2"
                                            }
                                            href="/register"
                                        >
                                            {" "}
                                            <span>
                                                <VscAccount className="pr-2 text-2xl" />{" "}
                                            </span>{" "}
                                            Sign Up
                                        </Link>
                                    </li>{" "}
                                    <li className="navList flex items-center justify-start gap-2 py-2 font-bold">
                                        <Link
                                            onClick={toggleMobNav}
                                            className={
                                                currentPath === "/cart"
                                                    ? "flex items-center font-bold text-primary"
                                                    : "flex items-center font-bold text-nutral2"
                                            }
                                            href="/cart"
                                        >
                                            {" "}
                                            <span className="relative">
                                                <BsCartPlus className="pr-2 text-2xl font-bold" />
                                                <span>
                                                    <p
                                                        className={
                                                            currentPath ===
                                                            "/cart"
                                                                ? "absolute -top-2 left-1 mb-1 ml-1 flex h-4 w-4 items-center justify-center rounded-full bg-nutral2 text-small font-bold text-nutral3"
                                                                : "absolute -top-2 left-1 mb-1 ml-1 flex h-4 w-4 items-center justify-center rounded-full bg-nutral2 text-small font-bold text-nutral3"
                                                        }
                                                    >
                                                        {cartItem.length}
                                                    </p>
                                                </span>
                                            </span>{" "}
                                            Cart{" "}
                                        </Link>
                                    </li>
                                </div>
                            </div>
                        </div>
                    </nav>
                )}
            </div>
        </div>
    );
};

export default NavbarMain;

/*
    <div className="z-[999] w-full bg-nutral1 md:relative md:bg-transparent ">
      <div className="">
        <nav className="flex items-center justify-between px-8 py-4 z-[999]">
          <div>
            <h2 className="flex items-center gap-2 text-2xl font-bold uppercase text-primary">
              <span className="text-primary">
                <RiShoppingBagFill />
              </span>
              repliq
            </h2>
          </div>
          <div className="cursor-pointer z-[110] md:hidden" onClick={handleToggle}>
            {!toggleNav ? <FaBars /> : <RxCross1 />}
          </div>
          <div
            className={
              toggleNav
                ? "fixed inset-y-0 right-0 w-3/4 transition-all ease-in-out duration-500 py-28 md:py-4 px-12 md:px-4 bg-slate-500 md:bg-transparent md:static md:flex md:justify-end"
                : "fixed transition-all delay-100 w-3/4 md:flex md:justify-end -right-full md:static ease-in-out duration-500 inset-y-0 py-28 md:px-4 md:py-0 px-12 bg-slate-500 md:bg-transparent"
            }
          >
            <div className="">
              <div className="flex flex-col gap-4 md:flex-row md:items-center">
                <Link
                  onClick={toggleMobNav}
                  className={currentPath === "/" ? "text-gray-100" : ""}
                  href="/"
                >
                  Home
                </Link>
                <Link
                  onClick={toggleMobNav}
                  className={
                    currentPath === "/Product"
                      ? "navLink navList text-nutral3"
                      : "navLink navList"
                  }
                  href="/Product"
                >
                  Product
                </Link>
                <Link
                  onClick={toggleMobNav}
                  className={
                    currentPath === "/Dashboard"
                      ? "navLink navList text-nutral3"
                      : "navLink navList"
                  }
                  href="/Dashboard"
                >
                  Dashboard
                </Link>
                <li className="flex items-center justify-start gap-2 py-2 navList">
                  <Link
                    onClick={toggleMobNav}
                    className={
                      currentPath === "/Register"
                        ? "flex items-center text-gray-100"
                        : "flex items-center"
                    }
                    href="/Register"
                  >
                    {" "}
                    <span>
                      <VscAccount className="pr-2 text-2xl" />{" "}
                    </span>{" "}
                    Account
                  </Link>
                </li>{" "}
                <li className="flex items-center justify-start gap-2 py-2 navList">
                  <Link
                    onClick={toggleMobNav}
                    className={
                      currentPath === "/Cart"
                        ? "flex items-center text-gray-100"
                        : "flex items-center"
                    }
                    href="/Cart"
                  >
                    {" "}
                    <span className="relative">
                      <BsCartPlus className="pr-2 text-2xl" />
                      <span>
                        <p
                          className={
                            currentPath === "/Cart"
                              ? "absolute -top-2 left-1 mb-1 ml-1 flex h-4 w-4 items-center justify-center rounded-full bg-nutral2 text-small font-bold text-nutral3"
                              : "absolute -top-2 left-1 mb-1 ml-1 flex h-4 w-4 items-center justify-center rounded-full bg-nutral2 text-small font-bold text-nutral3"
                          }
                        ></p>
                      </span>
                    </span>{" "}
                    Cart{" "}
                  </Link>
                </li>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </div>
*/
