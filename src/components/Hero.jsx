import React from "react";
import "/src/App.css";
// import { useHistory } from "react-router-dom";

const Hero = () => {

  const handleSignupClick = () => {
    // Simulate navigation to the Signup component
    window.location.href = "/signup"; // Redirects to the Signup page
  };

  // const handleSignupClick = () => {
  //   history.push("/signup"); // Navigate to the Signup component
  // };
  return (
    // <div
    //   className="relative bg-cover bg-center h-screen flex items-center justify-center"
    //   style={{ backgroundImage: 'url("../../public/hero1.jpg")' }}
    // >
    //   <div className="text-center">
    //     <h1 className="text-white text-4xl font-bold mb-4">
    //       Live Well, Live Green:
    //     </h1>
    //     <p className="text-white text-xl">
    //       Your Guide to a Sustainable Lifestyle
    //     </p>
    //   </div>
    // </div>
    <div className="video-container">
      {/* <!-- The HTML5 video element that will create the background video on the header -- */}
      <video
        playsinline="playsinline"
        autoplay="autoplay"
        muted="muted"
        loop="loop"
      >
        <source src="public/forest.mp4" type="video/mp4" />
      </video>
      <div className="text-overlay">
        <h1 className="overlay-text-field">
          <span>Live</span> <span>Free,</span> <span>Live</span>{" "}
          <span>Green</span>
        </h1>
        <h2 className="sub-heading">Understand your carbon footprint and take steps towards a sustainable future.</h2>
        <button className="signup-button" onClick={handleSignupClick}>Join Us</button>
      </div>
    </div>
  );
};

export default Hero;
