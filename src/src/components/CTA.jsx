import React from "react";

const CTA = () => {
  return (
    <div className="bg-gray-200 text-white p-8 rounded-lg shadow-lg flex items-center justify-center mt-20">
      <img
        src="../../public/cta1.jpg"
        alt="Newsletter"
        className="w-[300px] h-[300px] rounded-lg "
      />
      <div className="  pl-8 text-black">
        <h1 className="text-3xl font-bold mb-4">Join Our Newsletter</h1>
        <p className="text-lg mb-6">
          Stay updated with the latest news and special offers.
        </p>
        <div className="flex items-center">
          <input
            type="email"
            placeholder="Enter your email"
            className="p-2 rounded-l-lg border border-gray-300 focus:outline-none focus:border-blue-700 text-gray-700"
          />
          <button className="bg-white text-blue-500 px-4 py-2 rounded-r-lg font-bold hover:bg-gray-100 transition duration-300">
            Subscribe
          </button>
        </div>
      </div>
    </div>
  );
};

export default CTA;
