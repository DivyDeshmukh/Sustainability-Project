import React from "react";

const Why = () => {
  return (
    <div className="flex flex-wrap items-center justify-around text-black mt-16">
      {/* Text Div */}
      <div className="w-[40%] md:w-[40%] p-8 order-2 md:order-1 bg-slate-300 rounded-xl">
        <h2 className="text-2xl font-bold mb-2">What is Sustainable Living?</h2>
        <p className="text-lg leading-relaxed">
          Sustainable living involves making choices that reduce your
          environmental impact and promote ecological balance. It includes
          practices like recycling, using renewable energy sources, and
          minimizing waste.
        </p>
        <p className="text-lg mt-4 leading-relaxed">
          By adopting sustainable living practices, individuals and communities
          contribute to a healthier planet and potentially lower their overall
          costs by using resources more efficiently.
        </p>
      </div>
      {/* Image Div */}
      <div className="w-full md:w-1/2 p-4 order-1 md:order-2">
        <img
          src="../../public/what.jpg"
          alt="Sustainable Living Image"
          className="w-full rounded-lg"
        />
      </div>
    </div>
  );
};

export default Why;
