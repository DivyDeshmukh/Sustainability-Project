// Import React and necessary libraries
import React from "react";

// Functional component AdvDonations
const AdvDonations = () => {
  // Sample logo and text data
  const logos = [
    {
      logo: "../../public/adv1.jpg",
      text: "Used for plant trees",
    },
    {
      logo: "../../public/adv2.jpg",
      text: "To fight against climate changes",
    },
    {
      logo: "../../public/adv3.jpg",
      text: "For Recycling",
    },
    {
      logo: "../../public/adv4.jpg",
      text: "For Reducing Waste",
    },
  ];

  return (
    <div className="flex flex-col md:flex-row items-center justify-between p-6 bg-white">
      <div className="md:w-1/2 p-4">
        <h2 className="text-3xl font-bold mb-4">
          Advantages of Donating towards Sustainability
        </h2>
        <p className="text-lg">
          Donating towards sustainability brings numerous benefits to our
          economy, society, and environment. Your contributions help build
          resilient communities, promote social equity, and protect our natural
          resources for future generations.
        </p>
      </div>

      <div className="md:w-1/2 p-4 grid grid-cols-2 gap-4">
        {logos.map((item, index) => (
          <div
            key={index}
            className="flex flex-col items-center justify-center p-4 border rounded"
          >
            <img
              className="w-16 h-16 mb-2"
              src={item.logo}
              alt={`Logo ${index + 1}`}
            />
            <p className="text-center text-base">{item.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AdvDonations;
