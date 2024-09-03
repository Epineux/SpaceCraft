import React from "react";
import video1 from "/assets/videos/video1.mp4";
import video2 from "/assets/videos/video2.mp4";

const HeroSection = () => {
  return (
    // Hero flex container
    <div>
      {/* Text and Hero image part (100vh*/}
      <div className="flex h-[calc(100vh-60px)] flex-col items-center justify-evenly bg-[url('/assets/images/heroImage.jpg')] bg-cover bg-center p-space-l">
        <h1 className="text-center text-step-5 tracking-wide">
          Spaceship Kits for <br />
          <span className="bg-gradient-to-r from-yellow-400 to-yellow-800 bg-clip-text font-bold text-transparent">
            Galactic Explorers
          </span>
        </h1>
        <p className="text-center text-step-0 text-neutral-400">
          Embark on an interstellar adventure with SpaceCraft, your online shop
          for premium spaceship components.
        </p>
        {/* Button part */}
        <div className="flex gap-space-s-m">
          <a
            href="#"
            className="rounded-md bg-gradient-to-r from-yellow-500 to-yellow-800 px-4 py-3"
          >
            Take Off
          </a>
          <a href="#" className="rounded-md border px-4 py-3">
            Explore
          </a>
        </div>
      </div>
      {/* Video part */}
      <div className="grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-space-m px-space-m py-space-2xl">
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
