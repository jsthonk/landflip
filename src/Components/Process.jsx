import React from "react";
import line from "../Assets/title-line-2.png";
import img from "../Assets/free.png";
import small from "../Assets/particle-4.png";
import smalls from "../Assets/particle-5.png";

const Process = () => {
  return (
    <React.Fragment>
      <div className="h-screen w-full pt-20 text-black flex flex-col bg-gradient-to-b from-violet-100 via-slate-50 to-slate-50">
        <div className="flex flex-col justify-center items-center relative">
          <h1 className="text-4xl text-center font-bold">
            Our process is seamless and<br></br> straightforward
          </h1>
          <img
            src={small}
            alt="alt"
            className=" absolute move animate-pulse"
          ></img>
          <img src={line} alt="alt" className="mt-4"></img>
        </div>
        <div className=" flex flex-row mt-20">
          <div className="card px-40 flex flex-row">
            <div className="card-body bg-white len rounded-xl flex flex-row">
              <div>
                <img src={img} alt="account" className="img h-44 mt-4"></img>
              </div>
              <div>
                <p className="text-2xl mb-4 ml-10 mt-10 font-bold">
                  Create a Free Account
                </p>
                <h1 className="font-medium ml-10">
                  Create a free account in less than <br></br> 5mins. It's
                  seamless and easy.
                </h1>
              </div>
            </div>
          </div>
          {/* ------------------------------------------ */}
          <div className="card -ml-32">
            <div className="card-body bg-white len rounded-xl flex flex-row">
              <div>
                <img src={img} alt="account" className="img h-44 mt-4"></img>
              </div>
              <div>
                <p className="text-2xl mb-4 ml-10 mt-10 font-bold">
                  Fund your wallet
                </p>
                <h1 className="font-medium ml-10">
                  Fund your wallet through multiple<br></br> options from any
                  account in Nigeria.
                </h1>
              </div>
            </div>
          </div>
          {/* -------------------------------------------- */}
          <div className="flex flex-row absolute mt-56">
            <div className="card px-40">
              <div className="card-body bg-white len rounded-xl flex flex-row">
                <div>
                  <img src={img} alt="account" className="img h-44 mt-4"></img>
                </div>
                <div>
                  <p className="text-2xl mb-4 ml-10 mt-10 font-bold">
                    Buy Land
                  </p>
                  <h1 className="font-medium ml-10">
                    Buy land and earn high returns from <br></br> it's resell at
                    specified date.
                  </h1>
                </div>
              </div>
            </div>
            {/* =-------------------------- */}
            <div className="card -ml-32">
              <div className="card-body bg-white len rounded-xl flex flex-row">
                <div>
                  <img src={img} alt="account" className="img h-44 mt-4"></img>
                </div>
                <div>
                  <p className="text-2xl mb-4 ml-10 mt-10 font-bold">
                    Earn high returns
                  </p>
                  <h1 className="font-medium ml-10">
                    Earn high returns and get paid easily as <br></br>and when
                    due!
                  </h1>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <img
            src={smalls}
            className="absolute mt-64 ml-80 animate-pulse"
          ></img>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Process;
