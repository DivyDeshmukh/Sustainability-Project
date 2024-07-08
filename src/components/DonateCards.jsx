import React from "react";

const DonateCards = () => {
  const cardData = [
    {
      image: "../../public/env.jpg",
      heading: "Donate Towards Environment Sustainability",
      paragraph:
        "Contributions towards environmental sustainability protect our planet for future generations. Your donations support projects focused on reducing pollution, conserving natural resources, and promoting renewable energy, helping to combat climate change and preserve biodiversity.",
    },
    {
      image: "../../public/eco.jpg",
      heading: "Donate Towards Economic Sustainability",
      paragraph:
        "Donating towards economic sustainability helps create stable and resilient economies. Your contributions support initiatives that promote job creation, equitable wealth distribution, and sustainable business practices, ensuring long-term economic health for communities.",
    },
    {
      image: "../../public/social.jpg",
      heading: "Donate Towards Social Sustainability",
      paragraph:
        "Donating for social sustainability fosters inclusive and cohesive societies. Your support aids in education, healthcare, and social justice programs, empowering marginalized groups and promoting equality, leading to stronger, more connected communities.",
    },
  ];

  return (
    <div className="flex flex-col md:flex-row items-center justify-center space-y-6 md:space-y-0 md:space-x-6 p-6 mt-12 mb-12">
      {cardData.map((card, index) => (
        <div
          key={index}
          className="max-w-sm rounded overflow-hidden shadow-lg bg-white p-4"
        >
          <img
            className="w-full h-48 object-cover rounded-full"
            src={card.image}
            alt={`Card ${index + 1}`}
          />
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">{card.heading}</div>
            <p className="text-gray-700 text-base">{card.paragraph}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default DonateCards;
