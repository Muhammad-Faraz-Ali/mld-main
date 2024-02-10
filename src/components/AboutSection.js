import React from "react";
import Card from "./About/Card";

const DATA_ARRAY = [
  {
    title: "Our Mission",
    description:
      "At Tvinz, our mission is to revolutionize the way people use technology. We're dedicated to creating software products that simplify complex tasks and enhance everyday experiences. With a passion for innovation and a commitment to excellence, we're constantly pushing the boundaries of what's possible. We believe that our success is not just measured in financial terms but also by the positive impact we have on our customers, our employees, and our communities.",
  },
  {
    title: "Our Vision",
    description:
      "At Tvinz, we aspire to emerge as a prominent provider of cutting-edge software solutions, revolutionizing the way individuals engage with technology. Our goal is to develop products that streamline intricate tasks, elevate daily encounters, and consistently provide exceptional value to our customers. Fueled by a team of seasoned professionals and fostered by a culture of innovation and distinction, we are dedicated to influencing the future of technology and contributing positively to the world.",
  },
  {
    title: "Our Approach",
    description:
      "At Tvinz, we're committed to creating innovative software solutions that simplify complex tasks and enhance everyday experiences. Our team of experienced professionals is dedicated to delivering exceptional products and services that make a positive impact on society. Whether you're a business or an individual, we're here to help you achieve your goals and make a difference in the world. Thank you for choosing Tvinz.",
  },
];

const AboutSection = () => {
  return (
    <div className="my-4 py-4" id="aboutSection">
      <div className="px-4" data-aos="fade-down" data-aos-delay="600">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {DATA_ARRAY.map((data, index) => (
            <Card
              key={`index_${index}`}
              title={data.title}
              description={data.description}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
