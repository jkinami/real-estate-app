import React from "react";

const Header = () => {
  return (
    <div className="h-[74px] w-full bg-white flex flex-wrap content-center sticky top-0">
      <div className="ml-[2px]">
        <img
          src="/src/assets/logo-landit.png"
          alt="logo"
          width="233px"
          height="60px"
        />
      </div>
    </div>
  );
};

export default Header;
