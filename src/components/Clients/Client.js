import React from "react";

const Client = ({ client }) => {
  return (
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
  );
};

export default Client;
