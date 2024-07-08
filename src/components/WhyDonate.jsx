import React from "react";

const WhyDonate = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-between p-6 bg-white">
      <div className="md:w-1/2 p-4">
        <h2 className="text-3xl font-bold mb-4">
          Why Donate towards sustainability
        </h2>
        <p className="text-lg">
          Donating towards sustainability helps ensure a healthier planet for
          future generations. Your contributions support initiatives aimed at
          reducing carbon footprints, promoting renewable energy, and protecting
          our natural resources. Together, we can make a significant impact and
          work towards a more sustainable future.
        </p>
      </div>

      <div className="md:w-1/2 p-4">
        <img
          className="w-full h-auto object-cover"
          src="../../public/whydonate.jpg"
          alt="Sustainability"
        />
      </div>
    </div>
  );
};

export default WhyDonate;
