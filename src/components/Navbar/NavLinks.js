import React from "react";
import NavLink from "./NavLink";

const NavLinks = ({ handleClick = () => {} }) => {
  return (
    <>
      <NavLink text="Home" link="/#home" handleClick={handleClick} />
      <NavLink text="About" link="/#about" handleClick={handleClick} />
      <NavLink text="Services" link="/#services" handleClick={handleClick} />
      <NavLink text="Clients" link="/#clients" handleClick={handleClick} />
      <NavLink
        text="Contact Us"
        link="/contact#contact"
        styles="text-white bg-blue-900 hover:bg-blue-800 inline-flex items-center justify-center w-auto px-6 py-3 shadow-xl rounded-full"
        handleClick={handleClick}
      />
    </>
  );
};

export default NavLinks;
