import React from "react";

const Practices = () => {
  return (
    <div className="bg-white shadow-md rounded-lg p-8 mt-12">
      <h2 className="text-5xl font-bold mb-12 text-black text-center ">
        Best Practices to achieve environmental Sustainability
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
        <div className=" p-6 rounded-lg shadow-md bg-[#f9fff5]">
          <h3 className="text-[30px] font-semibold mb-4 text-black">
            Reduce, Reuse, Recycle
          </h3>
          <p className="text-gray-700 text-[24px]">
            By reducing consumption, reusing products, and recycling waste, we
            minimize resource extraction, energy use, and waste generation. This
            approach conserves natural resources, reduces pollution, and lessens
            the environmental impact of producing new goods.
          </p>
        </div>
        <div className="bg-[#b5ffd9] p-6 rounded-lg shadow-md">
          <h3 className="text-[30px] font-semibold mb-4 text-black">
            Transition to Clean Energy
          </h3>
          <p className="text-gray-700  text-[24px]">
            Shifting to renewable energy sources like solar and wind reduces
            greenhouse gas emissions and air pollution associated with fossil
            fuels. It promotes energy independence, improves air quality, and
            mitigates climate change impacts on ecosystems and communities.
          </p>
        </div>
        <div className="bg-[#ccff34] p-6 rounded-lg shadow-md">
          <h3 className="text-[30px] font-semibold mb-4 text-black">
            Protect and Restore Ecosystems
          </h3>
          <p className="text-gray-700  text-[24px]">
            Preserving natural habitats and biodiversity supports essential
            ecosystem services like clean water, air purification, and climate
            regulation. Restoration efforts enhance resilience against
            environmental threats such as habitat loss, invasive species, and
            climate change impacts.
          </p>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-center mt-8">
        <div className="bg-[#78b2da] p-6 rounded-lg shadow-md">
          <h3 className="text-[30px] font-semibold mb-4 text-black">
            Promote Sustainable Agriculture
          </h3>
          <p className="text-gray-700 text-[24px]">
            Sustainable farming practices conserve soil fertility, reduce water
            usage, and minimize chemical inputs like pesticides and fertilizers.
            This approach supports biodiversity, improves food security, and
            promotes healthier ecosystems and communities.
          </p>
        </div>
        <div className="bg-[#a6d7de] p-6 rounded-lg shadow-md">
          <h3 className="text-[30px] font-semibold mb-4 text-black">
            Advocate for Policy Change
          </h3>
          <p className="text-gray-700  text-[24px]">
            Effective policies and regulations are critical in setting
            environmental standards, incentivizing sustainable practices, and
            holding industries accountable for their environmental impact.
            Advocacy drives systemic change and supports a transition towards
            more sustainable and equitable societies.
          </p>
        </div>
        <div className="bg-[#CBC0E9] p-6 rounded-lg shadow-md">
          <h3 className="text-[30px] font-semibold mb-4 text-black">
            Educate and Raise Awareness
          </h3>
          <p className="text-gray-700  text-[24px]">
            Education fosters understanding of environmental issues, empowers
            individuals to make informed choices, and cultivates a culture of
            sustainability. Increased awareness encourages collective action,
            promotes innovation in sustainable technologies, and builds momentum
            for broader societal change towards environmental stewardship.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Practices;
