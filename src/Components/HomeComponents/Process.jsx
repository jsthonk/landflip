import React from "react";
import line from "../../Assets/title-line-2.png";
import img from "../../Assets/free.png";
import small from "../../Assets/particle-4.png";
import smalls from "../../Assets/particle-5.png";
import "../../index.css";

const Process = () => {
  return (
    <React.Fragment>
      <div className="h-screen w-full pt-20 text-black md:flex hidden flex-col bg-gradient-to-b from-violet-100 via-slate-50 to-slate-50">
        <h1 className="text-4xl text-center font-bold">
          Our process is seamless and<br></br> straightforward
        </h1>
        <img
          src={small}
          alt="alt"
          className="w-3 -mt-10 run move animate-pulse"
        ></img>
        <img src={line} alt="alt" className="mt-8 w-48 mx-auto"></img>
        <div className="flex flex-row px-40 mt-10">
          <div className="card-body bg-white len rounded-xl flex flex-row">
            <div>
              <img src={img} alt="account" className="img h-44 mt-4"></img>
            </div>
            <div>
              <p className="text-2xl mb-4 ml-10 mt-10 font-bold">
                Create a Free Account
              </p>
              <h1 className="font-medium ml-10 text-left">
                Create a free account in less than <br></br> 5mins. It's
                seamless and easy.
              </h1>
            </div>
          </div>
          {/* --Second-- */}
          <div className="card-body ml-6 bg-white len rounded-xl flex flex-row">
            <div>
              <img src={img} alt="account" className="img h-44 mt-4"></img>
            </div>
            <div>
              <p className="text-2xl mb-4 ml-10 mt-10 text-left font-bold">
                Fund your Wallet
              </p>
              <h1 className="font-medium ml-10 text-left">
                Fund your wallet through multiple<br></br> options from any
                account in Nigeria.
              </h1>
            </div>
          </div>
        </div>
        {/* Moved */}
        <div className="flex flex-row px-40 mt-6">
          <div className="card-body bg-white len rounded-xl flex flex-row">
            <div>
              <img src={img} alt="account" className="img h-44 mt-4"></img>
            </div>
            <div>
              <p className="text-2xl mb-4 ml-10 text-left mt-10 font-bold">
                Buy Land
              </p>
              <h1 className="font-medium ml-10 text-left">
                Buy land and earn high returns from it's<br></br> resell at
                specified date.
              </h1>
            </div>
          </div>
          {/* --Second-- */}
          <div className="card-body ml-6 bg-white len rounded-xl flex flex-row">
            <div>
              <img src={img} alt="account" className="img h-44 mt-4"></img>
            </div>
            <div>
              <p className="text-2xl mb-4 ml-10 text-left mt-10 font-bold">
                Earn high returns
              </p>
              <h1 className="font-medium ml-10 text-left">
                Earn high returns and get paid easily as<br></br> and when due!
              </h1>
            </div>
          </div>
        </div>
        <img
          src={smalls}
          alt="smalls"
          className="w-3 ml-80 animate-spin mt-10"
        ></img>
      </div>
      {/* Mobile View*/}
      {/* Mobile View*/}
      {/* Mobile View*/}
      <div className=" w-full pt-20 lg:hidden md:hidden text-black flex flex-col bg-gradient-to-b from-violet-100 via-slate-50 to-slate-50">
        <h1 className="text-3xl text-center font-bold">
          Our process is seamless and<br></br> straightforward
        </h1>

        <img src={line} alt="alt" className="mt-2 w-48 mx-auto"></img>
        <div className="mx-auto mt-10 flex flex-col">
          <div className="card-body bg-white lenn rounded-xl flex flex-row">
            <div>
              <img src={img} alt="account" className="img h-44 mt-4"></img>
            </div>
            <div className="mr-2">
              <p className="text-xl mb-4 ml-10 mt-10 text-left font-bold">
                Create a Free Account
              </p>
              <h1 className="font-medium ml-10 text-left">
                Create a free account in less than <br></br> 5mins. It's
                seamless and easy.
              </h1>
            </div>
          </div>
          {/* --Second-- */}
          <div className="card-body bg-white lenn mt-10 rounded-xl flex flex-row">
            <div>
              <img src={img} alt="account" className="img h-44 mt-4"></img>
            </div>
            <div>
              <p className="text-2xl mb-4 ml-10 mt-10 text-left font-bold">
                Fund your Wallet
              </p>
              <h1 className="font-medium ml-10 text-left">
                Fund your wallet through multiple<br></br> options from any
                account in Nigeria.
              </h1>
            </div>
          </div>
          {/* --Third-- */}
          <div className="card-body bg-white lenn mt-10 rounded-xl flex flex-row">
            <div>
              <img src={img} alt="account" className="img h-44 mt-4"></img>
            </div>
            <div>
              <p className="text-2xl mb-4 ml-10 mt-10 text-left font-bold">
                Buy Land
              </p>
              <h1 className="font-medium ml-10 text-left">
                Buy land and earn high returns from it's<br></br> resell at
                specified date.
              </h1>
            </div>
          </div>
          {/* --Fourth-- */}
          <div className="card-body mt-10 mb-10 bg-white lenn rounded-xl flex flex-row">
            <div>
              <img src={img} alt="account" className="img h-44 mt-4"></img>
            </div>
            <div>
              <p className="text-2xl text-left mb-4 ml-10 mt-10 font-bold">
                Earn high returns
              </p>
              <h1 className="font-medium ml-10 text-left">
                Earn high returns and get paid easily as<br></br> and when due!
              </h1>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Process;
