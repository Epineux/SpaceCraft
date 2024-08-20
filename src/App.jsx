import React from "react";
import Navbar from "./components/Navbar/Navbar";
import HeroSection from "./components/HeroSection";
import ProductsSection from "./components/ProductsSection/ProductsSection";
import Profile from "./components/ProfileSection/Profile";
export default function App() {
  return (
    <div>
      <Navbar />
      <main className="max-w-screen-2xl mx-auto">
        <HeroSection />
        <ProductsSection />
        <Profile />
      </main>
    </div>
  );
}
