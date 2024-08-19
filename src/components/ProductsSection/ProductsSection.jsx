import React from "react";
import { useState, useEffect, useRef } from "react";
import { productsItems } from "../../constants/index.jsx";
import "./styles.css";

const ProductsSection = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const gridItems = useRef([]);
  const handlePointerMove = (e) => {
    setPosition({
      x: e.clientX,
      y: e.clientY,
    });
  };
  useEffect(() => {
    gridItems.current.forEach((element) => {
      if (element) {
        element.style.setProperty("--x", `${position.x}px`);
        element.style.setProperty("--y", `${position.y}px`);
      }
    });
  }, [position]);

  return (
    <div className="relative mt-20 flex flex-col items-center">
      <h1 className="text-yellow-400 uppercase text-xl font-bold box-shadow-glow py-1 px-2 mt-10">
        Products
      </h1>
      <h2 className="text-3xl sm:text-5xl lg:text-6xl  mt-10 lg:mt-20 tracking-wide whitespace-nowrap">
        Build your
        <span className="bg-gradient-to-r from-yellow-400 to-yellow-800 text-transparent bg-clip-text">
          {" "}
          own Spaceship
        </span>
      </h2>
      <ul className="grid grid-cols-[repeat(auto-fit,minmax(260px,1fr))] gap-3 w-2/3 relative my-10 lg:mt-20">
        {productsItems.map((item) => (
          <li
            key={item.label}
            className="grid grid-cols-2 gradient-effect relative"
            onPointerMove={handlePointerMove}
            ref={(element) => gridItems.current.push(element)}
          >
            {React.cloneElement(item.logo, {
              className:
                "w-dynamic-logo h-dynamic-logo w-full self-center border border-red-500",
            })}
            <div className="border-red-500 border py-3">
              <h2 className="font-bold">{item.label}</h2>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductsSection;
