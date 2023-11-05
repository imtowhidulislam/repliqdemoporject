"use client";
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const RegisterNav = ({registerRoute,registerType}) => {
  const getCurrPathOfRegisterRoute = usePathname();
  return (
    <div className="">
      <div className="flex items-center justify-between pb-0 md:py-1 gap-4">
        <Link
          className="group w-max rounded-sm bg-transparent px-2 py-1 hover:drop-shadow-md transition-all duration-200 ease-in-out  hover:border-transparent"
          href={registerRoute}
        >
          <button className="font-bold w-full capitalize text-center text-sm text-primary group-hover:text-primary/70">
            {registerType}
          </button>
        </Link>
      </div>
    </div>
  );
};

export default RegisterNav;
