import React from "react";
import Navbar from "./components/Navbar/Navbar";
import HeroSection from "./components/HeroSection";
import ProductsSection from "./components/ProductsSection/ProductsSection";
import Profile from "./components/ProfileSection/Profile";
import SpaceCrafters from "./components/SpaceCrafters";
import Testimonials from "./components/Testimonials/Testimonials";
import Footer from "./components/Footer";
export default function App() {
  return (
    <div>
      <Navbar />
      <main className="mx-auto max-w-screen-2xl">
        <HeroSection />
        <ProductsSection />
        <Profile />
        <SpaceCrafters />
        <Testimonials />
      </main>
      <Footer />
    </div>
  );
}
