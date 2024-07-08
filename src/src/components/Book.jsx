import React from "react";
import Footer from "./Footer/Footer";

const Book = () => {
  const imageUrl = "../../public/book.jpg";
  const title = "Sample Book Title";
  const description =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.";

  return (
    <div>
      <div className="max-w-lg mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl mt-8 mb-16">
        <h1 className="text-3xl mb-4 font-bold">BookMarks</h1>
        <div className="md:flex">
          <div className="md:flex-shrink-0">
            <img
              className="h-48 w-full object-cover md:h-full md:w-48"
              src={imageUrl}
              alt="Book cover"
            />
          </div>
          <div className="p-8">
            <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">
              Book
            </div>
            <h1 className="block mt-1 text-lg leading-tight font-medium text-black">
              {title}
            </h1>
            <p className="mt-2 text-gray-500">{description}</p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Book;
