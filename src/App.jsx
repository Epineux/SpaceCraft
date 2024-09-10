import { useEffect } from "react";

import Navbar from "./components/Navbar/Navbar";
import HeroSection from "./components/HeroSection";
import ProductsSection from "./components/ProductsSection/ProductsSection";
import Profile from "./components/ProfileSection/Profile";
import SpaceCrafters from "./components/SpaceCrafters";
import Testimonials from "./components/Testimonials/Testimonials";
import Footer from "./components/Footer";
export default function App() {
  // smooth scroll over the page, as React rendering cycle prevent the simple global css smooth behavior to be applied
  useEffect(() => {
    document.documentElement.style.scrollBehavior = "smooth";
  }, []);

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
