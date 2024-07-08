import React from "react";

const Benefits = () => {
  return (
    <div className="bg-white shadow-md rounded-lg p-8 mt-9">
      <h2 className="text-5xl font-bold mb-12 text-black text-center ">
        Benefits of Sustainable Living.
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
        <div className=" p-6 rounded-lg shadow-md bg-[#f9fff5]">
          <h3 className="text-[30px] font-semibold mb-4 text-black">
            Empower Your Sustainable Journey
          </h3>
          <p className="text-gray-700 text-[24px]">
            Craft your path to eco-friendliness with personalized
            recommendations and practical steps to shrink your environmental
            footprint.
          </p>
        </div>
        <div className="bg-[#b5ffd9] p-6 rounded-lg shadow-md">
          <h3 className="text-[30px] font-semibold mb-4 text-black">
            Discover Local Resources
          </h3>
          <p className="text-gray-700  text-[24px]">
            Find eco-champions in your community! Connect with nearby
            businesses, organizations, and initiatives that share your
            sustainability goals.
          </p>
        </div>
        <div className="bg-[#ccff34] p-6 rounded-lg shadow-md">
          <h3 className="text-[30px] font-semibold mb-4 text-black">
            Build a Sustainable Community
          </h3>
          <p className="text-gray-700  text-[24px]">
            You're not alone! Share tips, ask questions, and find support from a
            network of like-minded individuals on their sustainable journeys.
          </p>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-center mt-8">
        <div className="bg-[#78b2da] p-6 rounded-lg shadow-md">
          <h3 className="text-[30px] font-semibold mb-4 text-black">
            Live a Healthier Life
          </h3>
          <p className="text-gray-700 text-[24px]">
            Go green, feel better! Sustainable practices often lead to a
            healthier environment and a healthier you.
          </p>
        </div>
        <div className="bg-[#a6d7de] p-6 rounded-lg shadow-md">
          <h3 className="text-[30px] font-semibold mb-4 text-black">
            Save Money
          </h3>
          <p className="text-gray-700  text-[24px]">
            Be kind to the planet, and your wallet! Reduce waste, conserve
            resources, and potentially lower your utility bills through
            sustainable choices.
          </p>
        </div>
        <div className="bg-[#CBC0E9] p-6 rounded-lg shadow-md">
          <h3 className="text-[30px] font-semibold mb-4 text-black">
            Invest in the Future
          </h3>
          <p className="text-gray-700  text-[24px]">
            Make a positive impact! Every sustainable action helps ensure a
            healthy planet for generations to come.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Benefits;
