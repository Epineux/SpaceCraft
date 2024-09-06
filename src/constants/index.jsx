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
  { label: "Products", href: "#" },
  { label: "Profile", href: "#" },
  { label: "SpaceCrafters", href: "#" },
  { label: "About Us", href: "#" },
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
