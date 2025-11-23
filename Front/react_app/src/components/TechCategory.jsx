import React from "react";
import TechCard from "./TechCard";

const TechCategory = ({ title, items }) => {
  return (
    <div className="mb-14">
      <div className="flex items-center mb-4">
        <div className="h-[2px] w-10 bg-blue-400 mr-3"></div>
        <h2 className="text-2xl text-white font-bold">{title}</h2>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
        {items.map((item, i) => (
          <TechCard key={i} {...item} />
        ))}
      </div>
    </div>
  );
};

export default TechCategory;