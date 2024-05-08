import Image from "next/image";
import React from "react";

const images = [
  "https://plus.unsplash.com/premium_photo-1661780532909-e0e93c65fd5d?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjF8fHNhbG9uJTIwYmVhdXR5fGVufDB8fDB8fHww",
  "https://images.unsplash.com/photo-1519699047748-de8e457a634e?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzJ8fHNhbG9uJTIwYmVhdXR5fGVufDB8fDB8fHww",
  "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzR8fHNhbG9uJTIwYmVhdXR5fGVufDB8fDB8fHww",
  "https://plus.unsplash.com/premium_photo-1663040098711-ab1706dee999?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mzd8fHNhbG9uJTIwYmVhdXR5fGVufDB8fDB8fHww",
  "https://images.unsplash.com/photo-1551392505-f4056032826e?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDJ8fHNhbG9uJTIwYmVhdXR5fGVufDB8fDB8fHww",
  "https://images.unsplash.com/photo-1524502397800-2eeaad7c3fe5?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDR8fHNhbG9uJTIwYmVhdXR5fGVufDB8fDB8fHww",
  "https://images.unsplash.com/photo-1556942040-df93bd3bdd19?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDd8fHNhbG9uJTIwYmVhdXR5fGVufDB8fDB8fHww",
  "https://images.unsplash.com/photo-1527203561188-dae1bc1a417f?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDh8fHNhbG9uJTIwYmVhdXR5fGVufDB8fDB8fHww",
];

const PhotoGallary = () => {
  return (
    <div>
      <div>
        <h1 className="text-4xl sm:text-7xl font-serif text-center pb-8">
          Essential Looks & Products
        </h1>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          {images.map((image, index) => (
            <div key={index} className="relative w-full h-0 pb-[100%] group">
              <Image
                src={image}
                alt={`Gallery ${index + 1}`}
                layout="fill"
                objectFit="cover"
              />
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 transition duration-200 flex items-center justify-center">
                <p className="text-white opacity-0 group-hover:opacity-100 transition duration-200">
                  Hover Text
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PhotoGallary;
