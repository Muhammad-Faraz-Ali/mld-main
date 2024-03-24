import React from "react";
import { HashLink } from "react-router-hash-link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPhone,
  faEnvelopeCircleCheck,
} from "@fortawesome/free-solid-svg-icons";

import MediaLinks from "../SocialMedia";
import ServicesLinks from "./ServicesLinks";
import NavLinks from "./NavLinks";

const Footer = () => {
  return (
    <footer>
      <div className="footer max-w-full mx-auto px-4 sm:px-6 bg-gray-100 border-t border-b py-30">
        {/* Top area: Blocks */}
        <div className="grid sm:grid-cols-12 gap-5 py-8 md:py-12 border-t border-gray-200 lg:ml-11">
          {/* 1st block */}
          <div className="col-span-12 lg:col-span-4">
            <div className="box-border border-b-4 border-blue-900 p-8 bg-gray-200 text-gray-600 text-center rounded-lg xl:w-80 mx-auto">
              <h3 className="font-bold text-6xl text-blue-900">Tvinzo</h3>
              <p className="font-serif mb-2">Tech Partner</p>
              <div className="text-md font-medium text-gray-600">
                <a
                  href="tel:+923054490210"
                  className="flex justify-center items-center text-blue-500 hover:text-blue-800"
                >
                  <FontAwesomeIcon icon={faPhone} className="me-50 mr-2" />
                  <p>+923054490210</p>
                </a>
                <a
                  href="mailto:team@tvinzo.com"
                  className="flex justify-center items-center text-blue-500 hover:text-blue-800"
                >
                  <FontAwesomeIcon
                    icon={faEnvelopeCircleCheck}
                    className="me-50 mr-2"
                  />
                  <p>team@tvinzo.com</p>
                </a>
              </div>
            </div>
          </div>

          {/* 2nd block */}
          <NavLinks />

          {/* 3rd block */}
          <ServicesLinks />

          {/* 4th block */}
          <div className="col-span-12 text-center mx-auto lg:col-span-3 font-bold uppercase text-blue-900">
            <div className="text-xl mb-6">Social Media Links.</div>

            <div className="text-md font-medium mb-6">
              Follow us on social media.
            </div>
            <div className="mx-auto text-center">
              <MediaLinks />
              {/* <ul className="flex justify-center mb-4 md:mb-0">
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
              </ul> */}
            </div>
          </div>
        </div>

        <div className="flex flex-wrap items-center md:justify-between justify-center mx-auto px-4">
          <div className="w-full md:w-4/12 px-2 mx-auto text-center py-2">
            <div className="text-sm text-gray-200 font-semibold py-1">
              Copyright &copy; {new Date().getFullYear()}
              {"  "}
              <HashLink to="/#" className="text-black hover:text-blue-900">
                Tvinzo
              </HashLink>
              . {"    "}
              All rights reserved.
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
