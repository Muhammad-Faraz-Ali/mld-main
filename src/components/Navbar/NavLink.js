import { HashLink } from "react-router-hash-link";

function NavLink({ text, link, style }) {
  const styles =
    style || "px-4 font-extrabold text-gray-500 hover:text-blue-900";

  return (
    <HashLink className={styles} smooth to={link}>
      {text}
    </HashLink>
  );
}

export default NavLink;
