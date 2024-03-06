import React from "react";
import Card from "./Card";
import { GOALS } from "../../data/Goals";

const Goals = () => {
  return (
    <div className="my-4 py-4" id="goals">
      <div className="px-4" data-aos="fade-down" data-aos-delay="600">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {GOALS.map((data, index) => (
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

export default Goals;
