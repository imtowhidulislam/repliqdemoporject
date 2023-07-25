import React from "react";
import RegisterNav from "./components/RegisterNav";

const RegisterLayout = ({ children }) => {
  return (
    <div className="grid-layout1 container min-h-custom-h-form py-8">
      {/* <RegisterNav /> */}
      <div className="mt-20 md:mt-0">{children}</div>
    </div>
  );
};

export default RegisterLayout;
