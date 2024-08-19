import React from "react";
import Navbar from "./components/Navbar/Navbar";
import HeroSection from "./components/HeroSection";
import ProductsSection from "./components/ProductsSection/ProductsSection";
import Profile from "./components/ProfileSection/Profile";
export default function App() {
  return (
    <div>
      <Navbar />
      <div className="max-w-screen-2xl mx-auto pt-20 px-6">
        <HeroSection />
        <ProductsSection />
        <Profile />
      </div>
    </div>
  );
}
