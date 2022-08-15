import React from "react";
import buy from "../Assets/buy.png";
import "../index.css";
import line from "../Assets/title-line-2.png";

const BuyLand = () => {
  return (
    <div className="h-screen w-full pt-10 text-black flex flex-col  bg-gradient-to-br from-violet-100 via-violet-50 to-violet-50">
      <h1 className="text-center font-semibold text-5xl flex flex-col">
        Buy lands with high current and<br></br> future value
      </h1>
      <img src={line} className="w-60 mx-auto" alt="lands"></img>
      <div className="container px-40 mt-10 flex flex-row">
        <div className="columns-1 bg-slate-100 w-96 car rounded overflow-hidden">
          <div className="column">
            <div className="card">
              <img
                src={buy}
                className="-mt-5 object-cover rounded"
                alt="text"
              ></img>

              <h2 className="px-2 text-left mt-6 font-semibold">
                Landflip offers a flexible payment scheme that is ideal for
                partners who want to spread their money into smaller amounts
                over time and receive returns as high as 75%.
              </h2>
            </div>
          </div>
        </div>
        <div className="columns-1 w-96 car rounded overflow-hidden ml-10">
          <div className="column">
            <div className="card">
              <img
                src={buy}
                className="-mt-5 object-cover rounded"
                alt="text"
              ></img>

              <h2 className="px-2 text-left mt-6 font-semibold">
                Landflip offers a flexible payment scheme that is ideal for
                partners who want to spread their money into smaller amounts
                over time and receive returns as high as 75%.
              </h2>
            </div>
          </div>
        </div>
        <div className="columns-1  w-96 car rounded overflow-hidden ml-10">
          <div className="column">
            <div className="card">
              <img
                src={buy}
                className="-mt-5 object-cover rounded"
                alt="text"
              ></img>

              <h2 className="px-2 text-left mt-6 font-semibold">
                Landflip offers a flexible payment scheme that is ideal for
                partners who want to spread their money into smaller amounts
                over time and receive returns as high as 75%.
              </h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BuyLand;
