import "./scroller-animation.css";
import { imageData } from "../../constants/index.jsx";

const Profile = () => {
  // Check if user has reduced motion enabled
  const animationAllowed = !window.matchMedia(
    "(prefers-reduced-motion: reduce)",
  ).matches;
  const displayImages = () => {
    return imageData.map((image, index) => (
      <img
        key={index}
        src={image.src}
        alt={image.alt}
        className="scroller-images"
      />
    ));
  };

  return (
    <section
      id="profile-section"
      className="flex flex-col items-center p-space-l pb-space-xl pt-space-2xl"
      style={{ overflowX: "clip" }}
    >
      {/* Text */}
      <h1 className="px-2 py-1 text-center text-step-1 font-bold uppercase text-yellow-400 box-shadow-section-title">
        Profile
      </h1>
      <h2 className="px-space-s-3xl py-space-l text-center text-step-3 leading-tight">
        Share your last{" "}
        <span className="bg-gradient-to-r from-yellow-400 to-yellow-800 bg-clip-text text-transparent">
          Space Adventures
        </span>{" "}
        with your friends on your{" "}
        <span className="bg-gradient-to-r from-yellow-400 to-yellow-800 bg-clip-text text-transparent">
          SpaceCraft Profile
        </span>
      </h2>
      {/* Scroller */}
      <div
        className="scroller w-full max-w-5xl px-space-s-xl"
        data-direction="right"
        data-speed="slow"
        data-animated={animationAllowed}
      >
        <div className="scroller-inner">
          {displayImages()}
          {/* In case user disabled animation, display all images once */}
          {animationAllowed && displayImages()}
        </div>
      </div>
      {/* Buttons */}
      <div className="flex gap-space-s-m py-space-l">
        <a
          href="#"
          className="rounded-md bg-gradient-to-r from-yellow-500 to-yellow-800 px-4 py-3"
        >
          Create Profile
        </a>
        <a href="#" className="rounded-md border px-4 py-3">
          View Profiles
        </a>
      </div>
    </section>
  );
};

export default Profile;
