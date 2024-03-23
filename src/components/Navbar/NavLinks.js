import React from "react";
import NavLink from "./NavLink";

const NavLinks = () => {
  return (
    <>
      <NavLink text="Home" link="/#home" />
      <NavLink text="About" link="/#about" />
      <NavLink text="Services" link="/#services" />
      <NavLink text="Clients" link="/#clients" />
      <NavLink
        text="Contact Us"
        link="/contact#contact"
        style="text-white bg-blue-900 hover:bg-blue-800 inline-flex items-center justify-center w-auto px-6 py-3 shadow-xl rounded-full"
      />
    </>
  );
};

export default NavLinks;
