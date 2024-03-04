import React from "react";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import allureTecImg from "../assets/images/clients/allureTech.png";
import apexDropImg from "../assets/images/clients/apexDrop.png";
import chainMasteryImg from "../assets/images/clients/chainMastery.png";
import defiSportsImg from "../assets/images/clients/defiSports.png";
import desertImg from "../assets/images/clients/desert.png";
import downSwapImg from "../assets/images/clients/downSwap.png";
import fxTradingImg from "../assets/images/clients/fxTrading.jpg";
import kidsImg from "../assets/images/clients/kids.png";
import letsTokImg from "../assets/images/clients/letsTok.png";
import paintArtImg from "../assets/images/clients/paintArt.png";
import techBazzarImg from "../assets/images/clients/techBazzar.png";
import usWeedImg from "../assets/images/clients/usWeed.png";
import arbatGroupImg from "../assets/images/clients/arbatgroup.png";

const clientImage = {
  height: "10rem",
  width: "auto",
  mixBlendMode: "colorBurn",
};

const CLIENTS = [
  {
    id: 1,
    img: letsTokImg,
    href: "https://www.letstok.com",
  },
  {
    id: 2,
    img: paintArtImg,
    href: "https://paintart.ma/",
  },
  {
    id: 3,
    img: techBazzarImg,
    href: "https://techbazzar.pk/",
  },
  {
    id: 4,
    img: usWeedImg,
    href: "https://usweedchannel.com/",
  },
  {
    id: 5,
    img: desertImg,
    href: "https://mydesertsafari.com/",
  },
  {
    id: 6,
    img: downSwapImg,
    href: "https://locker.dawnswap.finance/",
  },
  {
    id: 7,
    img: fxTradingImg,
    href: "https://fxtredingsolution.com/",
  },
  {
    id: 8,
    img: kidsImg,
    href: "https://instantawesomekids.com/home",
  },

  {
    id: 9,
    img: allureTecImg,
    href: "https://alluretechs.com/",
  },
  {
    id: 10,
    img: apexDropImg,
    href: "https://www.apexdrop.com",
  },
  {
    id: 11,
    img: chainMasteryImg,
    href: "https://chainmastery.tech/connectwallet",
  },
  {
    id: 12,
    img: defiSportsImg,
    href: "https://defisports.com/",
  },
  {
    id: 13,
    img: arbatGroupImg,
    href: "https://arbat-group.com/",
  },
];

const CustomPrevArrow = (props) => (
  <button {...props} className="slick-prev slick-arrow ">
    Previous
  </button>
);

const CustomNextArrow = (props) => (
  <button {...props} className="slick-next slick-arrow bg-blue-900">
    Next
  </button>
);

const Clients = () => {
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
              <div key={client?.id}>
                <a
                  href={client?.href}
                  className="flex justify-center"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    src={client?.img}
                    alt="client"
                    style={{ height: "6rem", width: "8rem" }}
                  />
                </a>
              </div>
            ))}
          </Slider>
        </div>
      </section>
    </div>
  );
};

export default Clients;
