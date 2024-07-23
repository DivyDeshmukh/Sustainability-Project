import React from "react";
import Metrics from "../components/Metrics";

function About() {
  return (

    <div className="min-h-screen mt-[61px]">
      <div className=" bg-[#FFE0C3] ">
        <div className="max-w-6xl sm:mx-auto">
          <div className="grid bg-[#FFE0C3] grid-cols-1 sm:grid-cols-[3fr,4fr] sm:gap-20  gap-10 py-10 sm:px-0 px-6 text-black ">
            <div className="">
              <h2 className="text-3xl sm:text-5xl mb-6 font-bold sm:w-full">
                Our mission is to transform how you live!
              </h2>
              <div>
              - <b>Scan reusable products and earn points!</b> Any reusable products that you use in daily life can be scanned on our website using the barcode on the product. Scan it and earn points. The more easier is it on nature,the more points you earn!
              - <b>Personalized Resource Recommendation:</b> Get personalized resouces according to the area in which you live in. Weather and Air Quality Condition will be taken into account and thus using filters,you will be recommended best measures to move towards sustainability.
              <b>Daily Tasks and Videos!</b> to learn more about sustainability practices and contribute to the society.All your tasks will be tracked and you will be earning points accordingly.
              
              </div>
            </div>
            <div className="">
              <video controls className="w-full h-full object-cover rounded-xl">
                <source src='../../public/One Earth - Environmental Short Film.mp4' type="video/mp4" />
              </video>
            </div>
          </div>

        </div>
      </div>

      <Metrics />
    </div>


  );
}

export default About;
