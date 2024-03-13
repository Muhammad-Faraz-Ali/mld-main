import React from "react";
import img from "../../assets/images/Web-developer.svg";
import about from "../../assets/images/about/about-2.jpg";
// import Portfolio from "./Portfolio";
import home from "../../assets/images/clients/home.jpeg";
import ContactButton from "../Contact/ContactButton";
import Goals from "./Goals";

const About = () => {
  return (
    <>
      <div className="m-auto p-6 md:p-12 lg:p-10" id="about">
        <div
          className="flex flex-col lg:flex-row lg:justify-between text-center lg:text-left lg:pl-0 lg:pr-20"
          data-aos="fade-up"
        >
          <div
            className="flex lg:justify-end w-full lg:w-1/2"
            data-aos="fade-up"
            data-aos-delay="700"
          >
            <img
              alt="card img"
              className="rounded-full float-right duration-1000 w-full"
              src={about}
            />
          </div>
          {/* <div className="lg:w-1/2 flex flex-col lg:mx-4 justify-start">
            <img
              alt="card img"
              className="rounded-full float-right"
              src={about}
            />
          </div> */}

          <div
            className="flex-col my-4 lg:ml-10 text-center lg:text-left lg:my-8 lg:justify-end w-full lg:w-1/2 px-8"
            data-aos="zoom-in"
            data-aos-delay="500"
          >
            <h3 className="text-3xl  text-blue-900 font-bold">
              We develop high-quality revenue-driven websites, innovative mobile
              apps, cutting-edge software, and more
            </h3>
            <div>
              <p className="my-3 text-xl text-gray-600 font-semibold">
                Our team is well vast in software development and is ready to
                help develop the applications of your choice.
              </p>
            </div>

            <div>
              <p className="my-3 text-xl text-gray-600 font-semibold">
                We take responsibility for building custom software solutions
                that cater to the automation of your business processes and
                improve efficiency.
              </p>
            </div>
            <ContactButton btnText="Let's Build Your Future Together" />
          </div>
        </div>
      </div>
      <Goals />
    </>
  );
};

export default About;
