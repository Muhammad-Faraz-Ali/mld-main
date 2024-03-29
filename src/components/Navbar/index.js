import React, { useState, useEffect } from "react";
import { HashLink } from "react-router-hash-link";

import NavLinks from "./NavLinks";

const NavBar = () => {
  const [top, setTop] = useState(true);
  const [isOpen, setisOpen] = React.useState(false);
  function handleClick() {
    setisOpen(!isOpen);
  }

  useEffect(() => {
    const scrollHandler = () => {
      window.pageYOffset > 10 ? setTop(false) : setTop(true);
    };
    window.addEventListener("scroll", scrollHandler);
    return () => window.removeEventListener("scroll", scrollHandler);
  }, [top]);

  return (
    <nav
      className={`fixed top-0 w-full z-30 transition duration-300 ease-in-out mb-16 ${
        !top && "bg-white shadow-lg"
      }`}
    >
      <div className="flex flex-row justify-between items-center py-2">
        <div className="flex flex-row justify-center px-6 md:px-12 md:mx-12 items-center text-center font-semibold">
          <HashLink smooth to="/#about">
            <h1 className="font-extrabold font-harrington text-4xl text-blue-900 animate-pulse">
              <span className="text-gradient bg-gradient-to-r from-blue-900 via-blue-900 to-blue-900 shimmer-effect">
                Tvinzo
              </span>
            </h1>
          </HashLink>
        </div>

        <div className="group flex flex-col items-center">
          <button
            className="p-2 rounded-lg lg:hidden text-blue-900"
            onClick={handleClick}
          >
            <svg
              className="h-6 w-6 fill-current"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              {isOpen && (
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z"
                />
              )}
              {!isOpen && (
                <path
                  fillRule="evenodd"
                  d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
                />
              )}
            </svg>
          </button>
          <div className="hidden space-x-6 lg:inline-block p-5">
            <NavLinks />
          </div>

          <div
            className={`fixed transition-all duration-300 ease-in-out flex justify-center left-0 w-full h-auto rounded-md px-24 pb-8 bg-white lg:hidden shadow-xl top-14 ${
              isOpen
                ? "opacity-100 translate-x-0"
                : "opacity-0 -translate-x-full"
            }`}
          >
            <div className="flex flex-col space-y-4">
              <NavLinks handleClick={handleClick} />
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
