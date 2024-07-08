// EconomicResources.jsx
import React from "react";

const EconomicResources = () => {
  const reports = [
    {
      title: "World Bank Reports",
      url: "https://www.worldbank.org/en/research",
      image: "../../../public/e1.png",
    },
    {
      title: "IMF Publications",
      url: "https://www.imf.org/en/Publications",
      image: "../../../public/e2.jpg",
    },
    {
      title: "OECD Reports",
      url: "https://www.oecd.org/publications/",
      image: "../../../public/e3.jpeg",
    },
  ];

  const tools = [
    {
      title: "World Economic Outlook",
      url: "https://www.imf.org/en/Publications/WEO",
      image: "../../../public/e4.jpeg",
    },
    {
      title: "OECD Economic Outlook",
      url: "https://www.oecd.org/economic-outlook/",
      image: "../../../public/e5.jpg",
    },
    {
      title: "Global Economic Prospects",
      url: "https://www.worldbank.org/en/publication/global-economic-prospects",
      image: "../../../public/e6.jpg",
    },
  ];

  const organizations = [
    {
      title: "World Bank",
      url: "https://www.worldbank.org/",
      image: "../../../public/e7.png",
    },
    {
      title: "International Monetary Fund (IMF)",
      url: "https://www.imf.org/",
      image: "../../../public/e8.jpeg",
    },
    {
      title: "Organisation for Economic Co-operation and Development (OECD)",
      url: "https://www.oecd.org/",
      image: "../../../public/e9.jpg",
    },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      <div className="col-span-3">
        <h2 className="text-2xl font-bold mb-4 mt-8 text-center">
          Economic Reports and Publications
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
          Economic Tools and Resources
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
          Economic Organizations
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

export default EconomicResources;
