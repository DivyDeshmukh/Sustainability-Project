// Import React and necessary libraries
import React from "react";

// Functional component DonateHome
const DonateHome = () => {
  return (
    <div className="relative">
      <img
        className="w-full h-64 object-cover"
        src="../../public/donate.jpg"
        alt="Banner"
      />

      <div className="absolute inset-0 bg-gray-500 opacity-50"></div>

      <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
        <h1 className="text-4xl font-bold mb-4 text-center">
          Donate towards sustainability
        </h1>
      </div>
    </div>
  );
};

export default DonateHome;
