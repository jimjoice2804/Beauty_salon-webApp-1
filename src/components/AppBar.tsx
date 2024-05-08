"use client";
import React, { useState } from "react";
import Link from "next/link";

interface appBarContentsType {
  name: string;
}

const appBarContents = [
  {
    name: "Home",
  },
  {
    name: "About",
  },
  {
    name: "Services",
  },
  {
    name: "Contacts",
  },
];

const AppBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div>
      <div className="grid grid-cols-12 p-5 bg-[#FFFDD0]">
        <div className=" col-span-10 lg:col-span-6 font-normal italic font-serif text-3xl">
          <Link href={`/`}>Shear&Style</Link>
        </div>

        <div className="hidden lg:col-span-6 lg:flex lg:justify-evenly items-center">
          {appBarContents.map((items: appBarContentsType) => {
            return (
              <Link
                className=""
                key={items.name}
                href={
                  items.name === "Home"
                    ? "/"
                    : `/pages/${items.name.toLowerCase()}`
                }
              >
                <div className="border-black hover:text-[#E0aa3e]">
                  {items.name}
                </div>
              </Link>
            );
          })}
        </div>

        <div className="col-span-2 flex justify-center items-center lg:hidden ">
          <button onClick={() => setIsOpen(!isOpen)}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="h-6 w-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </div>

      <div>
        {isOpen ? (
          <div className="lg:hidden flex flex-col gap-5 justify-center items-center">
            {appBarContents.map((items: appBarContentsType) => {
              return (
                <Link
                  key={items.name}
                  href={`/page/${items.name.toLowerCase()}`}
                >
                  {items.name}
                </Link>
              );
            })}
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default AppBar;
