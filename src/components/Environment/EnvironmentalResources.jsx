// EnvironmentalResources.jsx
import React from "react";

const EnvironmentalResources = () => {
  const reports = [
    {
      title: "IPCC Reports",
      url: "https://www.ipcc.ch/reports/",
      image: "../../../public/er1.jpg",
    },
    {
      title: "WWF Publications",
      url: "https://www.worldwildlife.org/publications",
      image: "../../../public/er2.jpeg",
    },
    {
      title: "UNEP Reports",
      url: "https://www.unep.org/resources",
      image: "../../../public/er3.jpg",
    },
  ];

  const tools = [
    {
      title: "Carbon Footprint Calculator",
      url: "https://www.carbonfootprint.com/calculator.aspx",
      image: "../../../public/er4.jpeg",
    },
    {
      title: "Global Forest Watch",
      url: "https://www.globalforestwatch.org/",
      image: "../../../public/er5.png",
    },
    {
      title: "Energy Star Portfolio Manager",
      url: "https://www.energystar.gov/buildings/benchmark",
      image: "../../../public/er6.png",
    },
  ];

  const organizations = [
    {
      title: "Greenpeace",
      url: "https://www.greenpeace.org/",
      image: "../../../public/er7.png",
    },
    {
      title: "EDF",
      url: "https://www.edf.org/",
      image: "../../../public/er8.png",
    },
    {
      title: "Friends of the Earth",
      url: "https://foe.org/",
      image: "../../../public/er9.jpeg",
    },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      <div className="col-span-3">
        <h2 className="text-2xl font-bold mb-4 mt-8 text-center">
          Environmental Reports and Publications
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
        <h2 className="text-2xl font-bold mb-4 mt-8 text-center">
          Environmental Tools and Resources
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
        <h2 className="text-2xl font-bold mb-4 mt-8 text-center">
          Environmental Organizations
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

export default EnvironmentalResources;
