import React from "react";

const Hero = () => {
  return (
    <div className="relative">
      <img
        className="w-full h-[80vh] object-cover"
        src="../../../public/socialhome.jpg"
        alt="Banner"
      />

      <div className="absolute inset-0 bg-gray-500 opacity-50"></div>

      <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
        <h1 className="text-7xl font-bold mb-4 text-center">
          Learn More About <br />
          Social Sustainability
        </h1>
      </div>
    </div>
  );
};

export default Hero;
