import React from "react";

const Eabout = () => {
  return (
    <div className="flex flex-wrap items-center justify-around text-black mt-16">
      {/* Text Div */}
      <div className="w-[40%] md:w-[40%] p-8 order-2 md:order-1 bg-slate-300 rounded-xl">
        <h2 className="text-2xl font-bold mb-2">
          What is Environment Sustainability?
        </h2>
        <p className="text-lg leading-relaxed">
          Environment Sustainable refers to the responsible interaction with the
          environment to avoid the depletion or degradation of natural
          resources, ensuring that these resources remain available for future
          generations. This concept is grounded in the principle that humans
          must use natural resources in a way that maintains the environment's
          health and resilience. Sustainable practices include reducing waste,
          conserving energy, utilizing renewable resources, protecting
          ecosystems and biodiversity, and promoting practices that minimize
          environmental harm.
        </p>
        <p className="text-lg mt-4 leading-relaxed">
          The goal of environmental sustainability is to ensure that human
          activities do not harm the environment and its resources, preserving
          them for future generations. It is crucial because it supports the
          long-term health of ecosystems, maintains biodiversity, and mitigates
          the impacts of climate change. By prioritizing sustainability, we
          safeguard natural resources, protect vulnerable species, and promote a
          stable environment that sustains life and enhances human well-being
          globally.
        </p>
      </div>
      {/* Image Div */}
      <div className="w-full md:w-1/2 p-4 order-1 md:order-2">
        <img
          src="../../../public/eabout.jpg"
          alt="Sustainable Living Image"
          className="w-full rounded-lg"
        />
      </div>
    </div>
  );
};

export default Eabout;
