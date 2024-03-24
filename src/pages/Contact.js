import React, { useState } from "react";
import emailjs from "emailjs-com";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

import NavBar from "../components/Navbar";
import Footer from "../components/Footer";
import useDocTitle from "../hooks/useDocTitle";
import MediaLinks from "../components/SocialMedia";

const Contact = () => {
  useDocTitle("Tvino");
  const navigate = useNavigate();
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [errors, setErrors] = useState([]);
  const [isSending, setIsSending] = useState(false);

  const clearErrors = () => {
    setErrors([]);
  };

  const clearInput = () => {
    setFirstName("");
    setLastName("");
    setEmail("");
    setPhone("");
    setMessage("");
  };

  const sendEmail = (e) => {
    e.preventDefault();

    //Your EmailJS template parameters
    const templateParams = {
      firstName: firstName,
      lastName: lastName,
      email: email,
      phone: phone,
      message: message,
    };

    // Your EmailJS service ID, template ID, and user ID
    const serviceId = "service_tvinzo";
    const templateId = "template_7tnoipb";
    const userId = "ei4RBOMBhem4YP5k3";

    setIsSending(true);

    // Send email using EmailJS
    emailjs
      .send(serviceId, templateId, templateParams, userId)
      .then((response) => {
        if (response.text === "OK") {
          navigate("/");
          clearInput();
          toast.success(
            "Thank you for contacting us. Our team will get back to you soon!"
          );
        } else {
          toast.error("Error! while sending email. Try to reach later");
        }
      })
      .catch((error) => {
        toast.error("Error sending email");
      })
      .finally(() => {
        setIsSending(false);
      });
  };

  return (
    <>
      <div>
        <NavBar />
      </div>
      <div
        id="contact"
        className="flex justify-center items-center mt-8 w-full bg-white py-12 lg:py-24 "
      >
        <div
          className="container mx-auto my-8 px-4 lg:px-20"
          data-aos="zoom-in"
        >
          <form onSubmit={sendEmail}>
            <div className="w-full bg-white p-8 my-4 md:px-12 lg:w-9/12 lg:pl-20 lg:pr-40 mr-auto rounded-2xl shadow-2xl">
              <div className="flex">
                <h1 className="font-bold text-center lg:text-left text-blue-900 uppercase text-4xl">
                  Send us a message
                </h1>
              </div>
              <div className="grid grid-cols-1 gap-5 md:grid-cols-2 mt-5">
                <div>
                  <input
                    name="first_name"
                    className="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                    type="text"
                    required
                    placeholder="First Name*"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                    onKeyUp={clearErrors}
                  />
                  {errors && (
                    <p className="text-red-500 text-sm">{errors.first_name}</p>
                  )}
                </div>

                <div>
                  <input
                    name="last_name"
                    className="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                    type="text"
                    required
                    placeholder="Last Name*"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                    onKeyUp={clearErrors}
                  />
                  {errors && (
                    <p className="text-red-500 text-sm">{errors.last_name}</p>
                  )}
                </div>

                <div>
                  <input
                    name="email"
                    className="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                    type="email"
                    required
                    placeholder="Email*"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    onKeyUp={clearErrors}
                  />
                  {errors && (
                    <p className="text-red-500 text-sm">{errors.email}</p>
                  )}
                </div>

                <div>
                  <input
                    name="phone_number"
                    className="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                    type="number"
                    placeholder="Phone"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    onKeyUp={clearErrors}
                  />
                  {errors && (
                    <p className="text-red-500 text-sm">
                      {errors.phone_number}
                    </p>
                  )}
                </div>
              </div>
              <div className="my-4">
                <textarea
                  name="message"
                  placeholder="Message"
                  className="w-full h-32 bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  onKeyUp={clearErrors}
                ></textarea>
                {errors && (
                  <p className="text-red-500 text-sm">{errors.message}</p>
                )}
              </div>
              <div className="my-2 w-1/2 lg:w-2/4">
                <button
                  type="submit"
                  id="submitBtn"
                  className="uppercase text-sm font-bold tracking-wide bg-blue-900 hover:bg-blue-800 text-gray-100 p-3 rounded-full w-full 
                                    focus:outline-none focus:shadow-outline"
                >
                  {isSending ? "Sending..." : "Send message"}
                </button>
              </div>
            </div>
          </form>
          <div className="w-full  lg:-mt-96 lg:w-2/6 px-8 py-6 ml-auto bg-blue-900 rounded-2xl">
            <div className="flex flex-col text-white">
              <div className="flex my-4 w-2/3 lg:w-3/4">
                <div className="flex flex-col">
                  <i className="fas fa-map-marker-alt pt-2 pr-2" />
                </div>
                <div className="flex flex-col">
                  <h2 className="text-2xl">Office Address</h2>
                  <p className="text-gray-400">
                    Lahore, Pakistan | Dubai, UAE | South Korea
                  </p>
                </div>
              </div>

              <div className="flex w-2/3 lg:w-1/2">
                <div className="flex flex-col">
                  <i className="fas fa-phone-alt pt-2 pr-2" />
                </div>

                <div className="flex flex-col">
                  <h2 className="text-2xl">Call Us</h2>
                  <a href="tel:+923054490210">
                    <p className="text-gray-400">+923054490210</p>
                  </a>

                  <div className="mt-3">
                    <h2 className="text-2xl">Send an E-mail</h2>
                    <a href="mailto:team@tvinzo.com">
                      <p className="text-gray-400 hover:text-white">
                        team@tvinzo.com
                      </p>
                    </a>
                  </div>
                </div>
              </div>

              <div className="flex my-4 w-2/3 lg:w-1/2">
                <MediaLinks />
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Contact;
