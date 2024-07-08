import React from "react";

const faqData = [
  {
    question: "What is Environmental Sustainability?",
    link: "https://www.epa.gov/sustainability/learn-about-sustainability",
    imageSrc: "../../../public/ef.jpg",
  },
  {
    question: "Why Should We Conserve Natural Resources?",
    link: "https://www.worldwildlife.org/initiatives/natural-resources-and-the-environment",
    imageSrc: "../../../public/ef2.jpg",
  },
  {
    question: "How Does Sustainable Agriculture Benefit the Environment?",
    link: "https://www.nature.org/en-us/what-we-do/our-insights/perspectives/sustainable-agriculture-benefits/",
    imageSrc: "../../../public/ef3.jpg",
  },
  {
    question: "What Role Does Clean Energy Play in Sustainability?",
    link: "https://www.epa.gov/cleanenergy/learn-about-clean-energy",
    imageSrc: "../../../public/ef4.jpg",
  },
  {
    question: "How Can Communities Promote Environmental Justice?",
    link: "https://www.epa.gov/environmentaljustice",
    imageSrc: "../../../public/ef5.jpg",
  },
];

const Efaq = () => {
  return (
    <div className="max-w-4xl mx-auto py-8 px-4">
      <h2 className="text-3xl font-semibold mb-8">
        Frequently Asked Questions
      </h2>
      {faqData.map((item, index) => (
        <a
          key={index}
          href={item.link}
          className="flex items-center bg-white rounded-lg shadow-md p-4 mb-4 hover:shadow-lg transition duration-300"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="mr-4">
            <img
              src={item.imageSrc}
              alt={item.question}
              className="w-16 h-16 rounded-full object-cover"
            />
          </div>
          <div>
            <h3 className="text-lg font-semibold text-blue-600">
              {item.question}
            </h3>
            <p className="text-gray-600">Click to learn more</p>
          </div>
        </a>
      ))}
    </div>
  );
};

export default Efaq;
