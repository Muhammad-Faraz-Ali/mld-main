import React from "react";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { CLIENTS } from "../../data/Clients";
import Client from "./Client";

const settings = {
  className: "center",
  // dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
  initialSlide: 0,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true,
        dots: true,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        initialSlide: 2,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};

const Clients = () => {
  return (
    <div className="mt-8 mb-6" id="clients">
      <section data-aos="fade-up">
        <div className="mt-4">
          <h2 className="my-2 text-center text-3xl text-blue-900 uppercase font-bold">
            Clients & Partners
          </h2>
          <div className="flex justify-center">
            <div className="w-24 border-b-4 border-blue-900"></div>
          </div>
        </div>

        <div
          className="p-16 mt-4 bg-gray-300"
          data-aos="fade-in"
          data-aos-delay="600"
        >
          <Slider {...settings}>
            {CLIENTS.map((client) => (
              <Client key={client?.id} client={client} />
            ))}
          </Slider>
        </div>
      </section>
    </div>
  );
};

export default Clients;
