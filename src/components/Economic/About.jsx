import React from "react";

const About = () => {
  return (
    <div className="flex flex-wrap items-center justify-around text-black mt-16">
      {/* Text Div */}
      <div className="w-[40%] md:w-[40%] p-8 order-2 md:order-1 bg-slate-300 rounded-xl">
        <h2 className="text-2xl font-bold mb-2">
          What is Economic Sustainability?
        </h2>
        <p className="text-lg leading-relaxed">
          Economic sustainability refers to the responsible management of
          economic resources and activities to ensure long-term viability
          without compromising future opportunities for growth and development.
          It involves using resources efficiently, minimizing waste, and
          balancing economic growth with environmental and social
          considerations. Sustainable economic practices aim to enhance economic
          resilience, foster innovation, and create equitable opportunities for
          current and future generations.
        </p>
        <p className="text-lg mt-4 leading-relaxed">
          The goal of economic sustainability is to maintain stable economic
          conditions over time while promoting prosperity and improving quality
          of life. It emphasizes sustainable consumption and production
          patterns, equitable distribution of resources, and investment in
          renewable and efficient technologies. By prioritizing economic
          sustainability, societies can reduce economic risks, enhance
          competitiveness, and ensure sustainable livelihoods for communities
          globally.
        </p>
      </div>
      {/* Image Div */}
      <div className="w-full md:w-1/2 p-4 order-1 md:order-2">
        <img
          src="../../../public/ecoabout.jpg"
          alt="Sustainable Living Image"
          className="w-full rounded-lg"
        />
      </div>
    </div>
  );
};

export default About;
