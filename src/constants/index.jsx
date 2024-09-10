import { RiRocketLine } from "react-icons/ri";
import { SiFueler } from "react-icons/si";
import {
  GiBattery100,
  GiCompass,
  GiRobotGrab,
  GiAstronautHelmet,
  GiAlliedStar,
} from "react-icons/gi";
import { FaRegCheckCircle } from "react-icons/fa";
import { FaRegCircleXmark } from "react-icons/fa6";

export const navItems = [
  { label: "Products", href: "#products-section" },
  { label: "Profile", href: "#profile-section" },
  { label: "SpaceCrafters", href: "#spacecrafters" },
  { label: "Testimonials", href: "#testimonials" },
];

export const productsItems = [
  {
    label: "Hulls",
    logo: <RiRocketLine />,
    description:
      "Craft your spacecraft with our durable hulls, designed to protect you through every cosmic journey.",
    price: "9,500",
  },
  {
    label: "Engines",
    logo: <SiFueler />,
    description:
      "Propel your ship at light speed with engines that deliver unmatched power and precision.",
    price: "5,000",
  },
  {
    label: "Power Generators",
    logo: <GiBattery100 />,
    description:
      "Power your entire spaceship, ensuring a comfortable and energy-rich environment for life on board.",
    price: "3,000",
  },
  {
    label: "Navigation Systems",
    logo: <GiCompass />,
    description:
      "Navigate the stars effortlessly with advanced systems that ensure you always find your way.",
    price: "7,000",
  },
  {
    label: "Robotic Arms",
    logo: <GiRobotGrab />,
    description:
      "No need to leave the ship ! Handle any task in space with our versatile and powerful robotic arms.",
    price: "2,000",
  },
  {
    label: "Spacesuits",
    logo: <GiAstronautHelmet />,
    description:
      "Explore the cosmos safely and comfortably with our cutting-edge spacesuits.",
    price: "1,100",
  },
];

export const imageData = [
  {
    src: "/assets/images/astronaut-1.jpg",
    alt: "astronaut",
  },
  {
    src: "/assets/images/planet-1.jpg",
    alt: "planet",
  },
  {
    src: "/assets/images/astronaut-3.jpg",
    alt: "astronaut",
  },
  {
    src: "/assets/images/astronaut-2.jpg",
    alt: "astronaut",
  },
  {
    src: "/assets/images/planet-2.jpg",
    alt: "planet",
  },
  {
    src: "/assets/images/astronaut-5.jpg",
    alt: "spaceship",
  },

  {
    src: "/assets/images/astronaut-4.jpg",
    alt: "astronaut",
  },
  {
    src: "/assets/images/universe.jpg",
    alt: "universe",
  },
  {
    src: "/assets/images/astronaut-6.jpg",
    alt: "astronaut",
  },
];

export const plansOptions = [
  {
    title: "Star-Explorer",
    price: 0,
    options: [
      {
        text: "Standard Spaceship Components",
        logo: <FaRegCheckCircle />,
      },
      {
        text: "Access to Components Documentation",
        logo: <FaRegCheckCircle />,
      },
      { text: "Community Support Forum", logo: <FaRegCheckCircle /> },
      { text: "No Customization Options", logo: <FaRegCircleXmark /> },
    ],
  },
  {
    title: "Space-Crafter",
    price: 40,
    options: [
      {
        text: "All StarExplorer Features",
        logo: <FaRegCheckCircle />,
      },
      {
        text: "Premium Spaceship Components",
        logo: <FaRegCheckCircle />,
      },
      {
        text: "Access to our In-Depth Build Guide",
        logo: <FaRegCheckCircle />,
      },
      {
        text: "Unlock All Customization Options",
        logo: <FaRegCheckCircle />,
      },
    ],
  },
  {
    title: "Galaxy-Master",
    price: 280,
    options: [
      { text: "All SpaceCrafter Features", logo: <GiAlliedStar /> },
      { text: "Unique Spaceship Components", logo: <GiAlliedStar /> },
      {
        text: "Personalized Spaceship Design Mentorship",
        logo: <GiAlliedStar />,
      },
      { text: "Bespoke Ship Customization", logo: <GiAlliedStar /> },
    ],
  },
];

export const testimonials = [
  {
    name: "Alex Johnson",
    membership: "Space-Crafter",
    image: "/assets/images/testimonial-profile1.jpg",
    introduction:
      "Building my own spaceship was a dream come true, and SpaceCraft made it possible.",
    text: "The kit was so well-organized and easy to follow, even for a first-timer like me. Now, I’m exploring the far reaches of space, visiting planets I only ever dreamed of!",
  },
  {
    name: "Tomie Katana",
    membership: "Star-Explorer",
    image: "/assets/images/testimonial-profile2.jpg",
    introduction:
      "Building my spaceship with SpaceCraft was a fantastic experience.",
    text: " Now, I'm discovering new galaxies and living the ultimate space explorer's life!",
  },
  {
    name: "Atsuko Chiba",
    membership: "Galaxy-Master",
    image: "/assets/images/testimonial-profile3.jpg",
    introduction:
      "SpaceCraft gave me the tools to live out my wildest space adventures.",
    text: "After completing the build, I set off to explore the asteroid belt, and the journey was unforgettable. The support team was also amazing, answering all my questions along the way! The entire experience has sparked a newfound passion for space exploration in me.",
  },
  {
    name: "Jake Thompson",
    membership: "Space-Crafter",
    image: "/assets/images/testimonial-profile4.jpg",
    introduction: "Thanks to SpaceCraft, I’m now soaring through the stars!",
    text: " The DIY kit was intuitive and gave me the freedom to customize my spaceship.",
  },

  {
    name: "Motoko Kusanagi",
    membership: "Galaxy-Master",
    image: "/assets/images/testimonial-profile5.jpg",
    introduction:
      "I never thought I'd be able to build a spaceship from scratch, but SpaceCraft’s kit was a game-changer. ",
    text: "The instructions were clear, and the materials were top-notch. I've now traveled to the moons of Jupiter, and the experience has been nothing short of incredible.",
  },
];

export const footerLinks = [
  { category: "Company", links: ["About Us", "Team", "Careers", "Contact"] },
  {
    category: "Customer Support",
    links: [
      "FAQ",
      "Shipping & Returns",
      "Privacy Policy",
      "Terms & Conditions",
    ],
  },
  { category: "Stay Connected", links: ["Newsletters", "Affiliate Program"] },
];
