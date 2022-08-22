import React, { useState } from "react";
import buy from "../../Assets/0.jpeg";
import buy1 from "../../Assets/3.jpeg";
import buy2 from "../../Assets/6.jpeg";
import buy3 from "../../Assets/9.jpeg";
import { FaGooglePlay, FaApple } from "react-icons/fa";
import pattern1 from "../../Assets/cta-left-particle-1.png";
import pattern2 from "../../Assets/cta-right-particle-1.png";

const OurLands = () => {
  const [landTabs, setLandTabs] = useState(0);

  return (
    <div className="w-full pt-10 px-40">
      <h1 className="text-left  font-bold text-3xl">Our Land Locations</h1>

      <div name="Tabs" className="flex flex-col mt-10">
        <div name="TabsList" className="flex gap-8">
          <div name="TabsHead" onClick={() => setLandTabs(0)}>
            <h1 className="bg-gray-200 px-10 font-bold py-2 rounded">Lagos</h1>
          </div>
          <div name="TabsHead" className="" onClick={() => setLandTabs(1)}>
            <h1 className="bg-violet-900 text-white font-bold px-10 py-2 rounded">
              Abuja
            </h1>
          </div>
        </div>
        <div name="TabsCOntents" hidden={landTabs !== 0}>
          <h1 className="text-left mt-6 font-bold">Lagos Lands Locations</h1>
          <div className="flex flex-row pb-10">
            {/* First column*/}
            <div className="columns-1 w-96 mt-6 rounded overflow-hidden">
              <div className="column">
                <div className="card">
                  <img
                    src={buy}
                    className=" object-cover rounded"
                    alt="text"
                  ></img>

                  <h1 className="px-2 text-left mt-6 text-xl font-bold">
                    Zaam Estate
                  </h1>
                  <h2 className="px-2 text-left ">Sell within 6 - 12 months</h2>
                </div>
              </div>
            </div>
            {/* Second */}
            <div className="columns-1 w-96 mt-6 ml-8 rounded overflow-hidden">
              <div className="column">
                <div className="card">
                  <img
                    src={buy}
                    className=" object-cover rounded"
                    alt="text"
                  ></img>

                  <h1 className="px-2 text-left mt-6 text-xl font-bold">
                    Zaam Estate, Atan-Ota
                  </h1>
                  <h2 className="px-2 text-left ">Sell within 8 - 14 months</h2>
                </div>
              </div>
            </div>
            {/* Third column*/}
            <div className="columns-1 w-96 mt-6 ml-8 rounded overflow-hidden">
              <div className="column">
                <div className="card">
                  <img
                    src={buy}
                    className=" object-cover rounded"
                    alt="text"
                  ></img>

                  <h1 className="px-2 text-left mt-6 text-xl font-bold">
                    Zaam Estate, Atan-Ota
                  </h1>
                  <h2 className="px-2 text-left ">
                    Sell within 12 - 18 months
                  </h2>
                </div>
              </div>
            </div>
          </div>
          {/* ----------Second Row ---------- */}
          <div className="flex flex-row pb-10">
            {/* First column*/}
            <div className="columns-1 w-96 mt-6 rounded overflow-hidden">
              <div className="column">
                <div className="card">
                  <img
                    src={buy1}
                    className=" object-cover rounded"
                    alt="text"
                  ></img>

                  <h1 className="px-2 text-left mt-6 text-xl font-bold">
                    Goldville Estate, Iju-Ota
                  </h1>
                  <h2 className="px-2 text-left ">Sell within 6 - 12 months</h2>
                </div>
              </div>
            </div>
            {/* Second */}
            <div className="columns-1 w-96 mt-6 ml-8 rounded overflow-hidden">
              <div className="column">
                <div className="card">
                  <img
                    src={buy1}
                    className=" object-cover rounded"
                    alt="text"
                  ></img>

                  <h1 className="px-2 text-left mt-6 text-xl font-bold">
                    Goldville Estate, Iju-Ota
                  </h1>
                  <h2 className="px-2 text-left ">Sell within 8 - 14 months</h2>
                </div>
              </div>
            </div>
            {/* Third column*/}
            <div className="columns-1 w-96 mt-6 ml-8 rounded overflow-hidden">
              <div className="column">
                <div className="card">
                  <img
                    src={buy1}
                    className=" object-cover rounded"
                    alt="text"
                  ></img>

                  <h1 className="px-2 text-left mt-6 text-xl font-bold">
                    Goldville Estate, Iju-Ota
                  </h1>
                  <h2 className="px-2 text-left ">
                    Sell within 12 - 18 months
                  </h2>
                </div>
              </div>
            </div>
          </div>
          {/* ---------Third Row ------------ */}
          <div className="flex flex-row pb-10">
            {/* First column*/}
            <div className="columns-1 w-96 mt-6 rounded overflow-hidden">
              <div className="column">
                <div className="card">
                  <img
                    src={buy2}
                    className=" object-cover rounded"
                    alt="text"
                  ></img>

                  <h1 className="px-2 text-left mt-6 text-xl font-bold">
                    Hill City Estate, Alagbado
                  </h1>
                  <h2 className="px-2 text-left ">Sell within 6 - 12 months</h2>
                </div>
              </div>
            </div>
            {/* Second */}
            <div className="columns-1 w-96 mt-6 ml-8 rounded overflow-hidden">
              <div className="column">
                <div className="card">
                  <img
                    src={buy2}
                    className=" object-cover rounded"
                    alt="text"
                  ></img>

                  <h1 className="px-2 text-left mt-6 text-xl font-bold">
                    Hill City Estate, Alagbado
                  </h1>
                  <h2 className="px-2 text-left ">Sell within 8 - 14 months</h2>
                </div>
              </div>
            </div>
            {/* Third column*/}
            <div className="columns-1 w-96 mt-6 ml-8 rounded overflow-hidden">
              <div className="column">
                <div className="card">
                  <img
                    src={buy2}
                    className=" object-cover rounded"
                    alt="text"
                  ></img>

                  <h1 className="px-2 text-left mt-6 text-xl font-bold">
                    Hill City Estate, Alagbado
                  </h1>
                  <h2 className="px-2 text-left ">
                    Sell within 12 - 18 months
                  </h2>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Abuja Lands */}
        <div name="TabsCOntents" hidden={landTabs !== 1}>
          <h1 className="text-left mt-10 font-bold">Abuja Lands Locations</h1>
          <div className="flex flex-row pb-10">
            {/* First column*/}
            <div className="columns-1 w-96 mt-6 rounded overflow-hidden">
              <div className="column">
                <div className="card">
                  <img
                    src={buy3}
                    className=" object-cover rounded"
                    alt="text"
                  ></img>

                  <h1 className="px-2 text-left mt-6 text-xl font-bold">
                    Safegate Estate, Abuja
                  </h1>
                  <h2 className="px-2 text-left ">Sell within 6 - 12 months</h2>
                </div>
              </div>
            </div>
            {/* Second */}
            <div className="columns-1 w-96 mt-6 ml-8 rounded overflow-hidden">
              <div className="column">
                <div className="card">
                  <img
                    src={buy3}
                    className=" object-cover rounded"
                    alt="text"
                  ></img>

                  <h1 className="px-2 text-left mt-6 text-xl font-bold">
                    Safegate Estate, Abuja
                  </h1>
                  <h2 className="px-2 text-left ">Sell within 8 - 14 months</h2>
                </div>
              </div>
            </div>
            {/* Third column*/}
            <div className="columns-1 w-96 mt-6 ml-8 rounded overflow-hidden">
              <div className="column">
                <div className="card">
                  <img
                    src={buy3}
                    className=" object-cover rounded"
                    alt="text"
                  ></img>

                  <h1 className="px-2 text-left mt-6 text-xl font-bold">
                    Safegate Estate, Abuja
                  </h1>
                  <h2 className="px-2 text-left ">
                    Sell within 12 - 18 months
                  </h2>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <button className="bg-violet-900 text-white px-4 py-2 rounded font-bold mb-10">
        <a
          href="https://dashboard.landflip.ng/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Buy a land today
        </a>
      </button>

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
  );
};

export default OurLands;
