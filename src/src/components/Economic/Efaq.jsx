import React from "react";

const faqData = [
  {
    question: "What is Economic Sustainability?",
    link: "https://www.investopedia.com/terms/e/economic-sustainability.asp",
    imageSrc: "../../../public/eco1.jpg",
  },
  {
    question:
      "How Does Efficient Resource Management Contribute to Economic Sustainability?",
    link: "https://www.un.org/sustainabledevelopment/economic-growth/",
    imageSrc: "../../../public/eco2.jpg",
  },
  {
    question:
      "Why Should Businesses Invest in Renewable Energy for Economic Sustainability?",
    link: "https://www.businessnewsdaily.com/8261-business-benefits-of-renewable-energy.html",
    imageSrc: "../../../public/eco3.jpg",
  },
  {
    question: "What Are the Benefits of Sustainable Supply Chain Practices?",
    link: "https://www.forbes.com/sites/forbestechcouncil/2021/05/03/the-business-case-for-sustainable-supply-chains/",
    imageSrc: "../../../public/eco4.jpg",
  },
  {
    question:
      "How Can Innovation and Technology Drive Economic Sustainability?",
    link: "https://www.weforum.org/agenda/2020/06/covid-19-recovery-sustainable-development-goals/",
    imageSrc: "../../../public/eco5.jpg",
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
