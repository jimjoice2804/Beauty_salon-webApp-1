"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { FaFacebookF } from "react-icons/fa";
import { RiTwitterXFill } from "react-icons/ri";
import { FaInstagram } from "react-icons/fa";
import { FaPinterest } from "react-icons/fa";
import Link from "next/link";

const Socials = [
  {
    icon: <FaFacebookF />,
    link: "https://www.facebook.com",
  },
  {
    icon: <RiTwitterXFill />,
    link: "https://www.twitter.com",
  },
  {
    icon: <FaInstagram />,
    link: "https://www.instagram.com",
  },
  {
    icon: <FaPinterest />,
    link: "https://www.pinterest.com",
  },
];

const ImageSlider: React.FC = () => {
  const images = [
    "https://images.unsplash.com/photo-1580618672591-eb180b1a973f?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8c2Fsb258ZW58MHx8MHx8fDA%3D",
    "https://images.unsplash.com/photo-1634449571010-02389ed0f9b0?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHNhbG9ufGVufDB8fDB8fHww",
    "https://images.unsplash.com/photo-1512496015851-a90fb38ba796?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fHNhbG9ufGVufDB8fDB8fHww",
    "https://plus.unsplash.com/premium_photo-1661545818721-72a9220d0b97?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzN8fHNhbG9ufGVufDB8fDB8fHww",
  ]; // replace with your image paths
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImageIndex((currentImageIndex + 1) % images.length);
    }, 3000); // change images every 2 seconds

    return () => clearInterval(timer); // cleanup on unmount
  }, [currentImageIndex, images.length]);

  return (
    <div>
      <div className="relative w-full sm:w-9/12 h-screen mt-10 m-auto">
        <Image
          src={images[currentImageIndex]}
          alt=""
          layout="fill"
          objectFit="cover"
        />
        <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-10 flex flex-col sm:grid sm:grid-cols-12  justify-center">
          <div className="sm:col-span-6"></div>
          <div className="flex flex-col justify-between gap-5 px-7 py-10 mb-28 sm:items-end sm:col-span-6">
            <div className="text-2xl sm:text-7xl text-white font-serif mb-10 sm:mb-0 mt-[-50px] sm:mt-0">
              Are You Ready for a New & Better You?
            </div>
            <div className="flex flex-col items-center justify-center space-y-4 m-auto">
              <Link href="pages/bookings">
                <div className="px-7 py-3 bg-slate-600 text-white mb-10 sm:mb-0">
                  Book an Appointment
                </div>
              </Link>
              <div className="flex text-white gap-7 text-xl">
                {Socials.map((item, index) => {
                  return (
                    <div key={index}>
                      <a
                        href={item.link}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <div>{item.icon}</div>
                      </a>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImageSlider;
