import React from "react";

const HowDonate = () => {
  return (
    <div className="p-6 bg-green-50 py-10 mt-10 mb-10">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold mb-4">How to Help</h2>
        <p className="text-lg">
          Contributing towards sustainability can be done in various ways. Here
          are some effective methods to make a significant impact.
        </p>
      </div>

      <div className="flex flex-col md:flex-row justify-center items-center space-y-6 md:space-y-0 md:space-x-6 text-center">
        <div className="max-w-md h-[250px] p-4 border rounded-full shadow-lg bg-blue-100 flex flex-col justify-center items-center">
          <h3 className="text-2xl font-bold mb-2">Donate Financially</h3>
          <p className="text-base">
            Your financial contributions help fund essential projects and
            initiatives that promote sustainability. Every donation, big or
            small, makes a difference.
          </p>
        </div>
        <div className="max-w-md h-[250px] p-4 border rounded-full shadow-lg bg-yellow-100 flex flex-col justify-center items-center">
          <h3 className="text-2xl font-bold mb-2">Volunteer Your Time</h3>
          <p className="text-base">
            Volunteering your time and skills can have a huge impact. Join local
            sustainability efforts or participate in global initiatives to make
            a tangible difference.
          </p>
        </div>
        <div className="max-w-md h-[250px] p-4 border rounded-full shadow-lg bg-red-100 flex flex-col justify-center items-center">
          <h3 className="text-2xl font-bold mb-2">Share Media</h3>
          <p className="text-base">
            Awareness offers more than just hope; it can lead someone to take
            action. To be effective in our efforts, we need to ensure that we
            help others translate that awareness into actionable items.
          </p>
        </div>
      </div>
    </div>
  );
};

export default HowDonate;
