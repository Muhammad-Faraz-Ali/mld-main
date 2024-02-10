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
];

const arrowStyle = {
  color: "blue", // Change the color to your desired color
  fontSize: "44px", // Adjust the font size as needed
};

const CustomPrevArrow = (props) => {
  const { onClick } = props;
  return (
    <div style={{ ...arrowStyle, left: "-20px" }} onClick={onClick}>
      {/* You can use an icon or any custom arrow content here */}
      {"<"}
    </div>
  );
};

const CustomNextArrow = (props) => {
  const { onClick } = props;
  return (
    <div style={{ ...arrowStyle, right: "-20px" }} onClick={onClick}>
      {/* You can use an icon or any custom arrow content here */}
      {">"}
    </div>
  );
};

const Clients = () => {
  const settings = {
    className: "center",
    centerMode: true,
    centerPadding: "60px",
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    initialSlide: 0,
    prevArrow: <CustomPrevArrow />,
    nextArrow: <CustomNextArrow />,
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
    <div className="mt-8">
      <section data-aos="fade-up">
        <div className="mt-4 py-4">
          <h2 className="my-2 text-center text-3xl text-blue-900 uppercase font-bold">
            Clients & Partners
          </h2>
          <div className="flex justify-center">
            <div className="w-24 border-b-4 border-blue-900"></div>
          </div>
        </div>

        <div className="p-16" data-aos="fade-in" data-aos-delay="600">
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
