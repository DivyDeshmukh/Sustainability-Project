import React from "react";
import EventsList from "./EventsList";



function Events() {
  const cards = [
    { image: '../../public/events1.jpg', title: 'Green Gathering ', description: '(August 1-4, Monmouthshire, UK)-A family-friendly festival focused on renewable energy and low-impact living' },
    { image: '../../public/events5.jpg', title: 'European Sustainable Energy Week', description: ' (June 11-13, Brussels) - Promotes clean energy solutions and includes a policy conference and awards ceremony​ (Green Life)' },
    { image: '../../public/events3.jpg', title: 'Climate Week NYC', description: '(September 22-29, New York City) - An extensive program of events centered around climate action and sustainable development​ (Reconsidered)​.' },
  ];

  return (
    <div className="">
      {/* Event cards */}
      <div className="mt-8 sm:px-40">
        <div>
          <h4 className="text-4xl text-center mb-2 font-bold">Recent Events</h4>
          <div className="grid grid-cols-1 sm:grid-cols-3 sm:gap-4 sm:justify-items-center ">
            {cards.map((card, index) => (
              <a href="/eventdetails" key={index} className="relative bg-white shadow-md rounded-lg h-80 w-full overflow-hidden w-full m-4">
                <img src={card.image} alt={card.title} className="w-full h-full object-fill" />
                <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                  <div className="text-center text-white p-4">
                    <h2 className="text-xl font-bold">{card.title}</h2>
                    <p>{card.description}</p>
                  </div>
                </div>
              </a>
            ))}
          </div>

          <div className="text-center mt-4">
            <button className="bg-slate-600 text-white py-4 px-8 rounded-full">
              Check All
            </button>
          </div>
        </div>
      </div>
      {/* Events Held */}
      {/* <div className="mt-8 bg-slate-100">
        <h4 className="text-4xl  text-center mb-2 font-bold">Held Events</h4>
        <div className="grid grid-cols-1 sm:grid-cols-3 sm:gap-4 sm:justify-items-center ">
          {cards.map((card, index) => (
            <div key={index} className="relative bg-white shadow-md rounded-lg h-80 w-fll overflow-hidden w-full m-4">
              <img src={card.image} alt={card.title} className="w-full h-full object-fill" />
              <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                <div className="text-center text-white p-4">
                  <h2 className="text-xl font-bold">{card.title}</h2>
                  <p>{card.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-4">
          <button className="bg-slate-400 text-white py-4 px-8 rounded-3xl">
            Check All
          </button>
        </div>
      </div> */}
      <EventsList />

    </div >
  );
}

export default Events;
