import React from "react";
import { FaQuoteLeft } from "react-icons/fa";

const SecondBanner = () => {
  return (
    <div className="bg-[#e6ddbc] p-20 my-20">
      <div className="flex justify-center items-center h-full flex-col sm:flex-row">
        <div className="bg-white font-medium font-serif w-full sm:w-1/3 h-[50%] p-5 sm:m-2 sm:min-h-[45rem] min-h-96 flex justify-center items-center">
          <h1 className="text-6xl text-center">The Best in the World</h1>
        </div>

        <div className="bg-[#212121] text-[#e6ddbc] font-medium font-serif w-full sm:w-1/3 h-[50%] p-5 sm:m-2 sm:min-h-[45rem] min-h-96 flex justify-center items-center text-6xl">
          <FaQuoteLeft />
        </div>

        <div className="bg-white font-medium font-serif w-full sm:w-1/3 h-[50%] p-5 sm:m-2 sm:min-h-[45rem] min-h-96 flex justify-center items-center text-xl">
          I am a testimonial. Click to edit me and add text that says something
          nice about you and your services. Let your customers review you and
          tell their friends how great you are.
        </div>
      </div>
    </div>
  );
};

export default SecondBanner;
