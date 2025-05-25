import React from "react";
import { MobileOnlyLayoutProps } from "./MobileOnlyLayout.types";

 const MobileOnlyLayout: React.FC<MobileOnlyLayoutProps> = ({
  children,
  errorMessage = "Please scan with mobile",
}) => {
  return (
    <>
      {/* Mobile: render the wrapped content */}
      <div className="flex justify-center block lg:hidden ">
      <div className=" max-w-[600px]">
        {children}
      </div>
      </div>

      {/* Tablet & up: full‐viewport error */}
      <div
        className="
          hidden lg:flex 
          items-center justify-center 
          w-full h-screen 
          bg-white
        "
        role="alert"
        aria-live="polite"
      >
        <p className="text-center text-red-600 text-lg font-semibold">
          {errorMessage}
        </p>
      </div>
    </>
  );
};

export default MobileOnlyLayout