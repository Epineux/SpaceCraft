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
      <img key={index} src={image.src} alt={image.alt} className="h-48 w-48" />
    ));
  };
  return (
    <div
      className="mt-20 flex flex-col items-center"
      style={{ overflowX: "clip" }}
    >
      <h1 className="box-shadow-glow px-2 py-1 text-xl font-bold uppercase text-yellow-400">
        Profile
      </h1>
      <h2 className="my-10 w-[25ch] text-center text-3xl tracking-wide sm:text-5xl lg:mt-20 lg:text-6xl">
        Share your last{" "}
        <span className="bg-gradient-to-r from-yellow-400 to-yellow-800 bg-clip-text text-transparent">
          Space Adventures
        </span>{" "}
        with your friends on your{" "}
        <span className="bg-gradient-to-r from-yellow-400 to-yellow-800 bg-clip-text text-transparent">
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
