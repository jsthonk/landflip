import React from "react";
import "../../index.css";
import pay from "../../Assets/payment1.jpg";

const Body = () => {
  return (
    <div className="flex flex-row w-full text-black px-40">
      <div className="flex flex-col si mt-48">
        <h1 className="text-left text-6xl">
          All your payment services in one place
        </h1>
        <h2 className="text-left mt-10">
          Fund wallet securely, send money seamlessly, pay bills quickly, and
          buy airtime easily, at no extra charge.
        </h2>
      </div>
      <div className="si">
        <img src={pay} className="mt-20 mb-10" alt="img" />
      </div>
    </div>
  );
};

export default Body;
