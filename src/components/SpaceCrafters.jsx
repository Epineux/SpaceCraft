import { useState } from "react";
import { plansOptions } from "../constants";

const SpaceCrafters = () => {
  const [hoveredDiv, setHoveredDiv] = useState(null);

  const handleMouseEnter = (index) => {
    setHoveredDiv(index);
  };
  const handleMouseLeave = () => {
    setHoveredDiv(null);
  };

  return (
    <div className="flex flex-col items-center p-space-l py-space-2xl">
      {/* Text part */}
      <h1 className="px-2 py-1 text-step-1 font-bold uppercase text-yellow-400 box-shadow-section-title">
        SpaceCrafters
      </h1>
      <h2 className="px-space-s-3xl py-space-l text-center text-step-3 leading-tight">
        Choose your Plan and start your
        <span className="bg-gradient-to-r from-yellow-400 to-yellow-800 bg-clip-text text-transparent">
          {" "}
          Space Journey
        </span>
      </h2>
      {/* Grid of membership plans */}
      <div className="grid w-full grid-cols-[repeat(auto-fit,minmax(220px,1fr))] gap-space-s p-space-l px-space-s-3xl">
        {plansOptions.map((plan, index) => (
          <div
            className={`flex flex-col rounded-3xl border p-space-m transition-all duration-700 ease-in-out hover:scale-105 ${hoveredDiv !== null && hoveredDiv !== index ? "blur-sm" : ""}`}
            onMouseEnter={() => handleMouseEnter(index)}
            onMouseLeave={handleMouseLeave}
            key={index}
          >
            <div>
              <h3 className="text-step-1">{plan.title}</h3>
              <h4 className="py-space-2xs text-step-0">
                ${plan.price}{" "}
                <span className="text-step--1 text-neutral-400">/Month</span>
                {plan.title === "Space-Crafter" && (
                  <span className="px-space-3xs-2xs bg-gradient-to-b from-yellow-400 to-yellow-800 bg-clip-text text-step--1 text-transparent">
                    {" "}
                    Most Popular
                  </span>
                )}
              </h4>
            </div>
            <ul className="py-space-m">
              {plan.options.map((option, index) => (
                <li
                  key={index}
                  className="flex items-center gap-space-xs py-space-2xs text-step--1"
                >
                  <div className="text-yellow-400">{option.logo}</div>
                  <p>{option.text}</p>
                </li>
              ))}
            </ul>
            <div className="mt-auto flex w-full justify-center py-space-xs">
              <button className="w-2/3 rounded-lg border border-yellow-600 py-1 font-bold transition duration-500 ease-in-out hover:bg-yellow-600">
                Choose Plan
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SpaceCrafters;
