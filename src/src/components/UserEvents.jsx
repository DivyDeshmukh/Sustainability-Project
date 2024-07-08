import React from 'react'

const UserEvents = () => {
    const cards = [
        { image: '../../public/events1.jpg', location: 'Phoenix, Arizona', title: 'Green Gathering ', description: '(August 1-4, Monmouthshire, UK)-A family-friendly festival focused on renewable energy and low-impact living' },
        { image: '../../public/events5.jpg', location: 'Phoenix, Arizona', title: 'European Sustainable Energy Week', description: ' (June 11-13, Brussels) - Promotes clean energy solutions and includes a policy conference and awards ceremony​ (Green Life)' },
        { image: '../../public/events3.jpg', location: 'Phoenix, Arizona', title: 'Climate Week NYC', description: '(September 22-29, New York City) - An extensive program of events centered around climate action and sustainable development​ (Reconsidered)​.' },
    ];

    const events = [
        { image: '../../public/events1.jpg', date: '24 August, 2024', title: 'GreenBiz 23', location: 'Phoenix, Arizona', description: '(August 1-4, Monmouthshire, UK)-A family-friendly festival focused on renewable energy and low-impact living' },
        { image: '../../public/events2.jpg', date: '31 August, 2024', title: 'GLOBE Forum', location: 'Vancouver, Canada', description: '(August 1-4, Monmouthshire, UK)-A family-friendly festival focused on renewable energy and low-impact living' },
        { image: '../../public/events3.jpg', date: '24 August, 2024', title: 'World ESG Summit', location: 'March 4, London', description: '(August 1-4, Monmouthshire, UK)-A family-friendly festival focused on renewable energy and low-impact living' },
        { image: '../../public/events4.jpg', date: '31 August, 2024', title: 'UN Environmental Assembly', location: 'New York City', description: '(August 1-4, Monmouthshire, UK)-A family-friendly festival focused on renewable energy and low-impact living' },
        { image: '../../public/events5.jpg', date: '24 August, 2024', title: 'IT Sustainable Business and Design Conference', location: 'Brussels', description: '(August 1-4, Monmouthshire, UK)-A family-friendly festival focused on renewable energy and low-impact living' },
    ];

    return (
        <div className='sm:px-20 py-10'>
            <div>
                <h4 className="text-2xl  mb-2 font-bold">Events created by me</h4>
                <div className="grid grid-cols-1 sm:grid-cols-3 sm:gap-4 sm:justify-items-center ">
                    {events.map((card, index) => (
                        <div key={index} className="bg-white w-full shadow-md rounded-lg sm:h-[450px] overflow-hidden  m-4">
                            <img src={card.image} alt={card.title} className="w-full h-60 object-fill" />
                            <div className="p-4 flex items-center justify-center">
                                <div className=" text-black w-full p-4">
                                    <h2 className="text-xl font-bold">{card.title}</h2>
                                    <div className='flex items-center gap-2 mt-2'><box-icon type='solid' name='location-plus'></box-icon> {card.location}</div>
                                    <p className='mt-2'>{card.description}.... <a href="" className='text-blue-400'>read more</a></p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>


                <div className="text-center mt-4">
                    <button className="bg-slate-600 text-white py-4 px-8 rounded-full">
                        Show more
                    </button>
                </div>
            </div>

            <div className='mt-8'>
                <h4 className="text-2xl font-bold mb-6">Events I joined</h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 sm:gap-4  ">
                    {cards.map((card, index) => (
                        <div key={index} className="flex">
                            <div className="bg-white shadow-md rounded-lg overflow-hidden ">
                                <div className="flex flex-col md:flex-row">
                                    <img src={card.image} alt={card.title} className="md:w-[40%] h-64 object-cover" />
                                    <div className="p-6">
                                        <h2 className="text-xl font-bold">{card.title}</h2>
                                        <p className="text-gray-500 mb-4">{card.location}</p>
                                        <p>{card.description}</p>
                                        <a href="#" className="text-blue-500 hover:text-blue-700 mt-4 inline-block">read more</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="text-center mt-12">
                    <button className="bg-slate-600 text-white py-4 px-8 rounded-full">
                        Show More
                    </button>
                </div>
            </div>
        </div>
    )
}

export default UserEvents
