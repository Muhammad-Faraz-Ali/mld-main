import React from "react";
const Card = ({ title, description }) => {
  return (
    <div className="bg-white transition-all ease-in-out duration-400 overflow-hidden text-gray-700 hover:scale-105 rounded-lg shadow-2xl p-3">
      <div className="m-2 text-justify text-sm">
        <h4 className="font-bold my-4 text-4xl text-center mb-4 h-12 text-blue-900">
          {title}
        </h4>
        <p className="text-md font-medium leading-5 h-auto md:h-48">
          {description}
        </p>
      </div>
    </div>
  );
};
export default Card;
