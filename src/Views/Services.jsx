import React from "react";
import Footer from "../Components/HomeComponents/Footer";
import Body from "../Components/ServicesComponents/body";
import Header from "../Components/ServicesComponents/Header";
import Heros from "../Components/ServicesComponents/heros";

const Services = () => {
  return (
    <div className="w-full pt-20 md:flex flex-col">
      <Header />
      <Body />
      <Heros />
      <Footer />
    </div>
  );
};

export default Services;
