import React from "react";
import pattern1 from "../../Assets/cta-left-particle-1.png";
import pattern2 from "../../Assets/cta-right-particle-1.png";
import { FaGooglePlay, FaApple } from "react-icons/fa";

const Download = () => {
  return (
    <React.Fragment>
      <div className=" w-full md:flex flex-col hidden px-10 bg-gradient-to-b from-violet-100 via-slate-50 to-slate-50">
        <div className="justify-center mt-20 px-40 mb-10">
          <div className="bg-violet-300 w-52 rounded-full mx-auto ">
            <p className="text-center pt-2 pb-2 font-bold ">
              Download our Apps
            </p>
          </div>
          <img
            src={pattern1}
            alt="pattern1"
            className="w-36 -mt-10 absolute"
          ></img>
          <img
            src={pattern2}
            alt="pattern1"
            className="w-24 absolute ptn"
          ></img>
          <h1 className="text-center text-4xl font-bold mt-6">
            Get a better digital experience!<br></br>
            Download our mobile apps
          </h1>
          <div className="flex flex-row">
            <div className="mx-auto flex flex-row mt-6">
              <p className="cursor-pointer hover:bg-black hover:text-white hover:duration-500 text-center pt-2 pb-2 font-bold flex flex-row border-2 rounded-full px-4 border-violet-100">
                Google Play <FaGooglePlay className="ml-2 my-auto" />
              </p>
              <p className="cursor-pointer hover:bg-black hover:text-white hover:duration-500 text-center pt-2 pb-2 font-bold flex flex-row border-2 rounded-full px-4 bg-violet-100 border-violet-100 ml-4 ">
                Apple Store <FaApple className="ml-2 my-auto" />
              </p>
            </div>
          </div>
        </div>
        {/* Mobile */}
      </div>
      <div className="md:hidden lg:hidden">
        <div className="justify-center mt-20">
          <div className="bg-violet-300 w-52 rounded-full mx-auto ">
            <p className="text-center pt-2 pb-2 font-bold ">
              Download our Apps
            </p>
          </div>

          <h1 className="text-center text-2xl font-bold mt-6">
            Get a better digital experience!<br></br>
            Download our mobile apps
          </h1>
          <div className="flex flex-row">
            <div className="mx-auto flex flex-row mt-6 mb-10">
              <p className="cursor-pointer hover:bg-black hover:text-white hover:duration-500 text-center pt-2 pb-2 font-bold flex flex-row border-2 rounded-full px-4 border-violet-100">
                Google Play <FaGooglePlay className="ml-2 my-auto" />
              </p>
              <p className="cursor-pointer hover:bg-black hover:text-white hover:duration-500 text-center pt-2 pb-2 font-bold flex flex-row border-2 rounded-full px-4 bg-violet-100 border-violet-100 ml-4 ">
                Apple Store <FaApple className="ml-2 my-auto" />
              </p>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Download;
