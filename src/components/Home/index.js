import React from "react";
import NavBar from "../Navbar";
import homeImage from "../../assets/images/clients/homeImage.jpeg";
import ContactButton from "../Contact/ContactButton";

const Home = () => {
  return (
    <div className="home" id="home">
      <div>
        <NavBar />
      </div>

      <div
        className="m-auto overflow-hidden mx-4 mt-8 lg:mt-4 p-2 md:p-12 h-5/6"
        data-aos="zoom-in"
      >
        <div
          id="hero"
          className="flex flex-col lg:flex-row py-8 justify-between text-center lg:text-left"
        >
          <div
            className="lg:w-1/2 flex flex-col justify-center"
            data-aos="zoom-in"
            data-aos-delay="200"
          >
            <h1 className="mb-5 md:text-5xl text-3xl font-bold text-blue-900">
              Your Business is Presentation of Our Capabilities!
            </h1>
            <p className="text-xl font-semibold tracking-tight mb-5 text-gray-500">
              {/* We are a team of highly motivated and skilled developers
                dedicated to delivering only the best software. */}
              Unlock the future with us! We're your one-stop destination for
              cutting-edge software solutions.
            </p>
            <div className="mb-4 space-x-0 md:space-x-2 md:mb-8">
              <ContactButton btnText="Get Started" />
            </div>
          </div>
          <div
            className="flex lg:justify-end w-full lg:w-1/2"
            data-aos="fade-up"
            data-aos-delay="700"
          >
            <img
              alt="card img"
              className="rounded-full float-right duration-1000 w-full"
              src={homeImage}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
