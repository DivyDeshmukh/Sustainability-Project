import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Testimonials = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
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

  const testimonials = [
    {
      logo: "../../public/user.jpg",
      name: "John Doe",
      profession: "Software Engineer",
      review:
        "I wasn't sure where to start with sustainable living, but this guide gave me clear steps and connected me with local resources. Now I feel empowered to make a real difference!",
    },
    {
      logo: "../../public/user.jpg",
      name: "Jane Smith",
      profession: "Graphic Designer",
      review:
        "This platform is amazing! I love getting personalized tips and learning from others. Plus, it's fun to discover eco-friendly businesses in my area.",
    },
    {
      logo: "../../public/user.jpg",
      name: "Alex Johnson",
      profession: "Project Manager",
      review:
        "Sustainability can feel overwhelming, but this guide breaks it down. I've already saved money on bills and feel better knowing I'm helping the planet. Thanks!",
    },
    {
      logo: "../../public/user.jpg",
      name: "Emily Davis",
      profession: "Marketing Specialist",
      review:
        "Living sustainably can be confusing, but this guide made it easy. Their recommendations helped me reduce waste and even improve my home's energy efficiency. Now I'm hooked!",
    },
    {
      logo: "../../public/user.jpg",
      name: "Michael Brown",
      profession: "Entrepreneur",
      review:
        "This is the perfect community for anyone who wants to go green! Sharing ideas and getting support from others keeps me motivated. Big thanks to the creators!",
    },
  ];

  return (
    <div className="bg-gray-100 p-8 rounded-lg shadow-lg mt-20 mb-20">
      <h2 className="text-3xl font-bold text-center mb-8 text-black">
        See What Our Valuable Customers Say
      </h2>
      <Slider {...settings}>
        {testimonials.map((testimonial, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-lg shadow-md mx-4 h-[250px] w-[350px] "
          >
            <div className="flex items-center mb-4">
              <img
                src={testimonial.logo}
                alt={testimonial.name}
                className="w-12 h-12 rounded-full mr-4"
              />
              <div>
                <h3 className="text-xl font-bold text-black">
                  {testimonial.name}
                </h3>
                <p className="text-gray-600 text-sm">
                  {testimonial.profession}
                </p>
              </div>
            </div>
            <p className="text-gray-800 text-lg">{testimonial.review}</p>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Testimonials;
