import React from "react";
import tax2 from "../assets/tax2.jpg";



const Hero = () => {

  return (
    <div
      className="hero min-h-[500px]"
      style={{ backgroundImage: `url(${tax2})` }}
    >
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-center text-neutral-content">
        <div className="max-w-md">
          <h1 className="mb-5 text-5xl font-bold">

            Simplify Your Tax Filing Process
            
          </h1>
          <p className="mb-5">
            File your taxes with ease using our user-friendly application. Say
            goodbye to complexity and confusion.
          </p>
          <button className="btn btn-primary mr-3">Get Started</button>
          <button className="btn btn-secondary">Learn More</button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
