// SocialResources.jsx
import React from "react";

const SocialResources = () => {
  const reports = [
    {
      title: "UNESCO Reports",
      url: "https://en.unesco.org/themes/education-sustainable-development/publications",
      image: "../../../public/sr7.jpeg",
    },
    {
      title: "UNICEF Publications",
      url: "https://www.unicef.org/publications",
      image: "../../../public/sr8.jpeg",
    },
    {
      title: "WHO Reports",
      url: "https://www.who.int/publications",
      image: "../../../public/sr9.jpeg",
    },
  ];

  const tools = [
    {
      title: "Social Impact Calculator",
      url: "https://socialimpactcalculator.com/",
      image: "../../../public/sr4.png",
    },
    {
      title: "Global Health Observatory",
      url: "https://www.who.int/data/gho",
      image: "../../../public/sr5.jpeg",
    },
    {
      title: "UNESCO Education Tools",
      url: "https://en.unesco.org/themes/education-sustainable-development/tools",
      image: "../../../public/sr6.png",
    },
  ];

  const organizations = [
    {
      title: "UNESCO",
      url: "https://en.unesco.org/",
      image: "../../../public/sr1.jpg",
    },
    {
      title: "UNICEF",
      url: "https://www.unicef.org/",
      image: "../../../public/sr2.png",
    },
    {
      title: "World Health Organization (WHO)",
      url: "https://www.who.int/",
      image: "../../../public/sr3.png",
    },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      <div className="col-span-3">
        <h2 className="text-2xl font-bold mb-4 text-center mt-8">
          Social Reports and Publications
        </h2>
      </div>
      {reports.map((report, index) => (
        <div
          key={index}
          className="bg-white rounded-lg shadow-md overflow-hidden transform hover:scale-105 transition-transform duration-300"
        >
          <img
            src={report.image}
            alt={report.title}
            className="w-full h-40 object-cover"
          />
          <div className="p-4">
            <h3 className="text-lg font-semibold mb-2">{report.title}</h3>
            <a
              href={report.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline block"
            >
              Read More
            </a>
          </div>
        </div>
      ))}
      <div className="col-span-3">
        <h2 className="text-2xl font-bold mb-4 text-center mt-8">
          Social Tools and Resources
        </h2>
      </div>
      {tools.map((tool, index) => (
        <div
          key={index}
          className="bg-white rounded-lg shadow-md overflow-hidden transform hover:scale-105 transition-transform duration-300"
        >
          <img
            src={tool.image}
            alt={tool.title}
            className="w-full h-40 object-cover"
          />
          <div className="p-4">
            <h3 className="text-lg font-semibold mb-2">{tool.title}</h3>
            <a
              href={tool.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline block"
            >
              Visit Tool
            </a>
          </div>
        </div>
      ))}
      <div className="col-span-3">
        <h2 className="text-2xl font-bold mb-4 text-center mt-8">
          Social Organizations
        </h2>
      </div>
      {organizations.map((org, index) => (
        <div
          key={index}
          className="bg-white rounded-lg shadow-md overflow-hidden transform hover:scale-105 transition-transform duration-300"
        >
          <img
            src={org.image}
            alt={org.title}
            className="w-full h-40 object-cover"
          />
          <div className="p-4">
            <h3 className="text-lg font-semibold mb-2">{org.title}</h3>
            <a
              href={org.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline block"
            >
              Visit Organization
            </a>
          </div>
        </div>
      ))}
    </div>
  );
};

export default SocialResources;
