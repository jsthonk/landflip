import React from "react";
import lady from "../../Assets/cardlady.PNG";
import man from "../../Assets/4.jpg";
import woman from "../../Assets/payment3.jpg";
import girl from "../../Assets/payment5.jpg";
import pattern1 from "../../Assets/cta-left-particle-1.png";
import pattern2 from "../../Assets/cta-right-particle-1.png";
import { FaGooglePlay, FaApple } from "react-icons/fa";
import "../../index.css";

const Heros = () => {
  return (
    <React.Fragment>
      <div className="flex flex-row w-full text-black px-40">
        <div className="sii mt-20 mb-10 rounded-3xl overflow-hidden">
          <img src={lady} alt="img" />
        </div>
        <div className="flex flex-col si mt-48 ml-24">
          <div className="bg-violet-900 text-white font-bold rounded-full py-1 w-36">
            <p className="mx-auto">Fund Wallet</p>
          </div>

          <h1 className="text-left text-4xl mt-6">
            Fund your wallet securely, seamlessly, and fast.
          </h1>
          <h2 className="text-left mt-10">
            Fund your wallet through multiple payment options from any bank
            account in Nigeria.
          </h2>
        </div>
      </div>
      {/* Second */}
      <div className="flex flex-row w-full text-black px-40">
        <div className="flex flex-col si mt-48 mr-24">
          <div className="bg-violet-900 text-white font-bold rounded-full py-1 w-36">
            <p className="mx-auto">Send Money</p>
          </div>

          <h1 className="text-left text-4xl mt-6 ">
            Send money instantly to friends, and keep track of all funds sent.
          </h1>
          <h2 className="text-left mt-10">
            Transfer funds, and send money to friends and family, and keep track
            of all funds sent. It is free, easy, safe and secure.
          </h2>
        </div>
        <div className="sii mt-20 mb-10 rounded-3xl overflow-hidden">
          <img src={man} alt="img" />
        </div>
      </div>
      {/* Third */}
      <div className="flex flex-row w-full text-black px-40">
        <div className="sii mt-20 mb-10 rounded-3xl overflow-hidden">
          <img src={woman} alt="img" />
        </div>
        <div className="flex flex-col si mt-48 ml-24">
          <div className="bg-violet-900 text-white font-bold rounded-full py-1 w-36">
            <p className="mx-auto">Pay Bills</p>
          </div>

          <h1 className="text-left text-4xl mt-6">
            Pay utility bills easily using the Landflip app.
          </h1>
          <h2 className="text-left mt-10">
            Choose biller from the list of billers on the Landflip app, Save
            recurring payments, making it easier next time you want to pay bills
            and Automate your bill payments.
          </h2>
        </div>
      </div>
      {/* Fourth */}
      <div className="flex flex-row w-full text-black px-40">
        <div className="flex flex-col si mt-48 mr-24">
          <div className="bg-violet-900 text-white font-bold rounded-full py-1 w-36">
            <p className="mx-auto">Buy Airtime</p>
          </div>

          <h1 className="text-left text-4xl mt-6 ">
            Buy and recharge airtime directly from the Landflip app.
          </h1>
          <h2 className="text-left mt-10">
            Top-up airtime on any mobile network with no extra charges. Save
            your most-used phone numbers for even quicker transactions.
          </h2>
        </div>
        <div className="sii mt-20 mb-10 rounded-3xl overflow-hidden">
          <img src={girl} alt="img" />
        </div>
      </div>
      <div className="justify-center mt-20 px-40">
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
      <button className="bg-violet-900 text-white px-4 py-3 mx-auto w-56 rounded-full font-bold mb-10">
        <a
          href="https://dashboard.landflip.ng/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Create a free Account
        </a>
      </button>
    </React.Fragment>
  );
};

export default Heros;
