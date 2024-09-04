import React from "react";
import { productsItems } from "../../constants/index.jsx";
import "./gradient-effect.css";
import "./grid-layout.css";

const ProductsSection = () => {
  const handlePointerMove = (e) => {
    e.currentTarget.style.setProperty("--x", `${e.clientX}px`);
    e.currentTarget.style.setProperty("--y", `${e.clientY}px`);
  };

  return (
    <div className="flex flex-col items-center p-space-l py-space-2xl">
      {/* Text part */}
      <h1 className="px-2 py-1 text-step-1 font-bold uppercase text-yellow-400 box-shadow-section-title">
        Products
      </h1>
      <h2 className="py-space-l text-center text-step-4 tracking-wide">
        Build your
        <span className="bg-gradient-to-r from-yellow-400 to-yellow-800 bg-clip-text text-transparent">
          {" "}
          own Spaceship
        </span>
      </h2>
      {/* Grid of Products */}
      <ul
        className="px-space-s-3xl grid w-full max-w-6xl grid-cols-[repeat(auto-fit,minmax(250px,1fr))] gap-space-xs py-space-l"
        onPointerMove={handlePointerMove}
      >
        {productsItems.map((item) => (
          // To get the size of my actual item for container query + flex so they have all the same height with flex-grow
          <div key={item.label} className="container-type-wrapper flex">
            <li
              className="gradient-effect list-grid-layout flex-grow py-5"
              style={{ container: "inline-size" }}
            >
              {React.cloneElement(item.logo, {
                className: "w-dynamic-logo h-dynamic-logo mx-auto",
              })}
              <div className="flex flex-col py-space-xs">
                <h2 className="text-step-0 font-bold">{item.label}</h2>
                <p className="py-space-s text-step--1">{item.description}</p>
                <div className="mt-auto flex items-center justify-evenly gap-space-2xs">
                  <p className="italic">
                    From{" "}
                    <span className="font-bold text-yellow-300">
                      {item.price}$
                    </span>
                  </p>
                  <button className="rounded bg-gradient-to-r from-yellow-500 to-yellow-800 px-2 py-1 font-bold">
                    Buy Now
                  </button>
                </div>
              </div>
            </li>
          </div>
        ))}
      </ul>
    </div>
  );
};

export default ProductsSection;
