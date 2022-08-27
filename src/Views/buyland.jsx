import React from "react";
import Body from "../Components/buylandComponents/body";
import Head from "../Components/buylandComponents/header";
import Footer from "../Components/HomeComponents/Footer";
import Download from "../Components/TestimonialsComponents/download";

const BuyLand = () => {
  return (
    <div className="w-full pt-20">
      <Head />
      <Body />
      <Download />
      <Footer />
    </div>
  );
};

export default BuyLand;
