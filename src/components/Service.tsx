import Image from "next/image";
import React from "react";

const images = [
  {
    src: "https://images.unsplash.com/photo-1605980766335-d3a41c7332a1?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aGFpciUyMGNvbG9yfGVufDB8fDB8fHww",
    alt: "description_1",
    width: 800,
    height: 600,
    title: "Color",
    desciption:
      "Describe your image here. Use catchy text to tell people the story behind the",
  },
  {
    src: "https://plus.unsplash.com/premium_photo-1669675935731-589b96ddcc7c?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8aGFpciUyMGN1dHxlbnwwfDF8MHx8fDA%3D",
    alt: "description_2",
    width: 800,
    height: 600,
    title: "Cuts",
    desciption:
      "Describe your image here. Use catchy text to tell people the story behind the",
  },
  {
    src: "https://images.unsplash.com/photo-1481068164146-e8beb686f4d2?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8aGFpciUyMHN0eWxlfGVufDB8MXwwfHx8MA%3D%3D",
    alt: "description_3",
    width: 800,
    height: 600,
    title: "Color",
    desciption:
      "Describe your image here. Use catchy text to tell people the story behind the",
  },
];

const Service = () => {
  return (
    <div className="bg-[#212121] p-20 my-20">
      <div className="flex justify-center items-center h-full ">
        <div className="flex flex-col sm:flex-row">
          {images.map((image, index) => (
            <div key={index} className="w-full sm:w-1/3 h-[50%] p-5">
              <Image
                src={image.src}
                alt={image.alt}
                width={image.width}
                height={image.height}
                className="w-full h-full"
              />
              <div className="text-white flex flex-col justify-center items-center">
                <h1 className="font-light text-2xl p-4">{image.title}</h1>
                <div className="w-60">{image.desciption}...</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Service;
