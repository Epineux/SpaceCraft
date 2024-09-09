import React from "react";
import { testimonials } from "../../constants";
import "./background-image.css";
const gridItemsSpan = [
  "sm:col-span-2",
  "sm:col-span-1",
  "sm:row-span-2",
  "sm:col-span-1",
  "sm:col-span-2",
];

const Testimonials = () => {
  return (
    <div className="flex flex-col items-center p-space-l py-space-xl">
      {/* Text */}
      <h1 className="px-2 py-1 text-step-1 font-bold uppercase text-yellow-400 box-shadow-section-title">
        Stories from the Stars
      </h1>
      <h2 className="px-space-s-3xl py-space-l text-center text-step-3 leading-tight">
        Read about our customers{"' "}
        <span className="bg-gradient-to-r from-yellow-400 to-yellow-800 bg-clip-text text-transparent">
          SpaceCraft Journeys.
        </span>
      </h2>
      {/* Grid of testimonials */}
      <div className="grid w-full gap-space-2xs p-space-l px-space-s-3xl sm:grid-cols-2 lg:grid-cols-4">
        {testimonials.map((testimonial, index) => (
          <div
            key={index}
            className={`flex flex-col gap-space-s p-space-s ${gridItemsSpan[index]} background-image rounded`}
          >
            <div className="flex items-center gap-space-xs">
              <img
                src={testimonial.image}
                alt={testimonial.name}
                className="h-11 w-11 rounded-full border border-yellow-400"
              />
              <div>
                <h3>{testimonial.name}</h3>
                <p className="text-step--2 text-yellow-400/50">
                  {testimonial.membership}
                </p>
              </div>
            </div>
            <div className="flex flex-col gap-space-xs">
              <p className="font-bold">{testimonial.introduction}</p>
              <p className="text-step--2 text-neutral-400">
                {testimonial.text}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
