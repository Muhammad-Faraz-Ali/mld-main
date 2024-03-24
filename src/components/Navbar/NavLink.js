import React from "react";
import { HashLink } from "react-router-hash-link";

function NavLink({ text, link, styles, handleClick }) {
  const style =
    styles || "px-4 font-extrabold text-gray-500 hover:text-blue-900";

  const handleNavLinkClick = () => {
    handleClick && handleClick(); // Call handleClick function if it's provided
  };

  return (
    <HashLink className={style} smooth to={link} onClick={handleNavLinkClick}>
      {text}
    </HashLink>
  );
}

export default NavLink;
