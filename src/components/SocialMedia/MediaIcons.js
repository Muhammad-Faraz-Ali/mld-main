import React from "react";
import { Link } from "react-router-dom";
// import { HashLink } from "react-router-hash-link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedinIn,
  faInstagram,
  faFacebookSquare,
} from "@fortawesome/free-brands-svg-icons";
// import {
//   faPhone,
//   faEnvelopeCircleCheck,
// } from "@fortawesome/free-solid-svg-icons";

const MediaIcons = () => {
  return (
    <ul className="flex justify-center">
      <li className="ml-4">
        <Link to="https://www.google.com" aria-label="Linkedin">
          <FontAwesomeIcon
            icon={faLinkedinIn}
            className="w-7 h-8 font-awesome"
            style={{ color: "#0f5ee6" }}
            beat
          />
        </Link>
      </li>

      <li className="ml-4">
        <Link to="#" aria-label="Instagram">
          <FontAwesomeIcon
            icon={faInstagram}
            className="w-7 h-8 font-awesome"
            style={{ color: "#E1306C" }}
            beat
          />
        </Link>
      </li>

      <li className="ml-4">
        <Link to="https://www.google.com" aria-label="Facebook">
          <FontAwesomeIcon
            className="w-7 h-8 font-awesome"
            icon={faFacebookSquare}
            beat
          />
        </Link>
      </li>
    </ul>
  );
};

export default MediaIcons;
