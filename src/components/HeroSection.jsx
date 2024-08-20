import React from "react";
import video1 from "/assets/videos/video1.mp4";
import video2 from "/assets/videos/video2.mp4";

const HeroSection = () => {
  return (
    // Hero flex container
    <div>
      <div className="flex flex-col items-center bg-[url('/assets/images/heroImage.jpg')] bg-cover bg-center h-[calc(100vh-72px)]">
        {/* Text part */}
        <h1 className="text-step-5 text-center tracking-wide">
          Spaceship Kits for <br />
          <span className="font-bold bg-gradient-to-r from-yellow-400 to-yellow-800 text-transparent bg-clip-text">
            Galactic Explorers
          </span>
        </h1>
        <p className="mt-10 text-lg text-center text-neutral-500 max-w-4xl">
          Embark on an interstellar adventure with SpaceCraft, your online shop
          for premium spaceship components.
        </p>
        {/* Button part */}
        <div className="flex justify-center my-10">
          <a
            href="#"
            className="bg-gradient-to-r from-yellow-500 to-yellow-800  px-4 py-3 rounded-md"
          >
            Take Off
          </a>
          <a href="#" className="mx-3 px-4 py-3 rounded-md border">
            Explore
          </a>
        </div>
      </div>
      {/* Video part */}
      <div className="flex mt-10 justify-center">
        <video
          src={video1}
          autoPlay
          loop
          muted
          className="rounded-lg w-1/2 md:w-2/5 mx-4 my-4 border border-yellow-500"
        ></video>
        <video
          src={video2}
          autoPlay
          loop
          muted
          className="rounded-lg w-1/2 md:w-2/5  mx-4 my-4 border border-yellow-500"
        ></video>
      </div>
    </div>
  );
};

export default HeroSection;
