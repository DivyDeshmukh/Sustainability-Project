import React from "react";

const Hero = () => {
  return (
    <div
      className="relative bg-cover bg-center h-screen flex items-center justify-center"
      style={{ backgroundImage: 'url("../../public/hero1.jpg")' }}
    >
      <div className="text-center">
        <h1 className="text-white text-4xl font-bold mb-4">
          Live Well, Live Green:
        </h1>
        <p className="text-white text-xl">
          Your Guide to a Sustainable Lifestyle
        </p>
      </div>
    </div>
  );
};

export default Hero;
