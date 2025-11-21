import React from "react";
import heroimg from "../../assets/heroimg.png";
const Hero = () => {
  return (
    <div className="mt-[8rem]! md:mt-[15rem]! container flex flex-col md:flex-row items-center justify-between gap-10">
      <div className="w-full md:w-1/2 flex flex-col gap-6">
        <h3>
          The fastest way to explore randomized, high-fidelity user profiles.
        </h3>
        <p>
          Instantly generate and examine thousands of unique, realistic user
          data points for testing, mocking, and design validation. Stop relying
          on outdated static data and dive into the diversity of the digital
          world with a single click. Start exploring now!
        </p>
        <button className="btn-primary rounded-Sm w-fit">
          Start Exploring Now
        </button>
      </div>
      <div className="w-full  md:w-1/2 justify-items-end">
        <img
          src={heroimg}
          alt=""
          className="rounded-Md  w-[100%]  lg:w-[80%]"
        />
      </div>
    </div>
  );
};

export default Hero;
