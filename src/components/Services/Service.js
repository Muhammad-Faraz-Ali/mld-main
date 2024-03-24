import React, { useState } from "react";

const Service = ({ img, title, description }) => {
  const [expanded, setExpanded] = useState(false);

  const toggleExpanded = () => {
    setExpanded(!expanded);
  };

  return (
    <div className="bg-white transition-all ease-in-out duration-400  overflow-hidden text-gray-700 hover:bg-gray-500 hover:text-white rounded-lg shadow-2xl p-3 group">
      <div className="m-2 text-justify text-sm">
        <img
          alt="card img"
          className="rounded-t group-hover:scale-[1.15] transition duration-1000 ease-in-out"
          src={img}
        />
        <h2 className="font-semibold my-4 text-2xl text-center">{title}</h2>

        <div style={{ overflow: "hidden" }}>
          <p
            dangerouslySetInnerHTML={{ __html: description }}
            style={{
              width: "100%",
              textAlign: "justify",
              maxHeight: expanded ? "none" : "100px", // Adjust height here
              overflow: "hidden",
            }}
          ></p>
        </div>

        <button
          onClick={toggleExpanded}
          className="text-blue-500 hover:underline"
        >
          {expanded ? "read less" : "read more"}
        </button>
      </div>
    </div>
  );
};
export default Service;
