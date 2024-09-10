import { footerLinks } from "../constants";
import { FaGithub, FaLinkedin, FaInstagramSquare } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="mt-20 border-t border-neutral-700 py-space-l">
      <div className="mx-auto grid max-w-screen-2xl grid-cols-2 gap-space-l px-space-l md:grid-cols-3">
        {footerLinks.map((footerLink, index) => (
          <div
            key={index}
            className={`justify-self-center ${index === 2 ? "col-span-2 md:col-span-1" : "col-span-1"}`}
          >
            <h3 className="pb-space-m font-bold">{footerLink.category}</h3>
            <ul
              className={`flex gap-space-xs ${index === 2 ? "md:flex-col" : "flex-col"}`}
            >
              {footerLink.links.map((link, index) => (
                <li key={index}>
                  <a
                    href="#"
                    className="text-neutral-400 hover:text-neutral-300"
                  >
                    {link}
                  </a>
                </li>
              ))}
              {footerLink.category === "Stay Connected" && (
                <li className="flex items-center gap-space-xs px-space-xs-s text-step-2 md:px-0 md:py-space-m">
                  <a
                    href="#"
                    className="text-neutral-400 hover:text-neutral-300"
                  >
                    <FaInstagramSquare />
                  </a>
                  <a
                    href="#"
                    className="text-neutral-400 hover:text-neutral-300"
                  >
                    <FaLinkedin />
                  </a>
                  <a
                    href="#"
                    className="text-neutral-400 hover:text-neutral-300"
                  >
                    <FaGithub />
                  </a>
                </li>
              )}
            </ul>
          </div>
        ))}
      </div>
    </footer>
  );
};

export default Footer;
