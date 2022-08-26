import React from "react";
import RouterFullLogo from "../assets/full-logo.svg";
import RouterLogo from "../assets/logo.svg";
import useScrollPosition from "../hooks/useScrollPosition";
import NavLink from "./NavLink";
import NavMenu from "./NavMenu";

const navLinks = [
  {
    name: "Cross-chain Swap",
    path: "/crosschainswap",
  },
  {
    name: "Cross Talk",
    path: "/crosstalk",
  },
  {
    name: "Fee Calculator",
    path: "/calculate-fees",
  },
  {
    name: "Verify Transaction",
    path: "/verify-transaction",
  },
];

const Header = () => {
  const scrollY = useScrollPosition();

  return (
    <div className="fixed flex justify-between items-center left-0 top-0 p-8 w-full z-50">
      <div>
        {scrollY > 172 ? (
          <img
            src={RouterLogo}
            className="h-12 w-40 object-contain"
            alt="logo"
          />
        ) : (
          <img
            src={RouterFullLogo}
            className="h-12 w-40 object-contain"
            alt="logo"
          />
        )}
      </div>

      <div className="text-white hidden xl:flex justify-between items-center xl:w-[75%] 2xl:w-[60%] bg-glass p-5 rounded-full text-2xl">
        {navLinks.map((val) => (
          <NavLink key={val.path} name={val.name} path={val.path} />
        ))}
      </div>

      <div className="xl:hidden w-[10%]">
        <NavMenu />
      </div>
    </div>
  );
};

export default Header;
