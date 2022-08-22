import React from "react";
import circle from "../../Assets/particle-1.png";
import angle from "../../Assets/particle-2.png";
import Circle from "../../Assets/particle-4.png";

const Land = () => {
  return (
    <div className="-mt-5 w-full pt-28 pb-28 text-black bg-gray-100">
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
      <div className="mx-auto my-auto text-6xl font-bold">Land Locations</div>
    </div>
  );
};

export default Land;
