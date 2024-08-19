import React, { useEffect } from "react";
import "./styles.css";
import { imageData } from "../../constants/index.jsx";

const Dashboard = () => {
  useEffect(() => {
    const addAnimation = () => {
      const scroller = document.querySelector(".scroller");
      scroller.setAttribute("data-animated", "true");
    };
    if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      addAnimation();
    }
  }, []);
  const displayImages = () => {
    return imageData.map((image, index) => (
      <img key={index} src={image.src} alt={image.alt} className="w-48 h-48" />
    ));
  };
  return (
    <div className="mt-20 flex flex-col items-center">
      <h1 className="text-yellow-400 uppercase text-xl font-bold box-shadow-glow py-1 px-2">
        Profile
      </h1>
      <h2 className="text-3xl sm:text-5xl lg:text-6xl  my-10 lg:mt-20 tracking-wide w-[25ch] text-center">
        Share your last{" "}
        <span className="bg-gradient-to-r from-yellow-400 to-yellow-800 text-transparent bg-clip-text">
          Space Adventures
        </span>{" "}
        with your friends on your{" "}
        <span className="bg-gradient-to-r from-yellow-400 to-yellow-800 text-transparent bg-clip-text">
          SpaceCraft Profile
        </span>
      </h2>
      <div className="scroller" data-direction="right" data-speed="slow">
        <div className="scroller-inner">
          {displayImages()}
          {displayImages()}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
