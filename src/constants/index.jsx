import { RiRocketLine } from "react-icons/ri";
import { SiFueler } from "react-icons/si";
import {
  GiBattery100,
  GiCompass,
  GiRobotGrab,
  GiAstronautHelmet,
} from "react-icons/gi";

export const navItems = [
  { label: "Products", href: "#" },
  { label: "Dashboard", href: "#" },
  { label: "SpaceCrafters", href: "#" },
  { label: "About Us", href: "#" },
];

export const productsItems = [
  {
    label: "Hulls",
    logo: <RiRocketLine />,
  },
  {
    label: "Engines",
    logo: <SiFueler />,
  },
  {
    label: "Power Generators",
    logo: <GiBattery100 />,
  },
  {
    label: "Navigation Systems",
    logo: <GiCompass />,
  },
  {
    label: "Robotic Arms",
    logo: <GiRobotGrab />,
  },
  {
    label: "Spacesuits",
    logo: <GiAstronautHelmet />,
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
    src: "/assets/images/universe.jpg",
    alt: "universe",
  },
  {
    src: "/assets/images/astronaut-2.jpg",
    alt: "astronaut",
  },
  {
    src: "/assets/images/spaceship.jpg",
    alt: "spaceship",
  },
  {
    src: "/assets/images/astronaut-4.jpg",
    alt: "astronaut",
  },
  {
    src: "/assets/images/planet-2.jpg",
    alt: "planet",
  },
];
