import { HashLink } from "react-router-hash-link";

function Link({ text, link }) {
  return (
    <li className="mb-2">
      <HashLink
        to={link}
        className="text-[#013289] hover:text-gray-900 hover:tracking-wider transition duration-250 ease-in-out"
      >
        {text}
      </HashLink>
    </li>
  );
}

export default Link;
