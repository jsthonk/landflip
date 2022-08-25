import React from "react";
import ada from "../../Assets/alice.PNG";
import dan from "../../Assets/dan.PNG";
import akin from "../../Assets/guy.PNG";
import gold from "../../Assets/gold.jpg";
import "../../index.css";

const Body = () => {
  return (
    <React.Fragment>
      <div className="md:flex hidden flex-col w-full px-40">
        <h1 className="text-5xl mt-20 font-bold">
          What clients say about landflip
        </h1>
        <div className="flex flex-row w-full px-10 mt-10">
          <div className="hover:bg-violet-900 hover:duration-500 tes rounded-md">
            <div className="tes bg-gray-100 mt-1 flex flex-row ml-1 rounded-md">
              <img
                src={ada}
                alt="alice"
                className="h-36 mt-10 rounded-full ml-10"
              />
              <div className="ml-10">
                <h1 className="text-left mt-5 font-bold text-xl">
                  Amazing Experience
                </h1>
                <h2 className="text-left mt-8 text-gray-600 px-2">
                  It's been an amazing experience with Landflip. Prompt
                  repayment and excellent customer service.
                </h2>
                <h3 className="text-left mt-3 text-violet-900 font-bold">
                  - Adelice Umuhoza
                </h3>
              </div>
            </div>
          </div>
          {/* Second */}
          <div className="hover:bg-violet-900 hover:duration-500 tes rounded-md ml-8">
            <div className="tes bg-gray-100 mt-1 flex flex-row ml-1 rounded-md">
              <img
                src={dan}
                alt="alice"
                className="h-36 mt-10 rounded-full ml-10"
              />
              <div className="ml-10">
                <h1 className="text-left mt-5 font-bold text-xl">
                  Easy & Secure Funding
                </h1>
                <h2 className="text-left mt-8 text-gray-600 px-2">
                  I love how easy it is to fund your account with Landflip. It's
                  truly fast and secure!
                </h2>
                <h3 className="text-left mt-3 text-violet-900 font-bold">
                  - Daniel Adeyinka
                </h3>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-row px-2 mt-10 mb-20">
          <div className="hover:bg-violet-900 hover:duration-500 tes rounded-md ml-8">
            <div className="tes bg-gray-100 mt-1 flex flex-row ml-1 rounded-md">
              <img
                src={akin}
                alt="alice"
                className="h-36 mt-10 rounded-full ml-10"
              />
              <div className="ml-10">
                <h1 className="text-left mt-5 font-bold text-xl">
                  User-Friendly
                </h1>
                <h2 className="text-left mt-8 text-gray-600 px-2">
                  Landflip has a very friendly user interface. The mobile app is
                  just seamless and easy to use!
                </h2>
                <h3 className="text-left mt-3 text-violet-900 font-bold">
                  - Akinlolu Afolabi
                </h3>
              </div>
            </div>
          </div>
          {/* Second */}
          <div className="hover:bg-violet-900 hover:duration-500 tes rounded-md ml-8">
            <div className="tes bg-gray-100 mt-1 flex flex-row ml-1 rounded-md">
              <img
                src={gold}
                alt="alice"
                className="h-36 mt-10 rounded-full ml-10"
              />
              <div className="ml-10">
                <h1 className="text-left mt-5 font-bold text-xl">
                  Seamless Transfer
                </h1>
                <h2 className="text-left mt-8 text-gray-600 px-2">
                  They made it super easy to transfer money to family members,
                  and keep track of all money sent.
                </h2>
                <h3 className="text-left mt-3 text-violet-900 font-bold">
                  - Okiemute Gold
                </h3>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Mobile View*/}
      <div className="flex flex-col lg:hidden md:hidden w-full">
        <h1 className="text-3xl mt-20 font-bold">
          What clients say about landflip
        </h1>
        <div className="flex flex-col w-full px-2 mt-10">
          <div className="hover:bg-violet-900 hover:duration-500 mx-auto tess rounded-md">
            <div className="tess bg-gray-100 mt-1 flex flex-row ml-1 rounded-md">
              <img
                src={ada}
                alt="alice"
                className="h-20 my-auto rounded-full ml-6"
              />
              <div className="px-8">
                <h1 className="text-left mt-5 font-bold text-xl">
                  Amazing Experience
                </h1>
                <h2 className="text-left mt-4 text-sm text-gray-600 px-2">
                  It's been an amazing experience with Landflip. Prompt
                  repayment and excellent customer service.
                </h2>
                <h3 className="text-left mt-3 text-violet-900 font-bold">
                  - Adelice Umuhoza
                </h3>
              </div>
            </div>
          </div>
          {/* Second */}
          <div className="hover:bg-violet-900 hover:duration-500 tess rounded-md mx-auto mt-5">
            <div className="tess bg-gray-100 mt-1 flex flex-row ml-1 rounded-md">
              <img
                src={dan}
                alt="alice"
                className="h-20 my-auto rounded-full ml-6"
              />
              <div className="px-8">
                <h1 className="text-left mt-5 font-bold text-xl">
                  Easy & Secure Funding
                </h1>
                <h2 className="text-left mt-4 text-sm text-gray-600 px-2">
                  I love how easy it is to fund your account with Landflip. It's
                  truly fast and secure!
                </h2>
                <h3 className="text-left mt-3 text-violet-900 font-bold">
                  - Daniel Adeyinka
                </h3>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col px-2 mt-6 mb-20">
          <div className="hover:bg-violet-900 hover:duration-500 tess rounded-md mx-auto ">
            <div className="tess bg-gray-100 mt-1 flex flex-row ml-1 rounded-md">
              <img
                src={akin}
                alt="alice"
                className="h-20 my-auto rounded-full ml-6"
              />
              <div className="px-8">
                <h1 className="text-left mt-5 font-bold text-xl">
                  User-Friendly
                </h1>
                <h2 className="text-left mt-4 text-sm text-gray-600 px-2">
                  Landflip has a very friendly user interface. The mobile app is
                  just seamless and easy to use!
                </h2>
                <h3 className="text-left mt-3 text-violet-900 font-bold">
                  - Akinlolu Afolabi
                </h3>
              </div>
            </div>
          </div>
          {/* Second */}
          <div className="hover:bg-violet-900 hover:duration-500 tess rounded-md mx-auto mt-6">
            <div className="tess bg-gray-100 mt-1 flex flex-row ml-1 rounded-md">
              <img
                src={gold}
                alt="alice"
                className="h-20 my-auto rounded-full ml-6"
              />
              <div className="ml-10">
                <h1 className="text-left mt-5 font-bold text-xl">
                  Seamless Transfer
                </h1>
                <h2 className="text-left mt-8 text-sm text-gray-600 px-2">
                  They made it super easy to transfer money to family members,
                  and keep track of all money sent.
                </h2>
                <h3 className="text-left mt-3 text-violet-900 font-bold">
                  - Okiemute Gold
                </h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Body;
