import React from "react";

const About = () => {
  return (
    <div className="flex flex-wrap items-center justify-around text-black mt-16">
      {/* Text Div */}
      <div className="w-[40%] md:w-[40%] p-8 order-2 md:order-1 bg-slate-300 rounded-xl">
        <h2 className="text-2xl font-bold mb-2">
          What is Social Sustainability?
        </h2>
        <p className="text-lg leading-relaxed">
          Social sustainability involves fostering inclusive communities and
          societies that promote equity, well-being, and cultural diversity. It
          emphasizes fair access to resources, opportunities, and basic rights
          for all individuals, regardless of background or identity. Key
          principles include supporting social justice, ensuring access to
          education and healthcare, promoting gender equality, and enhancing
          social cohesion.
        </p>
        <p className="text-lg mt-4 leading-relaxed">
          The goal of social sustainability is to create resilient communities
          where every person can thrive and contribute meaningfully to society.
          It seeks to address societal challenges such as poverty, inequality,
          and discrimination while respecting human rights and preserving
          cultural heritage. By prioritizing social sustainability, we
          strengthen community resilience, foster collaboration, and build a
          society where everyone has a voice and can lead a dignified life.
        </p>
      </div>
      {/* Image Div */}
      <div className="w-full md:w-1/2 p-4 order-1 md:order-2">
        <img
          src="../../../public/socialabout.jpg"
          alt="Sustainable Living Image"
          className="w-full rounded-lg"
        />
      </div>
    </div>
  );
};

export default About;
