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
                Our mission is to transform how you manage emails
              </h2>
              <div>
               Lorem Ipsum is simply dummy Lorem Ipsum has been the industry's
                standard dummy text ever since the 1500s, when an unknown printer
                took a galley of type and scrambled it to make a type specimen
                book. It has survived not only five centuries, but also the leap
                into electronic typesetting, remaining essentially unchanged. 

                Lorem Ipsum is simply dummy Lorem Ipsum has been the industry's
                standard dummy text ever since the 1500s, when an unknown printer
                took a galley of type and scrambled it to make a type specimen
                book. It has survived not only five centuries, but also the leap
                into electronic typesetting, remaining essentially unchanged.
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
