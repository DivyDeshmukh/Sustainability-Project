import React from "react";
import { useForm } from "react-hook-form";

function Contact() {
  const { register, handleSubmit } = useForm();
  const sendMsg = async (data) => { };

  return (
    <div className="flex flex-col min-h-screen items-center mt-20 sm:mt-16 ">
    {/* <div className="relative p-8  w-full"> */}
      <div className="bg-[#f1f1e7] flex  items-center h-[34rem] pb-4 sm:h-[38rem] relative mx-auto rounded-2xl px-14 shadow-lg md:w-[50%]">
        <div className="w-full">
          <h2 className="text-4xl  font-bold mb-10 text-[#41574B]">Contact Us</h2>
        <form onSubmit={handleSubmit(sendMsg)} className="space-y-4">
          <div>
            <input
              type="text"
              placeholder="Your Name"
              {...register("name", { required: true })}
              className="w-full p-4 border rounded-lg focus:outline-none focus:border-green-500"
            />
          </div>
          <div>
            <input
              type="email"
              placeholder="Email Address"
              {...register("email", { required: true })}
              className="w-full p-3 border rounded-lg focus:outline-none"
            />
          </div>
          <div>
            <textarea
              placeholder="Your Message"
              {...register("message", { required: true })}
              className="w-full p-3 border rounded-md focus:outline-none h-32"
            />
          </div>
          <div>
            <button type="submit" className="w-60 p-4 bg-[#41574B] text-white rounded-md">
              Send Message
            </button>
          </div>
        </form>
        </div>
        <img
          src="../../public/leaf.svg"
          alt="Leaf"
          className="absolute hidden sm:block  top-[176px] left-[-156px] "
        />
        <img
          src="../../public/leaf2.svg"
          alt="Leaf"
          className="absolute  hidden sm:block bottom-0 right-[-180px] "
        />
      {/* </div> */}
    </div>
    <div className="flex sm:mb-10 flex-col md:flex-row md:space-x-16 space-y-6 md:space-y-0 mt-16 text-black">
          <div className="flex items-center space-x-4">
            
            <div>
              <p>info@farmfresh.com</p>
              <p>orders@farmfresh.com</p>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            
            <div>
              <p>+1 (354) 442-7422</p>
              <p>+1 (354) 322-5434</p>
            </div>
          </div>
  </div>
  </div>
  
  );
}

export default Contact;
