import React from "react";
import DashboardNavbar from "./components/common/Navbar/page";
import Dropdown from "./components/common/Dropdown";

const DashboardLayout = ({ children }) => {
  return (
    <div className="grid-layout">
      <div>
        <div className="hidden md:block">
          <DashboardNavbar />
        </div>
        <div className="block w-full px-4 sm:pl-8 md:hidden">
          <Dropdown />
        </div>
      </div>
      <div className="container">{children}</div>
    </div>
  );
};

export default DashboardLayout;
