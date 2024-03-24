import { HashLink } from "react-router-hash-link";

function NavLink({ text, link, styles }) {
  const style =
    styles || "px-4 font-extrabold text-gray-500 hover:text-blue-900";

  return (
    <HashLink className={style} smooth to={link}>
      {text}
    </HashLink>
  );
}

export default NavLink;
