"use client";
import React, { useEffect, useState } from "react";
import { HiArrowDown, HiArrowUp } from "react-icons/hi";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { dashboardData } from "../../../../Data/dropDownData";

const Dropdown = () => {
  const currPath = usePathname();
  const [path, setPath] = useState("");
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropDownData, setDropDownData] = useState(dashboardData);
  

  const handleDropdown = () => {
    setMenuOpen((prev) => !prev);
  };

  const fetchCurrPath = () => {
    const url = currPath.split("/");
    const actualPath = url.splice(-1)[0]
    setPath(actualPath);
  }
  useEffect(() => {
    fetchCurrPath();
  },[currPath])
  
  return (
    <div className="md:mt-4 flex items-center mt-20">
      <div className="relative w-full lg:w-1/2 mx-auto">
        <button
          className="inline-flex items-center justify-between w-full rounded-md bg-nutral3 px-4 py-3 font-bold capitalize drop-shadow-md focus:text-nutral2"
          onClick={handleDropdown}
        >
          {path === "dashboard" ? "product" : `${path}`}
          {menuOpen ? (
            <HiArrowUp className="trasition-all text-nutral2 duration-200 ease-in-out" />
          ) : (
            <HiArrowDown className="transition-all text-nutral2 duration-200 ease-in-out" />
          )}
        </button>
        {menuOpen && (
          <div className="bsolute top-24 mt-2 w-full animate-moveUp rounded-md bg-nutral3 px-4 py-2 text-base font-bold capitalize drop-shadow-md">
            {dropDownData.map((links) => {
              const { id, link, label } = links;
              return (
                <Link onClick={handleDropdown} className="py-3 cursor-pointer hover:bg-baseClr1 " key={id} href={link}>
                  <h3 className="py-2">{label}</h3>
                </Link>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
};

export default Dropdown;
