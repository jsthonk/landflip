import React from "react";
import Footer from "../Components/HomeComponents/Footer";
import Land from "../Components/LandLocationsComponents/Land";
import OurLands from "../Components/LandLocationsComponents/OurLands";

const LandLocations = () => {
  return (
    <div className=" w-full pt-20 text-black">
      <Land />
      <OurLands />
      <Footer />
    </div>
  );
};

export default LandLocations;
