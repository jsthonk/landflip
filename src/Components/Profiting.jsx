import React from "react";
import buy from "../Assets/buy.png";
import "../index.css";

const Profiting = () => {
  return (
    <div className="h-screen w-full pt-10 text-black flex flex-col mt-28 bg-gradient-to-br from-violet-100 via-violet-50 to-violet-50">
      <h1 className="text-center font-semibold text-5xl flex flex-col">
        We make profiting from lands
        <span className="mt-2">as easy as owning a land</span>
      </h1>
      <h2 className="text-center text-gray-500 mt-5 text-md">
        We give everyone equal opportunity to build wealth through real estate
        <br></br>
        and landed properties. Whether you are buying or reselling, it is
        <span className="font-semibold ml-1">
          EASIER,<br></br> FASTER, and SAFER
        </span>{" "}
        with us.
      </h2>
      <div className="container px-40 mt-6 flex flex-row">
        <div className="columns-1 bg-slate-50 w-96 car rounded overflow-hidden">
          <div className="column">
            <div className="card">
              <img src={buy} className="-mt-5 object-cover" alt="text"></img>
              <h1 className="font-bold text-center text-2xl mt-2">
                Buy, Sell and Earn<br></br>
                <span className="text-3xl text-violet-900">High Returns</span>
              </h1>
              <h2 className="px-2 text-center mt-2 font-semibold">
                You can now earn high returns whether you are buying standard
                plots, units of land, or reselling.
              </h2>
              <button className="mt-2 btn hover:scale-105 duration-300 hover:animate-pulse bg-violet-900 px-4 py-4 rounded w-52 text-white font-semibold">
                <a
                  href="https://dashboard.landflip.ng/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Buy a land today
                </a>
              </button>
            </div>
          </div>
        </div>
        <div className="columns-1 bg-slate-50 w-96 car rounded overflow-hidden ml-10">
          <div className="column">
            <div className="card">
              <img src={buy} className="-mt-5 object-cover" alt="text"></img>

              <h2 className="px-2 text-center mt-10 font-semibold">
                In the past 12 months, the Ox-Invest team has acquired over $67M
                of real estate under management, on average, with each
                transaction generating a net return of between 40% - 90%.
              </h2>
              <button className="mt-2 btn hover:scale-105 duration-300 hover:animate-pulse bg-violet-900 px-4 py-4 rounded w-52 text-white font-semibold">
                <a
                  href="https://landflip.ng/buy-land.html"
                  target="_blank"
                  rel="noreferrer"
                >
                  Learn more
                </a>
              </button>
            </div>
          </div>
        </div>
        <div className="columns-1 bg-slate-50 w-96 car rounded overflow-hidden ml-10">
          <div className="column">
            <div className="card">
              <img src={buy} className="-mt-5 object-cover" alt="text"></img>

              <h2 className="px-2 text-center mt-16 font-semibold">
                Landflip offers a flexible payment scheme that is ideal for
                partners who want to spread their money into smaller amounts
                over time and receive returns as high as 75%.
              </h2>
              <button className="mt-2 btn hover:scale-105 duration-300 hover:animate-pulse bg-violet-900 px-4 py-4 rounded w-52 text-white font-semibold">
                <a
                  href="https://landflip.ng/flexi-land.html"
                  target="_blank"
                  rel="noreferrer"
                >
                  Learn more
                </a>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profiting;
