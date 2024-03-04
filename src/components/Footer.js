import React from "react";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedinIn,
  faInstagram,
  faFacebookSquare,
} from "@fortawesome/free-brands-svg-icons";
import {
  faPhone,
  faEnvelopeCircleCheck,
} from "@fortawesome/free-solid-svg-icons";
import MediaIcons from "./SocialMedia/MediaIcons";
const Footer = () => {
  return (
    <footer>
      <div className="footer max-w-full mx-auto px-4 sm:px-6 bg-gray-100 border-t border-b py-30">
        {/* Top area: Blocks */}
        <div className="grid sm:grid-cols-12 gap-5 py-8 md:py-12 border-t border-gray-200 lg:ml-11">
          {/* 1st block */}
          <div className="col-span-12 lg:col-span-4">
            <div className="box-border border-b-4 border-blue-900 p-8 bg-gray-200 text-gray-600 text-center rounded-lg xl:w-80 mx-auto">
              <h3 className="font-bold text-6xl text-blue-900">Tvinz</h3>
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
                  href="mailto:team@tvinz.com"
                  className="flex justify-center items-center text-blue-500 hover:text-blue-800"
                >
                  <FontAwesomeIcon
                    icon={faEnvelopeCircleCheck}
                    className="me-50 mr-2"
                  />
                  <p>team@tvinz.com</p>
                </a>
              </div>
            </div>
          </div>

          {/* 2nd block */}
          <div className="col-span-6 md:col-span-6 lg:col-span-1 ml-7 mx-auto">
            <h6 className="text-[#013289] text-xl font-bold mb-4">LINKS</h6>
            <ul className="text-md">
              <li className="mb-2">
                <HashLink
                  to="#home"
                  className="text-[#013289] hover:text-gray-900 hover:tracking-wider transition duration-250 ease-in-out"
                >
                  Home
                </HashLink>
              </li>
              <li className="mb-2">
                <HashLink
                  to="#about"
                  className="text-[#013289] hover:text-gray-900 hover:tracking-wider transition duration-250 ease-in-out"
                >
                  About
                </HashLink>
              </li>
              <li className="mb-2">
                <HashLink
                  to="#services"
                  className="text-[#013289] hover:text-gray-900 hover:tracking-wider transition duration-250 ease-in-out"
                >
                  Services
                </HashLink>
              </li>
              <li className="mb-2">
                <HashLink
                  to="#clients"
                  className="text-[#013289] hover:text-gray-900 hover:tracking-wider transition duration-250 ease-in-out"
                >
                  Clients
                </HashLink>
              </li>
              <li className="mb-2">
                <HashLink
                  to="/contact#contact"
                  className="text-[#013289] hover:text-gray-900 hover:tracking-wider transition duration-250 ease-in-out"
                >
                  Contact
                </HashLink>
              </li>
            </ul>
          </div>

          {/* 3rd block */}
          <div className="col-span-6 md:col-span-6 lg:col-span-4 mx-auto w-52">
            <h6 className="text-[#013289] text-xl font-bold mb-4">
              OUR SERVICES
            </h6>
            <ul className="text-md">
              <li className="mb-2">
                <Link
                  to="#services"
                  className="text-[#013289] hover:text-gray-900 hover:tracking-wider transition duration-250 ease-in-out"
                >
                  Web Development
                </Link>
              </li>
              <li className="mb-2">
                <Link
                  to="#"
                  className="text-[#013289] hover:text-gray-900 hover:tracking-wider transition duration-250 ease-in-out"
                >
                  Mobile App Development
                </Link>
              </li>
              <li className="mb-2">
                <Link
                  to="#"
                  className="text-[#013289] hover:text-gray-900 hover:tracking-wider transition duration-250 ease-in-out"
                >
                  DevOps/Cloud Computing
                </Link>
              </li>
              <li className="mb-2">
                <Link
                  to="#"
                  className="text-[#013289] hover:text-gray-900 hover:tracking-wider transition duration-250 ease-in-out"
                >
                  Marketing Services
                </Link>
              </li>
              <li className="mb-2">
                <Link
                  to="#"
                  className="text-[#013289] hover:text-gray-900 hover:tracking-wider transition duration-250 ease-in-out"
                >
                  Generative AI
                </Link>
              </li>
            </ul>
          </div>

          {/* 4th block */}
          <div className="col-span-12 text-center mx-auto lg:col-span-3 font-bold uppercase text-blue-900">
            <div className="text-xl mb-6">Social Media Links.</div>

            <div className="text-md font-medium mb-6">
              Follow us on social media.
            </div>
            <div className="mx-auto text-center">
              <MediaIcons />
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
          <div className="w-full md:w-4/12 px-4 mx-auto text-center py-2">
            <div className="text-sm text-gray-200 font-semibold py-1">
              Copyright &copy; {new Date().getFullYear()}
              {"  "}
              <HashLink to="#" className=" hover:text-gray-900">
                Tvinz
              </HashLink>
              . All rights reserved.
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
