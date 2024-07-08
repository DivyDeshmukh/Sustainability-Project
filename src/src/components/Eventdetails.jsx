import React, { useState } from 'react'


const Eventdetails = () => {
    const [isDialogOpen, setIsDialogOpen] = useState(false);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        reason: ''
    });
    const cards = [
        { image: '../../public/events1.jpg', title: 'Green Gathering ', description: '(August 1-4, Monmouthshire, UK)-A family-friendly festival focused on renewable energy and low-impact living' },
        { image: '../../public/events5.jpg', title: 'European Sustainable Energy Week', description: ' (June 11-13, Brussels) - Promotes clean energy solutions and includes a policy conference and awards ceremony​ (Green Life)' },
        { image: '../../public/events3.jpg', title: 'Climate Week NYC', description: '(September 22-29, New York City) - An extensive program of events centered around climate action and sustainable development​ (Reconsidered)​.' },
    ];
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Save request logic here
        console.log('Form Data:', formData);
        setIsDialogOpen(false);
    };




    return (
        //     <div className="container mx-auto p-4">
        //     <div className="bg-white shadow-md rounded-lg overflow-hidden">
        //       <div className="relative h-64">
        //         <img
        //           className="absolute inset-0 w-full h-full object-cover"
        //           src="https://via.placeholder.com/800x400"
        //           alt="Event"
        //         />
        //       </div>
        //       <div className="p-6">
        //         <h1 className="text-3xl font-bold mb-4">Sustainable Development Event</h1>
        //         <p className="text-gray-700 mb-6">
        //           Join us for a day of learning and engagement on sustainable development practices. This event will
        //           feature expert speakers, interactive workshops, and networking opportunities.
        //         </p>
        //         <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        //           <div>
        //             <h2 className="text-2xl font-semibold mb-2">Event Details</h2>
        //             <ul className="list-disc list-inside text-gray-700">
        //               <li>Date: July 15, 2024</li>
        //               <li>Time: 9:00 AM - 5:00 PM</li>
        //               <li>Location: Green Conference Center</li>
        //               <li>Address: 123 Sustainable Way, Green City</li>
        //             </ul>
        //           </div>
        //           <div>
        //             <h2 className="text-2xl font-semibold mb-2">About This Event</h2>
        //             <p className="text-gray-700">
        //               This event is dedicated to promoting sustainable development practices. We believe in the power of
        //               community and collaboration to drive positive change. Join us to learn, share, and take action for a
        //               more sustainable future.
        //             </p>
        //           </div>
        //         </div>
        //       </div>
        //     </div>
        //   </div>
        //     <div className="container mx-auto p-4">
        //     <div className="bg-white shadow-md rounded-lg overflow-hidden">
        //       <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        //         {/* Section 1: Image and Event Info */}
        //         <div className="relative h-64 md:h-auto">
        //           <img
        //             className="absolute inset-0 w-full h-full object-cover"
        //             src="https://via.placeholder.com/800x400"
        //             alt="Event"
        //           />
        //         </div>
        //         <div className="p-6">
        //           <h1 className="text-3xl font-bold mb-4">Sustainable Development Event</h1>
        //           <p className="text-gray-700 mb-6">
        //             Join us for a day of learning and engagement on sustainable development practices. This event will
        //             feature expert speakers, interactive workshops, and networking opportunities.
        //           </p>
        //           <ul className="list-disc list-inside text-gray-700">
        //             <li>Date: July 15, 2024</li>
        //             <li>Time: 9:00 AM - 5:00 PM</li>
        //             <li>Location: Green Conference Center</li>
        //             <li>Address: 123 Sustainable Way, Green City</li>
        //           </ul>
        //         </div>
        //       </div>
        //       {/* Section 2: About the Event and Outcomes */}
        //       <div className="p-6">
        //         <h2 className="text-2xl font-semibold mb-4">About This Event</h2>
        //         <p className="text-gray-700 mb-6">
        //           This event is dedicated to promoting sustainable development practices. We believe in the power of
        //           community and collaboration to drive positive change. Join us to learn, share, and take action for a
        //           more sustainable future.
        //         </p>
        //         <h2 className="text-2xl font-semibold mb-4">Event Outcomes</h2>
        //         <p className="text-gray-700">
        //           By participating in this event, you will:
        //         </p>
        //         <ul className="list-disc list-inside text-gray-700 mb-6">
        //           <li>Gain knowledge from industry experts</li>
        //           <li>Engage in hands-on workshops</li>
        //           <li>Network with like-minded individuals</li>
        //           <li>Develop actionable plans for sustainable initiatives</li>
        //         </ul>
        //         <p className="text-gray-700">
        //           We look forward to seeing you there and working together towards a sustainable future!
        //         </p>
        //       </div>
        //     </div>
        //   </div>

        <div className="min-h-screen ">
            <div className="mt-8 mb-8">
                <div className="max-w-7xl p-8 sm:mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {/* Section 1: Image and Event Info */}
                        <div className=" ">
                            <img
                                className="rounded-2xl w-full h-full object-cover"
                                src="../../public/sustainable1.jpg"
                                alt="Event"
                            />
                        </div>
                        <div className="">
                            <h1 className="text-4xl sm:text-6xl font-bold mb-4">Sustainable Development Event</h1>
                            <p className="text-gray-700 text-2xl mb-6">
                                Join us for a day of learning and engagement on sustainable development practices. This event will
                                feature expert speakers, interactive workshops, and networking opportunities.
                            </p>
                            <ul className="text-xl text-gray-700 mb-6">
                                <li className='font-semibold'>Date: July 15, 2024</li>
                                <li className='font-semibold'>Time: 9:00 AM - 5:00 PM</li>
                                <li className='font-semibold'>Location: Green Conference Center</li>
                                <li className='font-semibold'>Address: 123 Sustainable Way, Green City</li>
                            </ul>
                            <button
                                className="bg-green-500 text-white px-4 py-2 w-40 rounded"
                                onClick={() => setIsDialogOpen(true)}
                            >
                                Join Now
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            {/* Section 2: About the Event and Outcomes */}
            <div className='bg-[#E6F2FF]'>
                <div className="max-w-7xl p-8 sm:mx-auto">
                    <div className="my-8">
                        <h2 className="text-3xl font-semibold mb-4">About This Event</h2>
                        <p className="text-gray-700 text-xl mb-6">
                            Collaboration for Sustainable Development
                            At the heart of sustainable development lies the principle of collaboration. We firmly believe that by working together, we can create lasting, impactful changes that benefit our planet and its inhabitants. Our upcoming event is designed to bring this vision to life by uniting a diverse group of individuals who are passionate about sustainability.

                            A Convergence of Expertise
                            This event is a unique convergence of experts, enthusiasts, and change-makers from various fields. Environmental scientists, renewable energy specialists, policy-makers, educators, business leaders, and community activists will come together to share their knowledge and experiences. Each participant brings a unique perspective and set of skills, contributing to a rich tapestry of insights and ideas.

                            Engaging Discussions and Debates
                            Throughout the event, we will host a series of engaging discussions and debates. These sessions are designed to tackle the most pressing issues in sustainable development, from climate change mitigation and biodiversity conservation to sustainable urban planning and circular economy practices. Participants will have the opportunity to ask questions, challenge assumptions, and explore new viewpoints, fostering a dynamic and interactive learning environment.

                            Developing Innovative Strategies
                            Our goal is not only to discuss the challenges we face but also to develop innovative strategies to address them. Through collaborative workshops and brainstorming sessions, we aim to co-create actionable plans that can be implemented at various levels—from local communities to global initiatives. By combining our collective expertise and creativity, we can devise solutions that are both practical and visionary.

                            Be Part of the Change
                            We invite you to be part of this collaborative effort. Your participation can make a meaningful difference in our quest for a sustainable future. Whether you are an experienced professional, a passionate advocate, or someone new to the field of sustainability, your voice and contributions are valuable. Join us to network with like-minded individuals, learn from industry leaders, and contribute to the development of strategies that will drive positive change.

                            Together, we can build a more sustainable planet. Let's harness the power of collaboration to create a future where environmental, social, and economic sustainability go hand in hand. This is more than an event—it's a movement towards a better world.


                        </p>
                        <h2 className="text-2xl font-semibold mb-4 text-3xl">Event Outcomes</h2>
                        <p className="text-gray-700 text-xl font-semibold ">
                            By participating in this event, you will:
                        </p>
                        <ul className="list-disc text-xl  list-inside text-gray-700 mb-6">
                            <li>Gain knowledge from industry experts</li>
                            <li>Engage in hands-on workshops</li>
                            <li>Network with like-minded individuals</li>
                            <li>Develop actionable plans for sustainable initiatives</li>
                        </ul>
                        <p className="text-gray-700">
                            We look forward to seeing you there and working together towards a sustainable future!
                        </p>
                    </div>
                </div>
            </div>

            <div className='max-w-7xl p-8 sm:mx-auto'>
                <div className='my-8'> 
                <h4 className="text-4xl  mb-6 font-bold">Our Next Events</h4>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-4">
                    {cards.map((card, index) => (
                        <div key={index} className="relative bg-white shadow-md rounded-lg h-80 w-full overflow-hidden w-full ">
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
                    <button className="bg-slate-600 text-white py-4 px-8 rounded-full">
                        Explore More
                    </button>
                </div>
                </div>
            </div>

            {isDialogOpen && (
                <div className="fixed inset-0 bg-gray-900 bg-opacity-50 flex items-center justify-center">
                    <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
                        <h2 className="text-2xl font-semibold mb-4">Join the Event</h2>
                        <form onSubmit={handleSubmit}>
                            <div className="mb-4">
                                <label className="block text-gray-700 mb-2" htmlFor="name">Name</label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleInputChange}
                                    className="w-full p-2 border border-gray-300 rounded"
                                    required
                                />
                            </div>
                            <div className="mb-4">
                                <label className="block text-gray-700 mb-2" htmlFor="email">Email</label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleInputChange}
                                    className="w-full p-2 border border-gray-300 rounded"
                                    required
                                />
                            </div>
                            <div className="mb-4">
                                <label className="block text-gray-700 mb-2" htmlFor="reason">Why do you want to join our event?</label>
                                <textarea
                                    id="reason"
                                    name="reason"
                                    value={formData.reason}
                                    onChange={handleInputChange}
                                    className="w-full p-2 border border-gray-300 rounded"
                                    required
                                ></textarea>
                            </div>
                            <div className="flex justify-end">
                                <button
                                    type="button"
                                    className="bg-gray-300 text-gray-700 px-4 py-2 rounded mr-2"
                                    onClick={() => setIsDialogOpen(false)}
                                >
                                    Cancel
                                </button>
                                <button
                                    type="submit"
                                    className="bg-green-500 text-white px-4 py-2 rounded"
                                >
                                    Save Request
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Eventdetails
