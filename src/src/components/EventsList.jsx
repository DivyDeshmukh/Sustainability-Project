import React from 'react'
import Slider from "react-slick";

const EventsList = () => {
    const events = [
        { date: '24 August, 2024', title: 'GreenBiz 23', location: 'Phoenix, Arizona' },
        { date: '31 August, 2024', title: 'GLOBE Forum', location: 'Vancouver, Canada' },
        { date: '24 August, 2024', title: 'World ESG Summit', location: 'March 4, London' },
        { date: '31 August, 2024', title: 'UN Environmental Assembly', location: 'New York City' },
        { date: '24 August, 2024', title: 'IT Sustainable Business and Design Conference', location: 'Brussels' },
    ];

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        initialSlide: 0,

        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true,
                },
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    };

    const cards = [
        { image: '../../public/events1.jpg', title: 'Green Gathering ', location: 'August 1-4, Monmouthshire, UK', description: 'A family-friendly festival focused on renewable energy and low-impact living' },
        { image: '../../public/events5.jpg', title: 'European Sustainable Energy Week', location: 'June 11-13, Brussels', description: 'Promotes clean energy solutions and includes a policy conference and awards ceremony​ (Green Life)' },
        { image: '../../public/events3.jpg', title: 'Climate Week NYC', location: 'September 22-29, New York City', description: 'An extensive program of events centered around climate action and sustainable development​ (Reconsidered)​.' },
    ];

    return (
        <div className="bg-[#ebebeb]  mt-4 min-h-screen sm:px-40 py-8">
            <div className=''>
                <h1 className="text-3xl text-center font-bold mb-8">Next Events</h1>
                <Slider {...settings}>
                    {cards.map((card, index) => (
                        <div key={index} className=" mr-4 bg-white  shadow-md rounded-lg h-[450px] overflow-hidden w-full m-4">
                            <img src={card.image} alt={card.title} className="w-full h-60 object-fill" />
                            <div className="p-4 flex items-center justify-center">
                                <div className=" text-black p-4">
                                    <h2 className="text-xl font-bold">{card.title}</h2>
                                    <div className='flex items-center gap-2 mt-2'><box-icon type='solid' name='location-plus'></box-icon> {card.location}</div>
                                    <p className='mt-2'>{card.description}.... <a href="" className='text-blue-400'>read more</a></p>
                                </div>
                            </div>
                        </div>
                    ))}
                </Slider>
                {/* <div className="text-center mt-12">
                    <button className="bg-slate-600 text-white py-4 px-8 rounded-full">
                        Check All
                    </button>
                </div> */}
            </div>
        </div>

    );
}

export default EventsList
