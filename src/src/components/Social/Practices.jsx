import React from "react";

const Practices = () => {
  return (
    <div className="bg-white shadow-md rounded-lg p-8 mt-12">
      <h2 className="text-5xl font-bold mb-12 text-black text-center">
        Best Practices for Social Sustainability
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
        <div className="bg-[#f9fff5] p-6 rounded-lg shadow-md">
          <h3 className="text-3xl font-semibold mb-4 text-black">
            Promote Diversity and Inclusion
          </h3>
          <p className="text-gray-700 text-lg">
            Fostering a workplace and community that values diversity, equity,
            and inclusion enhances social cohesion, promotes understanding, and
            ensures equitable opportunities for all individuals.
          </p>
        </div>
        <div className="bg-[#b5ffd9] p-6 rounded-lg shadow-md">
          <h3 className="text-3xl font-semibold mb-4 text-black">
            Ensure Access to Education and Healthcare
          </h3>
          <p className="text-gray-700 text-lg">
            Investing in accessible education and healthcare services improves
            quality of life, reduces inequalities, and empowers individuals to
            contribute meaningfully to society.
          </p>
        </div>
        <div className="bg-[#ccff34] p-6 rounded-lg shadow-md">
          <h3 className="text-3xl font-semibold mb-4 text-black">
            Support Community Engagement and Empowerment
          </h3>
          <p className="text-gray-700 text-lg">
            Engaging communities in decision-making processes, supporting local
            initiatives, and empowering marginalized groups foster social
            resilience and inclusive development.
          </p>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-center mt-8">
        <div className="bg-[#78b2da] p-6 rounded-lg shadow-md">
          <h3 className="text-3xl font-semibold mb-4 text-black">
            Ensure Fair Labor Practices
          </h3>
          <p className="text-gray-700 text-lg">
            Upholding fair wages, safe working conditions, and labor rights
            promotes social justice, improves worker well-being, and builds
            trust and stability within communities.
          </p>
        </div>
        <div className="bg-[#a6d7de] p-6 rounded-lg shadow-md">
          <h3 className="text-3xl font-semibold mb-4 text-black">
            Foster Cultural Preservation and Respect
          </h3>
          <p className="text-gray-700 text-lg">
            Respecting cultural diversity, preserving heritage, and promoting
            cultural exchange enrich social fabric, strengthen identity, and
            foster mutual understanding.
          </p>
        </div>
        <div className="bg-[#CBC0E9] p-6 rounded-lg shadow-md">
          <h3 className="text-3xl font-semibold mb-4 text-black">
            Promote Social Justice and Human Rights
          </h3>
          <p className="text-gray-700 text-lg">
            Advocating for human rights, addressing systemic inequalities, and
            promoting social justice initiatives contribute to equitable
            societies where all individuals can thrive with dignity and respect.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Practices;
