"use client";
import Link from "next/link";
import React from "react";
import { usePathname } from "next/navigation";

// ?? Creating Dashboard Route Array.
const dashBoard = [
  {
    id: 1,
    route: "/dashboard",
    routeName: "dashboard",
  },
  {
    id: 2,
    route: "/dashboard/addproduct",
    routeName: "Add Product",
  },
  {
    id: 3,
    route: "/dashboard/user",
    routeName: "User",
  },
  {
    id: 4,
    route: "/dashboard/newproduct",
    routeName: "New Product",
  },
];
const DashboardNavbar = () => {
  const currRoute = usePathname().split("/").slice(-1)[0].toLowerCase();
  return (
    <div>
      <div className="mt-16 grid w-full place-items-start gap-3 md:mt-0">
        {dashBoard.map((routes) => {
          const { id, route, routeName } = routes;
          // console.log(routeName.toLowerCase().split(" ").join(""));
          return (
            <Link
              key={id}
              href={route}
              className={
                currRoute === routeName.toLowerCase().split(" ").join("")
                  ? "w-full cursor-pointer rounded-md bg-nutral2  px-3 lg:px-4 xl:px-8 py-2 text-left font-bold capitalize text-nutral3 shadow-nutral2 drop-shadow-md hover:border-transparent hover:bg-primary/20 hover:text-primary"
                  : "w-full cursor-pointer rounded-md bg-transparent px-3 lg:px-4 xl:px-8 py-2 text-left font-bold capitalize text-nutral2 shadow-nutral2 drop-shadow-md hover:border-transparent hover:bg-primary/20 hover:text-primary"
              }
            >
              {routeName === "dashboard" ? "products" : routeName}
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default DashboardNavbar;
