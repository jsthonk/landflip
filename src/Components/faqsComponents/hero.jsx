import React from "react";
import students from "../../Assets/students.PNG";
import { FaGooglePlay, FaApple } from "react-icons/fa";
import safegate from "../../Assets/safegate-logo.png";
import ox from "../../Assets/holdings-logo.png";
import flutter from "../../Assets/flutterwave-2.svg";
import pay from "../../Assets/paystack-2.svg";
import iog from "../../Assets/oig-logo.png";
import wallet from "../../Assets/wallets_africa.svg";
import "../../index.css";

const Hero = () => {
  return (
    <React.Fragment>
      <div className="md:flex hidden flex-row w-full text-black px-40">
        <div className="sii mt-20 mb-10 rounded-3xl overflow-hidden">
          <img src={students} alt="img" />
        </div>
        <div className="flex flex-col si mt-20 ml-24">
          <div className=" font-bold rounded-full">
            <p className="mx-auto text-left font-bold text-4xl">
              2 Million + customers
            </p>
          </div>

          <h1 className="text-left  mt-6">
            Since launching in 2020, Landflip has helped over 1,000,000 low
            income earners to acquire real estate properties, even while saving
            to pay bills.
          </h1>
          <button className=" mt-10 bg-violet-900 mx-auto px-4 py-4 rounded-full text-white font-bold">
            <a
              href="https://dashboard.landflip.com"
              target="_blank"
              className=" mt-10"
              rel="noreferrer"
            >
              Create a free account
            </a>
          </button>
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
      </div>
      <div className="md:flex hidden py-20 bg-zinc-100">
        <div className="flex flex-row gap-14 px-40">
          <img src={safegate} className="w-40" />
          <img src={ox} className="w-40" />
          <img src={flutter} className="w-40" />
          <img src={pay} className="w-40" />
          <img src={iog} className="w-40" />
          <img src={wallet} className="w-40" />
        </div>
      </div>
      {/* Mobile */}
      <div className="flex lg:hidden md:hidden flex-col w-full text-black">
        <div className="w-96 mx-auto mt-20 mb-10 rounded-3xl overflow-hidden">
          <img src={students} alt="img" />
        </div>
        <div className="flex flex-col">
          <div className=" font-bold rounded-full mx-auto">
            <p className="mx-auto text-left font-bold text-4xl">
              2 Million + customers
            </p>
          </div>

          <h1 className="text-left px-3  mt-6">
            Since launching in 2020, Landflip has helped over 1,000,000 low
            income earners to acquire real estate properties, even while saving
            to pay bills.
          </h1>
          <button className=" mt-10 bg-violet-900 mx-auto px-4 py-4 rounded-full text-white font-bold">
            <a
              href="https://dashboard.landflip.com"
              target="_blank"
              className=" mt-10"
              rel="noreferrer"
            >
              Create a free account
            </a>
          </button>
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
      <div className="lg:hidden md:hidden py-20 bg-zinc-100">
        <div className="flex flex-col gap-14 px-40">
          <img src={safegate} className="w-40" />
          <img src={ox} className="w-40" />
          <img src={flutter} className="w-40" />
          <img src={pay} className="w-40" />
          <img src={iog} className="w-40" />
          <img src={wallet} className="w-40" />
        </div>
      </div>
    </React.Fragment>
  );
};

export default Hero;
