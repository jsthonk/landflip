import React from "react";
import circle from "../../Assets/particle-1.png";
import angle from "../../Assets/particle-2.png";
import Circle from "../../Assets/particle-4.png";

const Head = () => {
  return (
    <React.Fragment>
      <div className="md:flex hidden -mt-5 w-full pt-28 pb-28 text-black bg-gray-100">
        <img
          src={circle}
          alt="circle"
          className="absolute -mt-16 ml-48 animate-pulse"
        />
        <img
          src={angle}
          alt="circle"
          className="absolute ml-64 -mt-2 animate-spin"
        />{" "}
        <img
          src={Circle}
          alt="circle"
          className="absolute ml-80 mt-24 animate-spin"
        />
        <div className="mx-auto my-auto text-6xl font-bold">Buy Land</div>
      </div>
      {/* Mobile View*/}
      <div className="lg:hidden md:hidden -mt-20 w-full pt-28 pb-28 text-black bg-gray-100">
        <div className="mx-auto my-auto text-6xl font-bold">Buy Land</div>
      </div>
    </React.Fragment>
  );
};

export default Head;
