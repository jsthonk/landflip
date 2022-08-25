import React, { useState } from "react";
import CountUp from "react-countup";
import ScrollTrigger from "react-scroll-trigger";
import ReactPlayer from "react-player";
import "../../index.css";

const Video = () => {
  const [counterOn, setCounterOn] = useState(false);
  return (
    <ScrollTrigger
      onEnter={() => setCounterOn(true)}
      onExit={() => setCounterOn(false)}
    >
      <div className="md:flex hidden flex-col w-full px-20 bg-violet-900">
        <div className="flex flex-row text-left mt-10 px-40  text-white gap-64">
          <h1 className="text-7xl font-bold flex flex-row">
            {counterOn && <CountUp start={0} end={20} duration={2} delay={0} />}
            +<h2 className="text-sm my-auto ml-1">Our Products</h2>
          </h1>
          <h1 className="text-6xl font-bold flex flex-row">
            {counterOn && <CountUp start={0} end={70} duration={2} delay={0} />}
            +<h2 className="text-sm my-auto ml-1">Our Active Clients</h2>
          </h1>
          <h1 className="text-6xl font-bold flex flex-row">
            {counterOn && <CountUp start={0} end={5} duration={2} delay={0} />}+
            <h2 className="text-sm my-auto ml-1">Awards And Achiements</h2>
          </h1>
        </div>
        <div className="px-40 flex flex-row">
          <div
            name="video"
            className="rounded-xl mt-10 mb-10 overflow-hidden vid"
          >
            <ReactPlayer url="https://vimeo.com/683720645" />
          </div>
          <div className="bg-white mt-10 ml-8 suc rounded-xl">
            <h1 className="text-2xl font-bold mt-6 text-violet-900">
              Success Story
            </h1>
            <h2 className="px-2 text-center mt-10">
              Since launching in 2022, Landflip has helped over 1,000,000 low
              income earners to acquire real estate properties and earn returns,
              even while saving to pay bills.
            </h2>
            <button className="mt-10 bg-violet-900 px-8 py-3 rounded-full text-white font-bold hover:text-violet-900 hover:bg-white hover:border-2 hover:border-violet-900">
              <a href="https://dashboard.landflip.ng/">Buy a land today</a>
            </button>
          </div>
        </div>
      </div>
      {/* Mobile */}
      <div className="flex lg:hidden md:hidden flex-col w-full px-5 bg-violet-900">
        <div className="flex flex-col text-left mt-10  text-white gap-10">
          <h1 className="text-7xl font-bold">
            {counterOn && <CountUp start={0} end={20} duration={2} delay={0} />}
            +<h2 className="text-sm my-auto ml-1">Our Products</h2>
          </h1>
          <h1 className="text-6xl font-bold">
            {counterOn && <CountUp start={0} end={70} duration={2} delay={0} />}
            +<h2 className="text-sm my-auto ml-1">Our Active Clients</h2>
          </h1>
          <h1 className="text-6xl font-bold ">
            {counterOn && <CountUp start={0} end={5} duration={2} delay={0} />}+
            <h2 className="text-sm my-auto ml-1">Awards And Achiements</h2>
          </h1>
        </div>
        <div className="flex flex-col">
          <div
            name="video"
            className="rounded-xl mt-10 mb-10 overflow-hidden vidd"
          >
            <ReactPlayer url="https://vimeo.com/683720645" width="460px" />
          </div>
          <div className="bg-white mb-10 -mt-14 succ rounded-xl">
            <h1 className="text-2xl font-bold mt-6 text-violet-900">
              Success Story
            </h1>
            <h2 className="px-2 text-center mt-10">
              Since launching in 2022, Landflip has helped over 1,000,000 low
              income earners to acquire real estate properties and earn returns,
              even while saving to pay bills.
            </h2>
            <button className="mt-10 bg-violet-900 px-8 py-3 rounded-full text-white font-bold hover:text-violet-900 hover:bg-white hover:border-2 hover:border-violet-900">
              <a href="https://dashboard.landflip.ng/">Buy a land today</a>
            </button>
          </div>
        </div>
      </div>
    </ScrollTrigger>
  );
};

export default Video;
