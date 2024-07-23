import React from "react";

const Metrics = () => {
  return (
    <div className="max-w-6xl mx-auto mt-8 mt-[30px] mb-[30px]  ">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-20">
        <div className="bg-white rounded-xl shadow-md p-6">
          <h2 className="text-2xl font-bold mb-4">
            Key Metrics of our Success and Milestones
          </h2>
          <p className="text-gray-600">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>

        {/* Right Section */}
        <div className="grid grid-cols-2 gap-8">
          {/* Top Left */}
          <div className="bg-white rounded-xl shadow-md p-6 text-center text-[#ccff34]">
            <h3 className="text-xl font-bold mb-6  text-[60px]">50%</h3>
            <p className="text-gray-600">New Users</p>
          </div>

          {/* Top Right */}
          <div className="bg-white rounded-xl shadow-md p-6 text-center text-[#ccff34]">
            <h3 className="text-xl font-bold mb-6  text-[60px]">80+</h3>
            <p className="text-gray-600">Reviews</p>
          </div>

          {/* Bottom Left */}
          <div className="bg-white rounded-xl shadow-md p-6 text-center text-[#ccff34]">
            <h3 className="text-xl font-bold mb-6  text-[60px]">20k</h3>
            <p className="text-gray-600">Overall users</p>
          </div>

          {/* Bottom Right */}
          <div className="bg-white rounded-xl shadow-md p-6 text-center text-[#ccff34]">
            <h3 className="text-xl font-bold mb-6 text-[60px]">99%</h3>
            <p className="text-gray-600">Success</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Metrics;
