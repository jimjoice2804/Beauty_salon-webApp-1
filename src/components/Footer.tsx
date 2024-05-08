import React from "react";
import { FaFacebookF } from "react-icons/fa";
import { RiTwitterXFill } from "react-icons/ri";
import { FaInstagram } from "react-icons/fa";
import { FaPinterest } from "react-icons/fa";

const socials = [
  {
    name: "Facebook",
    url: "https://facebook.com",
    icon: <FaFacebookF />,
  },
  {
    name: "Twitter",
    url: "https://twitter.com",
    icon: <RiTwitterXFill />,
  },
  {
    name: "Instagram",
    url: "https://instagram.com",
    icon: <FaInstagram />,
  },
  {
    name: "Pinterest",
    url: "https://pinterest.com",
    icon: <FaPinterest />,
  },
  // add more socials here...
];

const Footer = () => {
  return (
    <footer className="bg-[#212121] text-white py-6 px-4 sm:min-h-96 flex justify-center items-center">
      <div className="container mx-auto flex flex-col sm:flex-row justify-between items-center">
        <div>
          <h1 className="font-bold text-3xl font-serif">Shear&Style</h1>
        </div>
        <div className="mt-4 sm:mt-0">
          <p>500 Terry Francine Street San Francisco, CA 94158</p>
          <p>123-456-7890</p>
          <p>info@mysite.com</p>
        </div>
        <div className="mt-4 sm:mt-0 flex space-x-4">
          {socials.map((social) => (
            <a key={social.name} href={social.url} target="_blank" rel="noreferrer">
              {social.icon}
            </a>
          ))}
        </div>
        <div className="mt-4 sm:mt-0">
          <p>&copy; {new Date().getFullYear()} Shear&Style</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;