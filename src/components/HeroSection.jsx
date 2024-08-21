import React from "react";
import video1 from "/assets/videos/video1.mp4";
import video2 from "/assets/videos/video2.mp4";

const HeroSection = () => {
  return (
    // Hero flex container
    <div>
      {/* Text and Hero image part (100vh*/}
      <div className="flex flex-col items-center justify-evenly px-space-l py-10 bg-[url('/assets/images/heroImage.jpg')] bg-cover bg-center h-[calc(100vh-60px)]">
        <h1 className="text-step-5 text-center tracking-wide">
          Spaceship Kits for <br />
          <span className="font-bold bg-gradient-to-r from-yellow-400 to-yellow-800 text-transparent bg-clip-text">
            Galactic Explorers
          </span>
        </h1>
        <p className="text-step-0 text-center text-neutral-400">
          Embark on an interstellar adventure with SpaceCraft, your online shop
          for premium spaceship components.
        </p>
        {/* Button part */}
        <div className="flex gap-space-m">
          <a
            href="#"
            className="bg-gradient-to-r from-yellow-500 to-yellow-800  px-4 py-3 rounded-md"
          >
            Take Off
          </a>
          <a href="#" className="px-4 py-3 rounded-md border">
            Explore
          </a>
        </div>
      </div>
      {/* Video part */}
      <div className="grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] py-20 px-space-m gap-space-m">
        <video
          src={video1}
          autoPlay
          loop
          muted
          className="rounded-lg border border-yellow-500"
        ></video>
        <video
          src={video2}
          autoPlay
          loop
          muted
          className="rounded-lg border border-yellow-500"
        ></video>
      </div>
    </div>
  );
};

export default HeroSection;
