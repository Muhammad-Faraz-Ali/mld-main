import React from "react";

import webDevImg from "../assets/images/services/website.jpg";
import aiImg from "../assets/images/services/ai.jpg";
import sqaImg from "../assets/images/services/sqa.jpg";
import uiuxImg from "../assets/images/services/uiux.jpg";
import mobileDevImg from "../assets/images/services/mobile.jpg";
import cloudCompImg from "../assets/images/services/cloud.jpg";
import gameDevImg from "../assets/images/services/game.jpg";
import blockchainImg from "../assets/images/services/blockchain.jpg";
import metaverseImg from "../assets/images/services/metaverse.jpg";
import cyberSecImg from "../assets/images/services/cyber security.jpg";
import generativeAIImg from "../assets/images/services/generativeAI.jpg";
import marketingImg from "../assets/images/services/marketing 3.jpg";

import Service from "./Service";

const SERVICES = [
  {
    id: 1,
    img: uiuxImg,
    title: "UI/UX Design",
    description:
      "At <strong>Tvinz</strong>, we specialize in creating intuitive and visually stunning user interfaces (UI) and seamless user experiences (UX) for web and mobile applications. Our talented team of <strong>designers combines creativity and usability to deliver </strong> designs that engage users and enhance brand experiences",
  },
  {
    id: 2,
    img: webDevImg,
    title: "Web Development",
    description:
      "Experience the power of <strong>Full Stack Web Development</strong> with our expert team. We combine front-end and back-end expertise to deliver dynamic and seamless web solutions. <strong> Let us bring your vision to life and elevate your online presence.</strong> Contact us today to get started!",
  },
  {
    id: 3,
    img: mobileDevImg,
    title: "Mobile App Development",
    description:
      "Unlock the potential of mobile technology with our expert Mobile App Development services. We craft user-friendly and innovative iOS and Android apps that <strong>captivate audiences. From concept to launch, </strong> we deliver high-quality solutions tailored to your unique business needs. Contact us today to bring your app idea to life!",
  },
  {
    id: 4,
    img: gameDevImg,
    title: "Game Development",
    description:
      "Experience the thrill of game development with our expert team. We bring your game ideas to life, creating immersive experiences across multiple platforms. From <strong>captivating gameplay to stunning visuals</strong>, we deliver high-quality games that engage players. Contact us today to start your game development journey!",
  },

  {
    id: 5,
    img: sqaImg,
    title: "Software Quality Assurance(SQA Testing)",
    description:
      "Ensure the highest quality and reliability of your software with our SQA Testing services. Our experienced team employs<strong> rigorous methodologies to identify and resolve potential issues</strong>, ensuring a seamless user experience. Partner with us for comprehensive testing solutions and actionable reporting. Contact us today to enhance the quality and performance of your software.",
  },
  {
    id: 6,
    img: cloudCompImg,
    title: "DevOps/Cloud Computing",
    description:
      "Experience the power of DevOps and Cloud Computing with our expert team. We streamline your software development <strong>processes, ensure scalability, and optimize resource utilization</strong>. Leverage cloud platforms for <strong>enhanced performance, security, and flexibility</strong>. Contact us today to elevate your software development with DevOps and Cloud Computing.",
  },

  {
    id: 7,
    img: cyberSecImg,
    title: "Cyber Security",
    description:
      "Explore our cutting-edge security services designed to safeguard your digital assets and ensure the integrity of your online presence. From robust firewalls to advanced threat detection, our services are crafted to <strong>provide a secure environment for your website and sensitive data</strong>. Trust us to fortify your defenses and keep your online space safe from potential threats",
  },
  {
    id: 8,
    img: marketingImg,
    title: "Marketing Services",
    description:
      "Elevate your brand's presence with our dynamic Marketing Services. We specialize in <strong>crafting strategic campaigns, leveraging precision targeting, and ensuring mobile-first excellence</strong> to captivate and resonate with your audience. Our data-driven approach guarantees that every marketing strategy is optimized for success in the ever-evolving digital landscape. Redefine your brand's journey with us and stand out in the competitive world of marketing.",
  },
  {
    id: 9,
    img: generativeAIImg,
    title: "Intelligent Solutions with Generative AI",
    description:
      "Explore our cutting-edge Generative AI services designed to revolutionize your digital landscape. From innovative content creation to personalized user experiences, our AI-driven solutions empower your <strong>business with creativity and efficiency</strong>. Unleash the power of Generative AI to elevate your online presence and stay ahead in the era of intelligent technologies.",
  },

  {
    id: 10,
    img: aiImg,
    title: "AI/ML/DS",
    description:
      "Experience the cutting-edge capabilities of Artificial Intelligence, Machine Learning, and Data Science with our exceptional team. Our tailored solutions extract actionable insights from your data, <strong>empowering you to make informed and strategic decisions</strong>. Discover the power of scalable and ethically-driven AI technologies. Contact us now to embark on a transformative journey of intelligent data analysis",
  },
  {
    id: 11,
    img: blockchainImg,
    title: "Blockchain Development",
    description:
      "Unlock the potential of blockchain technology with our expert team at <strong> Tvinz </strong>.  We specialize in developing <strong>customized blockchain solutions, smart contracts, and decentralized  applications</strong>. Partner with us to streamline your operations, enhance security, and  drive innovation in the digital era.",
  },

  {
    id: 12,
    img: metaverseImg,
    title: "Metaverse",
    description:
      "Experience the future of virtual reality with our <strong>AV/VR Metaverse</strong> solutions. Step into a fully immersive digital world where you can connect, collaborate, and create like never before. Our expert team specializes in developing <strong>cutting-edge AV/VR experiences</strong> that blur the line between reality and imagination. Unlock limitless possibilities and redefine how you interact with technology.",
  },
];

const Services = () => {
  return (
    <div id="services" className="bg-gray-100 py-12">
      <section data-aos="zoom-in-down">
        <div className="py-4">
          <h2 className="my-2 text-center text-3xl text-blue-900 uppercase font-bold">
            services
          </h2>

          <div className="flex justify-center">
            <div className="w-24 border-b-4 border-blue-900"></div>
          </div>
          <h2 className="mt-4 mx-12 text-center text-xl lg:text-2xl font-semibold text-blue-900">
            {/* We are deeply committed to the growth and success of our clients. */}
            For Top-Notch Services, Connect with Us Today! Your tech journey
            starts here. 🔗
          </h2>
        </div>

        <div className="px-12" data-aos="fade-down" data-aos-delay="600">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {SERVICES.map(({ id, img, title, description }) => (
              <Service
                key={id}
                img={img}
                title={title}
                description={description}
              />
            ))}
            {/* 
            <div className="bg-white transition-all ease-in-out duration-400  overflow-hidden text-gray-700 hover:bg-gray-500 hover:text-white rounded-lg shadow-2xl p-3 group">
              <div className="m-2 text-justify text-sm">
                <webImg
                  alt="card webImg"
                  className="rounded-t group-hover:scale-[1.15] transition duration-1000 ease-in-out"
                  src={webDevImg}
                />
                <h2 className="font-semibold my-4 text-2xl text-center">
                  Web Development
                </h2>
                <p className="text-md font-medium">
                  We specialize in creating and optimizing high-quality, custom
                  websites for businesses and organizations of all sizes.
                  Building mobile-friendly and easy-to-use websites and
                  applications for clients.
                </p>
              </div>
            </div>

            <div className="bg-white transition-all ease-in-out duration-400  overflow-hidden text-gray-700 hover:bg-gray-500 hover:text-white rounded-lg shadow-2xl p-3 group">
              <div className="m-2 text-justify text-sm">
                <webImg
                  alt="card webImg"
                  className="rounded-t group-hover:scale-[1.15] transition duration-1000 ease-in-out"
                  src={appImg}
                />
                <h2 className="font-semibold my-4 text-2xl text-center">
                  Mobile App Development
                </h2>
                <p className="text-md font-medium">
                  We develop high-quality, custom cross-platform mobile
                  applications that are robust and optimized for performance,
                  scalability, and accessibility.
                </p>
              </div>
            </div>

            <div className="bg-white transition-all ease-in-out duration-400  overflow-hidden text-gray-700 hover:bg-gray-500 hover:text-white rounded-lg shadow-2xl p-3 group">
              <div className="m-2 text-justify text-sm">
                <webImg
                  alt="card webImg"
                  className="rounded-t group-hover:scale-[1.15] transition duration-1000 ease-in-out"
                  src={webImg3}
                />
                <h2 className="font-semibold my-4 text-2xl text-center ">
                  Domain and Hosting Services
                </h2>
                <p className="text-md font-medium">
                  We provide domain registration and web hosting services to
                  individuals and organizations to enable them gain visibility
                  in the digital space.
                </p>
              </div>
            </div> 

            <div className="bg-white transition-all ease-in-out duration-400  overflow-hidden text-gray-700 hover:bg-gray-500 hover:text-white rounded-lg shadow-2xl p-3 group">
              <div className="m-2 text-justify text-sm">
                <webImg
                  alt="card webImg"
                  className="rounded-t group-hover:scale-[1.15] transition duration-1000 ease-in-out"
                  src={webImg4}
                />
                <h2 className="font-semibold my-4 text-2xl text-center ">
                  General IT Consultations
                </h2>
                <p className="text-md font-medium">
                  Our IT consultations service provides expert guidance and
                  support for businesses and individuals looking to optimize
                  their technology solutions.
                </p>
              </div>
            </div>*/}
          </div>
        </div>
      </section>

      {/* <section>
        <div className="m-auto max-w-6xl p-2 md:p-12 h-5/6">
          <div
            className="flex flex-col-reverse lg:flex-row py-8 justify-between lg:text-left"
            data-aos="zoom-out"
          >
            <div className="lg:w-1/2 flex flex-col lg:mx-4 justify-center">
              <div className="text-blue-900 mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="72"
                  height="72"
                  viewBox="0 0 24 24"
                  className="fill-current"
                >
                  <path d="M2 12h2a7.986 7.986 0 0 1 2.337-5.663 7.91 7.91 0 0 1 2.542-1.71 8.12 8.12 0 0 1 6.13-.041A2.488 2.488 0 0 0 17.5 7C18.886 7 20 5.886 20 4.5S18.886 2 17.5 2c-.689 0-1.312.276-1.763.725-2.431-.973-5.223-.958-7.635.059a9.928 9.928 0 0 0-3.18 2.139 9.92 9.92 0 0 0-2.14 3.179A10.005 10.005 0 0 0 2 12zm17.373 3.122c-.401.952-.977 1.808-1.71 2.541s-1.589 1.309-2.542 1.71a8.12 8.12 0 0 1-6.13.041A2.488 2.488 0 0 0 6.5 17C5.114 17 4 18.114 4 19.5S5.114 22 6.5 22c.689 0 1.312-.276 1.763-.725A9.965 9.965 0 0 0 12 22a9.983 9.983 0 0 0 9.217-6.102A9.992 9.992 0 0 0 22 12h-2a7.993 7.993 0 0 1-.627 3.122z"></path>
                  <path d="M12 7.462c-2.502 0-4.538 2.036-4.538 4.538S9.498 16.538 12 16.538s4.538-2.036 4.538-4.538S14.502 7.462 12 7.462zm0 7.076c-1.399 0-2.538-1.139-2.538-2.538S10.601 9.462 12 9.462s2.538 1.139 2.538 2.538-1.139 2.538-2.538 2.538z"></path>
                </svg>
              </div>
              <h3
                className="text-3xl  text-blue-900 
                            font-bold"
              >
                We <span className="font-black">Build</span>
              </h3>
              <div>
                <p className="my-3 text-xl text-gray-600 font-semibold">
                  With over 10 years experience in software analysis and design
                  and a deep understanding of the latest IT trends and
                  solutions, we provide customized recommendations and
                  strategies to help you improve your operations, reduce costs,
                  and increase efficiency.
                </p>
              </div>
            </div>
            <div className="lg:w-1/2 flex flex-col lg:mx-4 justify-center">
              <div className="text-blue-900 mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="72"
                  height="72"
                  viewBox="0 0 24 24"
                  className="fill-current"
                >
                  <path d="m7.375 16.781 1.25-1.562L4.601 12l4.024-3.219-1.25-1.562-5 4a1 1 0 0 0 0 1.562l5 4zm9.25-9.562-1.25 1.562L19.399 12l-4.024 3.219 1.25 1.562 5-4a1 1 0 0 0 0-1.562l-5-4zm-1.649-4.003-4 18-1.953-.434 4-18z"></path>
                </svg>
              </div>
              <h3 className="text-3xl  text-blue-900 font-bold">
                We <span className="font-black">Collaborate</span>
              </h3>
              <div>
                <p className="my-3 text-xl text-gray-600 font-semibold">
                  We can collaborate with your existing tech team to scale
                  existing software applications or design customized software
                  applications that suits your everyday need and simplifies
                  various processes.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section> */}
    </div>
  );
};

export default Services;
