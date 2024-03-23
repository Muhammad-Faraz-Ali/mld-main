import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { MEDIA_LINKS } from "../../data/SocialMedia";

const MediaLinks = () => {
  return (
    <ul className="flex justify-center">
      {MEDIA_LINKS.map(({ id, link, label, icon, color }) => (
        <li key={id} className="ml-4">
          <a
            href={link}
            aria-label={label}
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon
              icon={icon}
              className="w-7 h-8 font-awesome"
              style={{ color: color }}
              beat
            />
          </a>
        </li>
      ))}
    </ul>
  );
};

export default MediaLinks;
