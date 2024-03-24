import React from "react";
import ShowMoreText from "react-show-more-text";

const Service = ({ img, title, description }) => {
  return (
    <div className="bg-white transition-all ease-in-out duration-400  overflow-hidden text-gray-700 hover:bg-gray-500 hover:text-white rounded-lg shadow-2xl p-3 group">
      <div className="m-2 text-justify text-sm">
        <img
          alt="card img"
          className="rounded-t group-hover:scale-[1.15] transition duration-1000 ease-in-out"
          src={img}
        />
        <h2 className="font-semibold my-4 text-2xl text-center">{title}</h2>

        <ShowMoreText
          lines={4}
          more={
            <span style={{ color: "#1890ff", cursor: "pointer" }}>
              read more
            </span>
          }
          less={
            <span style={{ color: "#1890ff", cursor: "pointer" }}>
              read less
            </span>
          }
          expanded={false}
          width={290}
        >
          <p
            dangerouslySetInnerHTML={{ __html: description }}
            style={{ width: "100%", textAlign: "justify" }}
          ></p>
        </ShowMoreText>
      </div>
    </div>
  );
};
export default Service;
