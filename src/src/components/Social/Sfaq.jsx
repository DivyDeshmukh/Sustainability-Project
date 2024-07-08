import React from "react";

const faqData = [
  {
    question: "What is Social Sustainability?",
    link: "https://www.un.org/en/sections/issues-depth/sustainable-development-goals/index.html",
    imageSrc: "../../../public/s1.jpg",
  },
  {
    question:
      "Why is Diversity and Inclusion Important for Social Sustainability?",
    link: "https://www.ilo.org/global/topics/diversity-and-inclusion/lang--en/index.htm",
    imageSrc: "../../../public/s2.jpg",
  },
  {
    question:
      "How Does Access to Education Contribute to Social Sustainability?",
    link: "https://www.unicef.org/education",
    imageSrc: "../../../public/s3.jpg",
  },
  {
    question: "What Role Does Fair Trade Play in Social Sustainability?",
    link: "https://www.fairtrade.net/what-is-fairtrade",
    imageSrc: "../../../public/s4.jpg",
  },
  {
    question: "How Can Social Enterprises Promote Social Sustainability?",
    link: "https://www.socialenterprise.org.uk/what-is-a-social-enterprise/",
    imageSrc: "../../../public/s5.jpg",
  },
];

const Sfaq = () => {
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

export default Sfaq;
