import React from "react";
import underline from "../Assets/title-line-2.png";
import hero from "../Assets/hero.webp";
import "../index.css";

const Hero = () => {
  return (
    <div name="hero h-screen w-full">
      <div className="px-20 ml-32 mx-auto flex flex-row">
        <div className="flex flex-col justify-center h-full mt-60">
          <p className="text-4xl justify-center flex flex-col font-semibold">
            A better way to earn from <span>BUYING & SELLING lands!</span>
            <img src={underline} alt="underline" className="w-40"></img>
          </p>
          <h1 className="text-gray-500 flex flex-col mt-4 font-semibold">
            LANDFLIPI helps you buy lands and resell them after they
            <span>
              appreciate in value, giving you high returns within a year or
              less.
            </span>
          </h1>
          <div>
            <button className="hover:scale-105 duration-300 mt-10 hover:animate-pulse bg-violet-900 px-4 py-4 rounded-full w-52 text-white font-semibold">
              Create a free Account
            </button>
          </div>
        </div>

        <img className="res ml-32 mt-40" src={hero} alt="heroimage"></img>
      </div>
    </div>
  );
};

export default Hero;
