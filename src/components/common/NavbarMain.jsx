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
    <div className="fixed left-0 top-0 z-[999] w-full bg-nutral1 md:relative md:bg-transparent">
      <div className="container py-4">
        {width > 768 ? (
          <nav className="flex w-full max-w-7xl items-center justify-between gap-2">
            <div>
              <Link href="/">
                <h2 className="flex items-center gap-2 text-3xl font-bold uppercase text-primary">
                  <span className="text-4xl text-primary">
                    <RiShoppingBagFill />
                  </span>
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
                  currentPath === "/Product"
                    ? "navLink navList text-primary"
                    : "navLink navList"
                }
                href="/Product"
              >
                Product
              </Link>
              <Link
                className={
                  currentPath === "/Dashboard"
                    ? "navLink navList text-primary"
                    : "navLink navList"
                }
                href="/Dashboard"
              >
                Dashboard
              </Link>
            </div>
            {currentPath === "/Product" && (
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
                    currentPath === "/Register"
                      ? "navLink text-primary"
                      : "navLink"
                  }
                  href="/Register"
                >
                  {" "}
                  <span>
                    <span>
                      <VscAccount className="pr-2 text-3xl" />
                    </span>
                  </span>
                  Account
                </Link>
              </li>
              <li className="flex items-center gap-2 ">
                <span className="countCart"></span>
                <Link
                  className={
                    currentPath === "/Cart" ? "navLink text-primary" : "navLink"
                  }
                  href="/Cart"
                >
                  <span className="relative">
                    <BsCartPlus className="pr-2 text-3xl" />
                    <span>
                      <p
                        className={
                          currentPath === "/Cart"
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
          <nav className="relative flex w-full max-w-7xl items-center justify-between gap-4">
            <div>
              <h2 className="flex items-center gap-2 text-2xl font-bold uppercase text-primary">
                <span className="text-primary">
                  <RiShoppingBagFill />
                </span>
                repliq
              </h2>
            </div>
            <div className="cursor-pointer z-[110]" onClick={handleToggle}>
              {toggleNav ? <FaBars /> : <RxCross1 />}
            </div>
            <div
              className={
                toggleNav
                  ? "mobileNav z-[-100] top-0 fixed left-0 bg-[#1e1e1c89] px-4 py-20 backdrop-blur-md backdrop-filter sm:px-32"
                  : "mobileNav-active z-[-100] top-0 fixed left-0 bg-[#1e1e1c89] px-4 py-20 backdrop-blur-md backdrop-filter sm:px-32"
              }
            >
              <div className="">
                <div>
                  <li className="hidden">
                    <SearchButton />
                  </li>
                </div>
                <div className="mt-4 gap-2">
                  <Link
                    onClick={toggleMobNav}
                    className={
                      currentPath === "/"
                        ? "navLink navList text-nutral3"
                        : "navLink navList"
                    }
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
                  <li className="navList flex items-center justify-start gap-2 py-2">
                    <Link
                      onClick={toggleMobNav}
                      className={
                        currentPath === "/Register"
                          ? "navLink text-nutral3"
                          : "navLink"
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
                  <li className="navList flex items-center justify-start gap-2 py-2">
                    <Link
                      onClick={toggleMobNav}
                      className={
                        currentPath === "/Cart"
                          ? "navLink relative text-nutral3"
                          : "navLink relative"
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
