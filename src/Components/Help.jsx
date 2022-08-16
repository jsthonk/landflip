import React from "react";
import line from "../Assets/title-line-2.png";
import ada from "../Assets/alice.PNG";
import dan from "../Assets/dan.PNG";
import labi from "../Assets/guy.PNG";
import { FaGooglePlay, FaApple } from "react-icons/fa";
import pattern1 from "../Assets/cta-left-particle-1.png";
import pattern2 from "../Assets/cta-right-particle-1.png";

const Help = () => {
  return (
    <div className="h-screen w-full px-40 bg-gradient-to-b from-violet-100 via-slate-50 to-slate-50">
      <h1 className="text-3xl font-semibold pt-10">
        We've helped many Nigerian<br></br> achieve financial freedom
      </h1>
      <img src={line} alt="line" className="w-48"></img>
      <div className="flex flex-row px-14">
        <div className="bg-white w-80 h-52 hover:w-96 duration-300 mt-10 rounded-lg shadow">
          <h1 className="font-semibold pl-6 pt-2">Amazing Experience</h1>
          <h2 className="px-6 mt-6">
            It's been an amazing experience with Landflip. Prompt repayment and
            excellent customer service.
          </h2>
          <img
            src={ada}
            alt="ada"
            className="w-10 rounded-full ml-6 mt-6"
          ></img>
          <p className="ml-20 text-gray-500 -mt-8 font-bold">Adelice Umuhoza</p>
        </div>
        {/* Second */}
        <div className="bg-white w-80 h-52 hover:w-96 ml-12 duration-300 mt-10 rounded-lg shadow">
          <h1 className="font-semibold pl-6 pt-2">Easy & Secured Funding</h1>
          <h2 className="px-6 mt-6">
            I love how easy it is to fund your account with Landflip. It's truly
            fast and secure!
          </h2>
          <img
            src={dan}
            alt="ada"
            className="w-10 rounded-full ml-6 mt-6"
          ></img>
          <p className="ml-20 text-gray-500 -mt-8 font-bold">Daniel Adeyinka</p>
        </div>
        {/* Third */}
        <div className="bg-white w-80 h-52 hover:w-96 ml-12 duration-300 mt-10 rounded-lg shadow">
          <h1 className="font-semibold pl-6 pt-2">User-Friendly</h1>
          <h2 className="px-6 mt-6">
            Landflip has a very friendly user interface. The mobile app is just
            seamless and easy to use!
          </h2>
          <img
            src={labi}
            alt="ada"
            className="w-10 rounded-full ml-6 mt-6"
          ></img>
          <p className="ml-20 text-gray-500 -mt-8 font-bold">
            Akinlolu Afolabi
          </p>
        </div>
      </div>
      {/* ---Our Apps */}
      <div className="justify-center mt-20">
        <div className="bg-violet-300 w-52 rounded-full mx-auto ">
          <p className="text-center pt-2 pb-2 font-bold ">Download our Apps</p>
        </div>
        <img
          src={pattern1}
          alt="pattern1"
          className="w-36 -mt-10 absolute"
        ></img>
        <img src={pattern2} alt="pattern1" className="w-24 absolute ptn"></img>
        <h1 className="text-center text-4xl font-bold mt-6">
          Get a better digital experience!<br></br>
          Download our mobile apps
        </h1>
        <div className="flex flex-row">
          <div className="mx-auto flex flex-row mt-6">
            <p className="text-center pt-2 pb-2 font-bold flex flex-row border-2 rounded-full px-4 border-violet-100">
              Google Play <FaGooglePlay className="ml-2 my-auto" />
            </p>
            <p className="text-center pt-2 pb-2 font-bold flex flex-row border-2 rounded-full px-4 bg-violet-100 border-violet-100 ml-4 ">
              Apple Store <FaApple className="ml-2 my-auto" />
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Help;
